import { Grid } from "@mui/material";
import ListItem from "./ListItem"; // assuming it's in a separate file

function ListContainer({ features }) {
  return (
    <Grid container spacing={2} justifyContent="center">
      {features.map((feature) => (
        <Grid
          item
          key={feature.properties.id}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={2}
        >
          <ListItem feature={feature} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ListContainer;
