import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "motion/react";

const sponsors = [
  { name: "Google", logo: "/images/google.png" },
  { name: "LinkedIn", logo: "/images/linkedin-logo.webp" },
  { name: "ECA Professional Year", logo: "/images/PY-Provider-ECA.png" },
  { name: "Friends Lobby", logo: "/images/friends.png" },
  { name: "TED Talk", logo: "/images/ted-logo.png" },
];

export default function Sponsors() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section ref={ref} className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proudly Sponsored By
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're grateful to our sponsors for making this event possible.
            </p>
          </motion.div>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: [0, -580],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* Double the sponsors to create a seamless loop */}
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 w-[100px] h-[100px] relative"
              >
                <img
                  src={sponsor.logo || "/images/placeholder.jpeg"}
                  alt={sponsor.name}
                  className="object-contain filter hover:grayscale-0 transition-all duration-300 h-full rounded-xl"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
