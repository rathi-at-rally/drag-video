import "./layout.css";

import React from "react";
import MediaComponent from "../media/media";

export const LayoutComponent = ({
  handleDrag,
  handleDrop,
  handleOnDropOver,
  refVideo,
}) => {
  return (
    <>
      <div
        className="top left"
        onDrop={(event) => handleDrop(event)}
        onDragOver={(event) => handleOnDropOver(event)}
      ></div>

      <div
        className="top right"
        onDrop={(event) => handleDrop(event)}
        onDragOver={(event) => handleOnDropOver(event)}
      ></div>

      <div
        className="bottom left"
        onDrop={(event) => handleDrop(event)}
        onDragOver={(event) => handleOnDropOver(event)}
      ></div>

      <div
        className="bottom right"
        onDrop={(event) => handleDrop(event)}
        onDragOver={(event) => handleOnDropOver(event)}
        align="right"
      >
        <MediaComponent handleDrag={handleDrag} refVideo={refVideo} />
      </div>
    </>
  );
};

export default LayoutComponent;
