import scrollama from "scrollama";
import config from "../data/config";

export function setupScrollama(map) {
  const scroller = scrollama();

  let activeChapterName = config.chapters[0].id;

  function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    const chapter = config.chapters.find((chap) => chap.id === chapterName);
    if (!chapter) return;

    if (chapter.onChapterEnter) {
      chapter.onChapterEnter.forEach((layer) => {
        if (layer.visibility) {
          if (map.getLayer(layer.layer)) {
            map.setLayoutProperty(layer.layer, "visibility", layer.visibility);
          } else {
            // console.warn(`Layer ${layer.layer} not found on map`);
          }
        }
      });
    }

    map.flyTo(chapter.location);

    document
      .querySelectorAll(".step")
      .forEach((step) => step.classList.remove("active"));
    document.getElementById(chapterName)?.classList.add("active");

    activeChapterName = chapterName;
  }

  scroller
    .setup({
      step: ".step",
      offset: 0.5,
      debug: false,
    })
    .onStepEnter((response) => {
      const chapterName = response.element.id;
      setActiveChapter(chapterName);
    });

  window.addEventListener("resize", scroller.resize);
}
