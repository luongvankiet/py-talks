import CallToAction from "./components/call-to-action";
import ClassShowcase from "./components/class-showcase";
import FeaturedSpeakers from "./components/featured-speakers";
import FloatingInfoCard from "./components/floating-info-card";
import FullscreenButton from "./components/fullscreen-button";
import HeroSection from "./components/hero-section";
import KeyHighlights from "./components/key-highlight";
import ScheduleOverview from "./components/schedule-overview";
import ScrollProgressBar from "./components/scroll-progress-bar";
import ScrollToTop from "./components/scroll-to-top";
import Sponsors from "./components/sponsors";

const App = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Fixed Logo */}
      <div className="absolute top-4 left-4 z-50">
        <img
          src={`${import.meta.env.VITE_APP_URL}/images/PY-Provider-ECA.png`}
          alt="ECA Professional Year Logo"
          width={80}
          height={80}
          className="object-contain bg-white rounded-xl shadow"
        />
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Floating Info Card */}
      <FloatingInfoCard />

      {/* Key Highlights */}
      <KeyHighlights />

      {/* Featured Speakers */}
      <FeaturedSpeakers />

      {/* Sponsors */}
      <Sponsors />

      {/* Class Showcase */}
      <ClassShowcase />

      {/* Schedule Overview */}
      <ScheduleOverview />

      {/* Call to Action Footer */}
      <CallToAction />

      {/* Floating UI Elements */}
      <ScrollToTop />
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
        <ScrollProgressBar />
        <FullscreenButton />
      </div>
    </main>
  );
};

export default App;
