import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { setupScrollama } from "../utils/scrollamaSetup";
import config from "../data/config.js";
import { geojson, paints, layouts } from "../data/geojson.js";
import "mapbox-gl/dist/mapbox-gl.css";

const HighlightedStoryMap = () => {
  const mapRef = useRef(null);

  function getMapPadding() {
    if (window.innerWidth >= 768) {
      return { left: window.innerWidth * 0.25, top: 0, right: 0, bottom: 0 };
    } else {
      return { left: 0, top: 0, right: 0, bottom: 0 };
    }
  }

  useEffect(() => {
    mapboxgl.accessToken = config.accessToken;
    const map = new mapboxgl.Map({
      container: "map",
      style: config.style,
      center: config.chapters[0].location.center,
      zoom: config.chapters[0].location.zoom,
      bearing: config.chapters[0].location.bearing,
      pitch: config.chapters[0].location.pitch,
      interactive: true,
      projection: config.projection,
      doubleClickZoom: true,
      scrollZoom: false,
      dragRotate: false,
      // Default padding ( 0 on mobile)
      padding: getMapPadding(),
    });

    mapRef.current = map; // Store map here

    const handleResize = () => {
      if (mapRef.current) {
        mapRef.current.setPadding(getMapPadding());
      }
    };
    window.addEventListener("resize", handleResize);

    map.on("load", () => {
      createHighlightLayers("manitoba");
      createHighlightLayers("canada");
      createHighlightLayers("blackout");

      geojson.layers.forEach((element) => {
        map.addSource(element.id, {
          type: element.filetype,
          data: element.data,
          maxzoom: 20,
          buffer: 512,
          cluster: element.cluster,
        });

        var layerName = element.id + "-layer";

        if (element.displayType === "symbol") {
          if (element.id.includes("helen")) {
            layouts[element.layout]["text-field"] = ["get", "name"];
            layouts[element.layout]["text-offset"] = [0, -3];
            layouts[element.layout]["text-anchor"] = "bottom";
            layouts[element.layout]["text-size"] = 13;
            layouts[element.layout]["text-font"] = [
              "Open Sans Bold",
              "Arial Unicode MS Regular",
            ];
          }

          map.addLayer({
            id: layerName,
            source: element.id,
            type: element.displayType,
            layout: layouts[element.layout],
          });
        } else if (element.displayType === "line") {
          map.addLayer({
            id: layerName,
            source: element.id,
            type: element.displayType,
            layout: layouts[element.layout],
            paint: paints[element.paint],
          });
        } else {
          map.addLayer(
            {
              id: layerName,
              type: element.displayType,
              paint: paints[element.paint],
              source: element.id,
            },
            "helen-betty-step-1-layer"
          );
        }

        map.setLayoutProperty(layerName, "visibility", "none");
      });
      setupScrollama(map);
    });

    // setupScrollama(map);

    return () => {
      map.remove();
      window.removeEventListener("resize", handleResize);
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
      mapRef.current.setLayoutProperty(layerName, "visibility", "none");
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
      "../src/shapefiles/boundary_lines/" + boundary + "_boundary.json";
    const response = await fetch(shape);
    const data = await response.json();
    return data;
  }

  return (
    <>
      <div id="map" ref={mapRef} className="relative h-screen w-full" />
    </>
  );
};

export default HighlightedStoryMap;
