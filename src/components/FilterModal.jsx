import {
  Box,
  Button,
  IconButton,
  Modal,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Slider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const defaultFilters = {
  locationType: "Last Seen",
  caseType: "All",
  yearRange: [1940, new Date().getFullYear()],
  ageRange: [0, 100],
  category: "All",
};

const SectionDivider = () => (
  <Box
    sx={{
      height: "1px",
      backgroundColor: "#e0e0e0",
      width: "100%",
      alignSelf: "center",
      my: 2,
    }}
  />
);

function FilterModal({ filters, setFilters, onClose, filteredCount }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const update = (key, value) =>
    setFilters((prev) => ({ ...prev, [key]: value }));

  const handleClear = () => {
    setFilters(defaultFilters);
  };

  return (
    <Modal open onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isMobile ? "100%" : 400,
          height: isMobile ? "100%" : "90vh",
          bgcolor: "background.paper",
          borderRadius: 5,
          boxShadow: 24,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Sticky Header */}
        <Box
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 2,
            bgcolor: "background.paper",
            p: 2,
            borderBottom: "1px solid #e0e0e0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            sx={{ color: "#000", fontWeight: "bold", fontSize: "1.5rem" }}
          >
            Filters
          </Typography>
          <IconButton onClick={onClose} sx={{ bgcolor: "grey.200" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Scrollable Content */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            px: 3,
            py: 2,
          }}
        >
          <FormControl component="fieldset" sx={{ color: "#000" }}>
            <FormLabel
              color="inherit"
              sx={{ color: "#000", fontWeight: "bold", fontSize: "1.1rem" }}
            >
              Location Type
            </FormLabel>
            <RadioGroup
              name="location-type"
              value={filters.locationType}
              onChange={(e) => update("locationType", e.target.value)}
            >
              {["Home", "Last Seen"].map((val) => (
                <FormControlLabel
                  key={val}
                  value={val}
                  control={
                    <Radio
                      sx={{
                        color: "#000000",
                        "&.Mui-checked": { color: "#000000" },
                      }}
                    />
                  }
                  label={val}
                />
              ))}
            </RadioGroup>
          </FormControl>

          <SectionDivider />

          <FormControl component="fieldset">
            <FormLabel
              color="inherit"
              sx={{ color: "#000", fontWeight: "bold", fontSize: "1.1rem" }}
            >
              Case Status
            </FormLabel>
            <RadioGroup
              name="case-type"
              value={filters.caseType}
              onChange={(e) => update("caseType", e.target.value)}
            >
              {["All", "Murdered", "Missing", "Unresolved"].map((val) => (
                <FormControlLabel
                  key={val}
                  value={val}
                  control={
                    <Radio
                      sx={{
                        color: "#000000",
                        "&.Mui-checked": { color: "#000000" },
                      }}
                    />
                  }
                  label={val}
                />
              ))}
            </RadioGroup>
          </FormControl>

          <SectionDivider />

          <Box>
            {/* <FormLabel
              color="inherit"
              sx={{ color: "#000", fontWeight: "bold", fontSize: "1.1rem" }}
            >
              Year Range
            </FormLabel> */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <FormLabel
                color="inherit"
                sx={{ color: "#000", fontWeight: "bold", fontSize: "1.1rem" }}
              >
                Year Range
              </FormLabel>
              <Typography
                sx={{ color: "#000", fontSize: "0.95rem", fontWeight: 500 }}
              >
                {filters.yearRange[0]} - {filters.yearRange[1]}
              </Typography>
            </Box>
            <Slider
              value={filters.yearRange}
              onChange={(e, value) => update("yearRange", value)}
              valueLabelDisplay="off"
              min={1940}
              max={new Date().getFullYear()}
              sx={{
                color: "#000000",
                "& .MuiSlider-thumb": {
                  backgroundColor: "#fff",
                  border: "2px solid #000000",
                },
                "& .MuiSlider-rail": {
                  color: "#e0e0e0",
                },
                mt: 1,
              }}
            />
          </Box>

          <SectionDivider />

          <Box>
            {/* <FormLabel
              color="inherit"
              sx={{ color: "#000", fontWeight: "bold", fontSize: "1.1rem" }}
            >
              Age Range
            </FormLabel> */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <FormLabel
                color="inherit"
                sx={{ color: "#000", fontWeight: "bold", fontSize: "1.1rem" }}
              >
                Age Range
              </FormLabel>
              <Typography
                sx={{ color: "#000", fontSize: "0.95rem", fontWeight: 500 }}
              >
                {filters.ageRange[0]} - {filters.ageRange[1]}
              </Typography>
            </Box>

            <Slider
              value={filters.ageRange}
              onChange={(e, value) => update("ageRange", value)}
              valueLabelDisplay="off"
              min={0}
              max={100}
              sx={{
                color: "#000000",
                "& .MuiSlider-thumb": {
                  backgroundColor: "#fff",
                  border: "2px solid #000000",
                },
                "& .MuiSlider-rail": {
                  color: "#e0e0e0",
                },
                mt: 1,
              }}
            />
          </Box>

          <SectionDivider />

          <FormControl component="fieldset" sx={{ color: "#000" }}>
            <FormLabel
              color="inherit"
              sx={{ color: "#000", fontWeight: "bold", fontSize: "1.1rem" }}
            >
              Categories
            </FormLabel>
            <RadioGroup
              name="category"
              value={filters.category}
              onChange={(e) => update("category", e.target.value)}
            >
              {[
                "All",
                "lgbt",
                "survival_worker",
                "Intimate Partner Violence",
                "CFS",
              ].map((val) => (
                <FormControlLabel
                  key={val}
                  value={val}
                  control={
                    <Radio
                      sx={{
                        color: "#000000",
                        "&.Mui-checked": { color: "#000000" },
                      }}
                    />
                  }
                  label={
                    val === "lgbt"
                      ? "2SLGBTQIA+"
                      : val === "survival_worker"
                      ? "Survival Worker"
                      : val
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>

        {/* Sticky Footer */}
        <Box
          sx={{
            // position: "sticky",
            bottom: 0,
            zIndex: 2,
            bgcolor: "background.paper",
            borderTop: "1px solid #e0e0e0",
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
          }}
        >
          <Button
            variant="outlined"
            onClick={handleClear}
            sx={{
              flex: 1,
              borderColor: "#000",
              color: "#000",
              borderRadius: 10,
            }}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            onClick={onClose}
            sx={{
              flex: 2,
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: 10,
            }}
          >
            Show {filteredCount} profile{filteredCount !== 1 ? "s" : ""}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default FilterModal;
