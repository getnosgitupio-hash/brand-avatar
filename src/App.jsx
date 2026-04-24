import { useState } from "react";
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
import PopupModal from "../src/Components/Pop";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <>
      <div className="relative">
        <AvatarHero openPopup={() => setIsPopupOpen(true)}/>
        <div className="absolute -bottom-16 sm:-bottom-[8rem] left-0 w-full z-50 pointer-events-none">
          <MarqueeBanner openPopup={() => setIsPopupOpen(true)}/>
        </div>
      </div>

      <RealitySection openPopup={() => setIsPopupOpen(true)} />

      <div className="relative">
        <HeroSection openPopup={() => setIsPopupOpen(true)} />
        <div className="absolute -bottom-12 sm:-bottom-[8rem] left-0 w-full z-50">
          <StaticLead openPopup={() => setIsPopupOpen(true)} />
        </div>
      </div>

      <EventsSection  openPopup={() => setIsPopupOpen(true)}/>
      <Events  openPopup={() => setIsPopupOpen(true)}/>
      <Proof  openPopup={() => setIsPopupOpen(true)}/>
      <Testmonial openPopup={() => setIsPopupOpen(true)}/>
      <Working openPopup={() => setIsPopupOpen(true)} />
      <Brand  openPopup={() => setIsPopupOpen(true)}/>
      <Planning openPopup={() => setIsPopupOpen(true)} />
      <Footer openPopup={() => setIsPopupOpen(true)}/>
      <PopupModal show={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}

export default App;
