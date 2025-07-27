import gsap from "gsap";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import { ScrollTrigger } from "gsap/all";
import MessageSection from "./sections/MessageSection";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div className="text-4xl font-bold">
      <Navbar />
      <HeroSection />
      <MessageSection />
      <div className="h-dvh border"></div>
    </div>
  );
};

export default App;
