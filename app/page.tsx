import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Technology from "@/components/Technology";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        {/* Dr. Tabarak Hussain's profile sits right after the 3D hero so visitors
            see the face behind the clinic before scrolling into services. */}
        <div className="perf-section">
          <About />
        </div>
        <div className="perf-section">
          <Services />
        </div>
        <div className="perf-section">
          <Technology />
        </div>
        <div className="perf-section">
          <WhyUs />
        </div>
        <div className="perf-section">
          <Gallery />
        </div>
        <div className="perf-section">
          <Contact />
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
