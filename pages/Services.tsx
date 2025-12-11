import React from 'react';
import { Mic2, Lightbulb, Music, Settings, Wrench, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Lightbulb size={32} />,
      title: "Stage Lighting Design",
      description: "Custom lighting layouts for concerts, theaters, and events. We design immersive visual experiences using the latest beam, wash, and spot fixtures."
    },
    {
      icon: <Mic2 size={32} />,
      title: "Pro Audio Installation",
      description: "Complete sound system setup for auditoriums, clubs, and houses of worship. Precision tuning and acoustic analysis included."
    },
    {
      icon: <Wrench size={32} />,
      title: "Maintenance & Repair",
      description: "Expert repair services for all your electronics, moving heads, and audio gear. Annual maintenance contracts available."
    },
    {
      icon: <Settings size={32} />,
      title: "System Integration",
      description: "Seamless integration of audio, video, and lighting systems. Centralized control solutions for ease of use."
    },
    {
      icon: <Music size={32} />,
      title: "Event Production Support",
      description: "On-site technical support for your major events. Our engineers ensure your show runs without a glitch."
    },
    {
      icon: <Headphones size={32} />,
      title: "Acoustic Consulting",
      description: "Professional advice on room acoustics and soundproofing to maximize the performance of your audio equipment."
    }
  ];

  return (
    <div className="bg-white dark:bg-black min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">Our Expertise</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mt-4 mb-6">Services & Solutions</h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Beyond products, we provide end-to-end solutions for the entertainment industry. 
            From concept to execution, Voltaz is your technical partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 dark:bg-[#111] p-8 rounded-2xl hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors group">
              <div className="w-12 h-12 bg-white dark:bg-black rounded-xl flex items-center justify-center text-brand-green mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-brand-green/10 rounded-3xl p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            Contact our engineering team for a free consultation regarding your next project.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-brand-green text-white px-8 py-3 rounded-lg font-bold uppercase tracking-wide hover:bg-green-600 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;