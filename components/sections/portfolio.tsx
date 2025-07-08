'use client';

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const portfolioItems = [
    {
      title: "GoHighLevel CRM Implementation",
      description: "Complete automation system that increased lead conversion by 340% for a real estate agency.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      alt: "CRM dashboard analytics",
      tags: [
        { label: "CRM Setup", color: "bg-[hsl(var(--ghl-blue))]" },
        { label: "+340% Conversion", color: "bg-green-500" }
      ],
      buttonText: "View Case Study",
      buttonColor: "text-[hsl(var(--ghl-blue))]"
    },
    {
      title: "High-Converting Sales Funnel",
      description: "ClickFunnels optimization that generated $2.3M in revenue for an online course creator.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      alt: "Sales funnel analytics dashboard",
      tags: [
        { label: "ClickFunnels", color: "bg-[hsl(var(--cf-red))]" },
        { label: "$2.3M Revenue", color: "bg-green-500" }
      ],
      buttonText: "View Case Study",
      buttonColor: "text-[hsl(var(--cf-red))]"
    },
    {
      title: "Video Content Creation",
      description: "Complete video marketing campaign that boosted social media engagement by 580%.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      alt: "Video editing workspace setup",
      tags: [
        { label: "Video Editing", color: "bg-[hsl(var(--purple-gradient-start))]" },
        { label: "+580% Engagement", color: "bg-green-500" }
      ],
      buttonText: "View Portfolio",
      buttonColor: "text-[hsl(var(--purple-gradient-start))]"
    },
    {
      title: "Complete Digital Transformation",
      description: "End-to-end automation combining GHL, ClickFunnels, and video content for a SaaS company.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      alt: "Business growth analytics dashboard",
      tags: [
        { label: "Full Integration", color: "bg-gradient-to-r from-[hsl(var(--ghl-blue))] to-[hsl(var(--cf-red))]" },
        { label: "500% ROI", color: "bg-green-500" }
      ],
      buttonText: "View Case Study",
      buttonColor: "text-[hsl(var(--ghl-blue))]"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Portfolio</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">Real results from real clients. See how we've transformed businesses across industries.</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-slate-50 rounded-2xl p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={titleVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 mb-6">{item.description}</p>
              <img 
                src={item.image} 
                alt={item.alt} 
                className="rounded-xl shadow-lg w-full mb-6" 
              />
              <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`${tag.color} text-white px-3 py-1 rounded-full text-sm`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="link" 
                  className={`${item.buttonColor} font-semibold p-0 h-auto`}
                  onClick={() => {
                    const caseId = index === 0 ? 'ghl-crm' : index === 1 ? 'clickfunnels-optimization' : index === 2 ? 'video-marketing' : 'ghl-crm';
                    window.location.href = `/case-study?id=${caseId}`;
                  }}
                >
                  {item.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
