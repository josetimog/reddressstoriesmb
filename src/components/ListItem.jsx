// import { useNavigate } from "react-router-dom";

// function ListItem({ feature }) {
//   const navigate = useNavigate();
//   const {
//     name,
//     age,
//     case_type,
//     date,
//     home_location,
//     last_location,
//     image,
//     id,
//   } = feature.properties;
//   const [year, month, day] = date.split("-");
//   const localDate = new Date(year, month - 1, day);

//   const handleClick = () => {
//     navigate(`/story/${id}`);
//   };

//   return (
//     <div
//       className="listing-item"
//       style={{ cursor: "pointer" }}
//       onClick={handleClick}
//       onMouseEnter={() => {
//         const event = new CustomEvent("show-popup", { detail: feature });
//         window.dispatchEvent(event);
//       }}
//       onMouseLeave={() => {
//         const event = new CustomEvent("hide-popup");
//         window.dispatchEvent(event);
//       }}
//     >
//       <img
//         loading="lazy"
//         src={`/reddressstoriesmb/assets/victims/${image}`}
//         alt={name}
//         className="victim-photo"
//       />
//       <div className="listing-details">
//         <p className="listing-details-name">{name}</p>
//         <p>
//           {age ? `${age}, ` : ""}
//           {case_type}
//         </p>
//         <p>
//           {date &&
//             `Date: ${localDate.toLocaleDateString("en-US", {
//               year: "numeric",
//               month: "long",
//               day: "numeric",
//             })}`}
//         </p>
//         {home_location && <p>From: {home_location}</p>}
//         {last_location && <p>Last Location: {last_location}</p>}
//       </div>
//     </div>
//   );
// }

// export default ListItem;

// import { useNavigate } from "react-router-dom";

// function ListItem({ feature }) {
//   const navigate = useNavigate();
//   const {
//     name,
//     age,
//     case_type,
//     date,
//     home_location,
//     last_location,
//     image,
//     id,
//   } = feature.properties;
//   const [year, month, day] = date.split("-");
//   const localDate = new Date(year, month - 1, day);

//   const handleClick = () => {
//     navigate(`/story/${id}`);
//   };

//   return (
//     <div
//       className="listing-item"
//       style={{
//         cursor: "pointer",
//         display: "flex",
//         alignItems: "flex-start",
//         gap: "1rem",
//         paddingBottom: "0.5rem",
//         paddingTop: "0.5rem",
//         borderBottom: "1px solid #ccc",
//       }}
//       onClick={handleClick}
//       onMouseEnter={() => {
//         const event = new CustomEvent("show-popup", { detail: feature });
//         window.dispatchEvent(event);
//       }}
//       onMouseLeave={() => {
//         const event = new CustomEvent("hide-popup");
//         window.dispatchEvent(event);
//       }}
//     >
//       <img
//         loading="lazy"
//         src={`/reddressstoriesmb/assets/victims/${image}`}
//         alt={name}
//         style={{
//           width: "25%",
//           maxWidth: "150px",
//           borderRadius: "999px",
//           objectFit: "cover",
//           aspectRatio: "1 / 1",
//           filter: "grayscale(100%)",
//         }}
//       />
//       <div className="listing-details" style={{ flex: 1 }}>
//         <p className="listing-details-name" style={{ fontWeight: "bold" }}>
//           {name}
//         </p>
//         <p>
//           {age ? `${age}, ` : ""}
//           {case_type}
//         </p>
//         <p>
//           {date &&
//             `Date: ${localDate.toLocaleDateString("en-US", {
//               year: "numeric",
//               month: "long",
//               day: "numeric",
//             })}`}
//         </p>
//         {home_location && <p>From: {home_location}</p>}
//         {last_location && <p>Last Location: {last_location}</p>}
//       </div>
//     </div>
//   );
// }

// export default ListItem;

// import { useNavigate } from "react-router-dom";

// function ListItem({ feature }) {
//   const navigate = useNavigate();
//   const { name, age, case_type, date, image, id } = feature.properties;

//   // Extract year from the date
//   const year = date?.split("-")[0];

//   const handleClick = () => {
//     navigate(`/story/${id}`);
//   };

//   return (
//     <div
//       className="listing-item"
//       style={{
//         cursor: "pointer",
//         display: "flex",
//         alignItems: "flex-start",
//         gap: "1rem",
//         paddingBottom: "0.5rem",
//         paddingTop: "0.5rem",
//         borderBottom: "1px solid #ccc",
//       }}
//       onClick={handleClick}
//       onMouseEnter={() => {
//         const event = new CustomEvent("show-popup", { detail: feature });
//         window.dispatchEvent(event);
//       }}
//       onMouseLeave={() => {
//         const event = new CustomEvent("hide-popup");
//         window.dispatchEvent(event);
//       }}
//     >
//       <img
//         loading="lazy"
//         src={`/reddressstoriesmb/assets/victims/${image}`}
//         alt={name}
//         style={{
//           width: "25%",
//           maxWidth: "150px",
//           borderRadius: "999px",
//           objectFit: "cover",
//           aspectRatio: "1 / 1",
//           filter: "grayscale(100%)",
//         }}
//       />
//       <div className="listing-details" style={{ flex: 1 }}>
//         <p className="listing-details-name" style={{ fontWeight: "bold" }}>
//           {name}
//         </p>
//         <p>
//           {age ? `${age}, ` : ""}
//           {case_type}
//         </p>
//         {year && <p>{year}</p>}
//       </div>
//     </div>
//   );
// }

// export default ListItem;

// import { useNavigate } from "react-router-dom";

// function ListItem({ feature }) {
//   const navigate = useNavigate();
//   const { name, age, case_type, date, image, id } = feature.properties;

//   // Extract year from the date
//   const year = date?.split("-")[0];

//   const handleClick = () => {
//     navigate(`/story/${id}`);
//   };

//   return (
//     <div
//       className="listing-item"
//       style={{
//         cursor: "pointer",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         textAlign: "center",
//         padding: "1rem 0",
//         borderBottom: "1px solid #ccc",
//         maxWidth: "200px",
//         margin: "0 auto",
//       }}
//       onClick={handleClick}
//       onMouseEnter={() => {
//         const event = new CustomEvent("show-popup", { detail: feature });
//         window.dispatchEvent(event);
//       }}
//       onMouseLeave={() => {
//         const event = new CustomEvent("hide-popup");
//         window.dispatchEvent(event);
//       }}
//     >
//       <img
//         loading="lazy"
//         src={`/reddressstoriesmb/assets/victims/${image}`}
//         alt={name}
//         style={{
//           width: "100%",
//           maxWidth: "150px",
//           borderRadius: "999px",
//           objectFit: "cover",
//           aspectRatio: "1 / 1",
//           filter: "grayscale(100%)",
//         }}
//       />
//       <div className="listing-details" style={{ marginTop: "0.5rem" }}>
//         <p className="listing-details-name" style={{ fontWeight: "bold" }}>
//           {name}
//         </p>
//         <p>
//           {age ? `${age}, ` : ""}
//           {case_type}
//         </p>
//         {year && <p>{year}</p>}
//       </div>
//     </div>
//   );
// }

// export default ListItem;

// import { useNavigate } from "react-router-dom";

// function ListItem({ feature }) {
//   const navigate = useNavigate();
//   const { name, age, case_type, date, image, id } = feature.properties;

//   // Extract year from the date
//   const year = date?.split("-")[0];

//   const handleClick = () => {
//     navigate(`/story/${id}`);
//   };

//   return (
//     <div
//       className="listing-item"
//       onClick={handleClick}
//       onMouseEnter={() => {
//         const event = new CustomEvent("show-popup", { detail: feature });
//         window.dispatchEvent(event);
//       }}
//       onMouseLeave={() => {
//         const event = new CustomEvent("hide-popup");
//         window.dispatchEvent(event);
//       }}
//     >
//       <img
//         loading="lazy"
//         src={`/reddressstoriesmb/assets/victims/${image}`}
//         alt={name}
//       />
//       <div className="listing-details">
//         <p className="listing-details-name">{name}</p>
//         <p>
//           {age ? `${age}, ` : ""}
//           {case_type}
//         </p>
//         {year && <p>{year}</p>}
//       </div>
//     </div>
//   );
// }

// export default ListItem;

import { useNavigate } from "react-router-dom";

function ListItem({ feature }) {
  const navigate = useNavigate();
  const { name, age, case_type, date, image, id } = feature.properties;

  // Extract year from the date
  const year = date?.split("-")[0];

  // Build a single string with age, case_type, year (comma separated)
  const infoItems = [];
  if (age) infoItems.push(age);
  if (case_type) infoItems.push(case_type);
  if (year) infoItems.push(year);
  const infoString = infoItems.join(", ");

  const handleClick = () => {
    navigate(`/story/${id}`);
  };

  return (
    <div
      className="listing-item"
      onClick={handleClick}
      onMouseEnter={() => {
        const event = new CustomEvent("show-popup", { detail: feature });
        window.dispatchEvent(event);
      }}
      onMouseLeave={() => {
        const event = new CustomEvent("hide-popup");
        window.dispatchEvent(event);
      }}
    >
      <img
        loading="lazy"
        src={`/reddressstoriesmb/assets/victims/${image}`}
        alt={name}
      />
      <div className="listing-details">
        <p className="listing-details-name">{name}</p>
        <p>{infoString}</p>
      </div>
    </div>
  );
}

export default ListItem;
