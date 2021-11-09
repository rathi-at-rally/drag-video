import LayoutComponent from "./layout/layout";
import { useRef } from "react";

export const DragContainer = () => {
  const refVideo = useRef(null);

  const pauseVideo = () => refVideo.current.pause();

  function handleDrag(event) {
    event.dataTransfer.setData("text", event.target.id);
    pauseVideo();
  }

  function handleDrop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  }

  function handleOnDropOver(event) {
    event.preventDefault();
  }

  return (
    <LayoutComponent
      handleDrag={handleDrag}
      handleDrop={handleDrop}
      handleOnDropOver={handleOnDropOver}
      refVideo={refVideo}
    />
  );
};

export default DragContainer;
