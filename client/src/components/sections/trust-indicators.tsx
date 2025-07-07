import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Shield, Clock, Users, TrendingUp, Award, CheckCircle } from "lucide-react";

export default function TrustIndicators() {
  const { ref, isVisible } = useScrollAnimation();

  const indicators = [
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "GDPR compliant with bank-level security protocols"
    },
    {
      icon: Clock,
      title: "Proven Track Record",
      description: "5+ years serving 500+ successful businesses"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "50+ certified specialists across all platforms"
    },
    {
      icon: TrendingUp,
      title: "Measurable Results",
      description: "$50M+ in revenue generated for clients"
    },
    {
      icon: Award,
      title: "Certified Partners",
      description: "Official GoHighLevel & ClickFunnels certifications"
    },
    {
      icon: CheckCircle,
      title: "Satisfaction Guaranteed",
      description: "100% money-back guarantee on all projects"
    }
  ];

  const logos = [
    { name: "GoHighLevel", width: "140px" },
    { name: "ClickFunnels", width: "140px" },
    { name: "Stripe", width: "100px" },
    { name: "Zapier", width: "120px" },
    { name: "Google", width: "100px" },
    { name: "Facebook", width: "120px" }
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6">
        {/* Trust Logos */}
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-slate-600 mb-8 font-medium">Trusted by leading platforms and 500+ businesses worldwide</p>
          <div className="flex items-center justify-center gap-8 opacity-60 grayscale">
            {logos.map((logo, index) => (
              <div 
                key={logo.name}
                className="text-slate-400 font-bold text-lg"
                style={{ width: logo.width }}
              >
                {logo.name}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {indicators.map((indicator, index) => (
            <motion.div
              key={indicator.title}
              className="flex items-start space-x-4 p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-r from-[hsl(var(--ghl-blue))] to-[hsl(var(--cf-red))] rounded-lg flex items-center justify-center">
                  <indicator.icon className="text-white h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">{indicator.title}</h3>
                <p className="text-slate-600 text-sm">{indicator.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}