'use client';

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Star } from "lucide-react";

export default function Testimonials() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const testimonials = [
    {
      rating: 5,
      text: "GHLSPACE completely transformed our lead generation process. The GoHighLevel automation they set up increased our qualified leads by 400% in just 3 months.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b372?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      rating: 5,
      text: "The ClickFunnels optimization they did for our course launch generated over $2M in revenue. Their attention to detail is unmatched.",
      author: "Michael Chen",
      position: "Founder, Digital Masters Academy",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      rating: 5,
      text: "Their video editing skills are phenomenal. Our YouTube channel went from 10K to 500K subscribers thanks to their content strategy and editing.",
      author: "Emma Rodriguez",
      position: "Content Creator & Influencer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      rating: 5,
      text: "Professional, reliable, and results-driven. GHLSPACE helped us scale from $100K to $1M ARR with their complete automation setup.",
      author: "David Thompson",
      position: "Owner, Elite Fitness Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      rating: 5,
      text: "They delivered everything on time and exceeded our expectations. Our conversion rates improved by 250% after implementing their strategies.",
      author: "Lisa Park",
      position: "Marketing Director, Growth Co.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      rating: 5,
      text: "The best investment we've made for our business. Their expertise in automation and funnels is truly world-class.",
      author: "Alex Thompson",
      position: "Founder, InnovateTech",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">Hear from businesses that have transformed their operations with our solutions.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="bg-white rounded-2xl p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={titleVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-slate-600 mb-6">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 object-cover" 
                />
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.author}</h4>
                  <p className="text-slate-600">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
