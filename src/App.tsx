import { Home, Calendar, Heart, Users, Info, Phone } from "lucide-react";
import { LimelightNav, type NavItem } from "@/components/ui/limelight-nav";

import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import Initiatives from "@/components/Initiatives";
import Events from "@/components/Events";
import GetInvolved from "@/components/GetInvolved";
import NewsAndGallery from "@/components/NewsAndGallery";
import Footer from "@/components/Footer";

const navItems: NavItem[] = [
  {
    id: "home",
    icon: <Home />,
    label: "Home",
    onClick: () => (window.location.hash = "#home"),
  },
  {
    id: "events",
    icon: <Calendar />,
    label: "Events",
    onClick: () => (window.location.hash = "#events"),
  },
  {
    id: "donate",
    icon: <Heart />,
    label: "Donate",
    onClick: () => (window.location.hash = "#donate"),
  },
  {
    id: "volunteer",
    icon: <Users />,
    label: "Join Us",
    onClick: () => (window.location.hash = "#volunteer"),
  },
  {
    id: "about",
    icon: <Info />,
    label: "About",
    onClick: () => (window.location.hash = "#about"),
  },
  {
    id: "contact",
    icon: <Phone />,
    label: "Contact",
    onClick: () => (window.location.hash = "#contact"),
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-cream">

      {/* Top contact bar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <TopBar />
      </div>

      {/* Navbar */}
      <div className="fixed top-14 left-1/2 -translate-x-1/2 z-50">
        <LimelightNav
          items={navItems}
          className="bg-white/80 backdrop-blur-md border-cream-dark shadow-lg rounded-xl"
        />
      </div>

      {/* Sections */}
      <Hero />
      <Initiatives />
      <Events />
      <GetInvolved />
      <NewsAndGallery />

      {/* Footer */}
      <Footer />

    </div>
  );
}