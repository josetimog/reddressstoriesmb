const Chapter = ({ chapter, isActive }) => {
  const alignmentClass = {
    left: "lefty",
    center: "centered",
    right: "righty",
    full: "fully",
  }[chapter.alignment || "center"];

  return (
    <div
      id={chapter.id}
      className={`step ${isActive ? "active" : ""} ${alignmentClass} ${
        chapter.hidden ? "hidden" : ""
      }`}
    >
      <div
        style={{
          backgroundColor: "#f3ece4",
          opacity: 0.95,
        }}
      >
        {chapter.title && (
          <h3
            style={{
              fontSize: "1.6rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            {chapter.title}
          </h3>
        )}
        {chapter.image && (
          <img src={chapter.image} alt="" style={{ marginBottom: "1rem" }} />
        )}
        {chapter.description && (
          <p
            style={{ fontSize: "1.4rem" }}
            dangerouslySetInnerHTML={{ __html: chapter.description }}
          />
        )}
      </div>
    </div>
  );
};

export default Chapter;
