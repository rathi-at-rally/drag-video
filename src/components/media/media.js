import React from "react";
import video from "../../static/sample.mp4";

export const MediaComponent = ({ handleDrag, handleOnClick, refVideo }) => {
  return (
    <video
      id="sample-video"
      className="sample-video"
      width="200"
      height="300"
      draggable="true"
      controls
      autoPlay
      loop
      ref={refVideo}
      onDragStart={(event) => handleDrag(event)}
    >
      <source src={video} type="video/mp4"></source>
    </video>
  );
};

export default MediaComponent;
