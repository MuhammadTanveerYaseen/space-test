import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import TrustIndicators from "@/components/sections/trust-indicators";
import About from "@/components/sections/about";
import Stats from "@/components/sections/stats";
import Services from "@/components/sections/services";
import LiveDemo from "@/components/sections/live-demo";
import Process from "@/components/sections/process";
import Portfolio from "@/components/sections/portfolio";
import Certifications from "@/components/sections/certifications";
import Pricing from "@/components/sections/pricing";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustIndicators />
        <Stats />
        <About />
        <Services />
        <LiveDemo />
        <Process />
        <Portfolio />
        <Certifications />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}