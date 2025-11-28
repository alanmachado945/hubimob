import Navbar from "@/react-app/components/siteimobiliario2/Navbar";
import Hero from "@/react-app/components/siteimobiliario2/Hero";
import Benefits from "@/react-app/components/siteimobiliario2/Benefits";
import Methodology from "@/react-app/components/siteimobiliario2/Methodology";
import PremiumExperiences from "@/react-app/components/siteimobiliario2/PremiumExperiences";
import Properties from "@/react-app/components/siteimobiliario2/Properties";
import Testimonials from "@/react-app/components/siteimobiliario2/Testimonials";
import FinalCTA from "@/react-app/components/siteimobiliario2/FinalCTA";
import Footer from "@/react-app/components/siteimobiliario2/Footer";
import HowItWorks from "@/react-app/components/siteimobiliario2/HowItWorks";

export default function Home() {
  return (
    <div className="min-h-screen"
      style={{ backgroundColor: "var(--brand-secondary-light)" }} // Azul-Marinho Profundo
    >
      <Navbar />
      <Hero />
      <Properties />
      <Benefits />
      <Methodology />
      <PremiumExperiences />
      <Testimonials />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </div>
  );
}

