// import React, { useState, useEffect } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Box,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Link,
//   useTheme,
//   useMediaQuery,
//   TextField,
//   Autocomplete,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import { useNavigate } from "react-router-dom";
// import markers from "../data/markers.json";

// const navItems = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "MMIWG2S+ Stories", href: "/map" },
// ];

// const Header = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [searchInput, setSearchInput] = useState("");
//   const [options, setOptions] = useState([]);
//   const navigate = useNavigate();
//   const [isFocused, setIsFocused] = useState(false);

//   useEffect(() => {
//     if (searchInput.length > 0) {
//       const seen = new Set();
//       const filtered = [];

//       for (const feature of markers.features) {
//         const { name, date, home_location, last_location } = feature.properties;

//         const lowerSearch = searchInput.toLowerCase();
//         const lowerName = name?.toLowerCase() || "";
//         const lowerHome = home_location?.toLowerCase() || "";
//         const lowerLast = last_location?.toLowerCase() || "";
//         const year = date ? new Date(date).getFullYear().toString() : "";

//         const matches =
//           lowerName.includes(lowerSearch) ||
//           lowerHome.includes(lowerSearch) ||
//           lowerLast.includes(lowerSearch) ||
//           year.includes(lowerSearch);

//         if (matches && !seen.has(feature.properties.id)) {
//           seen.add(feature.properties.id);
//           filtered.push(feature);
//         }

//         if (filtered.length >= 20) break;
//       }

//       setOptions(filtered);
//     } else {
//       setOptions([]);
//     }
//   }, [searchInput]);

//   const toggleDrawer = (open) => () => {
//     setDrawerOpen(open);
//   };

//   const handleSelect = (event, value) => {
//     if (value) {
//       const id = value.properties.id;
//       navigate(`/story/${id}`);
//     }
//   };

//   return (
//     <AppBar
//       position="sticky"
//       sx={{ backgroundColor: "#a8281f", top: 0, zIndex: 1000 }}
//     >
//       <Toolbar sx={{ display: "flex", alignItems: "center", px: 2 }}>
//         {/* Logo */}
//         <Link
//           href="/"
//           underline="none"
//           sx={{ display: "flex", alignItems: "center", gap: 1 }}
//         >
//           <Box
//             component="img"
//             src="/reddressstoriesmb/assets/logos/giganawe_red.png"
//             alt="Logo"
//             sx={{ height: 40, borderRadius: 1 }}
//           />
//           {!isMobile && (
//             <Typography
//               variant="h6"
//               component="div"
//               sx={{ color: "#f3ece4", fontFamily: "Lato, sans-serif", ml: -2 }}
//             >
//               Giganawenimaanaanig
//             </Typography>
//           )}
//         </Link>

//         {/* Search Bar */}
//         <Box
//           sx={{
//             backgroundColor: isFocused || searchInput ? "#fff" : "#ddd",
//             borderRadius: 20,
//             mx: 2,
//             flexGrow: 1,
//             maxWidth: 400,
//             transition: "background-color 0.3s",
//           }}
//         >
//           <Autocomplete
//             freeSolo
//             options={options}
//             inputValue={searchInput}
//             onInputChange={(event, newInputValue) => {
//               setSearchInput(newInputValue);
//             }}
//             onChange={handleSelect}
//             getOptionLabel={(option) => {
//               if (typeof option === "string") return option;

//               const { name, date, home_location, last_location } =
//                 option.properties;
//               const year = date ? new Date(date).getFullYear().toString() : "";

//               return `${name || ""} ${home_location || ""} ${
//                 last_location || ""
//               } ${year}`;
//             }}
//             renderOption={(props, option) => {
//               const { name, age, case_type, image, date } = option.properties;
//               const year = date ? new Date(date).getFullYear() : "";

//               return (
//                 <li {...props} key={option.properties.id}>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 1.5,
//                       py: 1,
//                     }}
//                   >
//                     <Box
//                       component="img"
//                       src={`/reddressstoriesmb/assets/victims/${image}`}
//                       alt={name}
//                       sx={{
//                         width: 40,
//                         height: 40,
//                         objectFit: "cover",
//                         borderRadius: 2,
//                       }}
//                     />
//                     <Box>
//                       <Typography variant="body1">{name}</Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {age} • {case_type} {year && `• ${year}`}
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </li>
//               );
//             }}
//             renderInput={(params) => (
//               <TextField
//                 {...params}
//                 placeholder="Search"
//                 variant="standard"
//                 onFocus={() => setIsFocused(true)}
//                 onBlur={() => setIsFocused(false)}
//                 InputProps={{
//                   ...params.InputProps,
//                   disableUnderline: true,
//                   startAdornment: <SearchIcon sx={{ color: "#999", mr: 1 }} />,
//                 }}
//                 sx={{
//                   px: 2,
//                   py: 0.5,
//                   fontFamily: "Lato, sans-serif",
//                 }}
//               />
//             )}
//           />
//         </Box>

//         {/* Nav Links or Hamburger */}
//         {!isMobile ? (
//           <Box>
//             {navItems.map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 underline="hover"
//                 color="#f3ece4"
//                 sx={{
//                   mx: 2,
//                   fontWeight: 500,
//                   textDecoration: "none",
//                   "&:hover": { textDecoration: "underline" },
//                   fontFamily: "Lato, sans-serif",
//                 }}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </Box>
//         ) : (
//           <IconButton
//             edge="end"
//             color="inherit"
//             aria-label="menu"
//             onClick={toggleDrawer(true)}
//             sx={{ ml: 1 }}
//           >
//             <MenuIcon />
//           </IconButton>
//         )}
//       </Toolbar>

//       {/* Drawer for mobile */}
//       <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
//         <Box
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={toggleDrawer(false)}
//           onKeyDown={toggleDrawer(false)}
//         >
//           <List>
//             {navItems.map((item) => (
//               <ListItem key={item.label} disablePadding>
//                 <ListItemButton component="a" href={item.href}>
//                   <ListItemText
//                     primary={item.label}
//                     primaryTypographyProps={{
//                       fontFamily: "Lato, sans-serif",
//                     }}
//                   />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//     </AppBar>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Link,
  useTheme,
  useMediaQuery,
  TextField,
  Autocomplete,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import markers from "../data/markers.json";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "MMIWG2S+ Stories", href: "/map" },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (searchInput.length > 0) {
      const seen = new Set();
      const filtered = [];

      for (const feature of markers.features) {
        const { name, date, home_location, last_location } = feature.properties;

        const lowerSearch = searchInput.toLowerCase();
        const lowerName = name?.toLowerCase() || "";
        const lowerHome = home_location?.toLowerCase() || "";
        const lowerLast = last_location?.toLowerCase() || "";
        const year = date ? new Date(date).getFullYear().toString() : "";

        const matches =
          lowerName.includes(lowerSearch) ||
          lowerHome.includes(lowerSearch) ||
          lowerLast.includes(lowerSearch) ||
          year.includes(lowerSearch);

        if (matches && !seen.has(feature.properties.id)) {
          seen.add(feature.properties.id);
          filtered.push(feature);
        }

        if (filtered.length >= 20) break;
      }

      setOptions(filtered);
    } else {
      setOptions([]);
    }
  }, [searchInput]);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleSelect = (event, value) => {
    if (value) {
      const id = value.properties.id;
      navigate(`/story/${id}`);
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#a8281f", top: 0, zIndex: 1000 }}
    >
      <Toolbar sx={{ display: "flex", alignItems: "center", px: 2 }}>
        {/* Logo */}
        <Link
          component={RouterLink}
          to="/"
          underline="none"
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <Box
            component="img"
            src="/reddressstoriesmb/assets/logos/giganawe_red.png"
            alt="Logo"
            sx={{ height: 40, borderRadius: 1 }}
          />
          {!isMobile && (
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "#f3ece4", fontFamily: "Lato, sans-serif", ml: -2 }}
            >
              Giganawenimaanaanig
            </Typography>
          )}
        </Link>

        {/* Search Bar */}
        <Box
          sx={{
            backgroundColor: isFocused || searchInput ? "#fff" : "#ddd",
            borderRadius: 20,
            mx: 2,
            flexGrow: 1,
            maxWidth: 400,
            transition: "background-color 0.3s",
          }}
        >
          <Autocomplete
            freeSolo
            options={options}
            inputValue={searchInput}
            onInputChange={(event, newInputValue) => {
              setSearchInput(newInputValue);
            }}
            onChange={handleSelect}
            getOptionLabel={(option) => {
              if (typeof option === "string") return option;
              const { name, date, home_location, last_location } =
                option.properties;
              const year = date ? new Date(date).getFullYear().toString() : "";
              return `${name || ""} ${home_location || ""} ${
                last_location || ""
              } ${year}`;
            }}
            renderOption={(props, option) => {
              const { name, age, case_type, image, date } = option.properties;
              const year = date ? new Date(date).getFullYear() : "";
              return (
                <li {...props} key={option.properties.id}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      py: 1,
                    }}
                  >
                    <Box
                      component="img"
                      src={`/reddressstoriesmb/assets/victims/${image}`}
                      alt={name}
                      sx={{
                        width: 40,
                        height: 40,
                        objectFit: "cover",
                        borderRadius: 2,
                      }}
                    />
                    <Box>
                      <Typography variant="body1">{name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {age} • {case_type} {year && `• ${year}`}
                      </Typography>
                    </Box>
                  </Box>
                </li>
              );
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search"
                variant="standard"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                  startAdornment: <SearchIcon sx={{ color: "#999", mr: 1 }} />,
                }}
                sx={{
                  px: 2,
                  py: 0.5,
                  fontFamily: "Lato, sans-serif",
                }}
              />
            )}
          />
        </Box>

        {/* Nav Links or Hamburger */}
        {!isMobile ? (
          <Box>
            {navItems.map((item) => (
              <Link
                key={item.label}
                component={RouterLink}
                to={item.href}
                underline="hover"
                color="#f3ece4"
                sx={{
                  mx: 2,
                  fontWeight: 500,
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                  fontFamily: "Lato, sans-serif",
                }}
              >
                {item.label}
              </Link>
            ))}
          </Box>
        ) : (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ ml: 1 }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Drawer for mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton component={RouterLink} to={item.href}>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontFamily: "Lato, sans-serif",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
