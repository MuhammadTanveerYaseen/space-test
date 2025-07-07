import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  message: string;
}

export default function Contact() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, x: -50 }}
            animate={titleVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-slate-600 mb-8">Ready to start your digital transformation? Let's discuss how we can help you achieve your goals.</p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[hsl(var(--ghl-blue))] rounded-lg flex items-center justify-center">
                  <Mail className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Email Us</h4>
                  <p className="text-slate-600">hello@ghlspace.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[hsl(var(--cf-red))] rounded-lg flex items-center justify-center">
                  <Phone className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Call Us</h4>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[hsl(var(--purple-gradient-start))] rounded-lg flex items-center justify-center">
                  <MapPin className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Office</h4>
                  <p className="text-slate-600">123 Business Ave, Suite 100<br />Tech City, TC 12345</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            ref={formRef}
            className="bg-slate-50 rounded-2xl p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={formVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="block text-sm font-semibold text-slate-900 mb-2">First Name</Label>
                  <Input 
                    id="firstName"
                    {...register("firstName", { required: "First name is required" })}
                    placeholder="John"
                    className="w-full"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName" className="block text-sm font-semibold text-slate-900 mb-2">Last Name</Label>
                  <Input 
                    id="lastName"
                    {...register("lastName", { required: "Last name is required" })}
                    placeholder="Doe"
                    className="w-full"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">Email</Label>
                <Input 
                  id="email"
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  placeholder="john@company.com"
                  className="w-full"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="service" className="block text-sm font-semibold text-slate-900 mb-2">Service Interest</Label>
                <Select onValueChange={(value) => setValue("service", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gohighlevel">GoHighLevel Services</SelectItem>
                    <SelectItem value="clickfunnels">ClickFunnels Services</SelectItem>
                    <SelectItem value="video-editing">Video Editing Services</SelectItem>
                    <SelectItem value="complete-transformation">Complete Digital Transformation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">Message</Label>
                <Textarea 
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[hsl(var(--ghl-blue))] to-[hsl(var(--cf-red))] text-white py-4 text-lg font-semibold hover:scale-105 transition-transform"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
