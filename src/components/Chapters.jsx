import Stories from "./Stories";
import "./Chapters.css";

// This will eventually also have priorities
const Chapters = ({ id }) => {
  return (
    <div id="features">
      <Stories id={id} />
    </div>
  );
};

export default Chapters;
