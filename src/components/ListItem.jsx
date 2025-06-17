import { useNavigate } from "react-router-dom";

function ListItem({ feature }) {
  const navigate = useNavigate();
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
  const [year, month, day] = date.split("-");
  const localDate = new Date(year, month - 1, day);

  const handleClick = () => {
    navigate(`/story/${id}`);
  };

  return (
    <div
      className="listing-item"
      style={{ cursor: "pointer" }}
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
        className="victim-photo"
      />
      <div className="listing-details">
        <p className="listing-details-name">{name}</p>
        <p>
          {age ? `${age}, ` : ""}
          {case_type}
        </p>
        <p>
          {date &&
            `Date: ${localDate.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}`}
        </p>
        {home_location && <p>From: {home_location}</p>}
        {last_location && <p>Last Location: {last_location}</p>}
      </div>
    </div>
  );
}

export default ListItem;
