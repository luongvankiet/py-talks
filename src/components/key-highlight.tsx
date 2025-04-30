import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, GamepadIcon, Coffee, Award } from "lucide-react";

const highlights = [
  {
    icon: <Mic className="h-8 w-8" />,
    title: "TED-style Talks",
    description:
      "Engaging presentations from our future professionals on innovative topics and ideas.",
    color: "from-sky-500 to-sky-300",
    particles: 15,
  },
  {
    icon: <GamepadIcon className="h-8 w-8" />,
    title: "Interactive Quizzes & Games",
    description:
      "Test your knowledge and engage with others through fun, interactive activities.",
    color: "from-violet-500 to-violet-300",
    particles: 12,
  },
  {
    icon: <Coffee className="h-8 w-8" />,
    title: "Morning Tea & Lunch Breaks",
    description:
      "Enjoy refreshments and network with speakers and other attendees during breaks.",
    color: "from-emerald-500 to-emerald-300",
    particles: 10,
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Awards & Certificates",
    description:
      "Recognition for outstanding presentations and participation throughout the day.",
    color: "from-lime-500 to-lime-300",
    particles: 18,
  },
];

export default function KeyHighlights() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why You Should Attend
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us for a day filled with inspiration, learning, and
              networking opportunities.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full overflow-hidden relative border-2 border-gray-100 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  {/* Particles Animation */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <>
                        {[...Array(highlight.particles)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${highlight.color} opacity-70`}
                            initial={{
                              x: 0,
                              y: 0,
                              opacity: 0,
                            }}
                            animate={{
                              x: Math.random() * 200 - 100,
                              y: Math.random() * 200 - 100,
                              opacity: [0, 0.8, 0],
                              scale: [0, 1, 0],
                            }}
                            exit={{ opacity: 0 }}
                            transition={{
                              duration: 1 + Math.random(),
                              ease: "easeOut",
                            }}
                            style={{
                              top: `${50 + Math.random() * 20}%`,
                              left: `${50 + Math.random() * 20}%`,
                            }}
                          />
                        ))}
                      </>
                    )}
                  </AnimatePresence>

                  {/* Background Gradient */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-5`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Icon with animation */}
                  <motion.div
                    className={`p-3 rounded-full bg-gradient-to-r ${highlight.color} text-white mb-4 relative z-10`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {highlight.icon}
                  </motion.div>

                  {/* Title with color transition */}
                  <motion.h3
                    className={`font-bold text-xl mb-2 relative z-10 bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent`}
                  >
                    {highlight.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600 relative z-10"
                  >
                    {highlight.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
