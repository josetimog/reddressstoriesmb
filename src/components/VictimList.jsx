// import ListItem from "./ListItem";
// import "./VictimList.css";

// function VictimList({ results, sort, setSort, filteredCount }) {
//   return (
//     <div className="listing-container">
//       <div className="list-header d-flex justify-content-between align-items-center">
//         <p style={{ marginTop: "1rem" }}>
//           Showing <strong>{filteredCount}</strong> result
//           {filteredCount !== 1 ? "s" : ""}
//         </p>
//         <div>
//           <label>
//             Sort:
//             <select value={sort} onChange={(e) => setSort(e.target.value)}>
//               <option value="date_descending">Date: Descending</option>
//               <option value="date_ascending">Date: Ascending</option>
//               <option value="name">First Name</option>
//               <option value="age_ascending">Age: Ascending</option>
//               <option value="age_descending">Age: Descending</option>
//             </select>
//           </label>
//         </div>
//       </div>
//       <div className="list-scrollable">
//         {results.map((feature, idx) => (
//           <ListItem key={idx} feature={feature} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default VictimList;

import ListItem from "./ListItem";
import "./VictimList.css";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

function VictimList({ results, sort, setSort, filteredCount }) {
  return (
    <div className="listing-container">
      <div className="list-header d-flex justify-content-between align-items-center">
        <p style={{ marginTop: "1rem", fontFamily: "Lato, sans-serif" }}>
          Showing <strong>{filteredCount}</strong> profile
          {filteredCount !== 1 ? "s" : ""}
        </p>

        <FormControl
          variant="standard"
          size="small"
          sx={{
            minWidth: 200,
            "& .MuiInputLabel-root": {
              color: "black",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "black",
            },
            "& .MuiInputBase-root": {
              color: "black",
            },
            "& .MuiSelect-icon": {
              color: "black",
            },
            "& .MuiInput-underline:before": {
              borderBottomColor: "black",
            },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderBottomColor: "black",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "black",
            },
          }}
        >
          <InputLabel
            id="sort-label"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Sort
          </InputLabel>
          <Select
            labelId="sort-label"
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            label="Sort"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            <MenuItem value="date_descending">Date: Descending</MenuItem>
            <MenuItem value="date_ascending">Date: Ascending</MenuItem>
            <MenuItem value="name">First Name</MenuItem>
            <MenuItem value="age_ascending">Age: Ascending</MenuItem>
            <MenuItem value="age_descending">Age: Descending</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="list-scrollable">
        {results.map((feature, idx) => (
          <ListItem key={idx} feature={feature} />
        ))}
      </div>
    </div>
  );
}

export default VictimList;
