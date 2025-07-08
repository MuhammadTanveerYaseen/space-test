'use client';

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Check } from "lucide-react";

export default function About() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose GHLSPACE?</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">We're not just another agency. We're your dedicated partners in digital transformation, with 500+ successful projects and $50M+ in client revenue generated.</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -50 }}
            animate={imageVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern office workspace" 
              className="rounded-2xl shadow-lg" 
            />
          </motion.div>
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: 50 }}
            animate={contentVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
            <p className="text-lg text-slate-600 mb-6">To empower businesses with advanced automation, high-converting funnels, and compelling video content that drives real results.</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[hsl(var(--ghl-blue))] rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-slate-700">Expert-level GoHighLevel implementations</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[hsl(var(--cf-red))] rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-slate-700">High-converting ClickFunnels strategies</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[hsl(var(--ghl-blue))] rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-slate-700">Professional video editing & motion graphics</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
