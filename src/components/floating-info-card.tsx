import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, ChevronUp, ChevronDown } from "lucide-react";

export default function FloatingInfoCard() {
  const [isVisible, setIsVisible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const checkResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkResize);
    checkResize();

    return () => {
      window.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkResize);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{
            opacity: 0,
            x: isMobile ? 0 : 100,
            y: isMobile ? -100 : 0,
          }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: isMobile ? 0 : 100, y: isMobile ? -100 : 0 }}
          className={`fixed ${
            isMobile ? "bottom-1/10 right-4 z-30 m-2" : "top-1/10 right-4 z-30"
          }`}
        >
          <Card className="border-2 border-sky-200 shadow-lg bg-white/90 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg text-sky-700">
                  Event Details
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="h-8 w-8"
                >
                  {isCollapsed ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronUp className="h-4 w-4" />
                  )}
                </Button>
              </div>

              <AnimatePresence>
                {!isCollapsed && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-violet-500" />
                        <span>Wednesday, 07 May 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-coral-500" />
                        <span>9:00 AM - 4:30 PM</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-lime-500" />
                        <span>
                          Room 412, Level 4, 1/3 Fitzwilliam St, Parramatta
                        </span>
                      </div>
                      {/* <Button
                        size="sm"
                        className="w-full mt-2 bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-600 hover:to-violet-600"
                      >
                        Add to Calendar
                      </Button> */}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
