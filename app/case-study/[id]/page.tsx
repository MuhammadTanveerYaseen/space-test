'use client';

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { ArrowLeft, ExternalLink, Calendar, DollarSign, TrendingUp, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

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

const caseStudyData: Record<string, CaseStudyData> = {
  "ghl-automation": {
    id: "ghl-automation",
    title: "E-commerce Brand Revenue Automation",
    client: "TechGear Solutions",
    industry: "E-commerce Technology",
    challenge: "TechGear Solutions was struggling with manual lead follow-up, inconsistent customer communication, and lost opportunities. They were converting only 2.1% of website visitors and had no systematic approach to nurture leads through their sales funnel.",
    solution: "We implemented a comprehensive GoHighLevel automation system with multi-channel follow-up sequences, behavior-triggered campaigns, abandoned cart recovery, and personalized customer journeys. The system included SMS, email, and voicemail automation with smart lead scoring.",
    results: [
      "Conversion rate increased from 2.1% to 8.7% in 90 days",
      "Monthly recurring revenue grew by 340%",
      "Customer acquisition cost reduced by 60%",
      "Lead response time improved from 4 hours to 2 minutes",
      "Customer lifetime value increased by 180%"
    ],
    metrics: [
      { label: "Revenue Increase", value: "$2.3M", description: "Additional annual revenue generated" },
      { label: "Conversion Rate", value: "8.7%", description: "Up from 2.1% baseline" },
      { label: "Response Time", value: "2 min", description: "Automated instant responses" },
      { label: "ROI", value: "1,150%", description: "Return on automation investment" }
    ],
    testimonial: {
      text: "GHLSPACE transformed our entire sales process. The automation system they built not only saved us countless hours but actually increased our revenue by over 300%. Our customers love the instant, personalized responses.",
      author: "Sarah Johnson",
      position: "CEO, TechGear Solutions"
    },
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    ],
    timeline: "90 days",
    services: ["GoHighLevel Setup", "Automation Workflows", "Lead Scoring", "SMS/Email Campaigns"]
  },
  "clickfunnels-optimization": {
    id: "clickfunnels-optimization",
    title: "SaaS Conversion Rate Optimization",
    client: "CloudFlow Analytics",
    industry: "SaaS Technology",
    challenge: "CloudFlow Analytics had a promising SaaS product but their conversion funnel was underperforming. With a 1.8% conversion rate and high customer acquisition costs, they needed a complete funnel overhaul to scale profitably.",
    solution: "We redesigned their entire ClickFunnels strategy with conversion-optimized landing pages, strategic upsell sequences, social proof integration, and A/B tested elements. We implemented advanced tracking, heat mapping analysis, and psychological triggers throughout the funnel.",
    results: [
      "Conversion rate jumped from 1.8% to 26.3%",
      "Customer acquisition cost reduced by 70%",
      "Average order value increased by 145%",
      "Monthly recurring revenue grew by 580%",
      "Churn rate decreased by 40%"
    ],
    metrics: [
      { label: "Conversion Rate", value: "26.3%", description: "From 1.8% original rate" },
      { label: "Revenue Growth", value: "580%", description: "Monthly recurring revenue increase" },
      { label: "AOV Increase", value: "145%", description: "Average order value improvement" },
      { label: "CAC Reduction", value: "70%", description: "Customer acquisition cost savings" }
    ],
    testimonial: {
      text: "The team at GHLSPACE didn't just improve our funnels - they revolutionized our entire customer acquisition strategy. Our conversion rates are now industry-leading, and we're scaling profitably like never before.",
      author: "Michael Chen",
      position: "Founder, CloudFlow Analytics"
    },
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    ],
    timeline: "120 days",
    services: ["Funnel Design", "A/B Testing", "Conversion Optimization", "Analytics Setup"]
  },
  "video-content": {
    id: "video-content",
    title: "Viral Video Content Strategy",
    client: "FitLife Academy",
    industry: "Health & Fitness",
    challenge: "FitLife Academy wanted to expand their reach and establish themselves as thought leaders in the fitness industry. Their existing content was getting minimal engagement, and they needed a video strategy that would drive massive growth and conversions.",
    solution: "We developed a comprehensive video content strategy with professionally edited workout videos, client transformation stories, educational content, and social media optimization. Our approach included viral hooks, strategic posting schedules, and cross-platform optimization.",
    results: [
      "Monthly video views increased to 2.8M",
      "Social media following grew by 580%",
      "Course enrollment increased by 350%",
      "Brand awareness improved by 400%",
      "Generated 125K new subscribers across platforms"
    ],
    metrics: [
      { label: "Monthly Views", value: "2.8M", description: "Across all platforms" },
      { label: "Follower Growth", value: "580%", description: "Organic social media growth" },
      { label: "New Subscribers", value: "125K", description: "Gained in 6 months" },
      { label: "Engagement Rate", value: "12.4%", description: "Average across platforms" }
    ],
    testimonial: {
      text: "GHLSPACE's video strategy completely transformed our brand presence. We went from unknown to industry leaders in just 6 months. The quality and engagement of their video content is absolutely phenomenal.",
      author: "David Rodriguez",
      position: "Founder, FitLife Academy"
    },
    images: [
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    ],
    timeline: "180 days",
    services: ["Video Production", "Content Strategy", "Social Media Optimization", "Brand Development"]
  }
};

export default function CaseStudy() {
  const params = useParams();
  const id = params.id as string;
  const caseStudy = caseStudyData[id];

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white py-4">
        <div className="container mx-auto px-6">
          <Link href="/" className="flex items-center space-x-2 w-fit">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {caseStudy.services.map((service, index) => (
                <Badge key={index} variant="secondary" className="bg-white/20 text-white">
                  {service}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">{caseStudy.title}</h1>
            <p className="text-xl text-slate-300 mb-8">
              {caseStudy.client} • {caseStudy.industry}
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-[hsl(var(--ghl-blue))]" />
                <span>{caseStudy.timeline}</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-[hsl(var(--cf-red))]" />
                <span>High Impact Results</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudy.metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{metric.value}</div>
                <div className="font-semibold text-slate-900 mb-1">{metric.label}</div>
                <div className="text-sm text-slate-600">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">!</span>
                  </div>
                  The Challenge
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">{caseStudy.challenge}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <div className="w-8 h-8 bg-[hsl(var(--ghl-blue))] rounded-full flex items-center justify-center mr-3">
                    <CheckCircle className="text-white h-5 w-5" />
                  </div>
                  Our Solution
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">{caseStudy.solution}</p>
              </motion.div>
            </div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Results Delivered</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-start space-x-3 p-6 bg-green-50 rounded-lg">
                    <CheckCircle className="text-green-500 h-6 w-6 mt-1 flex-shrink-0" />
                    <p className="text-slate-700 font-medium">{result}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-slate-900 text-white p-12 rounded-2xl text-center mb-16"
            >
              <div className="text-4xl text-[hsl(var(--ghl-blue))] mb-6">"</div>
              <p className="text-xl italic mb-8 leading-relaxed">{caseStudy.testimonial.text}</p>
              <div>
                <div className="font-bold text-lg">{caseStudy.testimonial.author}</div>
                <div className="text-slate-300">{caseStudy.testimonial.position}</div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Ready for Similar Results?</h2>
              <p className="text-lg text-slate-600 mb-8">
                Let's discuss how we can transform your business with proven strategies and systems.
              </p>
              <Link href="/#contact">
                <Button size="lg" className="bg-gradient-to-r from-[hsl(var(--ghl-blue))] to-[hsl(var(--cf-red))] text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform">
                  Get Your Free Strategy Call
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}