import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Steps from "@/components/Steps";
import FAQ from "@/components/FAQ";
import Footer, { FinalCTA } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Steps />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
