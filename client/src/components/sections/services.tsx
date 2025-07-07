import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Settings, TrendingUp, Video, Check } from "lucide-react";

export default function Services() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const services = [
    {
      icon: Settings,
      title: "GoHighLevel Services",
      description: "Complete CRM automation and workflow optimization to streamline your business operations.",
      gradient: "from-[hsl(var(--ghl-blue))] to-[hsl(var(--ghl-dark))]",
      buttonColor: "bg-[hsl(var(--ghl-blue))] hover:bg-[hsl(var(--ghl-dark))]",
      checkColor: "text-[hsl(var(--ghl-blue))]",
      features: [
        "CRM Setup & Configuration",
        "Workflow Automation",
        "Email/SMS Campaigns",
        "White-label SaaS Setup",
        "Reputation Management"
      ],
      buttonText: "Book GHL Consultation"
    },
    {
      icon: TrendingUp,
      title: "ClickFunnels Services",
      description: "High-converting sales funnels designed to maximize your revenue and customer acquisition.",
      gradient: "from-[hsl(var(--cf-red))] to-[hsl(var(--cf-dark))]",
      buttonColor: "bg-[hsl(var(--cf-red))] hover:bg-[hsl(var(--cf-dark))]",
      checkColor: "text-[hsl(var(--cf-red))]",
      features: [
        "Funnel Strategy & Planning",
        "Custom Funnel Design",
        "A/B Testing & Optimization",
        "Payment Integrations",
        "Upsell/Downsell Sequences"
      ],
      buttonText: "Start Funnel Project"
    },
    {
      icon: Video,
      title: "Video Editing Services",
      description: "Professional video content that engages audiences and drives conversions across all platforms.",
      gradient: "from-[hsl(var(--purple-gradient-start))] to-[hsl(var(--purple-gradient-end))]",
      buttonColor: "bg-gradient-to-r from-[hsl(var(--purple-gradient-start))] to-[hsl(var(--purple-gradient-end))] hover:scale-105",
      checkColor: "text-[hsl(var(--purple-gradient-start))]",
      features: [
        "Reels & Short-form Content",
        "YouTube Video Editing",
        "Sales Video Production",
        "Motion Graphics & Animations",
        "Branding & Intros/Outros"
      ],
      buttonText: "Order Video Project"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Premium Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">Three core expertise areas designed to transform your digital presence and automate your success.</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={titleVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6`}>
                <service.icon className="text-white h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <Check className={`h-4 w-4 ${service.checkColor}`} />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className={`w-full ${service.buttonColor} text-white py-3 font-semibold transition-all`}
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    const headerHeight = 80;
                    const targetPosition = element.offsetTop - headerHeight;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                  }
                }}
              >
                {service.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
