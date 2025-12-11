import React from 'react';
import { Facebook, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black text-gray-900 dark:text-white border-t border-gray-100 dark:border-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div>
               <h3 className="text-3xl font-extrabold tracking-tighter text-brand-green leading-none">VOLTAZ<sup className="text-xs text-black dark:text-white">®</sup></h3>
               <p className="text-[0.6rem] font-bold tracking-widest text-brand-blue uppercase">Electronics & LED Planet</p>
            </div>
            
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              Your one-stop destination for premium electronics and LED solutions. Quality you can trust.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/voltaz.led.9/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-colors"><Facebook size={20}/></a>
              <a href="https://www.instagram.com/voltazindia/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E4405F] transition-colors"><Instagram size={20}/></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li><Link to="/about" className="hover:text-brand-green transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-brand-green transition-colors">Services</Link></li>
              <li><Link to="/careers" className="hover:text-brand-green transition-colors">Careers</Link></li>
              <li><Link to="/events" className="hover:text-brand-green transition-colors">Expo & Events</Link></li>
              <li><Link to="/blog" className="hover:text-brand-green transition-colors">Our Blog</Link></li>
              <li><Link to="/contact" className="hover:text-brand-green transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Support Links */}
           <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li><Link to="/complaints" className="hover:text-brand-green transition-colors">Register Complaint</Link></li>
              <li><Link to="/shipping" className="hover:text-brand-green transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-green transition-colors">Privacy Policy</Link></li>
              <li><Link to="/faq" className="hover:text-brand-green transition-colors">FAQs</Link></li>
              <li className="flex items-center gap-2 mt-4">
                 <Phone size={14} className="text-brand-blue"/> <span className="text-gray-900 dark:text-white font-medium">+91 80866 60122</span>
              </li>
            </ul>
          </div>

          {/* Google Map Integration */}
          <div className="w-full h-48 md:h-full min-h-[150px] bg-gray-100 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.841584855428!2d76.319762!3d10.029875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c4465555555%3A0x0!2zMTDCsDAxJzQ3LjYiTiA3NsKwMTknMTEuMSJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Voltaz Location"
             ></iframe>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Voltaz Electronics & LED Planet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;