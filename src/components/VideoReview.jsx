import React from "react";
import VideoPlayer from "./VideoPlayer";

const VideoReview = ({
  videoSrc,
  coverImage,
  customCss,
  iconSize,
  clientPosition,
  clientName,
}) => {
  return (
    <div className="flex flex-col">
      <VideoPlayer
        videoSrc={videoSrc}
        coverImage={coverImage}
        iconSize={iconSize}
        customCss={customCss}
      />
      <div className="bg-gray/15 text-dark p-4 text-center">
        <h4 className="text-xl font-semibold">{clientName}</h4>
        <p className="text-gray text-md font-medium">{clientPosition}</p>
      </div>
    </div>
  );
};

export default VideoReview;
