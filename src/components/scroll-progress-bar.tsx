import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgressBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  //calculate percentage
  useEffect(() => {
    const calculatePercentage = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrollPosition / totalHeight) * 100;
      setPercentage(percentage.toFixed(0));
    };

    window.addEventListener("scroll", calculatePercentage);
    return () => window.removeEventListener("scroll", calculatePercentage);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-21 z-50 flex items-center justify-center">
      <div className="relative h-14 w-14 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center">
        <svg className="w-13 h-13" viewBox="0 0 48 48">
          <motion.circle
            className="stroke-sky-500"
            cx="24"
            cy="24"
            r="20"
            fill="none"
            strokeWidth="4"
            strokeDasharray="125.6"
            style={{
              pathLength: scaleX,
              rotate: -90,
              transformOrigin: "center",
            }}
          />
        </svg>
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-xs font-medium text-sky-700"
          style={{
            opacity: scrollYProgress,
          }}
        >
          {percentage}%
        </motion.div>
      </div>
    </div>
  );
}
