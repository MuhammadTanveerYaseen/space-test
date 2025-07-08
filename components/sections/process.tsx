'use client';

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { MessageSquare, FileText, Settings, Rocket, CheckCircle } from "lucide-react";

export default function Process() {
  const { ref, isVisible } = useScrollAnimation();

  const steps = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We start with a comprehensive consultation to understand your business goals, current challenges, and desired outcomes.",
      icon: MessageSquare,
      duration: "30-60 min",
      deliverable: "Custom strategy roadmap"
    },
    {
      step: "02", 
      title: "Strategy & Planning",
      description: "Our team creates a detailed project plan with timelines, milestones, and specific deliverables tailored to your needs.",
      icon: FileText,
      duration: "2-3 days",
      deliverable: "Project blueprint & timeline"
    },
    {
      step: "03",
      title: "Implementation",
      description: "We execute the plan with daily updates, using proven methodologies and best practices for maximum results.",
      icon: Settings,
      duration: "1-4 weeks",
      deliverable: "Weekly progress reports"
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Thorough testing, optimization, and training ensure everything works perfectly before going live.",
      icon: Rocket,
      duration: "3-5 days",
      deliverable: "Training & documentation"
    },
    {
      step: "05",
      title: "Ongoing Support",
      description: "Continuous monitoring, optimization, and support to ensure sustained success and growth.",
      icon: CheckCircle,
      duration: "Ongoing",
      deliverable: "Monthly optimization reports"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Proven Process</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">A systematic approach that has delivered success for 500+ businesses across all industries.</p>
        </motion.div>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              className="grid lg:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[hsl(var(--ghl-blue))] to-[hsl(var(--cf-red))] rounded-full flex items-center justify-center mr-4">
                    <step.icon className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-3xl font-bold gradient-text">{step.step}</span>
                    <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                  </div>
                </div>
                <p className="text-lg text-slate-600 mb-6">{step.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm font-semibold text-slate-900">Duration</div>
                    <div className="text-[hsl(var(--ghl-blue))] font-medium">{step.duration}</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm font-semibold text-slate-900">You Get</div>
                    <div className="text-[hsl(var(--cf-red))] font-medium">{step.deliverable}</div>
                  </div>
                </div>
              </div>
              <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative">
                  <img 
                    src={`https://images.unsplash.com/photo-${
                      index === 0 ? '1552664730-d307ca884978' : 
                      index === 1 ? '1460925895917-afdab827c52f' :
                      index === 2 ? '1551288049-bebda4e38f71' :
                      index === 3 ? '1611224923853-80b023f02d71' :
                      '1542744173-7ae9c93e5e7a'
                    }?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400`}
                    alt={`${step.title} process illustration`}
                    className="rounded-2xl shadow-lg w-full h-64 object-cover"
                  />
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-[hsl(var(--ghl-blue))] to-[hsl(var(--cf-red))] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl font-bold">{step.step}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}