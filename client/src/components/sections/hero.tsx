import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/ui/typing-animation";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <TypingAnimation 
                text="Premium Digital Solutions"
                className="gradient-text block mt-2"
              />
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We specialize in GoHighLevel automation, ClickFunnels optimization, and professional video editing to skyrocket your conversions and streamline your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-[hsl(var(--ghl-blue))] to-[hsl(var(--cf-red))] text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform">
                Get Started Today
              </Button>
              <Button variant="outline" className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors">
                View Our Work
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Digital marketing team collaboration" 
              className="rounded-2xl shadow-2xl" 
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">500+ Projects</p>
                  <p className="text-slate-600">Successfully Delivered</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
