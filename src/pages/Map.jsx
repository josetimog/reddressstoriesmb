import React, { useState } from "react";
import MapContainer from "../components/MapContainer";
import VictimList from "../components/VictimList";
import FilterModal from "../components/FilterModal";
import "./Map.css";
import Header from "../components/Header.jsx";
import PauseButton from "../components/PauseButton.jsx";
import SlideShow from "../components/SlideShow.jsx";

import { Button, Tooltip, useMediaQuery, useTheme } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import ListIcon from "@mui/icons-material/List";
import FilterListIcon from "@mui/icons-material/FilterList";

function Map() {
  const [showSlideShow, setShowSlideShow] = useState(false);
  const [filters, setFilters] = useState({
    caseType: "All",
    locationType: "Last Seen",
    yearRange: [1940, new Date().getFullYear()],
    ageRange: [0, 100],
    category: "All",
  });

  const [sort, setSort] = useState("date_descending");
  const [showFilters, setShowFilters] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);
  const [filteredCount, setFilteredCount] = useState(0);
  const [isMobileListVisible, setIsMobileListVisible] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Header />
      <SlideShow
        isVisible={showSlideShow}
        onClose={() => setShowSlideShow(false)}
      />
      {/* <PauseButton onOpenSlideShow={() => setShowSlideShow(true)} /> */}
      <div id="map-section" className="map-layout">
        {/* Desktop Sidebar */}
        {!isMobile && (
          <div className="victim-list-container">
            <VictimList
              results={filteredResults}
              sort={sort}
              setSort={setSort}
              filteredCount={filteredCount}
            />
          </div>
        )}

        {/* Map and Controls */}
        <div className="map-container-with-button">
          <MapContainer
            filters={filters}
            sort={sort}
            setFilteredResults={setFilteredResults}
            setFilteredCount={setFilteredCount}
          />

          <PauseButton
            className="pause-button"
            onOpenSlideShow={() => setShowSlideShow(true)}
          />

          {/* Filter Button */}
          <div className="filter-button-container">
            <Button
              variant="contained"
              onClick={() => setShowFilters(true)}
              startIcon={<FilterListIcon />}
              sx={{
                color: "#000",
                backgroundColor: "#e1e4e8",
                fontFamily: "Lato, sans-serif",
              }}
            >
              Filters
            </Button>
          </div>

          {/* Alert Message */}
          <div className="map-alert">
            <div
              className="alert alert-warning alert-dismissible fade show mb-0"
              role="alert"
            >
              <p className="mb-0">
                Please note that this map is incomplete. We acknowledge that
                many have gone missing or have been murdered outside of Manitoba
                borders. We have done our best to ensure each individual lost
                from a Manitoba community is included here. If you would like to
                submit new information or suggest corrections, you can fill out
                a form{" "}
                <a
                  href="https://forms.gle/42ExcnPKqRCvRS9J6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                . For safety reasons, markers are approximate.
              </p>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          {isMobile && (
            <div className="mobile-toggle-button">
              <Tooltip title={isMobileListVisible ? "Show Map" : "Show List"}>
                <Button
                  onClick={() => setIsMobileListVisible(!isMobileListVisible)}
                  startIcon={isMobileListVisible ? <MapIcon /> : <ListIcon />}
                  sx={{
                    backgroundColor: "#a8281f",
                    color: "#fff",
                    "&:hover": { backgroundColor: "#8e1f18" },
                    fontFamily: "Lato, sans-serif",
                    textTransform: "none",
                    fontSize: "1rem",
                    padding: "10px 20px",
                    borderRadius: "999px",
                    minWidth: "100px",
                  }}
                  variant="contained"
                >
                  {isMobileListVisible ? "Map" : "Profiles"}
                </Button>
              </Tooltip>
            </div>
          )}

          {/* Mobile VictimList Overlay */}
          {isMobile && isMobileListVisible && (
            <div className="mobile-victim-list-overlay">
              <VictimList
                results={filteredResults}
                sort={sort}
                setSort={setSort}
                filteredCount={filteredCount}
              />
            </div>
          )}
        </div>

        {/* Filter Modal */}
        {showFilters && (
          <FilterModal
            filters={filters}
            setFilters={setFilters}
            onClose={() => setShowFilters(false)}
            filteredCount={filteredCount}
          />
        )}
      </div>
    </>
  );
}

export default Map;
