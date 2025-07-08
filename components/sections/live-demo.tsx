'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Play, Users, TrendingUp, Clock, CheckCircle, ArrowRight } from "lucide-react";

export default function LiveDemo() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeDemo, setActiveDemo] = useState(0);

  const demos = [
    {
      title: "GoHighLevel Automation",
      description: "See how our automation captures, nurtures, and converts leads 24/7",
      videoId: "ghl-demo",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
      stats: [
        { icon: Users, label: "340% Lead Increase", value: "Real Results" },
        { icon: Clock, label: "2 Min Response", value: "Automated" },
        { icon: CheckCircle, label: "95% Success Rate", value: "Proven System" }
      ]
    },
    {
      title: "ClickFunnels Optimization",
      description: "Watch how we transform low-converting pages into profit machines",
      videoId: "cf-demo",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
      stats: [
        { icon: TrendingUp, label: "$2.3M Revenue", value: "Generated" },
        { icon: Users, label: "26.3% Conversion", value: "Optimized Rate" },
        { icon: CheckCircle, label: "1,150% Increase", value: "Performance" }
      ]
    },
    {
      title: "Video Content Strategy",
      description: "Discover our proven video content system that drives massive engagement",
      videoId: "video-demo",
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
      stats: [
        { icon: TrendingUp, label: "580% Engagement", value: "Growth" },
        { icon: Users, label: "125K Subscribers", value: "Gained" },
        { icon: CheckCircle, label: "2.8M Views", value: "Monthly" }
      ]
    }
  ];

  return (
    <section id="live-demo" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">See Our Systems in Action</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">Don't just take our word for it. Watch real demonstrations of the systems we build and the results they deliver.</p>
        </motion.div>

        {/* Demo Navigation */}
        <div className="flex flex-col lg:flex-row justify-center mb-8 gap-4">
          {demos.map((demo, index) => (
            <Button
              key={index}
              variant={activeDemo === index ? "default" : "outline"}
              className={`px-6 py-3 ${
                activeDemo === index 
                  ? 'bg-gradient-to-r from-[hsl(var(--ghl-blue))] to-[hsl(var(--cf-red))] text-white' 
                  : 'border-white text-white hover:bg-white hover:text-slate-900'
              }`}
              onClick={() => setActiveDemo(index)}
            >
              {demo.title}
            </Button>
          ))}
        </div>

        {/* Active Demo */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          key={activeDemo}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">{demos[activeDemo].title}</h3>
            <p className="text-lg text-slate-300 mb-8">{demos[activeDemo].description}</p>
            
            <div className="space-y-4 mb-8">
              {demos[activeDemo].stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-slate-800 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-[hsl(var(--ghl-blue))] to-[hsl(var(--cf-red))] rounded-lg flex items-center justify-center">
                    <stat.icon className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{stat.label}</div>
                    <div className="text-slate-300 text-sm">{stat.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button 
              className="bg-gradient-to-r from-[hsl(var(--ghl-blue))] to-[hsl(var(--cf-red))] text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  const headerHeight = 80;
                  const targetPosition = element.offsetTop - headerHeight;
                  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
              }}
            >
              Get This for Your Business
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={demos[activeDemo].thumbnail}
                alt={`${demos[activeDemo].title} demo`}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Button
                  className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/50"
                  onClick={() => {
                    // In a real implementation, this would open a video modal
                    alert(`Playing ${demos[activeDemo].title} demo video`);
                  }}
                >
                  <Play className="text-white h-6 w-6 ml-1" />
                </Button>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold">
              ✓ Live Demo Available
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-slate-300 mb-6">Want a personalized demo for your specific business needs?</p>
          <Button 
            variant="outline" 
            className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-slate-900"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const headerHeight = 80;
                const targetPosition = element.offsetTop - headerHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
              }
            }}
          >
            Schedule Live Demo Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
}