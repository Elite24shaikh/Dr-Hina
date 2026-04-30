import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AppShowcase } from "./components/AppShowcase";
import { DraggablePhoneMockups } from "./components/DraggablePhoneMockups";
import { HowItWorks } from "./components/HowItWorks";
import { TheSystem } from "./components/TheSystem";
import { ProgramCards } from "./components/ProgramCards";
import { ServicesChess } from "./components/ServicesChess";
import { WhyMedimorphic } from "./components/WhyMedimorphic";
import { TrustBento } from "./components/TrustBento";
import { TransformationGallery } from "./components/TransformationGallery";
// import { Testimonials } from "./components/Testimonials";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-background text-foreground overflow-hidden">
      <Navbar />
      <main className="flex flex-col gap-6 md:gap-8">
        <div id="home">
          <Hero />
        </div>
        {/* White sections */}
        <div id="about" className="flex flex-col gap-6 md:gap-8 px-3 md:px-5">
          <AppShowcase />
          <DraggablePhoneMockups />
        </div>
        {/* Forest green section */}
        <div className="px-3 md:px-5">
          <HowItWorks />
        </div>
        {/* White sections */}
        <div className="flex flex-col gap-6 md:gap-8 px-3 md:px-5">
          <TheSystem />
        </div>
        {/* Programs — tinted */}
        <div id="programs-section" className="px-3 md:px-5">
          <ProgramCards />
        </div>
        {/* Services — white */}
        <div id="services-section" className="px-3 md:px-5">
          <ServicesChess />
        </div>
        {/* Forest green section */}
        <div className="px-3 md:px-5">
          <WhyMedimorphic />
        </div>
        {/* Tinted section */}
        <div className="px-3 md:px-5">
          <TrustBento />
        </div>
        {/* White section */}
        <div className="px-3 md:px-5">
          <TransformationGallery />
        </div>
        {/* Results — white */}
        {/* <div id="results-section" className="px-3 md:px-5">
          <Testimonials />
        </div> */}
        {/* Final CTA — dark */}
        <div className="px-3 md:px-5">
          <FinalCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
