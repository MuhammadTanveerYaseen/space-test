import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

export default function Pricing() {
  const { ref, isVisible } = useScrollAnimation();

  const plans = [
    {
      name: "Starter",
      price: "$2,500",
      period: "one-time",
      description: "Perfect for small businesses looking to get started with automation",
      features: [
        "Basic GoHighLevel setup",
        "Simple funnel creation",
        "Email automation setup",
        "Basic video editing (5 videos)",
        "2 weeks delivery",
        "1 month support"
      ],
      buttonText: "Get Started",
      popular: false,
      gradient: "from-slate-600 to-slate-700"
    },
    {
      name: "Professional",
      price: "$7,500",
      period: "one-time",
      description: "Complete solution for growing businesses ready to scale",
      features: [
        "Advanced GHL automation",
        "Multi-step funnel strategy",
        "Complete email/SMS campaigns",
        "Professional video package (15 videos)",
        "A/B testing & optimization",
        "3 weeks delivery",
        "3 months support",
        "Weekly strategy calls"
      ],
      buttonText: "Most Popular",
      popular: true,
      gradient: "from-[hsl(var(--ghl-blue))] to-[hsl(var(--cf-red))]"
    },
    {
      name: "Enterprise",
      price: "$15,000+",
      period: "project-based",
      description: "Custom solutions for large organizations with complex needs",
      features: [
        "Complete digital transformation",
        "Custom integrations & APIs",
        "White-label SaaS setup",
        "Unlimited video content",
        "Advanced analytics & reporting",
        "4-6 weeks delivery",
        "6 months support",
        "Dedicated account manager",
        "Priority support"
      ],
      buttonText: "Contact Sales",
      popular: false,
      gradient: "from-purple-600 to-purple-800"
    }
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
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Transparent Pricing</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">No hidden fees, no monthly subscriptions. Pay once, benefit forever.</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-slate-50 rounded-2xl p-8 ${plan.popular ? 'ring-2 ring-[hsl(var(--ghl-blue))] scale-105' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[hsl(var(--ghl-blue))] to-[hsl(var(--cf-red))] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-slate-900 mb-2">{plan.price}</div>
                <div className="text-slate-600">{plan.period}</div>
                <p className="text-slate-600 mt-4">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full py-4 text-lg font-semibold ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-[hsl(var(--ghl-blue))] to-[hsl(var(--cf-red))] text-white hover:scale-105' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                } transition-all`}
              >
                {plan.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-slate-600 mb-4">Need a custom solution? Let's discuss your specific requirements.</p>
          <Button variant="outline" className="border-2 border-[hsl(var(--ghl-blue))] text-[hsl(var(--ghl-blue))] px-8 py-3 font-semibold hover:bg-[hsl(var(--ghl-blue))] hover:text-white">
            Schedule Custom Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
}