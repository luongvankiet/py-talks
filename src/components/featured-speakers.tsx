import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";

const speakers = [
  {
    name: "Govinda Duwal Shrestha",
    photo: `${import.meta.env.VITE_APP_URL}/images/avatars/gov.jpeg`,
    quote:
      "He is Govinda Duwal Shrestha, an IT support professional originally from Nepal and arrived in Australia in 2022. Passionate about tech, problem-solving, and learning new skills. Beside that, he loves watching and playing basketball and chess.",
    linkedin: "https://www.linkedin.com/in/govinda-duwal-shrestha-87709a2bb/",
  },
  {
    name: "Pranavi Chepuru",
    photo: `${import.meta.env.VITE_APP_URL}/images/avatars/avatar.jpg`,
    quote:
      "Pranavi is a kind, happy person who believes in positivity. she has worked as an Application Support Engineer  and holds a Master’s degree in Networking from Melbourne Institute of Technology.",
    linkedin: "www.linkedin.com/in/pranavi-chepuru-0a75ab335",
  },
  {
    name: "Van Kiet Luong (Kevin)",
    photo: `${import.meta.env.VITE_APP_URL}/images/avatars/kevin.jpg`,
    quote:
      "Full-stack developer blending quiet focus with bold ambition, building practical web solutions with Laravel, React, and a love for learning.",
    linkedin: "www.linkedin.com/in/van-kiet-luong",
  },
  {
    name: "Sanjay Tandukar",
    photo: `${import.meta.env.VITE_APP_URL}/images/avatars/sanjay.jpeg`,
    quote:
      "The future belongs to those who learn more skills and combine them in creative ways.",
    linkedin: "https://www.linkedin.com/in/sanjay-tandukar-085b6215b",
  },
  {
    name: "Nishant",
    photo: `${import.meta.env.VITE_APP_URL}/images/avatars/avatar.jpg`,
    quote:
      "Nishant is a cheerful and light-hearted person from India with a great sense of humor. He holds a Bachelor's degree in Computer Science from India and a Master’s in Information Technology from the University of Newcastle, Australia. Nishant enjoys bringing positivity to every environment and believes in the power of both laughter and learning.",
    linkedin: "www.linkedin.com/in/nishant79",
  },
  {
    name: "Parampal Singh",
    photo: `${import.meta.env.VITE_APP_URL}/images/avatars/parampal.jpeg`,
    quote:
      "Parampal singh from Punjab, India came in Australia in 2022 currently living in Newcastle love to read novels and enjoy sketching",
    linkedin: "www.linkedin.com/in/nishant79",
  },
  {
    name: "Nischal Yogi",
    photo: `${import.meta.env.VITE_APP_URL}/images/avatars/avatar.jpg`,
    quote:
      "Nischal Yogi originally from Nepal. He recently completed his bachelor’s degree in information technology, and he's passionate about working in tech — especially in IT support, where he can help people solve problems and make their work easier.",
    linkedin: "www.linkedin.com/in/nischal-yogi​",
  },
  {
    name: "Pooja Malhotra",
    photo: `${import.meta.env.VITE_APP_URL}/images/avatars/avatar.jpg`,
    quote:
      "She belongs to india. Did MIT in information and network security. Worked in Infosys, India as an operational executive.Have experienced in administrator officer and customer service.",
    linkedin: "https://www.linkedin.com/in/pooja-malhotra-91b421228/",
  },
  {
    name: "MD Sazzad Hoshain",
    photo: `${import.meta.env.VITE_APP_URL}/images/avatars/shezan.jpeg`,
    quote:
      "He's Md Sazzad Hoshain Shezan, a positive-minded IT graduate with skills in web development, networking, and data analysis, now eager to contribute to Australia’s tech industry.",
    linkedin: "https://www.linkedin.com/in/md-sazzad-hoshain-shezan-546819255",
  },
  {
    name: "Abu Sohail",
    photo: `${import.meta.env.VITE_APP_URL}/images/avatars/avatar.jpg`,
    quote:
      "He is Abu Sohail, a positive-minded IT graduate with skills in web development, networking, and data analysis, now eager to contribute to Australia’s tech industry.",
    linkedin: "https://www.linkedin.com/in/abu-sohail-043a5b350/",
  },
  {
    name: "Dilpreet Kaur",
    photo: `${import.meta.env.VITE_APP_URL}/images/avatars/dilpreet.jpeg`,
    quote:
      "Dilpreet Kaur is passionate about network design, security, and emerging technologies. She recently completed a Master’s degree in Networking and enjoys tackling technical challenges while continuously expanding her knowledge in the ever-evolving field of networking.",
    linkedin: "https://www.linkedin.com/in/dilpreet-kaur-3a2718359/",
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
                            src={
                              speaker.photo ||
                              `${
                                import.meta.env.VITE_APP_URL
                              }/images/placeholder.jpeg`
                            }
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
                        <Button
                          variant="link"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sky-600 hover:text-sky-800 transition-colors"
                          onClick={() => {
                            window.open(speaker?.linkedin, "_blank");
                          }}
                        >
                          <Linkedin className="h-4 w-4" />
                          <span>LinkedIn Profile</span>
                        </Button>
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
