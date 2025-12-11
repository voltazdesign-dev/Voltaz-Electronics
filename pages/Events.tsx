import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Events: React.FC = () => {
  const events = [
    {
      id: 1,
      title: "PALM Expo India 2025",
      date: "May 29 - 31, 2025",
      location: "Bombay Exhibition Centre, Mumbai",
      description: "Join us at India's largest expo for Pro Audio, Lighting, Music & Technology. Voltaz will be showcasing the new V8 Line Array series.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Kerala DJ Fest & Tech Meet",
      date: "August 15, 2025",
      location: "Kochi International Convention Centre",
      description: "A gathering of sound engineers and lighting designers. Experience our hands-on workshop on DMX programming.",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Voltaz Product Launch 2025",
      date: "October 10, 2025",
      location: "Voltaz HQ, Kerala (Live Streamed)",
      description: "Exclusive launch event for our upcoming Smart Stage Lighting series. Open to all partners and dealers.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-white dark:bg-black min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-brand-green uppercase tracking-widest">Mark Your Calendars</span>
          <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mt-4 mb-4">Upcoming Events & Expos</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Meet the team, experience our products live, and connect with the community.
          </p>
        </div>

        <div className="space-y-12">
          {events.map((event) => (
            <div key={event.id} className="flex flex-col md:flex-row bg-gray-50 dark:bg-[#111] rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-brand-green dark:hover:border-brand-green transition-all group">
              <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} className="text-brand-blue" /> {event.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-brand-blue" /> {event.location}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {event.description}
                </p>
                <div>
                  <button className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black dark:text-white border-b border-black dark:border-white pb-1 hover:text-brand-green hover:border-brand-green transition-colors">
                    Register Now <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;