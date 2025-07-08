import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-[hsl(var(--ghl-blue))] to-[hsl(var(--cf-red))] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-2xl font-bold gradient-text">GHLSPACE</span>
            </div>
            <p className="text-slate-300 mb-6">Transforming businesses with premium digital solutions, automation, and video content.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[hsl(var(--ghl-blue))] transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[hsl(var(--ghl-blue))] transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[hsl(var(--ghl-blue))] transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[hsl(var(--ghl-blue))] transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#" className="hover:text-[hsl(var(--ghl-blue))] transition-colors">GoHighLevel Setup</a></li>
              <li><a href="#" className="hover:text-[hsl(var(--ghl-blue))] transition-colors">ClickFunnels Design</a></li>
              <li><a href="#" className="hover:text-[hsl(var(--ghl-blue))] transition-colors">Video Editing</a></li>
              <li><a href="#" className="hover:text-[hsl(var(--ghl-blue))] transition-colors">CRM Automation</a></li>
              <li><a href="#" className="hover:text-[hsl(var(--ghl-blue))] transition-colors">Sales Funnels</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-slate-300">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-[hsl(var(--ghl-blue))] transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-[hsl(var(--ghl-blue))] transition-colors">Portfolio</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-[hsl(var(--ghl-blue))] transition-colors">Testimonials</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-[hsl(var(--ghl-blue))] transition-colors">Contact</button></li>
              <li><a href="#" className="hover:text-[hsl(var(--ghl-blue))] transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-3 text-slate-300">
              <li>hello@ghlspace.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Business Ave<br />Tech City, TC 12345</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">&copy; 2025 GHLSPACE. All rights reserved. | Privacy Policy | Terms of Service</p>
            <div className="flex items-center space-x-6 text-slate-400 text-sm">
              <span>🏆 500+ Projects Delivered</span>
              <span>💰 $50M+ Revenue Generated</span>
              <span>⭐ 98% Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
