import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import markers from "../data/markers.json";

const INITIAL_CENTER = [-97.47860245678869, 54.98537300878585];
const INITIAL_ZOOM = Math.log2((0.55 * screen.height * 59959.436) / 1225000);

function MapContainer({ filters, sort, setFilteredResults, setFilteredCount }) {
  const navigate = useNavigate();
  const mapRef = useRef();
  const mapContainerRef = useRef();
  const popupRef = useRef(
    new mapboxgl.Popup({
      closeButton: false,
      className: "custom-popup",
      anchor: window.innerWidth <= 768 ? undefined : "bottom",
      offset: 15,
    })
  );
  const [mapLoaded, setMapLoaded] = useState(false);
  const [randomizedFeatures, setRandomizedFeatures] = useState([]);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGFtaS1ha2lubml5aSIsImEiOiJjbGR4a2QzOXYwaTk2M3ZudWIxZHg0dDA4In0.JxLOx4OX1LzZZuEg9fdK6A";
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: INITIAL_CENTER,
      zoom: INITIAL_ZOOM,
      projection: "mercator",
      style: "mapbox://styles/dami-akinniyi/clhca5xln021v01qn83369r90",
    });

    // Disable rotation
    mapRef.current.dragRotate.disable();
    mapRef.current.touchZoomRotate.disableRotation();

    mapRef.current.addControl(
      new mapboxgl.NavigationControl({
        showCompass: false,
        visualizePitch: false,
      }),
      "top-right"
    );

    mapRef.current.on("load", () => {
      setMapLoaded(true);
      createHighlightLayers("manitoba");

      const randomized = markers.features.map((feature) => ({
        ...feature,
        geometry: {
          ...feature.geometry,
          coordinates: randomizeLocation(feature.geometry.coordinates, 100),
        },
      }));
      setRandomizedFeatures(randomized);

      mapRef.current.addSource("victims", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: randomized,
        },
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 30,
      });

      // Clustered points: circles
      mapRef.current.addLayer({
        id: "victims-cluster-layer",
        type: "circle",
        source: "victims",
        filter: ["has", "point_count"],
        paint: {
          "circle-color": "#e63946",
          "circle-radius": [
            "step",
            ["get", "point_count"],
            15,
            10,
            20,
            30,
            25,
            50,
            30,
          ],
          "circle-opacity": 0.8,
        },
      });

      // Clustered points: count label
      mapRef.current.addLayer({
        id: "victims-cluster-count",
        type: "symbol",
        source: "victims",
        filter: ["has", "point_count"],
        layout: {
          "text-field": "{point_count_abbreviated}",
          "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
          "text-size": 12,
          "text-allow-overlap": true,
          "text-ignore-placement": true,
        },
        paint: {
          "text-color": "#fff",
        },
      });

      mapRef.current.addLayer({
        id: "victims-layer",
        type: "symbol",
        source: "victims",
        filter: ["!", ["has", "point_count"]],
        layout: {
          "icon-anchor": "bottom",
          "icon-image": "red_dress",
          "icon-allow-overlap": true,
          "icon-size": 1.5,
        },
      });

      mapRef.current.on("click", "victims-layer", (e) => {
        const feature = e.features[0];
        showPopup(feature);
      });

      mapRef.current.on("mouseenter", "victims-layer", () => {
        mapRef.current.getCanvas().style.cursor = "pointer";
      });

      mapRef.current.on("mouseleave", "victims-layer", () => {
        mapRef.current.getCanvas().style.cursor = "";
      });
    });

    return () => mapRef.current.remove();
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    let filter = ["all"];
    filter.push(["==", ["get", "location_type"], filters.locationType]);

    if (filters.caseType !== "All") {
      filter.push(["==", ["get", "case_type"], filters.caseType]);
    }

    filter.push(
      ["all"],
      [">=", ["to-number", ["get", "year"]], filters.yearRange[0]],
      ["<=", ["to-number", ["get", "year"]], filters.yearRange[1]]
    );

    filter.push(
      ["all"],
      [">=", ["to-number", ["get", "age"]], filters.ageRange[0]],
      ["<=", ["to-number", ["get", "age"]], filters.ageRange[1]]
    );

    if (filters.category === "lgbt") {
      filter.push(["==", ["get", "lgbt"], true]);
    } else if (filters.category === "survival_worker") {
      filter.push(["==", ["get", "survival_worker"], true]);
    } else if (filters.category === "Intimate Partner Violence") {
      filter.push(["==", ["get", "perp_relation"], "Spouse/Partner"]);
    } else if (filters.category === "CFS") {
      filter.push(["==", ["get", "cfs"], "Yes"]);
    }

    try {
      if (!mapRef.current.getLayer("victims-layer")) return;
      mapRef.current.setFilter("victims-layer", filter);
    } catch (e) {
      console.warn("Map not ready or layer missing", e);
    }
  }, [filters]);

  useEffect(() => {
    if (!mapLoaded || !randomizedFeatures) return;
    if (!mapRef.current || !mapRef.current.getSource("victims")) return;

    const filtered = randomizedFeatures.filter((feature) => {
      const props = feature.properties;
      const year = Number(props.year);
      const age = Number(props.age);

      if (props.location_type !== filters.locationType) return false;
      if (filters.caseType !== "All" && props.case_type !== filters.caseType)
        return false;
      if (
        isNaN(year) ||
        year < filters.yearRange[0] ||
        year > filters.yearRange[1]
      )
        return false;
      if (!isNaN(age)) {
        if (age < filters.ageRange[0] || age > filters.ageRange[1])
          return false;
      }

      switch (filters.category) {
        case "lgbt":
          return props.lgbt === true;
        case "survival_worker":
          return props.survival_worker === true;
        case "Intimate Partner Violence":
          return props.perp_relation === "Spouse/Partner";
        case "CFS":
          return props.cfs === "Yes";
        default:
          return true;
      }
    });

    const sorted = [...filtered].sort((a, b) => {
      const aProps = a.properties;
      const bProps = b.properties;
      switch (sort) {
        case "name":
          return aProps.name?.localeCompare(bProps.name || "") || 0;
        case "date_ascending":
          return new Date(aProps.date) - new Date(bProps.date);
        case "date_descending":
          return new Date(bProps.date) - new Date(aProps.date);
        case "age_ascending":
          return Number(aProps.age || 0) - Number(bProps.age || 0);
        case "age_descending":
          return Number(bProps.age || 0) - Number(aProps.age || 0);
        default:
          return 0;
      }
    });

    mapRef.current.getSource("victims").setData({
      type: "FeatureCollection",
      features: sorted,
    });

    setFilteredCount(filtered.length);
    setFilteredResults(sorted);
  }, [
    setFilteredCount,
    setFilteredResults,
    filters,
    sort,
    mapLoaded,
    randomizedFeatures,
  ]);

  useEffect(() => {
    if (!mapLoaded || !mapRef.current) return;

    const updateVisibleFeatures = async () => {
      if (!mapRef.current.getLayer("victims-layer")) return;

      const source = mapRef.current.getSource("victims");

      const features = mapRef.current.queryRenderedFeatures({
        layers: ["victims-layer", "victims-cluster-layer"],
      });

      let visibleVictims = [];

      for (const feature of features) {
        if (!feature.properties) continue;

        if (feature.properties.cluster) {
          // It's a cluster, get its children
          const clusterId = feature.properties.cluster_id;

          const leaves = await new Promise((resolve) =>
            source.getClusterLeaves(
              clusterId,
              Infinity,
              0,
              (err, leafFeatures) => {
                if (err) {
                  console.warn("Error fetching cluster leaves", err);
                  resolve([]);
                } else {
                  resolve(leafFeatures);
                }
              }
            )
          );

          visibleVictims.push(...leaves);
        } else {
          // Individual victim point
          visibleVictims.push(feature);
        }
      }

      // Filter & sort the victim list based on current filters
      const filtered = visibleVictims.filter((feature) => {
        const props = feature.properties;
        const year = Number(props.year);
        const age = Number(props.age);

        if (props.location_type !== filters.locationType) return false;
        if (filters.caseType !== "All" && props.case_type !== filters.caseType)
          return false;
        if (
          isNaN(year) ||
          year < filters.yearRange[0] ||
          year > filters.yearRange[1]
        )
          return false;
        if (!isNaN(age)) {
          if (age < filters.ageRange[0] || age > filters.ageRange[1])
            return false;
        }

        switch (filters.category) {
          case "lgbt":
            return props.lgbt === true;
          case "survival_worker":
            return props.survival_worker === true;
          case "Intimate Partner Violence":
            return props.perp_relation === "Spouse/Partner";
          case "CFS":
            return props.cfs === "Yes";
          default:
            return true;
        }
      });

      const sorted = [...filtered].sort((a, b) => {
        const aProps = a.properties;
        const bProps = b.properties;
        switch (sort) {
          case "name":
            return aProps.name?.localeCompare(bProps.name || "") || 0;
          case "date_ascending":
            return new Date(aProps.date) - new Date(bProps.date);
          case "date_descending":
            return new Date(bProps.date) - new Date(aProps.date);
          case "age_ascending":
            return Number(aProps.age || 0) - Number(bProps.age || 0);
          case "age_descending":
            return Number(bProps.age || 0) - Number(aProps.age || 0);
          default:
            return 0;
        }
      });

      setFilteredResults(sorted);
      setFilteredCount(sorted.length);
    };

    const updateIfReady = () => {
      if (!mapRef.current.getLayer("victims-layer")) return;
      const features = mapRef.current.queryRenderedFeatures({
        layers: ["victims-layer"],
      });
      if (features.length > 0) {
        updateVisibleFeatures();
        mapRef.current.off("idle", updateIfReady); // remove once done
      }
    };

    mapRef.current.on("moveend", updateVisibleFeatures);
    mapRef.current.on("idle", updateIfReady); // run once when tiles & layers are fully rendered

    return () => {
      mapRef.current.off("moveend", updateVisibleFeatures);
    };
  }, [
    filters,
    sort,
    mapLoaded,
    setFilteredResults,
    setFilteredCount,
    randomizedFeatures,
  ]);

  useEffect(() => {
    const handleShowPopup = (e) => {
      const feature = e.detail;
      showPopup(feature);
    };

    const handleHidePopup = () => {
      popupRef.current.remove();
    };

    window.addEventListener("show-popup", handleShowPopup);
    window.addEventListener("hide-popup", handleHidePopup);

    return () => {
      window.removeEventListener("show-popup", handleShowPopup);
      window.removeEventListener("hide-popup", handleHidePopup);
    };
  }, []);

  async function createHighlightLayers(boundary) {
    if (boundary != "blackout") {
      let sourceName = boundary + "-highlight";

      const data = await getLayerData(boundary);
      // If the map is all of Canada, make sure to use coordinates[0]
      let coordinates;
      if (data.features[0].geometry.type == "MultiPolygon") {
        coordinates = data.features[0].geometry.coordinates[0];
      } else {
        coordinates = data.features[0].geometry.coordinates;
      }

      let layerName = sourceName + "-layer";

      mapRef.current.addSource(sourceName, {
        type: "geojson",
        data: data,
      });
      mapRef.current.addLayer({
        id: layerName,
        type: "fill",
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [-180, 90],
                  [-180, -90],
                  [180, -90],
                  [180, 90],
                  [-180, 90],
                ],
                ...coordinates,
              ],
            },
          },
        },
        paint: {
          "fill-color": "black",
          "fill-opacity": 0.6,
        },
      });
      //   mapRef.current.setLayoutProperty(layerName, "visibility", "none");
    } else {
      let sourceName = boundary;
      let layerName = sourceName + "-layer";

      mapRef.current.addLayer({
        id: layerName,
        type: "fill",
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [-180, 90],
                  [-180, -90],
                  [180, -90],
                  [180, 90],
                  [-180, 90],
                ],
              ],
            },
          },
        },
        paint: {
          "fill-color": "black",
          "fill-opacity": 0.6,
        },
      });

      mapRef.current.setLayoutProperty(layerName, "visibility", "none");
    }
  }

  async function getLayerData(boundary) {
    let shape =
      "/reddressstoriesmb/assets/shapefiles/boundary_lines/" +
      boundary +
      "_boundary.json";
    const response = await fetch(shape);
    const data = await response.json();
    return data;
  }

  function showPopup(feature) {
    const coordinates = feature.geometry.coordinates.slice();
    const {
      name,
      age,
      case_type,
      date,
      home_location,
      last_location,
      image,
      id,
    } = feature.properties;

    const html = `
      <img src="/reddressstoriesmb/assets/victims/${image}" loading="lazy" />
      <div class="popup-details">
          <p class="popup-name truncate">${name}</p>
            <p>${
              age !== null && age !== "" && !isNaN(age)
                ? `${age},`
                : "Unknown, "
            } ${case_type || ""}</p>
    <p>${
      date
        ? `Date: ${(function () {
            const [year, month, day] = date.split("-");
            return new Date(year, month - 1, day).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
          })()}`
        : ""
    }</p>
          <p class="truncate">${
            home_location ? `From: ${home_location}` : ""
          }</p>
          <p class="truncate">${
            last_location ? `Last Location: ${last_location}` : ""
          }</p>
      </div>`;

    popupRef.current.setLngLat(coordinates).setHTML(html).addTo(mapRef.current);

    setTimeout(() => {
      const el = document.getElementsByClassName("custom-popup")[0];
      if (el) {
        el.addEventListener("click", () => navigate(`/story/${id}`));
      }
    });
  }

  function randomizeLocation([lon, lat], radiusInMeters = 500) {
    const radiusInDegrees = radiusInMeters / 111320;
    const u = Math.random();
    const v = Math.random();
    const w = radiusInDegrees * Math.sqrt(u);
    const t = 2 * Math.PI * v;
    const deltaLat = w * Math.cos(t);
    const deltaLon = w * Math.sin(t) * Math.cos((lat * Math.PI) / 180);
    return [lon + deltaLon, lat + deltaLat];
  }

  return <div id="map-container" ref={mapContainerRef}></div>;
}

export default MapContainer;
