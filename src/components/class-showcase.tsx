import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import StudentDetailDialog from "./student-detail-dialog";

const classPhotos = [
  { src: "/images/placeholder.jpeg", alt: "Class group photo 1" },
  { src: "/images/placeholder.jpeg", alt: "Class group photo 2" },
  { src: "/images/placeholder.jpeg", alt: "Class group photo 3" },
  { src: "/images/placeholder.jpeg", alt: "Class group photo 4" },
];

const classmates = [
  {
    name: "Van Kiet Luong (me!)",
    role: "Software Developer",
    quote: "Debug king",
    bio: "",
    image: "",
    linkedIn: "",
    rotation: -5,
    position: { top: "0%", left: "2%" },
  },
  {
    name: "Maria Garcia",
    role: "Data Analyst",
    quote: "Always has the answers",
    bio: "",
    image: "",
    linkedIn: "",
    rotation: 3,
    position: { top: "0%", right: "5%" },
  },
  {
    name: "David Kim",
    role: "Web Developer",
    quote: "Code wizard",
    bio: "",
    image: "",
    linkedIn: "",
    rotation: -7,
    position: { top: "18%", left: "2%" },
  },
  {
    name: "Sarah Patel",
    role: "UX Designer",
    quote: "Creative genius",
    bio: "",
    image: "",
    linkedIn: "",
    rotation: 6,
    position: { top: "16%", right: "1%" },
  },
  {
    name: "James Wilson",
    role: "Project Manager",
    quote: "Organization master",
    bio: "",
    image: "",
    linkedIn: "",
    rotation: -4,
    position: { top: "35%", left: "1%" },
  },
  {
    name: "Emma Chen",
    role: "Software Engineer",
    quote: "Best lunch buddy",
    bio: "",
    image: "",
    linkedIn: "",
    rotation: 5,
    position: { top: "33%", right: "3%" },
  },
  {
    name: "Michael Brown",
    role: "Cybersecurity Analyst",
    quote: "Always has a solution",
    bio: "",
    image: "",
    linkedIn: "",
    rotation: -6,
    position: { top: "50%", left: "6%" },
  },
  {
    name: "Sophia Rodriguez",
    role: "Data Scientist",
    quote: "Statistical genius",
    bio: "",
    image: "",
    linkedIn: "",
    rotation: 4,
    position: { top: "50%", right: "3%" },
  },
  {
    name: "Daniel Lee",
    role: "Network Engineer",
    quote: "Connection wizard",
    bio: "",
    image: "",
    linkedIn: "",
    rotation: -3,
    position: { top: "65%", left: "7%" },
  },
  {
    name: "Olivia Taylor",
    role: "Business Analyst",
    quote: "Detail oriented",
    bio: "",
    image: "",
    linkedIn: "",
    rotation: 7,
    position: { top: "67%", right: "7%" },
  },
  {
    name: "Ethan Wright",
    role: "Mobile Developer",
    quote: "App master",
    bio: "",
    image: "",
    linkedIn: "",
    rotation: -5,
    position: { top: "80%", left: "10%" },
  },
  {
    name: "Ava Martinez",
    role: "UI Designer",
    quote: "Creative visionary",
    bio: "",
    image: "",
    linkedIn: "",
    rotation: 3,
    position: { top: "80%", right: "10%" },
  },
];

const tutor = {
  name: "Ranju Choudhary",
  role: "Class Tutor",
  quote:
    "If someone asks you if you've ever been to the moon, don't say 'no' — say 'not yet.'",
};

export default function ClassShowcase() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [open, setOpen] = useState(false);

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [autoplay, setAutoplay] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkResize();
    window.addEventListener("resize", checkResize);
    return () => window.removeEventListener("resize", checkResize);
  }, []);

  useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(() => {
        setCurrentPhotoIndex((prev) => (prev + 1) % classPhotos.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoplay]);

  const nextSlide = () => {
    setAutoplay(false);
    setCurrentPhotoIndex((prev) => (prev + 1) % classPhotos.length);
  };

  const prevSlide = () => {
    setAutoplay(false);
    setCurrentPhotoIndex((prev) =>
      prev === 0 ? classPhotos.length - 1 : prev - 1
    );
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedStudent(null);
  };

  const handleOpen = (student: any) => {
    setSelectedStudent(student);
    setOpen(true);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-sky-50 to-lime-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About Our Class
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the talented professionals who are part of this journey
              together.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Center Content - Photos Carousel and Tutor Card */}
          <div className="relative mx-auto mb-16 max-w-2xl">
            {/* Photos Carousel */}
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhotoIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={
                      classPhotos[currentPhotoIndex].src ||
                      "/images/placeholder.jpeg"
                    }
                    alt={classPhotos[currentPhotoIndex].alt}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-2">
                  Professional Year Class
                </h3>
                <p>
                  A diverse group of talented professionals working together to
                  build the future.
                </p>
              </div>
            </div>

            <div className="flex justify-center mb-8 gap-4">
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

            {/* Tutor Card - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mx-auto max-w-xs"
            >
              <Card className="overflow-hidden border-2 border-violet-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-1 rounded-full bg-violet-100 text-violet-600 mb-4">
                      <Avatar className="w-30 h-30">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>{tutor.name}</AvatarFallback>
                      </Avatar>
                    </div>
                    <h3 className="font-bold text-xl mb-1">{tutor.name}</h3>
                    <p className="text-violet-600 font-medium mb-2">
                      {tutor.role}
                    </p>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Quote className="h-4 w-4 text-violet-400" />
                      <p className="italic text-sm">{tutor.quote}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Floating Classmate Cards */}
          {!isMobile &&
            classmates.map((classmate, index) => (
              <motion.div
                key={index}
                className="absolute z-10"
                style={{
                  top: classmate.position.top,
                  left: classmate.position.left,
                  right: classmate.position.right,
                  width: "220px",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ rotate: 0, scale: 1.05, zIndex: 20 }}
                animate={{
                  rotate: classmate.rotation,
                  y: [0, 5, 0],
                  transition: {
                    y: {
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2 + Math.random(),
                      ease: "easeInOut",
                    },
                  },
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleOpen(classmate)}
              >
                <Card className="overflow-hidden border-2 border-gray-100 hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm cursor-pointer">
                  <CardContent className="p-3">
                    <div className="flex space-x-4 ">
                      <Avatar className="w-12 h-12">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>{classmate.name}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div>
                          <h4 className="font-bold text-sm">
                            {classmate.name}
                          </h4>
                          <p className="text-xs text-gray-600">
                            {classmate.role}
                          </p>
                        </div>

                        <AnimatePresence>
                          {hoveredIndex === index && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                              className="mt-2 flex items-center gap-1"
                            >
                              <Quote className="h-3 w-3 text-violet-500" />
                              <p className="text-xs italic text-gray-600">
                                {classmate.quote}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

          {/* Mobile view for classmates */}
          {isMobile && (
            <div className="grid grid-cols-2 gap-3 mt-8">
              {classmates.map((classmate, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleOpen(classmate)}
                >
                  <Card className="overflow-hidden border-2 border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <CardContent className="p-3">
                      <div className="flex space-x-4 p-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>{classmate.name}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <div>
                            <h4 className="font-bold text-sm">
                              {classmate.name}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {classmate.role}
                            </p>
                          </div>

                          <AnimatePresence>
                            {hoveredIndex === index && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.2 }}
                                className="mt-2 flex items-center gap-1"
                              >
                                <Quote className="h-3 w-3 text-violet-500" />
                                <p className="text-xs italic text-gray-600">
                                  {classmate.quote}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      <StudentDetailDialog
        open={open}
        onClose={handleClose}
        selectedStudent={selectedStudent}
      />
    </section>
  );
}
