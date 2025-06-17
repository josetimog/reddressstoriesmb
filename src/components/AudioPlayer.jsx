import React from "react";

const AudioPlayer = ({ src = "/reddressstoriesmb/assets/remember_me.mp3" }) => {
  return (
    <audio
      controls
      //   autoPlay
      controlsList="nodownload"
      style={{ width: "300px" }}
    >
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;
