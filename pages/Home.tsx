import React, { useState } from 'react';
import BentoGrid from '../components/BentoGrid';
import { Product } from '../types';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomeProps {
  products: Product[];
}

const VIDEO_SLIDES = [
  {
    id: 1,
    title: "BEAM 230",
    role: "MOVING HEAD",
    image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    title: "V8 ARRAY",
    role: "LINE SOURCE",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    title: "LASER RGB",
    role: "ANIMATION",
    image: "https://images.unsplash.com/photo-1563330232-5711c05370d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 4,
    title: "LED PAR 54",
    role: "WASH LIGHT",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 5,
    title: "SMOKE 1500",
    role: "ATMOSPHERE",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  }
];

const BRANDS = [
  { name: 'Osram', logo: 'OSRAM' },
  { name: 'Philips', logo: 'PHILIPS' },
  { name: 'Pioneer DJ', logo: 'Pioneer DJ' },
  { name: 'JBL Pro', logo: 'JBL PROFESSIONAL' },
  { name: 'Yamaha', logo: 'YAMAHA' },
  { name: 'Shure', logo: 'SHURE' },
  { name: 'Sennheiser', logo: 'SENNHEISER' },
  { name: 'Martin', logo: 'Martin' },
  { name: 'Clay Paky', logo: 'CLAY PAKY' },
  { name: 'RCF', logo: 'RCF' },
];

const Home: React.FC<HomeProps> = ({ products }) => {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);
  const [activeSlide, setActiveSlide] = useState(3);

  return (
    <div className="bg-white dark:bg-black font-sans">
      {/* Hero / Bento Section */}
      <section className="mb-24">
        <BentoGrid />
      </section>

      {/* Video Accordion Section */}
      <section className="mb-24 bg-white dark:bg-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <span className="text-xs font-bold text-brand-green uppercase tracking-widest">Latest Demos</span>
             <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 text-gray-900 dark:text-white">See It In Action</h2>
           </div>
           
           <div className="flex flex-col md:flex-row gap-4 h-[600px] w-full">
             {VIDEO_SLIDES.map((slide) => (
               <div
                 key={slide.id}
                 onClick={() => setActiveSlide(slide.id)}
                 className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                   activeSlide === slide.id 
                     ? 'flex-[10] shadow-2xl' 
                     : 'flex-[2] grayscale hover:grayscale-0'
                 }`}
               >
                 {/* Background Image */}
                 <img 
                   src={slide.image} 
                   alt={slide.title} 
                   className="absolute inset-0 w-full h-full object-cover" 
                 />
                 
                 {/* Dark Overlay for inactive slides */}
                 <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${activeSlide === slide.id ? 'opacity-0' : 'opacity-100 hover:opacity-20'}`} />

                 {/* Active Content */}
                 <div className={`absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 ${activeSlide === slide.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    {/* Centered Play Button */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer group">
                            <Play fill="black" size={24} className="ml-1 md:ml-2 text-black group-hover:scale-110 transition-transform" />
                        </div>
                    </div>
                    {/* Bottom Text */}
                    <div className="transform transition-transform duration-700 delay-100 translate-y-0">
                      <h3 className="text-3xl md:text-5xl font-black text-white uppercase mb-2 leading-none">{slide.title}</h3>
                      <p className="text-sm md:text-base font-bold text-white/90 uppercase tracking-[0.2em]">{slide.role}</p>
                    </div>
                 </div>

                 {/* Inactive Content - Vertical Text */}
                 <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${activeSlide !== slide.id ? 'opacity-100' : 'opacity-0'}`}>
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-[0.2em] whitespace-nowrap -rotate-90 drop-shadow-md">{slide.title}</h3>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Brand Marquee Section */}
      <section className="mb-24 border-y border-gray-100 dark:border-gray-800 py-12 bg-gray-50 dark:bg-[#0a0a0a]">
         <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Our Trusted Partners</p>
         </div>
         <div className="overflow-hidden relative w-full">
            <div className="flex w-[200%] animate-marquee">
              {/* First Set */}
              <div className="flex justify-around min-w-[50%] px-4">
                {BRANDS.map((brand, i) => (
                   <div key={`b1-${i}`} className="flex items-center justify-center px-8">
                      <span className="text-2xl md:text-3xl font-serif font-bold text-gray-300 dark:text-gray-700 whitespace-nowrap">{brand.logo}</span>
                   </div>
                ))}
              </div>
              {/* Second Set (Duplicate for seamless loop) */}
              <div className="flex justify-around min-w-[50%] px-4">
                {BRANDS.map((brand, i) => (
                   <div key={`b2-${i}`} className="flex items-center justify-center px-8">
                      <span className="text-2xl md:text-3xl font-serif font-bold text-gray-300 dark:text-gray-700 whitespace-nowrap">{brand.logo}</span>
                   </div>
                ))}
              </div>
            </div>
         </div>
      </section>

      {/* Trending Products - Clean Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Selected for you</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mt-3 mb-4">Trending Products</h2>
          <div className="w-12 h-0.5 bg-black dark:bg-white mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {featuredProducts.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-gray-900 mb-6 rounded-lg">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                 {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <span className="bg-white dark:bg-black text-black dark:text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors inline-block">
                    View Details
                  </span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-base font-medium text-gray-900 dark:text-white mb-1 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-serif italic">
                  ${product.price}.00
                </p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-1 hover:border-black dark:hover:border-white transition-all">
             View All Products <ArrowRight size={14} />
           </Link>
        </div>
      </section>

      {/* Minimal CTA */}
      <section className="bg-gray-50 dark:bg-[#0a0a0a] py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
             The Professional Standard
           </h2>
           <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg leading-relaxed">
             Join our professional network to receive exclusive offers on stage lighting and audio equipment.
           </p>
           <div className="flex flex-col sm:flex-row justify-center max-w-md mx-auto border-b border-gray-300 dark:border-gray-700 pb-2">
             <input 
               type="email" 
               placeholder="Enter your email address" 
               className="bg-transparent flex-1 outline-none text-gray-900 dark:text-white placeholder-gray-400 py-2 text-center sm:text-left"
             />
             <button className="text-xs font-bold uppercase tracking-widest text-black dark:text-white hover:text-gray-600 py-2">
               Subscribe
             </button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;