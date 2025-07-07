import { useLocation } from "wouter";
import { motion } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Users, Clock, CheckCircle } from "lucide-react";

interface CaseStudyData {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  testimonial: {
    text: string;
    author: string;
    position: string;
  };
  images: string[];
  timeline: string;
  services: string[];
}

const caseStudies: Record<string, CaseStudyData> = {
  "ghl-crm": {
    id: "ghl-crm",
    title: "GoHighLevel CRM Implementation",
    client: "Elite Real Estate Group",
    industry: "Real Estate",
    challenge: "Elite Real Estate Group was struggling with lead management, losing potential clients due to delayed follow-ups and manual processes. They had no automated nurturing system and were spending 15+ hours weekly on administrative tasks.",
    solution: "We implemented a comprehensive GoHighLevel CRM system with automated lead capture, intelligent lead scoring, multi-channel follow-up sequences, and integrated appointment scheduling. The system included custom workflows for different property types and automated valuation requests.",
    results: [
      "340% increase in lead conversion rate",
      "87% reduction in manual administrative work",
      "150% increase in appointment bookings",
      "95% improvement in lead response time"
    ],
    metrics: [
      { label: "Lead Conversion", value: "+340%", description: "From 8% to 35% conversion rate" },
      { label: "Response Time", value: "< 2 min", description: "Average first response time" },
      { label: "Revenue Growth", value: "+280%", description: "Quarterly revenue increase" },
      { label: "Time Saved", value: "15 hrs/week", description: "Administrative time reduction" }
    ],
    testimonial: {
      text: "GHLSPACE transformed our entire business. We went from manually chasing leads to having a system that works 24/7. Our conversion rates skyrocketed and we can focus on what we do best - selling homes.",
      author: "Sarah Johnson",
      position: "CEO, Elite Real Estate Group"
    },
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    ],
    timeline: "3 weeks",
    services: ["GoHighLevel Setup", "CRM Configuration", "Workflow Automation", "Training & Support"]
  },
  "clickfunnels-optimization": {
    id: "clickfunnels-optimization",
    title: "High-Converting Sales Funnel",
    client: "Digital Masters Academy",
    industry: "Online Education",
    challenge: "Digital Masters Academy had a low-converting course sales funnel with a 2.1% conversion rate. Their checkout process was confusing, and they lacked proper upsell sequences, missing significant revenue opportunities.",
    solution: "We redesigned their entire sales funnel using ClickFunnels 2.0, implementing psychological triggers, social proof elements, urgency tactics, and a seamless checkout experience. We added strategic upsells and downsells to maximize customer lifetime value.",
    results: [
      "$2.3M in total revenue generated",
      "1,150% increase in conversion rate",
      "67% increase in average order value",
      "4.2x improvement in customer lifetime value"
    ],
    metrics: [
      { label: "Total Revenue", value: "$2.3M", description: "Generated in 6 months" },
      { label: "Conversion Rate", value: "26.3%", description: "From 2.1% to 26.3%" },
      { label: "Average Order", value: "$1,247", description: "Including upsells" },
      { label: "Customer LTV", value: "$2,890", description: "4.2x improvement" }
    ],
    testimonial: {
      text: "The funnel GHLSPACE built for us is a money-printing machine. We went from struggling to hit $50K months to consistently doing $400K+ months. The ROI has been incredible.",
      author: "Michael Chen",
      position: "Founder, Digital Masters Academy"
    },
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    ],
    timeline: "4 weeks",
    services: ["Funnel Strategy", "ClickFunnels Design", "A/B Testing", "Conversion Optimization"]
  },
  "video-marketing": {
    id: "video-marketing",
    title: "Video Content Creation Campaign",
    client: "FitLife Nutrition",
    industry: "Health & Wellness",
    challenge: "FitLife Nutrition had minimal social media presence and low engagement rates. Their existing video content was inconsistent and failed to drive conversions. They needed a comprehensive video strategy to build brand awareness and drive sales.",
    solution: "We created a complete video marketing strategy including daily social media content, product demonstration videos, customer success stories, and educational content. All videos were optimized for different platforms with proper branding and call-to-actions.",
    results: [
      "580% increase in social media engagement",
      "340% growth in YouTube subscribers",
      "220% increase in website traffic from social",
      "185% boost in online sales"
    ],
    metrics: [
      { label: "Engagement Rate", value: "+580%", description: "Across all social platforms" },
      { label: "Subscribers", value: "125K", description: "YouTube growth in 4 months" },
      { label: "Video Views", value: "2.8M", description: "Total monthly views" },
      { label: "Sales Increase", value: "+185%", description: "From video content" }
    ],
    testimonial: {
      text: "Our video content now drives 60% of our sales. GHLSPACE helped us create a content machine that consistently delivers results. Our brand recognition has exploded.",
      author: "Emma Rodriguez",
      position: "Content Creator & Influencer"
    },
    images: [
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1542744173-7ae9c93e5e7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    ],
    timeline: "6 weeks",
    services: ["Video Strategy", "Content Creation", "Social Media Optimization", "Performance Analytics"]
  }
};

export default function CaseStudy() {
  const [location] = useLocation();
  const caseId = new URLSearchParams(location.split('?')[1] || '').get('id') || 'ghl-crm';
  const caseStudy = caseStudies[caseId];

  if (!caseStudy) {
    return <div>Case study not found</div>;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button 
                variant="ghost" 
                className="text-white mb-6 p-0 hover:bg-transparent"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Button>
              <h1 className="text-5xl font-bold text-white mb-6">{caseStudy.title}</h1>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-white/10 text-white px-4 py-2 rounded-full">{caseStudy.client}</span>
                <span className="bg-white/10 text-white px-4 py-2 rounded-full">{caseStudy.industry}</span>
                <span className="bg-white/10 text-white px-4 py-2 rounded-full">{caseStudy.timeline} Timeline</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {caseStudy.metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="text-center p-6 bg-slate-50 rounded-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-3xl font-bold gradient-text mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold text-slate-900 mb-2">{metric.label}</div>
                  <div className="text-slate-600 text-sm">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">The Challenge</h2>
                <p className="text-lg text-slate-600 leading-relaxed">{caseStudy.challenge}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Solution</h2>
                <p className="text-lg text-slate-600 leading-relaxed">{caseStudy.solution}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Images */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudy.images.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`${caseStudy.title} implementation ${index + 1}`}
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Results Achieved</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {caseStudy.results.map((result, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{result}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <blockquote className="text-2xl text-white leading-relaxed mb-8">
                "{caseStudy.testimonial.text}"
              </blockquote>
              <div className="text-slate-300">
                <div className="font-semibold text-lg">{caseStudy.testimonial.author}</div>
                <div>{caseStudy.testimonial.position}</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[hsl(var(--ghl-blue))] to-[hsl(var(--cf-red))]">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready for Similar Results?</h2>
              <p className="text-xl text-white/90 mb-8">Let's discuss how we can transform your business like we did for {caseStudy.client}.</p>
              <Button 
                className="bg-white text-[hsl(var(--ghl-blue))] px-8 py-4 text-lg font-semibold hover:bg-slate-100"
                onClick={() => {
                  window.location.href = '/#contact';
                }}
              >
                Schedule Your Free Consultation
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}