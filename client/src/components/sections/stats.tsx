import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered across all service categories"
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Based on post-project surveys and reviews"
    },
    {
      number: "$50M+",
      label: "Revenue Generated",
      description: "Total revenue generated for our clients"
    },
    {
      number: "24hr",
      label: "Response Time",
      description: "Average response time for all inquiries"
    }
  ];

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-white text-lg font-semibold mb-2">{stat.label}</div>
              <div className="text-slate-300 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}