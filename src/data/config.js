//var zeroDist = 59959.436;
// var themeColor = "#a8281f";
import { locations } from "./locations.js";

const allLayers = [
  "blackout-layer",
  "manitoba-highlight-layer",
  "canada-highlight-layer",
  "helen-betty-first-nations-layer",
  "helen-betty-step-1-layer",
  "helen-betty-step-2-layer",
  "helen-betty-step-3-layer",
  "helen-betty-step-4-layer",
  "helen-betty-step-5-layer",
  "helen-betty-step-6-layer",
  "helen-betty-step-6-range-layer",
  "helen-betty-step-7-layer",
  "helen-betty-step-8-layer",
  "helen-betty-step-9-layer",
  "helen-betty-step-10-layer",
  "helen-betty-step-11-layer",
  "helen-betty-step-12-layer",
  "jessica-michaels-step-1-layer",
  "jessica-michaels-wpg-layer",
  "jessica-michaels-step-5-layer",
  "divas-boulanger-step-1-layer",
  "divas-boulanger-step-2-layer",
  "divas-boulanger-step-2-range-layer",
  "divas-boulanger-step-3-layer",
  "divas-boulanger-step-3-path-layer",
  "divas-boulanger-step-5-layer",
  "lorna-blacksmith-step-1-layer",
  "lorna-blacksmith-step-3-layer",
  "lorna-blacksmith-step-4-nd-layer",
  "lorna-blacksmith-step-4-ellice-layer",
  "lorna-blacksmith-step-4-path-layer",
  "lorna-blacksmith-step-5-layer",
  "lorna-blacksmith-step-7-fill-layer",
  "lorna-blacksmith-step-7-path-layer",
  "lorna-blacksmith-step-7-layer",
  "lorna-blacksmith-step-9-layer",
  "lorna-blacksmith-step-9-range-layer",
  "tina-fontaine-step-1-layer",
  "tina-fontaine-step-2-layer",
  "tina-fontaine-step-3-layer",
  "tina-fontaine-step-3-path-layer",
  "tina-fontaine-step-5-layer",
  "tina-fontaine-step-5-outline-layer",
  "tina-fontaine-step-6-layer",
  "tina-fontaine-step-8-layer",
  "phoenix-sinclair-step-2-layer",
  "phoenix-sinclair-step-3-layer",
];

function generateLayerVisibility(overrides = {}) {
  return allLayers.map((layer) => ({
    layer,
    visibility: overrides[layer] || "none",
  }));
}

var config = {
  style: "mapbox://styles/dami-akinniyi/clhca5xln021v01qn83369r90",
  accessToken:
    "pk.eyJ1IjoianRpbW9nIiwiYSI6ImNtN2JmaXRlbDA5emcya290MzVyMWJiNWkifQ.PHuCBkKA6HxVACqpewv4BA",
  color: "#da4339",
  color2: "#343434",
  showMarkers: true,
  markerColor: "#da4339",
  projection: "mercator",
  theme: "light",
  use3dTerrain: false, //set true for enabling 3D maps.
  auto: false,
  title: "Red Dress Stories MB",

  chapters: [
    // {
    //   id: "home",
    //   alignment: "left",
    //   hidden: false,
    //   title: "CONTENT WARNING",
    //   description:
    //     "<br>This page deals with heavy subject matter that may negatively affect the reader.<br><br> \
    //          If you are affected by the issue of missing and murdered Indigenous women, girls, and \
    //          2SLGBTQQIA+ individuals, or by gender-based violence, and need immediate emotional assistance, \
    //          contact the National Inquiry into Missing and Murdered Indigenous Women and Girls Toll-Free Support \
    //          Phone Line at <strong>1-844-413-6649</strong>.<br><br> This service is available 24/7 in English, French, Cree, Ojibwe, and Inuktitut.",
    //   location: {
    //     zoom: locations.manitoba.zoom, // using mapbox pixel per distance, the distance @ 0 zoom level and screen height. This will automatically set the zoom level so that the map fits on 75% of the screen
    //     center: locations.manitoba.center,
    //     pitch: 0,
    //     bearing: 0,
    //     // flyTo additional controls-
    //     speed: 2, // make the flying slow
    //     curve: 1, // change the speed at which it zooms out
    //   },
    //   mapAnimation: "flyTo",
    //   rotateAnimation: false,
    //   callback: "",
    //   onChapterEnter: generateLayerVisibility({
    //     "blackout-layer": "visible",
    //   }),
    //   onChapterExit: [],
    // },
    // {
    //   id: "home-2",
    //   alignment: "left",
    //   hidden: false,
    //   description:
    //     "Indigenous women, girls and 2SLGBTQQIA+ relatives are disproportionately targeted for violence, with rates of homicide over \
    //           three times higher than among non-Indigenous peoples.<br><br>According to Statistics Canada data from 2021, approximately half of all \
    //           homicide victims in Manitoba were Indigenous (David and Jaffray, 2022). Nearly half of Indigenous victims were women or girls. This was\
    //           the third highest rate in Canada, and significantly higher than the national average. Winnipeg had the highest rate of Indigenous \
    //           homicide victims across all urban centres in Canada.<br><br>Women and girls are disproportionately represented compared with men among \
    //           youth and children, as well as victims in older age groups. Despite making up only 5% of the female population in 2021, Indigenous women \
    //           and girls accounted for 21% of all gender-related homicides that year. Manitoba had the second highest rate (Sutton, 2023).<br><br>\
    //           This crisis is deeply felt in Manitoba.",
    //   location: {
    //     zoom: locations.manitoba.zoom, // using mapbox pixel per distance, the distance @ 0 zoom level and screen height. This will automatically set the zoom level so that the map fits on 75% of the screen
    //     center: locations.manitoba.center,
    //     pitch: 0,
    //     bearing: 0,
    //     // flyTo additional controls-
    //     speed: 2, // make the flying slow
    //     curve: 1, // change the speed at which it zooms out
    //   },
    //   mapAnimation: "flyTo",
    //   rotateAnimation: false,
    //   callback: "",
    //   onChapterEnter: generateLayerVisibility({
    //     "blackout-layer": "visible",
    //   }),
    //   onChapterExit: [],
    // },
    // {
    //   id: "home-3",
    //   alignment: "left",
    //   hidden: false,
    //   description:
    //     "This project was led by Giganawenimaanaanig, formerly known as the MMIWG2S+ Implementation Committee. Giganawenimaanaanig was \
    //           originally birthed by families and Survivors and is continually nourished by the Ma Mawi Wi Chi Itata Centre, Inc. The Advisory Committee\
    //            is a strength-based coalition, and each partner is an independent organization with their own governance structures.<br><br>All views \
    //            expressed on this page are representative of community voices. Content was developed from the stories of Manitoba women, girls, and \
    //            2SLGBTQQIA+ relatives shared in the media, in various reports, and from their families.<br><br>Technical and financial resources were \
    //            provided by the Government of Manitoba.",
    //   location: {
    //     zoom: locations.manitoba.zoom, // using mapbox pixel per distance, the distance @ 0 zoom level and screen height. This will automatically set the zoom level so that the map fits on 75% of the screen
    //     center: locations.manitoba.center,
    //     pitch: 0,
    //     bearing: 0,
    //     // flyTo additional controls-
    //     speed: 2, // make the flying slow
    //     curve: 1, // change the speed at which it zooms out
    //   },
    //   mapAnimation: "flyTo",
    //   rotateAnimation: false,
    //   callback: "",
    //   onChapterEnter: generateLayerVisibility({
    //     "blackout-layer": "visible",
    //   }),
    //   onChapterExit: [],
    // },
    // {
    //   id: "home-4",
    //   alignment: "left",
    //   hidden: false,
    //   description:
    //     "Through sharing the stories of six individuals, we highlight a number of themes and barriers experienced by each of them and by \
    //           many affected by this national crisis.<br><br><em>Giganawenimaanaanig received permission from families of individuals highlighted in \
    //           this storymap.</em>",
    //   location: {
    //     zoom: locations.manitoba.zoom, // using mapbox pixel per distance, the distance @ 0 zoom level and screen height. This will automatically set the zoom level so that the map fits on 75% of the screen
    //     center: locations.manitoba.center,
    //     pitch: 0,
    //     bearing: 0,
    //     // flyTo additional controls-
    //     speed: 2, // make the flying slow
    //     curve: 1, // change the speed at which it zooms out
    //   },
    //   mapAnimation: "flyTo",
    //   rotateAnimation: false,
    //   callback: "",
    //   onChapterEnter: [],
    //   onChapterExit: [],
    // },
    // {
    //   id: "home-5",
    //   alignment: "left",
    //   hidden: false,
    //   description:
    //     "This project is intended to be an evergreen memorial that continues to grow. It is also intended to be used as a \
    //           teaching tool for educators, policy makers, and leadership organizations.<br><br>The journey readers take throughout this \
    //           page is difficult. In an effort to ground readers before beginning this journey, we included the image below to provide a moment \
    //           of preparation, quiet introspection, and courage.<br><br> Readers are invited to view a slideshow of empowering images at anytime in their journey by \
    //           clicking the <strong>I Need A Minute</strong> button at the bottom of the screen. <br><br> \
    //           To anyone who needs a minute, please know that you are loved, and that your presence is a gift to the world.",
    //   location: {
    //     zoom: locations.manitoba.zoom, // using mapbox pixel per distance, the distance @ 0 zoom level and screen height. This will automatically set the zoom level so that the map fits on 75% of the screen
    //     center: locations.manitoba.center,
    //     pitch: 0,
    //     bearing: 0,
    //     // flyTo additional controls-
    //     speed: 2, // make the flying slow
    //     curve: 1, // change the speed at which it zooms out
    //   },
    //   mapAnimation: "flyTo",
    //   rotateAnimation: false,
    //   callback: "",
    //   onChapterEnter: generateLayerVisibility({
    //     "blackout-layer": "visible",
    //   }),
    //   onChapterExit: [],
    // },
    // {
    //   id: "timeline",
    //   alignment: "left",
    //   hidden: false,
    //   title: "Over the Years",
    //   description:
    //     "The following map demonstrates the increasing numbers of missing or murdered Indigenous women, girls, Two-Spirit, and gender-diverse \
    //     relatives reported in Manitoba from the 1940s to present.<br><br>Reports of murdered or missing persons and unresolved cases are marked with \
    //     a red dress. The name of each individual can be read by selecting a marker. \
    //     <br><br><i>Please note that these maps are considered incomplete. We acknowledge that many have gone missing or have been murdered outside of \
    //     Manitoba borders. We have done our best to ensure each individual lost from a Manitoba community is included here. For safety reasons, markers  are approximate.</i> ",
    //   location: {
    //     zoom: locations.manitoba.zoom, // using mapbox pixel per distance, the distance @ 0 zoom level and screen height. This will automatically set the zoom level so that the map fits on 75% of the screen
    //     center: locations.manitoba.center,
    //     pitch: 0,
    //     bearing: 0,
    //     // flyTo additional controls-
    //     speed: 2, // make the flying slow
    //     curve: 1, // change the speed at which it zooms out
    //   },
    //   mapAnimation: "flyTo",
    //   rotateAnimation: false,
    //   callback: "",
    //   onChapterEnter: generateLayerVisibility({
    //     "manitoba-highlight-layer": "visible",
    //     "timeline-layer": "visible",
    //     "timeline-cluster-layer": "visible",
    //     "timeline-cluster-count": "visible",
    //   }),
    //   onChapterExit: [],
    // },
    {
      id: "helen-betty-01",
      start: true,
      alignment: "left",
      hidden: false,
      title: "Helen Betty Osborne",
      image: "/reddressstoriesmb/assets/helen_betty/1_HBO Portrait.jpg",
      description:
        "Helen Betty Osborne was a Cree teenager from Norway House, a First Nation community located approximately 600 km \
            north of Winnipeg. Deeply loved by her family and friends, she was often referred to as Betty.",
      location: {
        center: locations.norwayHouse.center, //locations.norwayHouse.center,
        zoom: 9, //locations.norwayHouse.zoom,
        pitch: 60,
        bearing: 0.0,
        // flyTo additional controls-
        speed: 1, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "helen-betty-step-1-layer": "visible",
      }),
      // onChapterExit: [
      //   {
      //     layer: "helen-betty-step-1-layer",
      //     visibility: "none",
      //   },
      // ],
      showMarkers: true,
    },
    {
      id: "helen-betty-02",
      alignment: "left",
      hidden: false,
      title: "Helen Betty Osborne",
      description:
        "One of Betty's goals was to further her education and become a teacher. At the age of 17 she \
            left her community to attend the Guy Hill Residential School at Clearwater Lake, 29 km from The Pas. ",
      location: {
        center: locations.guyHill.center,
        zoom: 8,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 0.7, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "helen-betty-step-2-layer": "visible",
      }),
      showMarkers: true,
    },
    {
      id: "helen-betty-03",
      alignment: "left",
      hidden: false,
      title: "Helen Betty Osborne",
      image:
        "/reddressstoriesmb/assets/helen_betty/margaret_barbour_collegiate.jpg",
      description:
        "After two years at Guy Hill, Betty moved to The Pas to attend high school at Margaret Barbour Collegiate. \
            Room and board were arranged for Betty with a family in The Pas, arranged by the Department of Indian Affairs as per protocols \
            at this time.<br><br> Betty was described as a shy teenager who was quiet, serious, kind, and a good friend. \
            She was also described as lonely for home.",
      location: {
        center: locations.margaretBarbour.center,
        zoom: 13,
        pitch: 60,
        bearing: 0,
        // flyTo additional controls-
        speed: 1, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false, // rotates slowly around coordinate after zooming to location
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "helen-betty-step-3-layer": "visible",
      }),
      showMarkers: true,
    },
    {
      id: "helen-betty-04",
      alignment: "left",
      hidden: false,
      title: "Education Accessibility",
      description:
        "Betty was one of many Indigenous students who were required to move or board with families in southern, non-Indigenous communities \
         if they wished to further their education.<br><br> The map seen here indicates access to teachers in Manitoba in 1971. \
         While the vast majority of non-Indigenous communities had their own schools within a 30-minute drive at this time, \
         the majority of Indigenous communities did not.<br><br> Each dot on this map represents a First Nations community in Manitoba. \
         The darkest areas of the map indicate access to 50 or more teachers within a 30-minute drive, while the lightest areas indicate \
         access to five or less teachers within the same driving distance.<br><br> This type of relocation is still necessary \
         for many Indigenous youth today, and significantly increases risks to their safety.",
      location: {
        center: locations.manitoba.center,
        zoom: locations.manitoba.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "helen-betty-step-4-layer": "visible",
        "helen-betty-first-nations-layer": "visible",
      }),
    },
    {
      id: "helen-betty-05",
      alignment: "left",
      hidden: false,
      title: "Education Accessibility",
      description:
        "The situation improved slightly between 1971 and 2020, as shown here. As of 2020, Manitoba had 37 school districts, \
          with four available to northern students.",
      location: {
        center: locations.manitoba.center,
        zoom: locations.manitoba.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "helen-betty-step-5-layer": "visible",
      }),
    },
    {
      id: "helen-betty-06",
      alignment: "left",
      hidden: false,
      title: "Helen Betty Osborne's Murder",
      description:
        "In the early hours of November 13, 1971, Betty was walking home from a night out with friends \
          — a normal and expected activity most 19-year-olds partake in.<br><br> She was abducted by a car of four men while \
            walking down Third Street.",
      location: {
        center: locations.thirdStreet.center,
        zoom: 14,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 1.5, // make the flying slow
        curve: 1.2, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "helen-betty-step-6-layer": "visible",
        "helen-betty-step-6-range-layer": "visible",
      }),
    },
    {
      id: "helen-betty-07",
      alignment: "left",
      hidden: false,
      title: "Helen Betty Osborne's Murder",
      description:
        "Over the next hours she was physically and sexually assaulted repeatedly, and was stabbed \
            over 50 times with a screwdriver. Her attackers left her body, clad only in winter boots, near the pump house on the \
            southern shore of Clearwater Lake approximately 30 km northeast of The Pas.",
      location: {
        center: locations.thePasClearWater.center,
        zoom: 10,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 1, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "helen-betty-step-6-layer": "visible",
        "helen-betty-step-7-layer": "visible",
        "helen-betty-step-8-layer": "visible",
      }),
    },
    {
      id: "helen-betty-08",
      alignment: "left",
      hidden: false,
      title: "Helen Betty Osborne's Murder",
      description:
        "Betty was found there the following day by a teenaged boy fishing in the area with his father.<br><br> \
            It took more than 16 years for the men responsible to be charged. Only one of the four was convicted, and he \
            only served ten years of a lifetime prison sentence before being released.",
      location: {
        center: locations.pumpHouse.center,
        zoom: 13,
        pitch: 60,
        bearing: 0,
        // flyTo additional controls-
        speed: 1, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "helen-betty-step-8-layer": "visible",
      }),
    },
    {
      id: "helen-betty-09",
      alignment: "left",
      hidden: false,
      title: "Helen Betty Osborne - The After Effects",
      description:
        "Allegations of racism, neglect, and indifference on the part of the town and the authorities were made \
            regarding the treatment of Betty's case. <br><br> <strong><em>Click on icons to read comments</em></strong>",
      location: {
        center: locations.thePas.center,
        zoom: 14,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 1, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "helen-betty-step-9-layer": "visible",
      }),
    },
    {
      id: "helen-betty-10",
      alignment: "left",
      hidden: false,
      title: "Helen Betty Osborne - The After Effects",
      description:
        "Many families with missing or murdered loved ones today continue to express similar experiences and feelings. \
            <br><br>The allegations suggested that because Betty was an Indigenous woman, her murder was unimportant. Issues concerning the \
            investigation of Betty's murder, and others, are documented in the Manitoba Aboriginal Justice Inquiry.\
            <br><br><strong><em>Click on icons to read comments.<br>Zoom in on Winnipeg and Western to see more comments.</em></strong>",
      location: {
        center: locations.manitoba.center,
        zoom: locations.manitoba.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 2.5, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "helen-betty-step-10-layer": "visible",
      }),
    },
    {
      id: "helen-betty-11",
      alignment: "left",
      hidden: false,
      title: "Aboriginal Justice Inquiry",
      image: "/reddressstoriesmb/assets/helen_betty/AJI image.jpg",
      description:
        "The Aboriginal Justice Inquiry, commissioned by the Manitoba government in 1988, was mandated to investigate racism \
            in Manitoba's justice system through the lens of Helen Betty Osborne's murder as well as the 1988 police shooting of J.J. Harper. \
            <br><br>The report found that pervasive and systemic discrimination exists within the justice system, and made <a href=http://www.ajic.mb.ca/recommendations.html target=blank>296 recommendations</a> \
            to address the issues raised in the report. Many of the recommendations have yet to be implemented. <br><br><strong><em>Click on icons for more details</em></strong>",
      location: {
        center: locations.manitoba.center,
        zoom: locations.manitoba.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "helen-betty-step-11-layer": "visible",
      }),
    },
    {
      id: "helen-betty-12",
      alignment: "left",
      hidden: false,
      title: "Helen Betty Osborne – Legacy",
      description:
        "While a significant amount of work remains to be done, Betty's story has paved the way for much-needed \
            positive change throughout Manitoba and Canada. The drive for these changes have been continuously pushed for by Indigenous \
            families and communities affected by Betty's death, and by the deaths of every other woman, girl, and 2SLGBTQQIA+ relative.<br><br>\
            Betty's dream was to become a teacher. While generations of students were denied \
            the opportunity to learn from her in person, her educational legacy lives on throughout Manitoba. <br><br> Some examples include: \
            <ul><li>	The Helen Betty Osborne Fund </li><li>The Helen Betty Osborne Ininiw Education Resource Centre</li> \
            <li>Naming Recognitions</li></ul><br><strong><em>Click on icons for more details</em></strong",
      location: {
        center: locations.manitoba.center,
        zoom: locations.manitoba.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "helen-betty-step-12-layer": "visible",
      }),
    },
    {
      id: "helen-betty-13",
      end: true,
      alignment: "center",
      hidden: false,
      title: "Helen Betty Osborne",
      description:
        "Though Helen Betty Osborne was not the first girl to be victimized in the national tragedy of missing and murdered \
            Indigenous women, girls, and 2SLGBTQQIA+ relatives, her heartbreaking death and the many significant issues during the \
            investigation are often seen as the 'ground-zero' of the MMIWG2S+ movement in Manitoba.",
      location: {
        center: locations.manitoba.center,
        zoom: locations.manitoba.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "blackout-layer": "visible",
      }),
    },

    // Jessica Michaels
    {
      id: "jessica-michaels-01",
      start: true,
      alignment: "left",
      hidden: false,
      title: "Jessica Michaels",
      image: "/reddressstoriesmb/assets/jessica_michaels/1_Jessica.png",
      description:
        "Jessica Michaels was a creative child and teenager. She loved singing, fashion, and her family. She was known by many for her \
    beautiful voice.<br><br> She was resourceful and full of life. Despite the hardships she endured throughout her short life, she brought laughter \
    and joy into the lives of her loved ones.<br><br>She was born in 1984 in Chesterfield Inlet, Nunavut, but lived most of her life in Winnipeg.",
      location: {
        center: locations.chesterfieldInlet.center,
        zoom: 6, //locations.norwayHouse.zoom,
        pitch: 60,
        bearing: 0.0,
        // flyTo additional controls-
        speed: 1, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "jessica-michaels-step-1-layer": "visible",
      }),
      showMarkers: true,
    },
    {
      id: "jessica-michaels-02",
      alignment: "left",
      hidden: false,
      title: "Jessica Michaels",
      image: "/reddressstoriesmb/assets/jessica_michaels/2_Jessica.jpg",
      description:
        "As a youth, Jessica and her cousins became well-known Inuit Throat Singers and travelled around the world to perform. \
    One of these performances was at the 1996 Summer Olympic Games in Atlanta, Georgia.<br><br>Before, during, and after this time, she also \
    experienced a horrific amount of physical, mental, sexual, and emotional abuse.",
      location: {
        // center: locations.chesterfieldInlet.center, // disabled so that map doesn't reset between first 2 Jessica slides
        zoom: 6, //locations.norwayHouse.zoom,
        pitch: 60,
        bearing: 0.0,
        // flyTo additional controls-
        speed: 1, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "jessica-michaels-step-1-layer": "visible",
      }),
      showMarkers: true,
    },
    {
      id: "jessica-michaels-03",
      alignment: "left",
      hidden: false,
      title: "Jessica Michaels",
      description:
        "Part of the child welfare system since birth, Jessica was at first placed under the protection of her aunt. She and her cousins were removed from her following an investigation into severe abuse.<br><br>Later placements in group homes often resulted in Jessica running away, alternating between the Manitoba Youth Centre and living on the streets.<br><br>She was not offered a choice to live with other family members, resulting in further disconnection from her family and culture.",
      location: {
        center: locations.winnipeg.center,
        zoom: 9,
        pitch: 60,
        bearing: 0,
        // flyTo additional controls-
        speed: 1, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "jessica-michaels-wpg-layer": "visible",
      }),
      showMarkers: true,
    },
    {
      id: "jessica-michaels-04",
      alignment: "left",
      hidden: false,
      title: "Jessica Michaels",
      description:
        " She experienced a stable home environment for a short time with foster parents who she loved.<br><br> Unfortunately, Jessica required specialized services (counselling, therapy, etc.) resulting from a lifetime of trauma and hardship. The services she needed weren’t available at her stable, rural home. This eventually resulted in Jessica returning to dangerous living situations in Winnipeg.<br><br>From the ages of 14 to 17, Jessica was trafficked. While still a child, she struggled with addiction and experienced intimate partner violence, abuse, and sexual exploitation.",
      location: {
        center: locations.winnipeg.center,
        zoom: locations.winnipeg.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "jessica-michaels-wpg-layer": "visible",
      }),
    },
    {
      id: "jessica-michaels-05",
      alignment: "left",
      hidden: false,
      title: "Jessica Michaels",
      description:
        "At the age of 15 she attempted to return home to Chesterfield Inlet. Once again, the effects of a lifetime of trauma and \
    violence created many barriers and challenges for Jessica, and she and her family were unable to access the services they needed.<br><br> In less \
    than one year, Jessica was back in Winnipeg.<br><br>One week before she died, Jessica made plans with her sister on how best to exit and \
    move forward from the life she'd been living.",
      location: {
        center: locations.albertaWpg.center,
        zoom: locations.albertaWpg.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "canada-highlight-layer": "visible",
        "jessica-michaels-step-1-layer": "visible",
        "jessica-michaels-wpg-layer": "visible",
        "jessica-michaels-step-5-layer": "visible",
      }),
    },
    {
      id: "jessica-michaels-06",
      alignment: "left",
      hidden: false,
      title: "Jessica's Death",
      description:
        "At age 17, Jessica's body was found in a rooming house in Winnipeg. Her death was deemed a suicide, but family and friends \
        have consistently expressed that they suspect foul play was involved.<br><br>At the time of her death, Jessica was actively being trafficked. \
        She was legally a child in care, deemed a 'runaway' from the youth/juvenile centre.<br><br>Funds were not provided to return her body home to \
        Nunavut. This was only achieved through fundraising via CJOB, a southern Manitoba radio station.",
      location: {
        center: locations.winnipeg.center,
        zoom: locations.winnipeg.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "jessica-michaels-wpg-layer": "visible",
      }),
    },
    {
      id: "jessica-michaels-07",
      alignment: "center",
      hidden: false,
      title: "Jessica's Death",
      description:
        "Jessica lived in a system that failed her at every turn.<br><br>  She was placed under the custody of an abusive family member.<br> \
        She received no trauma supports throughout the court process and cross-examination from her aunt's defense attorney.<br>  Her abuser \
        received two years of probation with counselling.<br>  She experienced loss of identity and connection to her culture.<br>  She was repeatedly \
        unable to access life-saving services.<br>  She was left vulnerable to predators throughout her childhood.",
      location: {
        center: locations.manitoba.center,
        zoom: locations.manitoba.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 1, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "blackout-layer": "visible",
      }),
    },
    {
      id: "jessica-michaels-08",
      alignment: "center",
      hidden: false,
      title: "Jessica's Legacy",
      description:
        "Jessica's legacy is carried by her sister and by all those who loved her.<br><br>Her story was shared as part of the National \
    Inquiry into Missing and Murdered Indigenous Women and Girls, and speaks to the trauma caused by removal from community and culture, gaps \
    within the child welfare services, and the vulnerability of youth within the system.<br><br>Jessica’s loved ones continue to fight for youth \
    like her.",
      location: {
        center: locations.manitoba.center,
        zoom: locations.manitoba.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 1, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "blackout-layer": "visible",
      }),
    },

    // --- Divas Boulanger --- //
    {
      id: "divas-boulanger-01",
      start: true,
      alignment: "left",
      hidden: false,
      title: "Divas Boulanger",
      image: "/reddressstoriesmb/assets/divas_boulanger/1_Divas.jpg",
      description:
        "Divas Boulanger was a 27-year-old Indigenous transgender woman from the Berens River First Nations community. Divas left her community due to a lack of resources, security, and housing.<br><br> \
        After departing from her community, Divas situated herself in Winnipeg where she became vulnerable and was exploited within the survival sex industry. She experienced chronic homelessness due to a number of barriers within the social services system.<br><br> \
        Divas strived while surviving, however she eventually became a missing person.",
      location: {
        center: locations.berensRivers.center,
        zoom: 9, //locations.norwayHouse.zoom,
        pitch: 60,
        bearing: 0.0,
        // flyTo additional controls-
        speed: 1, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "divas-boulanger-step-1-layer": "visible",
      }),
      showMarkers: true,
    },
    {
      id: "divas-boulanger-02",
      alignment: "left",
      hidden: false,
      title: "Divas Boulanger",
      description:
        "The evening she went missing, Divas attended a Take Back the Night march and rally. She was determined to take part in this event to echo the lack of human rights and many forms of violence she and so many other women experienced. This was the last night she was seen alive, and \
    was reported missing almost two weeks later. She  was last seen entering a white truck in the area of Sutherland and Main.",
      location: {
        center: locations.sutherlandMain.center,
        zoom: 14,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 1.8, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "divas-boulanger-step-2-layer": "visible",
        "divas-boulanger-step-2-range-layer": "visible",
      }),
    },
    {
      id: "divas-boulanger-03",
      alignment: "left",
      hidden: false,
      title: "Divas Boulanger",
      description:
        "Divas went missing September 28, 2004. She was located by hunters near a rest stop off the Transcanada Highway 8 km outside of Portage la Prairie on November 3, 2004.",
      location: {
        center: locations.wpgPlp.center,
        zoom: locations.wpgPlp.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 2.5, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "divas-boulanger-step-2-layer": "visible",
        "divas-boulanger-step-3-layer": "visible",
        "divas-boulanger-step-3-path-layer": "visible",
      }),
    },
    {
      id: "divas-boulanger-04",
      alignment: "left",
      hidden: false,
      title: "Violence Against 2SLGBTQQIA+ Relatives",
      description:
        "Transgender people in Canada experience high rates of violence.<br><br>Data from Statistics Canada suggests that \
    nearly 60% of transgender individuals in Canada will likely experience violence in their lifetime.<br><br>Members of the 2SLGBTQQIA+ community \
    also experience homophobic, transphobic, and heteronormative discrimination, which can translate to lower income, unequal access \
    to education and employment opportunities, and precarious housing.<br><br>All of these factors can lead to increased rates of violence \
    (Sutton 2023).",
      location: {
        center: locations.manitoba.center,
        zoom: locations.manitoba.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "blackout-layer": "visible",
      }),
    },
    {
      id: "divas-boulanger-05",
      alignment: "left",
      hidden: false,
      title: "Divas Boulanger",
      description:
        "While Divas was missing, there was a focus by police and media on her vulnerability to exploitation. For example, derogatory and inhuman taglines were used when requesting assistance from the public. Throughout this time, Divas’ friends were determined to humanize her while continuing to seek justice.",
      location: {
        center: locations.manitoba.center,
        zoom: locations.manitoba.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "blackout-layer": "visible",
      }),
    },
    {
      id: "divas-boulanger-06",
      alignment: "left",
      hidden: false,
      title: "Divas Boulanger",
      description:
        "Divas’ friends and community also experienced vulnerability and exploitation in the survival sex industry. Through relationship building with a detective within the RCMP, they were able to help bring Divas’ murder into custody and be held responsible for her death.<br><br> \
        Divas' murderer was arrested in 2010, and was found guilty of second-degree murder in 2015 — 11 years after Divas' death. \
    The media portrayed the motive for Divas' murder as 'unclear'.<br><br>A 2010 CBC article noted that Divas' murder was one of three \
    suspicious deaths of women involved in the sex industry in Winnipeg within a three-year span.<br><br><strong><em>Click on icons for more \
    details</em></strong>",
      location: {
        center: locations.winnipeg.center,
        zoom: locations.winnipeg.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "divas-boulanger-step-5-layer": "visible",
      }),
    },
    {
      id: "divas-boulanger-07",
      end: true,
      alignment: "center",
      hidden: false,
      title: "Divas Boulanger",
      description:
        "After sentencing, her family stressed to the media that she was loved, and that she was a human being. \
        That she was valued.<br><br> \
        Divas' loved ones and chosen family continue to carry her story.",
      location: {
        center: locations.manitoba.center,
        zoom: locations.manitoba.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "blackout-layer": "visible",
      }),
    },
    {
      id: "divas-boulanger-08",
      end: true,
      alignment: "center",
      hidden: false,
      title: "Divas Boulanger – Legacy",
      description:
        "The first Transgender Day of Remembrance event in Winnipeg was held shortly after Divas’ murder.<br><br>Observed annually on \
    November 20, this annual day of observance honours trans lives lost to acts of transphobic violence and systemic oppression. The event has \
    grown from approximately 20 people in Winnipeg to hundreds of people at events across the province.<br><br>These events continue to bring \
    together 2SLGBTQQIA+ community members and their allies in solidarity.",
      location: {
        center: locations.manitoba.center,
        zoom: locations.manitoba.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "blackout-layer": "visible",
      }),
    },
    // --- Lorna Blacksmith --- //
    {
      id: "lorna-blacksmith-01",
      start: true,
      alignment: "left",
      hidden: false,
      title: "Lorna Blacksmith",
      image: "/reddressstoriesmb/assets/lorna_blacksmith/1_Lorna.jpg",
      description:
        "Lorna Lynn Blacksmith was a bright, vivacious teenager originally from Pimicikamak (Cross Lake), located over 700 km north of \
    Winnipeg.",
      location: {
        center: locations.crossLake.center,
        zoom: 9, //locations.norwayHouse.zoom,
        pitch: 60,
        bearing: 0.0,
        // flyTo additional controls-
        speed: 1, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "lorna-blacksmith-step-1-layer": "visible",
      }),
      showMarkers: true,
    },
    {
      id: "lorna-blacksmith-02",
      alignment: "left",
      hidden: false,
      title: "Lorna Blacksmith",
      image: "/reddressstoriesmb/assets/lorna_blacksmith/2_Lorna.jpg",
      description:
        "Lorna was a member of the Cross Lake Cadet Corps. She served as a leading member of the Corps according to her Commanding Officer. \
    She was always proud to be a Cadet.",
      location: {
        center: locations.crossLake.center,
        zoom: 9, //locations.norwayHouse.zoom,
        pitch: 60,
        bearing: 0.0,
        // flyTo additional controls-
        speed: 1, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "lorna-blacksmith-step-1-layer": "visible",
      }),
      showMarkers: true,
    },
    {
      id: "lorna-blacksmith-03",
      alignment: "left",
      hidden: false,
      title: "Lorna Blacksmith",
      description:
        "Lorna experienced the effects of intergenerational trauma within her family, which resulted in little stability in her early \
    life. She and other close relatives were involved with the child welfare system throughout their lives, and struggled with substance use \
    throughout their adolescences.<br><br>In 2011, Lorna moved to Winnipeg with her mother and siblings. She attended high school at Gordon Bell \
    Collegiate.",
      location: {
        center: locations.gordonBell.center,
        zoom: 13,
        pitch: 60,
        bearing: 0,
        // flyTo additional controls-
        speed: 2.5, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "lorna-blacksmith-step-3-layer": "visible",
      }),
    },
    {
      id: "lorna-blacksmith-04",
      alignment: "left",
      hidden: false,
      title: "Lorna Blacksmith",
      description:
        "Lorna was last seen by her mother on January 12, 2012, when she was dropped off at a house on Toronto Street. She was 18 years old.",
      location: {
        center: locations.torontoSt.center,
        zoom: locations.torontoSt.zoom, //14,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 0.1, // make the flying slow
        curve: 2, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "lorna-blacksmith-step-4-nd-layer": "visible",
        "lorna-blacksmith-step-4-ellice-layer": "visible",
        "lorna-blacksmith-step-4-path-layer": "visible",
      }),
    },
    {
      id: "lorna-blacksmith-05",
      alignment: "left",
      hidden: false,
      title: "Lorna Blacksmith",
      image:
        "/reddressstoriesmb/assets/lorna_blacksmith/5_Lorna Facebook screenshot.jpg",
      description:
        "On January 24, 2012, a missing person advisory was released by the Winnipeg Police Service.<br><br>While Lorna was missing, the \
    community and her family created the 'Find Lorna Blacksmith' Facebook group. Former Chief of Pimicikamak, Cathy Merrick (current Grand Chief \
    of the Assembly of Manitoba Chiefs), posted a message every night.<br><br>Several community members travelled to Alberta after hearing a rumour \
    that Lorna was in Calgary, Red Deer, or Lethbridge. They did not find her.",
      location: {
        center: locations.prairies.center,
        zoom: locations.manitoba.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "canada-highlight-layer": "visible",
        "lorna-blacksmith-step-5-layer": "visible",
      }),
    },
    {
      id: "lorna-blacksmith-06",
      alignment: "left",
      hidden: false,
      title: "Lorna Blacksmith",
      description:
        "Several Indigenous women went missing around the same time as Lorna, and community members voiced concerns that there was a serial killer in \
    Winnipeg.<br><br> They were correct.",
      location: {
        center: locations.prairies.center,
        zoom: locations.manitoba.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "blackout-layer": "visible",
      }),
    },
    {
      id: "lorna-blacksmith-07",
      alignment: "left",
      hidden: false,
      title: "Lorna Blacksmith",
      description:
        "Lorna was one of three murdered Indigenous women linked to a serial killer active in Winnipeg at the time. He was charged with second-degree murder in \
    connection with the deaths of Lorna, Carolyn Sinclair, and Tanya Nepinak.<br><br><strong><em>Click on the markers for more information.</em></strong>",
      location: {
        center: locations.lbCsTn.center,
        zoom: locations.lbCsTn.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "lorna-blacksmith-step-7-fill-layer": "visible",
        "lorna-blacksmith-step-7-path-layer": "visible",
        "lorna-blacksmith-step-7-layer": "visible",
      }),
    },
    {
      id: "lorna-blacksmith-08",
      alignment: "center",
      hidden: false,
      title: "Lorna Blacksmith — Portrayal by the Media",
      description:
        "Media at the time implied Lorna's involvement in the sex industry, despite the general lack of support to this claim. In \
    addition, any involvement of children and teenagers within the sex industry is considered sexual exploitation and trafficking — consent of \
    minors is not possible.<br><br>The Final Report of the National Inquiry into MMIWG explores the issue of media representation of Indigenous \
    women, girls and 2SLGBTQQIA+ people, as many witnesses to the inquiry talked about unfair, inaccurate, or distorted media representations of \
    their loved ones.<br><br>Media reports often perpetuate negative stereotypes of Indigenous women, girls, and 2SLGBTQQIA+ people as involved in \
    the sex industry, crime, or engaged in “high-risk” lifestyles. This type of portrayal perpetuates views that Indigenous women, girls, and \
    2SLGBTQQIA+ people are “less than” non-Indigenous people.<br><br>Indigenous children — youth and teenagers — are frequently 'aged up' and \
    discussed as 'young women' or 'young adults' instead of children. These factors, combined with disproportionately less media coverage \
    than non-Indigenous people, contribute to public apathy toward this crisis.",
      location: {
        center: locations.lbCsTn.center,
        zoom: locations.lbCsTn.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "blackout-layer": "visible",
      }),
    },
    {
      id: "lorna-blacksmith-09",
      alignment: "left",
      hidden: false,
      title: "Lorna Blacksmith",
      image: "/reddressstoriesmb/assets/lorna_blacksmith/5_Lorna Memorial.jpg",
      description:
        "More than 40 military cadets from northern Manitoba gathered in a back lane near Simcoe Street, close to the backyard where Lorna's \
    body was discovered in June 2012. Members of the RCMP and Winnipeg Police Service attended the ceremony.",
      location: {
        center: locations.lbCsTn.center,
        zoom: locations.lbCsTn.zoom + 1,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "lorna-blacksmith-step-9-layer": "visible",
        "lorna-blacksmith-step-9-range-layer": "visible",
      }),
    },
    {
      id: "lorna-blacksmith-10",
      end: true,
      alignment: "center",
      hidden: false,
      title: "Lorna Blacksmith — Legacy",
      description:
        "Despite the effects of intergenerational trauma experienced by her family, Lorna grew up with healthy connections to community \
    through strong relationships with extended family members and loved ones.<br><br>Lorna is remembered by her family and her community as a \
    dedicated army cadet, and as a strong and carefree teen with many dreams.",
      location: {
        center: locations.manitoba.center,
        zoom: locations.manitoba.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "blackout-layer": "visible",
      }),
    },
    // --- Tina Fontaine --- //
    {
      id: "tina-fontaine-01",
      start: true,
      alignment: "left",
      hidden: false,
      title: "Tina Fontaine",
      image: "/reddressstoriesmb/assets/tina_fontaine/1_Tina.jpg",
      description:
        "Tina Fontaine was born in Winnipeg in 1999. Her parents were from Sagkeeng First Nation and Bloodvein First Nation.",
      location: {
        center: locations.manitoba.center,
        zoom: locations.manitoba.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 1, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "tina-fontaine-step-1-layer": "visible",
      }),
      showMarkers: true,
    },
    {
      id: "tina-fontaine-02",
      alignment: "left",
      hidden: false,
      title: "Tina Fontaine",
      description:
        "Tina entered the child welfare system briefly at a young age, but for most of her life she lived in Powerview-Pine Falls and on \
    Sagkeeng First Nation with her great aunt and uncle, whom she referred to as Grandma and Grandpa.<br><br>Her Grandma described her as a 'perfect \
    little girl' who loved school and playing with other children.",
      location: {
        center: locations.sagkPvpf.center,
        zoom: locations.sagkPvpf.zoom + 1,
        pitch: 60,
        bearing: 0,
        // flyTo additional controls-
        speed: 1, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "tina-fontaine-step-2-layer": "visible",
      }),
      showMarkers: true,
    },
    {
      id: "tina-fontaine-03",
      alignment: "left",
      hidden: false,
      title: "Tina Fontaine",
      description:
        "Tina's life changed dramatically when her father was violently murdered in 2011. Her behaviour changed as she dealt with this \
    grief, and she began missing school, running away from home, and struggling with substance abuse.<br><br>In 2013 she started taking trips \
    into Winnipeg to visit her mother, who also struggled with addiction and homelessness.<br><br>When Tina didn't return home after a visit to \
    Winnipeg in June 2014, she was transferred into the custody of Manitoba Child and Family Services.",
      location: {
        center: locations.sagkWpg.center,
        zoom: locations.sagkWpg.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 2.5, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "tina-fontaine-step-3-layer": "visible",
        "tina-fontaine-step-3-path-layer": "visible",
      }),
      showMarkers: true,
    },
    {
      id: "tina-fontaine-04",
      alignment: "center",
      hidden: false,
      title: "Tina Fontaine — Child and Family Services",
      description:
        "Child and Family Services is a system of organizations tasked with ensuring the safety and well-being of children and youth in \
    Manitoba.<br><br>Over 90 percent of all children in the custody of Child and Family Services in Manitoba are Indigenous. Studies have shown \
    that children who grow up in care have significantly worse outcomes as adults when compared to children who grow up in forever families.<br><br>\
    Apprehended children often experience loss and trauma from being separated from their parents and losing contact with siblings, other family \
    members, friends, and community members who may have been involved in their lives.",
      location: {
        enter: locations.sagkWpg.center,
        zoom: locations.sagkWpg.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "blackout-layer": "visible",
      }),
    },
    {
      id: "tina-fontaine-05",
      alignment: "left",
      hidden: false,
      title: "Tina Fontaine",
      description:
        "The next few weeks were a very unstable time in Tina's short life. She moved around between staying with friends and family, \
    hotel rooms provided by CFS when other emergency placements were unavailable, and a local youth shelter.<br><br>A missing persons report was \
    filed on July 21, 2014 after she left the youth shelter and didn't return.<br><br>She was last seen in downtown Winnipeg on Friday, August 8, \
    2014. During the course of that day she had been in contact with the police, healthcare workers, and child welfare officials. Ultimately, none \
    of these services provided Tina with the care and support she needed.<br><br>She was reported missing again later that day.",
      location: {
        center: locations.winnipeg.center,
        zoom: locations.winnipeg.zoom + 0.5,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "tina-fontaine-step-5-layer": "visible",
        "tina-fontaine-step-5-outline-layer": "visible",
      }),
    },
    {
      id: "tina-fontaine-06",
      alignment: "left",
      hidden: false,
      title: "Tina Fontaine",
      description:
        "Tina's body was found in the Red River in Winnipeg on August 17, 2014. Her body was wrapped in a plastic bag and duvet cover. \
    Her cause of death has remained undetermined.<br><br>A 53-year-old man was charged in her death, but was ultimately acquitted.",
      location: {
        center: locations.alexanderDocks.center,
        zoom: locations.alexanderDocks.zoom,
        pitch: 60,
        bearing: 0,
        // flyTo additional controls-
        speed: 2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "tina-fontaine-step-6-layer": "visible",
      }),
    },
    {
      id: "tina-fontaine-07",
      alignment: "left",
      hidden: false,
      title: "Tina Fontaine",
      image:
        "/reddressstoriesmb/assets/tina_fontaine/2 _Final Report Cover.jpg",
      description:
        "Tina's death sparked outrage in Manitoba and across Canada, and renewed calls for a national inquiry into missing and murdered \
    Indigenous women and girls in Canada.<br><br>In 2015, the Government of Canada announced that the National Inquiry would take place. \
    <a href=https://www.mmiwg-ffada.ca/final-report/#:~:text=Reclaiming%20Power%20and%20Place,-The%20National%20Inquiry's&text=The%20Final%20Report%20is%20comprised,public%20hearings%20and%20evidence%20gathering target=blank>The Final Report</a>\
    was published in June 2019.",
      location: {
        // why is this commented out? Here is the uncommented version
        // This is commented out because this chapter does not talk about the murder location
        // This causes a type error for reading properties of undefined
        // center: locations.alexanderDocks.center,
        // zoom: locations.alexanderDocks.zoom,
        pitch: 60,
        bearing: 0,
        // flyTo additional controls-
        speed: 2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "blackout-layer": "visible",
      }),
    },
    {
      id: "tina-fontaine-08",
      alignment: "left",
      hidden: false,
      title: "National Inquiry into MMIWG and the Final Report",
      description:
        "From 2015-2019, the National Inquiry examined the underlying historical, social, economic, institutional, and cultural factors \
    and systemic causes behind the violence that Indigenous women and girls in Canada experience.<br><br>More than 2,380 people participated in \
    the National Inquiry into Missing and Murdered Indigenous Women and Girls. This included more than 460 family members and survivors of \
    violence who shared their experiences and recommendations at 15 community hearings. There were also institutional hearings, Knowledge Keeper \
    and Expert hearings, and Final Submission gatherings.<br><br>The Final Report was published in June 2019. A total of 231 Calls for Justice \
    were made for governments, institutions, social service providers, industries, and all Canadians aimed at addressing violence against \
    Indigenous women, girls, and 2SLGBTQQIA+ relatives.",
      location: {
        center: locations.canada.center,
        zoom: locations.canada.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "canada-highlight-layer": "visible",
        "tina-fontaine-step-8-layer": "visible",
      }),
    },
    {
      id: "tina-fontaine-09",
      end: true,
      alignment: "center",
      hidden: false,
      title:
        "Tina Fontaine — Manitoba Advocate for Children and Youth Special Report",
      image: "/reddressstoriesmb/assets/tina_fontaine/6_MACY Cover edited.jpg",
      description:
        "Tina's death also renewed the focus on the treatment of Indigenous children in the custody of Child and Family Services. The \
    Manitoba Advocate for Children and Youth released a special report about Tina's life and the failures of many systems that were supposed to \
    protect her. Entitled <a href=https://manitobaadvocate.ca/wp-content/uploads/MACY-Special-Report-March-2019-Tina-Fontaine-FINAL1.pdf target=blank>'A Place Where it Feels Like Home,'</a> \
    the report made recommendations about improving services for children and youth. While progress has been made on these recommendations, \
    more work remains to be done.",
      location: {
        center: locations.manitoba.center,
        zoom: locations.manitoba.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "blackout-layer": "visible",
      }),
    },
    {
      id: "tina-fontaine-10",
      end: true,
      alignment: "center",
      hidden: false,
      title: "Tina Fontaine — Tina's Safe Haven",
      image: "/reddressstoriesmb/assets/tina_fontaine/5_Tinas Safe Haven.jpg",
      description:
        "Ndinawe Youth Resource Centre was renamed Tina's Safe Haven in honour of Tina. It is now a 24/7 drop-in centre that provides youth \
        with somewhere safe to go when they need it most.",
      location: {
        center: locations.manitoba.center,
        zoom: locations.manitoba.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 2, // make the flying slow
        curve: 1,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "blackout-layer": "visible",
      }),
    },
    {
      id: "phoenix-sinclair-01",
      alignment: "left",
      hidden: false,
      title: "Phoenix Sinclair",
      image: "/reddressstoriesmb/assets/phoenix_sinclair/2_Phoenix.jpg",
      description:
        "<br>Phoenix Victoria Hope Sinclair was born in Winnipeg in 2000.<br><br> \
        Her parents, both teenagers and survivors of childhood abuse, were unprepared to bring her home. \
        Despite this, Phoenix’s father says he fell in love with her the day she was born.<br><br> \
        She was apprehended by Child and Family Services briefly after her birth while her parents prepared to bring her home.<br><br> \
        In Winnipeg, Phoenix lived with her mother, her mother’s partner, and a new half sibling. \
        She was registered at a nursery school but never attended. \
        A CFS file was opened after reports of possible neglect, but nothing came of them.<br><br> \
        Friends noted that Phoenix was a loving little girl who liked to dance and play when her mother wasn’t there. \
        When her mother was close, though, she was timid, withdrawn, and nervous.",
      location: {
        center: locations.winnipeg.center,
        zoom: locations.winnipeg.zoom,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 0.7, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
      }),
      showMarkers: true,
    },

    {
      id: "phoenix-sinclair-02",
      alignment: "left",
      hidden: false,
      // title: "Phoenix Sinclair",
      // image: "./images/10_phoenix_sinclair/2_Phoenix.jpg",
      description:
        "Phoenix’s family moved to Fisher River Cree Nation in 2005. Two children of her mother’s partner also lived with them there. \
        <br><br>Another CFS file was opened within a month of the move following concerns of possible neglect. \
        It was investigated and closed within five days, despite a worker never physically seeing Phoenix. ",
      location: {
        center: locations.fisherRiver.center,
        zoom: 10,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 0.7, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "phoenix-sinclair-step-2-layer": "visible",
      }),
      showMarkers: true,
    },

    {
      id: "phoenix-sinclair-03",
      alignment: "left",
      hidden: false,
      title: "Phoenix's Murder",
      // image: "./images/10_phoenix_sinclair/2_Phoenix.jpg",
      description:
        "<br>In Phoenix’s time with her mother and her mother’s partner, she suffered extreme abuse, negligence, and isolation. \
        <br><br>Nobody knew Phoenix was missing, except her ‘caregivers’ and one child witness who was living with them at the time. \
        Anyone who asked about Phoenix was told she was living with her father in Ontario. \
        Inquiries and calls by concerned family friends to CFS didn’t result in action. \
        <br><br>Phoenix’s disappearance and death were unnoted for eight months, until the child witness shared what he saw despite being afraid of his father. \
        This led directly to the discovery and confirmation of Phoenix’s murder. \
        <br><br>Police were taken to Phoenix remains by her murderer – she was buried in a makeshift grave near the Fisher River dumping grounds. \
        Her mother and her partner were both charged and convicted of first-degree murder in 2008.",
      location: {
        center: locations.fisherRiverLandfill.center,
        zoom: 13,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 0.7, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "manitoba-highlight-layer": "visible",
        "phoenix-sinclair-step-3-layer": "visible",
      }),
      showMarkers: true,
    },

    {
      id: "phoenix-sinclair-04",
      alignment: "center",
      hidden: false,
      title: "Gaps in CFS",
      // image: "./images/10_phoenix_sinclair/2_Phoenix.jpg",
      description:
        "<br>Phoenix and her family had contact with 27 CFS workers and supervisors over the five short years of her life. \
        During this time, CFS received at least 13 notices of concern for Phoenix safety. \
        Files on Phoenix were frequently open and closed without a CFS worker actually seeing her. \
        <br><br>No single CFS worker was assigned to Phoenix’s file for long enough to adequately form relationships with \
        Phoenix or other family members, which directly resulted in a failure to identify longer term risks to Phoenix’s safety. \
        <br><br>Further, recommendations from the case plan prepared by a CFS social worker after Phoenix’s birth were never acted on. \
        The recommendations directly concerned her mother’s parental capacity, motivation, and commitment on an ongoing basis.",
      location: {
        center: locations.fisherRiverLandfill.center,
        zoom: 13,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 0.7, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "blackout-layer": "visible",
      }),
      showMarkers: true,
    },

    {
      id: "phoenix-sinclair-05",
      alignment: "left",
      hidden: false,
      title: "Responses to Phoenix's Murder",
      image: "/reddressstoriesmb/assets/phoenix_sinclair/5_Achieving.jpg",
      description:
        "<br>Public outrage followed the discovery of Phoenix’s murder, compounded by the lengthy period for which her disappearance went unnoted. \
        <br><br>A number of reports were commissioned as a result, \
        including the $14 million Phoenix Sinclair Inquiry report entitled “<a href='http://www.phoenixsinclairinquiry.ca/rulings/ps_volume1.pdf'>Achieving the Best for All our Children.</a>”",
      location: {
        center: locations.fisherRiverLandfill.center,
        zoom: 13,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 0.7, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "blackout-layer": "visible",
      }),
      showMarkers: true,
    },

    {
      id: "phoenix-sinclair-06",
      alignment: "left",
      hidden: false,
      title: "The Phoenix Sinclair Inquiry",
      // image: "./images/10_phoenix_sinclair/5_Achieving.jpg",
      description:
        "<br>The inquiry began in March 2011. It was tasked with examining the circumstances surrounding Phoenix’s death, and in particular to inquire into:<br><br> \
        <ul style='margin-left: 20px'> \
        <li>The child-welfare services provided or not provided to Phoenix Sinclair and her family under the Child and Family Services Act;</li> \
        <li>Any other circumstances, apart from the delivery of child-welfare services, directly related to Phoenix’s death; and</li> \
        <li>Why Phoenix’s death was undiscovered for several months.</li> \
        </ul> \
        <br>It heard from over 126 witnesses and is estimated to be one of the most expensive inquiries in Manitoba’s history.",
      location: {
        center: locations.fisherRiverLandfill.center,
        zoom: 13,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 0.7, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "blackout-layer": "visible",
      }),
      showMarkers: true,
    },

    {
      id: "phoenix-sinclair-07",
      alignment: "center",
      hidden: false,
      title: "Conclusions of the Inquiry",
      // image: "./images/10_phoenix_sinclair/5_Achieving.jpg",
      description:
        '<br>The final report of the Phoenix Sinclair Inquiry, entitled “Achieving the Best for All Our Children” authored by the Honourable Ted Hughes \
        was released by the Province of Manitoba on January 31, 2014. It listed 62 recommendations. \
        <br><br>The three-volume report concluded that child welfare fundamentally misunderstood its mandate to protect children and \
        left Phoenix ‘defenceless against her mother’s cruelty and the sadistic violence of her boyfriend.’ \
        He further recommended that Manitoba take the lead to address the disproportionate number of Indigenous children in care across Canada.<br><br> \
        To truly honour Phoenix, we need to provide all of Manitoba’s children with a good start in life, \
        and offer to the most vulnerable an escape from the cycle of poverty and vulnerability that trapped Phoenix and her family. \
        <br><br><em>"…the social and economic conditions that render children vulnerable to abuse and neglect are well beyond the scope of the child welfare system. \
        In particular, the circumstances that bring Indigenous children to the child welfare system in such high numbers are deeply rooted in this country’s \
        history and call out for special attention. This is a responsibility shared by us all.</em>"',
      location: {
        center: locations.fisherRiverLandfill.center,
        zoom: 13,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 0.7, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "blackout-layer": "visible",
      }),
      showMarkers: true,
    },

    {
      id: "phoenix-sinclair-08",
      alignment: "left",
      hidden: false,
      title: "The Province's Apology",
      // image: "./images/10_phoenix_sinclair/5_Achieving.jpg",
      description:
        "<br>Following the release of the Inquiry, the Province of Manitoba <a href='https://news.gov.mb.ca/news/index.html?archive=&item=20250'><u>acknowledged the failure</u></a> of the child welfare system \
        to protect Phoenix and committed to immediately act on the recommendations outlined in Ted Hughes Report.",
      location: {
        center: locations.fisherRiverLandfill.center,
        zoom: 13,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 0.7, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "blackout-layer": "visible",
      }),
      showMarkers: true,
    },

    {
      id: "phoenix-sinclair-09",
      alignment: "left",
      hidden: false,
      title: "Special Report by Manitoba Advocate for Children and Youth",
      image: "/reddressstoriesmb/assets/phoenix_sinclair/9_Still_Waiting.jpg",
      description:
        "<br>Released in 2021, the special report “<a href='https://manitobaadvocate.ca/wp-content/uploads/Maltreatment_Report.pdf'>Still Waiting: Investigating Child Maltreatment after the Phoenix Sinclair Inquiry</a>” \
        profiled 19 children who experienced maltreatment by the adults who were supposed to keep them safe.<br><br> \
        The report noted that in addition to minimum service standards and quality assurance processes for child safety and protection, \
        housing equity, food security, poverty reduction, family violence prevention and addictions care play equally critical roles.<br><br> \
        The report made five recommendations, including the implementation of all remaining recommendations from the Phoenix Sinclair Inquiry.<br><br> \
        As of 2021, only 55% of recommendations from the Inquiry had been completed.",
      location: {
        center: locations.fisherRiverLandfill.center,
        zoom: 13,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 0.7, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "blackout-layer": "visible",
      }),
      showMarkers: true,
    },

    {
      id: "phoenix-sinclair-10",
      alignment: "left",
      hidden: false,
      title: "Phoenix's Legacy",
      // image: "./images/10_phoenix_sinclair/9_Still_Waiting.jpg",
      description:
        "<br><strong>Legistation</strong><br> \
        <ul style='margin-left: 20px;'> \
        <li>Enactment of The Protecting Children (Information Sharing) Act, 2016, and The Advocate for Children and Youth Act in 2018. \
        These two pieces of legislation are responsible for the majority of complete or near complete recommendations stemming from the Phoenix Sinclair Inquiry</li> \
        </ul><br> \
        <strong>Continued Devolution of Child Welfare System in Manitoba</strong> \
        <ul style='margin-left: 20px;'> \
        <li>Devolution is a process that involves transferring the responsibility for child protection and family support services, \
        as well as the capacity to deliver these services, to Indigenous Peoples of Manitoba. \
        The process, originally known as the Child Welfare Initiative of the Aboriginal Justice Inquiry, \
        remained in its early stages while Phoenix’s case was active.</li> \
        <li>The critical need for this transfer was highlighted in reports and recommendations after Phoenix’s death. \
        As of 2023, 91% of children in care in Manitoba were Indigenous.</li> \
        <li>In May, 2024, the Manitoba government formally signed a historic relationship declaration committing \
        to the transfer of jurisdiction over child welfare to First Nations.</li> \
        </ul>",
      location: {
        center: locations.fisherRiverLandfill.center,
        zoom: 13,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 0.7, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "blackout-layer": "visible",
      }),
      showMarkers: true,
    },

    {
      id: "phoenix-sinclair-11",
      alignment: "center",
      hidden: false,
      title: "Phoenix's Legacy",
      // image: "./images/10_phoenix_sinclair/9_Still_Waiting.jpg",
      description:
        "<br>“Our Phoenix will create a safer and better life for many other vulnerable children in Manitoba. \
        Her legacy will renew the child-welfare system. All children must be equal under the law. \
        We believe the purpose of Phoenix’s senseless death was to change the system in a fundamental \
        and positive way for all children in Manitoba and across this great nation.” Kim Edwards, 2013",
      location: {
        center: locations.fisherRiverLandfill.center,
        zoom: 13,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        speed: 0.7, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: generateLayerVisibility({
        "blackout-layer": "visible",
      }),
      showMarkers: true,
    },
    // {
    //   id: "priorities",
    //   alignment: "center",
    //   hidden: false,
    //   title: "Priorities from Stories",
    //   description:
    //     "The stories of Betty, Jessica, Divas, Lorna, Tina and Phoenix highlight a number of themes, barriers, or unmet priorities \
    //           that directly contributed to their deaths.",
    //   topics: [
    //     {
    //       id: "access-to-education",
    //       topic: "Access to Education",
    //       image: "/assets/priorities/education.png",
    //       text: "Betty was required to leave her home community to further her education. Had she had equal access to educational \
    //         opportunities within her home community, she may still have been alive today.",
    //     },
    //     {
    //       id: "access-to-social-and-support-services",
    //       topic: "Access to Social and Support Services",
    //       image: "/assets/priorities/resources.png",
    //       text: "Jessica, Tina, and Lorna all lacked access to the services they needed, both while they were in Winnipeg and to \
    //         varying degrees when they were within their home communities.",
    //     },
    //     {
    //       id: "justice-system",
    //       topic: "Justice System",
    //       image: "/assets/priorities/justice.png",
    //       text: "The justice system affected the lives of Betty, Jessica, Divas, Tina, and Lorna to varying degrees, both before \
    //       and after their deaths.<br><br>Many reports, inquiries, and theses have provided evaluations, critiques, and recommendations concerning the justice system. \
    //           While some progress has been made, a number of these recommendations remain to be implemented.<br><br>According to \
    //           Statistics Canada data from 2021, Indigenous people are twice as likely as non-Indigenous people to have little or no confidence \
    //           in their local police service.",
    //     },
    //     {
    //       id: "racism",
    //       topic: "Racism",
    //       image: "/assets/priorities/racism.png",
    //       text: "Each of these women and girls experienced overt, casual, and systemic racism throughout their short lives. \
    //       <br><br>The AJI stated that ‘Racism is a particularly insidious and vicious form of discrimination because it stems from the mistaken \
    //           belief in the superiority of one race of people over another.’",
    //     },
    //     {
    //       id: "homophobia-and-transphobia",
    //       topic: "Homophobia and Transphobia",
    //       image: "/assets/priorities/2slgbtqqia+.png",
    //       text: "These terms are used to describe hatred, fear, negative beliefs about, or discrimination toward 2SLGBTQQIA+ individuals.<br><br>\
    //           Trans Indigenous women, Two-Spirit relatives, and Indigenous peoples who identify as LGBTQQIA+ are more likely to experience violence \
    //           than their non-Indigenous counterparts. Divas was one among many of these women.<br><br>Over 80% of Indigenous people who identify as \
    //           2SLGBTQQIA+ have experienced sexual or physical assault since the age of 15.",
    //     },
    //     {
    //       id: "human-trafficking-sex-work-and-violence",
    //       topic: "Human Trafficking, Survival Sex Industry, and Violence",
    //       image: "/assets/priorities/sex.png",
    //       text: "The United Nations Commission on the Status of Women states that the issues of sex work, sexual exploitation, and trafficking are \
    //         complex issues which have significant legal, social, and health consequences. Because of this complexity, it is important to not \
    //         conflate the three issues, as each needs to be considered within its own right. Sex work cannot be considered the same as trafficking \
    //         or sexual exploitation, which are unequivocally human rights abuses and crimes (UN Women, 2014).<br><br>While we acknowledge these \
    //         complexities as truth, we also acknowledge that the stories shared within this project encompass a range of experiences. Jessica experienced \
    //         child sexual exploitation and trafficking. Divas was exploited through the survival sex industry.<br><br>Human trafficking involves the \
    //         recruitment, transportation, harbouring, and/or exercising control, direction, or influence over the movements of a person in order to exploit \
    //         them, typically through sexual exploitation or forced labour. It is often described as a modern form of slavery (Department of Justice Canada, 2021). \
    //         <br><br>The province estimates 400 children and youth are trafficked each year in the visible sex trade in Manitoba; however, the actual \
    //         numbers are expected to be much higher.<br><br>The Final Report highlighted that poverty and insecure housing increase the risk of subsistence \
    //         sex work and sexual exploitation. Under Canadian law, it is legal to sell sexual services but illegal to buy them.",
    //     },
    //     {
    //       id: "intergenerational-experiences",
    //       topic: "Intergenerational Experiences and Intimate Partner Violence",
    //       image: "/assets/priorities/intergenerational.png",
    //       text: "The MMIWG National Inquiry Final Report states that intergenerational and multigenerational trauma are directly connected to interpersonal \
    //         violence and self-harm that ultimately places Indigenous women, girls, and 2SLGBTQQIA+ people in danger. Intergenerational and \
    //         multigenerational trauma can negatively impact every aspect of an Indigenous person's life and well-being. Unresolved trauma is a root cause \
    //         of high rates of chronic health problems, interpersonal violence, and substance abuse. Trauma flows through generations and contributes \
    //         directly to the decreased safety, security, and violence experienced by Indigenous women, girls, and 2SLGBTQQIA+ people, and ultimately \
    //         to the disproportionate rates of their going missing and/or being murdered.<br><br>Intimate partner violence is one of the many forms of \
    //         intergenerational trauma experienced by Indigenous women, girls, and 2SLGBTQQIA+ relatives.<br><br>Each of the stories highlighted here \
    //         featured one or both of these experiences.",
    //     },
    //     {
    //       id: "community-and-culture",
    //       topic: "Connections to Community and Culture ",
    //       image: "/assets/priorities/community.png",
    //       text: "The Final Report tells us that the loss of culture contributes to, or is experienced as, a form of trauma that extends across generations. \
    //         Stories of cultural loss — whether from residental and day schools, the Sixties Scoop, modern child apprehensions, mass relocation, or cultural \
    //         erasure — were central across testimonies provided during the National Inquiry.<br><br>Lorna's connection to her community is often \
    //         spoken about by her family and loved ones as an incredibly positive force in her short life. A similar sentiment is expressed regarding Tina's \
    //         time living with her grandparents. Despite this, both girls' families experienced the same historical loss of connections experienced by \
    //         Indigenous peoples across Canada.<br><br>Betty, Jessica, and Divas were also deeply affected by the disconnection forced by colonization.",
    //     },
    //     {
    //       id: "media-portrayal",
    //       topic: "Portrayal by Media",
    //       image: "/assets/priorities/media.png",
    //       text: "Media reports often perpetuate negative stereotypes of Indigenous women, girls, and 2SLGBTQQIA+ people as sex workers, \
    //           criminals, or engaging in “high-risk” lifestyles. This type of portrayal perpetuates views that Indigenous women, girls, and \
    //           2SLGBTQQIA+ people are “less than” non-Indigenous people. <br><br>Additionally, Indigenous women, girls, and 2SLGBTQQIA+ people \
    //           tend to receive disproportionately less media coverage than non-Indigenous people, which contributes to the Canadian public's \
    //           apathy toward this crisis.<br><br>Lorna, Jessica, Tina, and Divas were each subjected to negative stereotypes and inaccurate \
    //           representation. This causes significant harm to their families and loved ones.",
    //     },
    //     {
    //       id: "child-welfare-services",
    //       topic: "Child Welfare Services",
    //       image: "/assets/priorities/child welfare.png",
    //       text: "As of 2021, child welfare or police services were roughly three times more likely to hear reports of violence experienced \
    //           by Indigenous children (16%) compared to non-Indigenous children (5%).<br><br>Indigenous children over the age of 15 were nearly \
    //           10 times more likely to have been under the care of the province. More than one-third of the children who experienced sexual or \
    //           physical abuse while in care during their childhood were Indigenous. Violence during childhood is closely linked to the risk of \
    //           violent victimization in adulthood (Statistics Canada).<br><br>As of the 2022 National Action Plan Progress Report, there remain few services for \
    //           youth who age out of care. They often lack access to accommodations or other supports, and many lose connections to their communities \
    //           and families, often ending up homeless.<br><br> Tina, Jessica, and Lorna represent three of hundreds of Indigenous children within \
    //           the child welfare system.",
    //     },
    //   ],
    //   location: {
    //     center: locations.manitoba.center,
    //     zoom: 13,
    //     pitch: 0,
    //     bearing: 0,
    //     speed: 0.7, // make the flying slow
    //     curve: 1, // change the speed at which it zooms out
    //   },
    //   mapAnimation: "flyTo",
    //   rotateAnimation: false,
    //   callback: "",
    //   onChapterEnter: generateLayerVisibility({
    //     "blackout-layer": "visible",
    //   }),
    // },
  ],
};

export default config;
