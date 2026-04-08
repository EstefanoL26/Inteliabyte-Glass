import Navbar from "@/components/layout/Navbar";
import Chatbot from "@/components/layout/Chatbot";
import Hero from "@/components/sections/Hero";
import ValueProp from "@/components/sections/ValueProp";
import Services from "@/components/sections/Services";
import Products from "@/components/sections/Products";
import Demo from "@/components/sections/Demo";
import Solutions from "@/components/sections/Solutions";
import Metrics from "@/components/sections/Metrics";
import { WhyUs, Testimonials, About } from "@/components/sections/TrustSections";
import { FinalCTA, Contact, FAQ, Footer } from "@/components/sections/BottomSections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <ValueProp />
        <Services />
        <Products />
        <Demo />
        <Solutions />
        <WhyUs />
        <Testimonials />
        <About />
        <FinalCTA />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
