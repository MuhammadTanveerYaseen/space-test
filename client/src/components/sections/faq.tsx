import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();

  const faqs = [
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary based on complexity. Starter packages typically take 2 weeks, Professional packages 3 weeks, and Enterprise solutions 4-6 weeks. We provide detailed timelines during our discovery call and send weekly progress updates."
    },
    {
      question: "Do you provide training on the systems you build?",
      answer: "Absolutely! Every project includes comprehensive training sessions, detailed documentation, and video tutorials. We ensure your team is fully equipped to manage and optimize the systems we create."
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer: "We offer unlimited revisions until you're completely satisfied. If we can't meet your expectations, we provide a 100% money-back guarantee within the first 30 days of project completion."
    },
    {
      question: "Can you work with my existing tools and platforms?",
      answer: "Yes! We specialize in integrating with existing systems. Whether you're using Shopify, WordPress, Salesforce, or other platforms, we ensure seamless integration with your current tech stack."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, all packages include post-launch support ranging from 1-6 months depending on your plan. We also offer ongoing maintenance packages for continued optimization and support."
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "We follow industry-standard security protocols, including encrypted data transmission, secure hosting, and GDPR compliance. All team members sign strict NDAs, and we never share client information."
    },
    {
      question: "Can you help with compliance and legal requirements?",
      answer: "While we're not legal advisors, we build systems that support common compliance requirements like GDPR, CAN-SPAM, and TCPA. We recommend consulting with your legal team for specific compliance needs."
    },
    {
      question: "What makes GHLSPACE different from other agencies?",
      answer: "Our unique combination of deep technical expertise, proven results (500+ successful projects), and commitment to client success sets us apart. We're certified partners with both GoHighLevel and ClickFunnels, ensuring you get the best possible implementation."
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
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">Everything you need to know about working with GHLSPACE. Can't find your answer? Contact us directly.</p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border-0 shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-slate-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-slate-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}