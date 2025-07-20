import { useState, useEffect, use } from "react";
import { motion, useMotionValue } from "motion/react";
import { animate } from "motion";
import useMeasure from "react-use-measure";

const ImageSlider = ({ imageList, Fast = 30, Slow = 50, direction = "right" }) => {
  const [duration, setDuration] = useState(Fast);
  const [ref, { width }] = useMeasure();
  const xTranslate = useMotionValue(0);
  const [chechfinishAnimation, setChechfinishAnimation] = useState(false);
  const [reRender, setReRender] = useState(false);

 useEffect(() => {
  let controls;
  const isLeft = direction === "left";
let finishPosition = -width / 2 - 12;

  const animateTo = isLeft
    ? [xTranslate.get(), finishPosition]
    : [xTranslate.get(), 0];

  const loopFrom = isLeft ? [0, finishPosition] : [finishPosition, 0];

  if (chechfinishAnimation) {
    controls = animate(xTranslate, animateTo, {
      ease: "linear",
      duration: duration * 1 - xTranslate.get() / finishPosition,
      onComplete: () => {
        setChechfinishAnimation(false);
        setReRender(!reRender);
      },
    });
  } else {
    controls = animate(xTranslate, loopFrom, {
      ease: "linear",
      duration: duration,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
  }

  return controls?.stop;
}, [xTranslate, width, duration, reRender, direction]);
  return (
    <div className="w-full h-full flex whitespace-nowrap overflow-hidden relative">
      <motion.div
        id="card-container"
        className="min-w-full flex space-x-3 flex-shrink-0"
        ref={ref}
        style={{ x: xTranslate }}
        onHoverStart={() => {
          setChechfinishAnimation(true);
          setDuration(Slow);
        }}
        onHoverEnd={() => {
          setChechfinishAnimation(true);
          setDuration(Fast);
        }}
      >
        {[...imageList, ...imageList].map((slide) => (
          <img
            key={slide.imgAlt}
            src={slide.imgSrc}
            alt={slide.imgAlt}
            className="rounded-md border border-gray/50"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ImageSlider;
