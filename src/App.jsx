import "./App.css";
import AvatarHero from "./Components/AvatarHero";
import MarqueeBanner from "./Components/MarqueeBanner";
import RealitySection from "./Components/RealitySection";
import HeroSection from "./Components/HeroSection";
import EventsSection from "./Components/EventsSection";
import StaticLead from "./Components/StaticLead";
import Brand from "./Components/Brand";
import Planning from "./Components/Planning";
import Working from "./Components/Working";
import Testmonial from "./Components/Testmonial";
import Proof from "./Components/Proof";
import Events from "./Components/Events";
import Footer from "../src/Components/Footer";

function App() {
  return (
    <>
    <div className="relative">
      <AvatarHero />
      <div className="absolute -bottom-16 sm:-bottom-[8rem] left-0 w-full z-50 pointer-events-none">
        <MarqueeBanner />
      </div>
    </div>

   <RealitySection />

  <div className="relative">
   <HeroSection />
         <div className="absolute -bottom-12 sm:-bottom-[8rem] left-0 w-full z-50">
        <StaticLead />
      </div>
  </div>

   <EventsSection />
  <Events />
    <Proof />
    <Testmonial />
    <Working />
      <Brand />
      <Planning />
      <Footer />
    </>
  );
}

export default App;
