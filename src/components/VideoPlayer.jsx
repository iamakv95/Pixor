import { useState, useRef, useEffect } from "react";
import { MdPlayArrow } from "react-icons/md";
import { brands } from "../assets";

const VideoPlayer = ({ videoSrc, coverImage, customCss }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play();
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  return (
    <div className={`${customCss} relative w-full max-h-[550px] aspect-video overflow-hidden`}>
      <video
        ref={videoRef}
        className={`${isPlaying ? "block" : "none"} w-full h-full object-cover`}
        controls={isPlaying}
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!isPlaying && (
        <div
          className="absolute inset-0 z-10 cursor-pointer"
          onClick={handlePlay}
        >
          <img
            src={coverImage}
            alt="Video cover"
            className="w-full h-full object-cover bg-black"
          />
          <div className="absolute top-1/2 left-24 -translate-y-1/2">
           <img src={brands} alt="200 brands" className="flex max-w-[350px] max-lg:hidden" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full text-white border-2 border-white p-2">
              <MdPlayArrow eOutline className="w-20 h-20" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
