import { Button } from "@mui/material";

function FilterButton({ handleFilterButton }) {
  return (
    <Button
      variant="contained"
      onClick={handleFilterButton}
      sx={{
        color: "#000",
        backgroundColor: "#e1e4e8",
        fontFamily: "Lato, sans-serif",
      }}
    ></Button>
  );
}

export default FilterButton;
