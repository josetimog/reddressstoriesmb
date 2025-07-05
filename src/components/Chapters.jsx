import Stories from "./Stories";
import "./Chapters.css";

const Chapters = ({ id }) => {
  return (
    <div id="features">
      <Stories id={id} />
    </div>
  );
};

export default Chapters;
