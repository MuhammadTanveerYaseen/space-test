import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/ui/typing-animation";
import { Play, Star, Users, TrendingUp, Award } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[hsl(var(--ghl-blue))] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[hsl(var(--cf-red))] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <motion.div 
              className="text-white space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Trust Badge */}
              <motion.div 
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 w-fit"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">Trusted by 500+ Businesses</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>

              {/* Main Headline */}
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                  Scale Your Business with
                  <TypingAnimation 
                    text="Premium Automation"
                    className="gradient-text block mt-2"
                    duration={2500}
                  />
                </h1>
                <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed">
                  We've generated <span className="text-green-400 font-bold">$50M+</span> in revenue for 500+ businesses through 
                  <span className="gradient-text font-semibold"> GoHighLevel automation</span>, 
                  <span className="gradient-text font-semibold"> ClickFunnels optimization</span>, and 
                  <span className="gradient-text font-semibold"> viral video content</span>.
                </p>
              </div>

              {/* Social Proof Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">500+</div>
                  <div className="text-slate-300 text-sm">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">$50M+</div>
                  <div className="text-slate-300 text-sm">Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">98%</div>
                  <div className="text-slate-300 text-sm">Satisfaction</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[hsl(var(--ghl-blue))] to-[hsl(var(--cf-red))] text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      const headerHeight = 80;
                      const targetPosition = element.offsetTop - headerHeight;
                      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                    }
                  }}
                >
                  Get Free Strategy Call
                  <TrendingUp className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline" 
                  className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all backdrop-blur-sm"
                  onClick={() => {
                    const element = document.getElementById('portfolio');
                    if (element) {
                      const headerHeight = 80;
                      const targetPosition = element.offsetTop - headerHeight;
                      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                    }
                  }}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Success Stories
                </Button>
              </motion.div>

              {/* Guarantee */}
              <motion.div 
                className="flex items-center space-x-2 text-slate-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Award className="h-5 w-5 text-yellow-400" />
                <span className="text-sm">100% Money-Back Guarantee • No Long-Term Contracts</span>
              </motion.div>
            </motion.div>

            {/* Right Content */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Main Image */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Digital marketing team collaboration" 
                  className="rounded-2xl shadow-2xl w-full h-auto" 
                />
                
                {/* Play Button Overlay */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <Button
                    className="w-20 h-20 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-4 border-white/50 hover:scale-110 transition-all"
                    onClick={() => {
                      const element = document.getElementById('live-demo');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <Play className="text-white h-8 w-8 ml-1" />
                  </Button>
                </motion.div>
              </div>

              {/* Floating Cards */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Users className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">500+ Projects</p>
                    <p className="text-slate-600">Successfully Delivered</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -top-6 -right-6 bg-gradient-to-r from-[hsl(var(--ghl-blue))] to-[hsl(var(--cf-red))] p-6 rounded-xl shadow-xl text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="text-center">
                  <p className="font-bold text-2xl">$50M+</p>
                  <p className="text-white/90 text-sm">Revenue Generated</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
