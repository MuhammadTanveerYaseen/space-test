'use client';

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle, Users, Clock } from "lucide-react";

export default function Certifications() {
  const { ref, isVisible } = useScrollAnimation();

  const certifications = [
    {
      title: "GoHighLevel Certified Agency",
      description: "Official partner with advanced certification",
      icon: Award,
      color: "bg-[hsl(var(--ghl-blue))]"
    },
    {
      title: "ClickFunnels 2Comma Club",
      description: "Generated over $1M in funnel revenue",
      icon: CheckCircle,
      color: "bg-[hsl(var(--cf-red))]"
    },
    {
      title: "5+ Years Experience",
      description: "Proven track record in digital marketing",
      icon: Clock,
      color: "bg-green-600"
    },
    {
      title: "50+ Team Members",
      description: "Dedicated specialists for each service",
      icon: Users,
      color: "bg-purple-600"
    }
  ];

  const guarantees = [
    "100% Money-Back Guarantee",
    "24/7 Support & Maintenance",
    "Free Revisions Until Satisfied",
    "Dedicated Project Manager",
    "Weekly Progress Reports"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Why 500+ Businesses Trust Us</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">Our certifications, guarantees, and proven track record speak for themselves.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="text-center p-6 bg-slate-50 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`w-16 h-16 ${cert.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <cert.icon className="text-white h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{cert.title}</h3>
              <p className="text-slate-600 text-sm">{cert.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-gradient-to-r from-[hsl(var(--ghl-blue))] to-[hsl(var(--cf-red))] rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Our Guarantee to You</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {guarantees.map((guarantee, index) => (
              <Badge key={index} className="bg-white text-slate-900 py-2 px-4 text-sm font-medium">
                {guarantee}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}