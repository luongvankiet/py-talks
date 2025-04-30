import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

export default function CallToAction() {
  return (
    <footer className="py-16 px-4 bg-gradient-to-br from-violet-900 to-sky-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to join us?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Secure your spot at this exclusive Professional Year Program
              event. Network with professionals and gain valuable insights.
            </p>
          </motion.div>
        </div>

        <div className="max-w-md mx-auto mb-12">
          <div className="flex flex-row justify-center items-center space-x-4 mb-4 md:mb-0">
            <Button
              variant="link"
              className="text-white/70 hover:text-white transition-colors"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/van-kiet-luong",
                  "_blank"
                );
              }}
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <a
              href="mailto:luongvankiet.97@gmail.com"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-300">
              © 2025 Professional Year Program. All rights reserved.
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Powered by Van Kiet Luong</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
