import type React from "react";

import { Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";


export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const circleVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 to-violet-50 px-4 py-20"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Circles */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-sky-300/30 blur-xl"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        initial={{ top: "10%", left: "15%" }}
        whileHover="hover"
        variants={circleVariants}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-coral-400/30 blur-xl"
        animate={{
          x: mousePosition.x * -0.01,
          y: mousePosition.y * -0.01,
        }}
        initial={{ top: "60%", right: "10%" }}
        whileHover="hover"
        variants={circleVariants}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full bg-violet-300/30 blur-xl"
        animate={{
          x: mousePosition.x * 0.015,
          y: mousePosition.y * 0.015,
        }}
        initial={{ bottom: "15%", left: "25%" }}
        whileHover="hover"
        variants={circleVariants}
      />
      <motion.div
        className="absolute w-[250px] h-[250px] rounded-full bg-lime-300/30 blur-xl"
        animate={{
          x: mousePosition.x * -0.02,
          y: mousePosition.y * -0.02,
        }}
        initial={{ top: "20%", right: "25%" }}
        whileHover="hover"
        variants={circleVariants}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-sky-500 via-violet-500 to-coral-500 text-transparent bg-clip-text mb-4">
            TED Talk Day
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6">
            Showcasing Future Professionals
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Hear the voices shaping Australia's future workforce
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-gray-700">
              <Calendar className="h-5 w-5" />
              <span>Wednesday, 07 May 2025</span>
            </div>
            <div className="hidden md:block">|</div>
            <div className="flex items-center gap-2 text-gray-700">
              <Clock className="h-5 w-5" />
              <span>9:00 AM - 4:30 PM</span>
            </div>
            <div className="hidden md:block">|</div>
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="h-5 w-5" />
              <span>Room 412, Level 4, 1/3 Fitzwilliam St, Parramatta</span>
            </div>
          </div>

          {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-sky-500 hover:from-violet-700 hover:to-sky-600 text-white font-bold py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              Reserve Your Spot
            </Button>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
