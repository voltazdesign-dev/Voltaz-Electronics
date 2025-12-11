import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BentoGrid: React.FC = () => {
  return (
    <div className="space-y-4">
      
      {/* Primary Hero Section - Split Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px] md:h-[700px]">
        {/* Left Side: Content */}
        <div className="relative bg-[#f8f8f8] dark:bg-[#111] flex items-center justify-center p-12 overflow-hidden group">
          <div className="relative z-10 text-center md:text-left max-w-md">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">New Arrival</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Pro Stage <br/> <span className="italic font-light text-brand-green">Lighting</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Illuminate your performance with our new Sharpy Beam series. 
              Precision engineering for professional venues.
            </p>
            <Link 
              to="/products" 
              className="inline-block border-b border-black dark:border-white pb-1 text-black dark:text-white text-sm font-semibold uppercase tracking-widest hover:text-gray-600 dark:hover:text-gray-300 hover:border-gray-600 transition-all"
            >
              Shop Collection
            </Link>
          </div>
          {/* Decorative element */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 0 L100 0 L100 100 Z" fill="currentColor"/>
             </svg>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative h-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Stage Lighting" 
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out hover:scale-105"
          />
        </div>
      </div>

      {/* Secondary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[500px]">
         {/* Card 1 */}
         <div className="relative group overflow-hidden bg-gray-50 dark:bg-[#0a0a0a]">
            <img 
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="DJ Equipment" 
              className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/50 to-transparent">
              <h3 className="text-2xl font-serif text-white mb-2">Club Audio</h3>
              <Link to="/products?cat=Audio" className="text-white/80 text-xs font-bold uppercase tracking-widest hover:text-white flex items-center gap-2">
                View Systems <ArrowRight size={14} />
              </Link>
            </div>
         </div>

         {/* Card 2 - Center Text */}
         <div className="relative group bg-black text-white flex flex-col justify-center items-center text-center p-8">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Clearance</span>
            <h3 className="text-3xl font-serif mb-6">Laser Show <br/> Bundles</h3>
             <Link 
              to="/products" 
              className="px-8 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
            >
              Shop Deals
            </Link>
         </div>

         {/* Card 3 */}
         <div className="relative group overflow-hidden bg-gray-50 dark:bg-[#0a0a0a]">
            <img 
              src="https://images.unsplash.com/photo-1514525253440-b393452e8d26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Concert Lights" 
              className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
            />
             <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/50 to-transparent">
              <h3 className="text-2xl font-serif text-white mb-2">Concert Ready</h3>
              <Link to="/products?cat=Stage" className="text-white/80 text-xs font-bold uppercase tracking-widest hover:text-white flex items-center gap-2">
                Equip Now <ArrowRight size={14} />
              </Link>
            </div>
         </div>
      </div>
    </div>
  );
};

export default BentoGrid;