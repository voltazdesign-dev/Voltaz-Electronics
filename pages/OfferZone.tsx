import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { Timer, Tag, ShoppingBag, ArrowRight, Percent } from 'lucide-react';
import { Link } from 'react-router-dom';

interface OfferZoneProps {
  products: Product[];
}

const OfferZone: React.FC<OfferZoneProps> = ({ products }) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 45, seconds: 30 });

  // Simulate discount data based on existing products
  const offerProducts = products
    .filter((_, i) => i % 3 === 0) // Pick every 3rd product for variety
    .slice(0, 12)
    .map(p => ({
      ...p,
      originalPrice: Math.floor(p.price * 1.3), // Fake original price
      discount: 30
    }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#f7f7f7] dark:bg-black min-h-screen font-sans">
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white pt-16 pb-24 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6 border border-white/30">
            <Tag size={14} /> Limited Time Deal
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter">
            MEGA CLEARANCE <br/> <span className="text-yellow-300">SALE IS LIVE</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Grab premium stage lighting and audio gear at unbeatable prices. Up to 50% OFF on selected categories.
          </p>
          
          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-black/30 backdrop-blur-md rounded-lg p-3 min-w-[80px]">
              <div className="text-3xl font-bold font-mono">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-[10px] uppercase tracking-wider opacity-70">Hours</div>
            </div>
            <div className="bg-black/30 backdrop-blur-md rounded-lg p-3 min-w-[80px]">
              <div className="text-3xl font-bold font-mono">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-[10px] uppercase tracking-wider opacity-70">Mins</div>
            </div>
            <div className="bg-black/30 backdrop-blur-md rounded-lg p-3 min-w-[80px]">
              <div className="text-3xl font-bold font-mono">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-[10px] uppercase tracking-wider opacity-70">Secs</div>
            </div>
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* Offers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerProducts.map(product => (
            <div key={product.id} className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="relative aspect-square bg-gray-100 dark:bg-black p-4">
                <Link to={`/product/${product.id}`} className="block w-full h-full">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal group-hover:scale-110 transition-transform duration-500" 
                  />
                </Link>
                <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                  -{product.discount}%
                </div>
              </div>
              
              <div className="p-5">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{product.category}</div>
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-bold text-gray-900 dark:text-white leading-tight mb-2 line-clamp-2 h-10 hover:text-red-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-2xl font-bold text-red-600">€{product.price}</span>
                  <span className="text-sm text-gray-400 line-through mb-1">€{product.originalPrice}</span>
                </div>

                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5 mb-4 overflow-hidden">
                  <div className="bg-red-500 h-full rounded-full" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                </div>
                <p className="text-xs text-red-500 font-medium mb-4">Almost Sold Out!</p>

                <Link to={`/product/${product.id}`} className="w-full py-2 bg-black dark:bg-white text-white dark:text-black font-bold text-sm rounded-lg hover:opacity-80 transition-opacity flex items-center justify-center gap-2">
                  <ShoppingBag size={16} /> Grab Deal
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default OfferZone;