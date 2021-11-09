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
      >
        {/* <div className="centered">
          <h2>Jane Flex</h2>
          <p>Some text.</p>
        </div> */}
      </div>

      <div
        className="top right"
        onDrop={(event) => handleDrop(event)}
        onDragOver={(event) => handleOnDropOver(event)}
        align="right"
      >
        {/* <div className="centered">
          <h2>John Doe</h2>
          <p>Some text here too.</p>
        </div> */}
      </div>

      <div
        className="bottom left"
        onDrop={(event) => handleDrop(event)}
        onDragOver={(event) => handleOnDropOver(event)}
      >
        {/* <div className="centered">
          <h2>Jane Flex2</h2>
          <p>Some text.</p>
        </div> */}
      </div>

      <div className="bottom right">
        <div className="child"></div>
        <MediaComponent handleDrag={handleDrag} refVideo={refVideo} />
      </div>
    </>
  );
};

export default LayoutComponent;
