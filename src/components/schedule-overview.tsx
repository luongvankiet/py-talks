import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Award,
  Clock,
  Coffee,
  GamepadIcon,
  MessageSquare,
  Mic,
  PartyPopper,
  Utensils,
} from "lucide-react";
import { useRef } from "react";

const scheduleItems = [
  {
    time: "9:00 – 9:30 AM",
    title: "Opening Ceremony",
    description: "Welcome address and introduction to the day's events",
    icon: <PartyPopper className="h-6 w-6" />,
    position: "right",
    color: "bg-sky-100 text-sky-700",
    iconBg: "bg-sky-500",
  },
  {
    time: "9:30 – 10:30 AM",
    title: "TED Talks (Session 1)",
    description: "First round of inspiring presentations",
    icon: <Mic className="h-6 w-6" />,
    position: "left",
    color: "bg-violet-100 text-violet-700",
    iconBg: "bg-violet-500",
  },
  {
    time: "10:30 – 11:00 AM",
    title: "Quiz Round 1",
    description: "Interactive quiz based on the presentations",
    icon: <GamepadIcon className="h-6 w-6" />,
    position: "right",
    color: "bg-cyan-100 text-cyan-700",
    iconBg: "bg-cyan-500",
  },
  {
    time: "11:00 – 11:20 AM",
    title: "Morning Tea",
    description: "Refreshment break and networking",
    icon: <Coffee className="h-6 w-6" />,
    position: "left",
    color: "bg-lime-100 text-lime-700",
    iconBg: "bg-lime-500",
  },
  {
    time: "11:20 – 12:20 PM",
    title: "TED Talks (Session 2)",
    description: "Second round of inspiring presentations",
    icon: <Mic className="h-6 w-6" />,
    position: "right",
    color: "bg-violet-100 text-violet-700",
    iconBg: "bg-violet-500",
  },
  {
    time: "12:20 – 1:00 PM",
    title: "Group Game",
    description: "Collaborative team-building activity",
    icon: <GamepadIcon className="h-6 w-6" />,
    position: "left",
    color: "bg-cyan-100 text-cyan-700",
    iconBg: "bg-cyan-500",
  },
  {
    time: "1:00 – 2:00 PM",
    title: "Lunch Break",
    description: "Lunch and networking opportunity",
    icon: <Utensils className="h-6 w-6" />,
    position: "right",
    color: "bg-lime-100 text-lime-700",
    iconBg: "bg-lime-500",
  },
  {
    time: "2:00 – 3:00 PM",
    title: "TED Talks (Session 3)",
    description: "Final round of inspiring presentations",
    icon: <Mic className="h-6 w-6" />,
    position: "left",
    color: "bg-violet-100 text-violet-700",
    iconBg: "bg-violet-500",
  },
  {
    time: "3:00 – 3:30 PM",
    title: "Quiz Round 2",
    description: "Final interactive quiz session",
    icon: <GamepadIcon className="h-6 w-6" />,
    position: "right",
    color: "bg-cyan-100 text-cyan-700",
    iconBg: "bg-cyan-500",
  },
  {
    time: "3:30 – 4:00 PM",
    title: "Panel Q&A",
    description: "Open discussion with all speakers",
    icon: <MessageSquare className="h-6 w-6" />,
    position: "left",
    color: "bg-sky-100 text-sky-700",
    iconBg: "bg-sky-500",
  },
  {
    time: "4:00 – 4:30 PM",
    title: "Awards & Closing",
    description: "Recognition and closing remarks",
    icon: <Award className="h-6 w-6" />,
    position: "right",
    color: "bg-violet-100 text-violet-700",
    iconBg: "bg-violet-500",
  },
];

export default function ScheduleOverview() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section
      ref={containerRef}
      className="py-20 px-4 bg-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Schedule Overview
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A day packed with inspiring talks, interactive activities, and
              networking opportunities.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>

          <div className="relative">
            {scheduleItems.map((item, index) => (
              <motion.div
                key={index}
                className={`mb-12 flex items-center justify-${
                  item.position === "left"
                    ? "start -translate-x-8"
                    : "end translate-x-8"
                } relative`}
                initial={{ opacity: 0, x: item.position === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div
                  className={`w-1/2 ${
                    item.position === "right" ? "ml-auto pr-8" : "mr-auto pl-8"
                  }`}
                >
                  <Card
                    className={`${item.color} border-0 shadow-md hover:shadow-lg transition-shadow duration-300`}
                  >
                    <CardContent className="p-4 px-8">
                      <div className="flex items-center gap-3 mb-2">
                        <Clock className="h-4 w-4" />
                        <span className="font-semibold">{item.time}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm opacity-80">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Center icon */}
                <div
                  className={`absolute left-1/2 w-12 h-12 ${item.iconBg} rounded-full flex items-center justify-center text-white transform -translate-x-1/2 z-10`}
                >
                  {item.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
