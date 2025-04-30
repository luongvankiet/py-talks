import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";

const speakers = [
  {
    name: "Dr. Sarah Johnson",
    photo: "",
    quote: "Innovation happens at the intersection of disciplines.",
    linkedin: "https://linkedin.com/in/example1",
  },
  {
    name: "Michael Chen",
    photo: "",
    quote:
      "The future belongs to those who learn more skills and combine them in creative ways.",
    linkedin: "https://linkedin.com/in/example2",
  },
  {
    name: "Priya Patel",
    photo: "",
    quote: "Technology should enhance human potential, not replace it.",
    linkedin: "https://linkedin.com/in/example3",
  },
  {
    name: "James Wilson",
    photo: "",
    quote: "The best way to predict the future is to create it.",
    linkedin: "https://linkedin.com/in/example4",
  },
  {
    name: "Olivia Rodriguez",
    photo: "",
    quote:
      "Success in the digital age requires continuous learning and adaptation.",
    linkedin: "https://linkedin.com/in/example5",
  },
  {
    name: "Olivia Rodriguez",
    photo: "",
    quote:
      "Success in the digital age requires continuous learning and adaptation.",
    linkedin: "https://linkedin.com/in/example5",
  },
  {
    name: "Olivia Rodriguez",
    photo: "",
    quote:
      "Success in the digital age requires continuous learning and adaptation.",
    linkedin: "https://linkedin.com/in/example5",
  },
  {
    name: "Olivia Rodriguez",
    photo: "",
    quote:
      "Success in the digital age requires continuous learning and adaptation.",
    linkedin: "https://linkedin.com/in/example5",
  },
  {
    name: "Olivia Rodriguez",
    photo: "",
    quote:
      "Success in the digital age requires continuous learning and adaptation.",
    linkedin: "https://linkedin.com/in/example5",
  },
  {
    name: "Olivia Rodriguez",
    photo: "",
    quote:
      "Success in the digital age requires continuous learning and adaptation.",
    linkedin: "https://linkedin.com/in/example5",
  },
];

export default function FeaturedSpeakers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === speakers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? speakers.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-violet-50 to-sky-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the Speakers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn from industry professionals and emerging talents who are
              shaping the future.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div ref={carouselRef} className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x:
                  (-currentIndex * (carouselRef.current?.offsetWidth || 0)) /
                  (width > 768 ? 3 : 1),
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {speakers.map((speaker, index) => (
                <motion.div
                  key={index}
                  className="min-w-[100%] md:min-w-[33.333%] px-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full overflow-hidden border-2 border-gray-100 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-violet-200">
                          <img
                            src={speaker.photo || `${process.env.VITE_APP_URL}/images/placeholder.jpeg`}
                            alt={speaker.name}
                            className="object-cover"
                          />
                        </div>
                        <h3 className="font-bold text-xl mb-2">
                          {speaker.name}
                        </h3>
                        <p className="text-gray-600 italic mb-4">
                          "{speaker.quote}"
                        </p>
                        <a
                          href={speaker.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sky-600 hover:text-sky-800 transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                          <span>LinkedIn Profile</span>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
