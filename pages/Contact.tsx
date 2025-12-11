import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">Contact Us</h1>
          <p className="text-gray-500 dark:text-gray-400">We'd love to hear from you. Drop us a line or visit our store.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-[#111] p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
               <div className="space-y-6">
                 <div className="flex items-start gap-4">
                   <div className="p-3 bg-brand-green/10 text-brand-green rounded-lg">
                     <Phone size={24} />
                   </div>
                   <div>
                     <p className="text-sm font-bold text-gray-900 dark:text-white">Phone</p>
                     <p className="text-gray-500 dark:text-gray-400 mt-1">+91 80866 60122</p>
                   </div>
                 </div>
                 
                 <div className="flex items-start gap-4">
                   <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-lg">
                     <Mail size={24} />
                   </div>
                   <div>
                     <p className="text-sm font-bold text-gray-900 dark:text-white">Email</p>
                     <p className="text-gray-500 dark:text-gray-400 mt-1">contact@voltaz.in</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="p-3 bg-purple-500/10 text-purple-500 rounded-lg">
                     <MapPin size={24} />
                   </div>
                   <div>
                     <p className="text-sm font-bold text-gray-900 dark:text-white">Location</p>
                     <p className="text-gray-500 dark:text-gray-400 mt-1">
                       Voltaz Electronics & LED Planet<br/>
                       Kerala, India
                     </p>
                   </div>
                 </div>
               </div>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-lg px-4 py-3 outline-none focus:border-brand-green dark:text-white" />
                <input type="text" placeholder="Last Name" className="w-full bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-lg px-4 py-3 outline-none focus:border-brand-green dark:text-white" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-lg px-4 py-3 outline-none focus:border-brand-green dark:text-white" />
              <textarea rows={4} placeholder="Message" className="w-full bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-lg px-4 py-3 outline-none focus:border-brand-green dark:text-white"></textarea>
              <button className="w-full bg-brand-green hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-colors">Send Message</button>
            </form>
          </div>

          {/* Large Map */}
          <div className="h-[500px] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg">
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
      </div>
    </div>
  );
};

export default Contact;
