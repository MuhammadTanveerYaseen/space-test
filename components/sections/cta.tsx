'use client';

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-r from-[hsl(var(--ghl-blue))] to-[hsl(var(--cf-red))]">
      <div className="container mx-auto px-6 text-center">
        <motion.div 
          ref={ref}
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/90 mb-8">Join hundreds of successful businesses that have scaled with our premium digital solutions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-[hsl(var(--ghl-blue))] px-8 py-4 text-lg font-semibold hover:bg-slate-100 transition-colors"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  const headerHeight = 80;
                  const targetPosition = element.offsetTop - headerHeight;
                  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
              }}
            >
              Schedule Free Consultation
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-[hsl(var(--ghl-blue))] transition-colors"
              onClick={() => {
                const element = document.getElementById('pricing');
                if (element) {
                  const headerHeight = 80;
                  const targetPosition = element.offsetTop - headerHeight;
                  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
              }}
            >
              View Pricing Plans
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
