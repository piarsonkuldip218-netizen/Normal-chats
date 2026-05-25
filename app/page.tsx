import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Technology from "@/components/Technology";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Visit from "@/components/Visit";
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
        {/* "Visit Our Clinic" — front-of-shop photo + address + Get Directions
            button. Sits between Why Us (trust signals) and Gallery (more
            interior photos) so visitors see the actual clinic exterior before
            being asked to book. */}
        <div className="perf-section">
          <Visit />
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
