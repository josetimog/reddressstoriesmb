import config from "../data/config";
import Chapter from "./Chapter.jsx";
import Priorities from "./Priorities.jsx";

const highlightedStoryIds = {
  10: "helen-betty",
  118: "jessica-michaels",
  138: "divas-boulanger",
  206: "lorna-blacksmith",
  238: "tina-fontaine",
  153: "phoenix-sinclair",
};

const Stories = ({ id }) => {
  const chapterKey = highlightedStoryIds[id];
  const storiesChapters = config.chapters.filter(
    (chap) => !chap.id.includes("priorities") && chap.id.includes(chapterKey)
  );
  return (
    <>
      {storiesChapters.length > 0 && (
        <div id="stories" className="stories" style={{ fontFamily: "Lato" }}>
          {storiesChapters.map((chap, idx) => (
            <Chapter key={chap.id} chapter={chap} isActive={idx === 0} />
          ))}
          <Priorities chapter={config.chapters[60]} />
        </div>
      )}
    </>
  );
};

export default Stories;
