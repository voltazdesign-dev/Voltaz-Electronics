import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from '../types';
import { Star, Heart, Minus, Plus, ShoppingCart, Share2, ArrowLeft, ChevronRight, Check, ArrowRight } from 'lucide-react';

interface ProductDetailsProps {
  products: Product[];
  onAddToCart?: (product: Product, quantity: number) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ products, onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedImage, setSelectedImage] = useState(0);

  // Scroll to top on id change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-gray-900 dark:text-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/products" className="text-brand-green hover:underline">Back to Marketplace</Link>
      </div>
    </div>
  );

  // Mock data for UI completeness since we don't have full data in the model
  const images = [product.image, product.image, product.image, product.image]; 
  const originalPrice = Math.floor(product.price * 1.35); // Mock original price for discount effect
  const discount = Math.round(((originalPrice - product.price) / originalPrice) * 100);
  
  // Mock Colors
  const colors = [
    { name: 'Standard Black', hex: '#111111' },
    { name: 'Matte White', hex: '#F3F4F6' },
    { name: 'Pro Silver', hex: '#9CA3AF' }
  ];
  const [selectedColor, setSelectedColor] = useState(0);

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-white dark:bg-black min-h-screen font-sans text-gray-900 dark:text-white pb-20 pt-4">
      
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center flex-wrap gap-2 text-xs md:text-sm text-gray-500 font-medium mb-8">
           <Link to="/products" className="hover:text-black dark:hover:text-white flex items-center gap-1 transition-colors px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded-full">
             <ArrowLeft size={14} /> Back
           </Link>
           <span className="text-gray-300">|</span>
           <Link to="/products" className="hover:text-black dark:hover:text-white">Categories</Link>
           <ChevronRight size={14} />
           <span>{product.category}</span>
           <ChevronRight size={14} />
           <span className="text-black dark:text-white font-semibold truncate max-w-[150px] md:max-w-xs">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Images */}
          <div className="space-y-6">
             {/* Main Image */}
             <div className="aspect-square bg-[#F9FAFB] dark:bg-[#0a0a0a] rounded-[2rem] overflow-hidden flex items-center justify-center relative group shadow-inner">
                <img 
                  src={images[selectedImage]} 
                  alt={product.name} 
                  className="w-4/5 h-4/5 object-contain mix-blend-multiply dark:mix-blend-normal p-4 transition-transform duration-700 ease-out group-hover:scale-110" 
                />
                
                {/* Floating Badges */}
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <span className="bg-brand-green text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-green-500/20">
                    In Stock
                  </span>
                  {product.featured && (
                    <span className="bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                      Top Rated
                    </span>
                  )}
                </div>

                <button className="absolute top-6 right-6 w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:text-red-500 transition-colors z-10">
                   <Heart size={20} />
                </button>
             </div>

             {/* Thumbnails */}
             <div className="grid grid-cols-4 gap-4">
                {images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded-2xl bg-[#F9FAFB] dark:bg-[#0a0a0a] p-2 transition-all duration-300 ${
                      selectedImage === idx 
                        ? 'ring-2 ring-brand-green ring-offset-2 dark:ring-offset-black scale-95' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-900 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal" />
                  </button>
                ))}
             </div>
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold px-2 py-1 rounded">
                {discount}% OFF
              </span>
              <div className="flex items-center text-yellow-400 gap-1">
                 <Star size={16} fill="currentColor" />
                 <span className="text-sm font-bold text-black dark:text-white ml-1">{product.rating || 4.8}</span>
                 <span className="text-sm text-gray-400 font-medium">({product.reviewCount || 128} Reviews)</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-[1.1] tracking-tight">
              {product.name}
            </h1>
            
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">${product.price.toLocaleString()}.00</span>
              <span className="text-xl text-gray-400 line-through decoration-2">${originalPrice.toLocaleString()}.00</span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
              {product.description || "Upgrade your setup with this professional-grade equipment crafted for maximum performance and durability. Features premium components and advanced control protocols for seamless integration."}
            </p>

            {/* Colors */}
            <div className="mb-8">
               <span className="text-sm font-bold text-gray-900 dark:text-white block mb-3">Color Available</span>
               <div className="flex gap-3">
                 {colors.map((color, i) => (
                   <button 
                    key={i} 
                    onClick={() => setSelectedColor(i)}
                    className={`w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all ${selectedColor === i ? 'ring-2 ring-brand-green ring-offset-2 dark:ring-offset-black' : ''}`} 
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                   >
                     {selectedColor === i && <Check size={16} className={i === 1 ? 'text-black' : 'text-white'} />}
                   </button>
                 ))}
               </div>
            </div>

            {/* Cart Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
               {/* Quantity */}
               <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-full h-14 w-full sm:w-auto">
                 <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-14 h-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-l-full transition-colors">
                   <Minus size={18} />
                 </button>
                 <span className="w-10 text-center font-bold text-lg">{quantity}</span>
                 <button onClick={() => setQuantity(quantity + 1)} className="w-14 h-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-r-full transition-colors">
                   <Plus size={18} />
                 </button>
               </div>
               
               <button className="flex-1 bg-brand-green hover:bg-[#00a300] text-white font-bold rounded-full h-14 px-8 transition-all shadow-xl shadow-green-500/20 text-lg">
                 Buy Now
               </button>
               
               <button 
                 onClick={() => onAddToCart && onAddToCart(product, quantity)}
                 className="flex-1 border-2 border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white font-bold rounded-full h-14 px-8 transition-all flex items-center justify-center gap-2 text-lg"
               >
                 <ShoppingCart size={20} /> Add To Cart
               </button>
            </div>

            {/* Meta Info */}
            <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
               <div className="flex gap-2">
                 <span className="font-bold text-gray-900 dark:text-white min-w-[100px]">Item Code:</span> 
                 <span className="font-mono">{product.id}24-VZ</span>
               </div>
               <div className="flex gap-2">
                 <span className="font-bold text-gray-900 dark:text-white min-w-[100px]">Category:</span> 
                 <span>{product.category}</span>
               </div>
               <div className="flex gap-2">
                 <span className="font-bold text-gray-900 dark:text-white min-w-[100px]">Tags:</span> 
                 <span>Professional, Stage, {product.category}, Equipment</span>
               </div>
            </div>
          </div>
        </div>

        {/* Tabs Content */}
        <div className="mt-24">
           <div className="flex border-b border-gray-200 dark:border-gray-800 mb-8 overflow-x-auto no-scrollbar">
              {['Product Description', 'Specifications', 'Customer Reviews'].map(tab => (
                 <button
                   key={tab}
                   onClick={() => setActiveTab(tab.toLowerCase())}
                   className={`px-6 py-4 font-bold text-sm uppercase tracking-widest whitespace-nowrap border-b-2 transition-all mr-4 ${
                     activeTab === tab.toLowerCase() 
                       ? 'border-black dark:border-white text-black dark:text-white' 
                       : 'border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
                   }`}
                 >
                   {tab}
                 </button>
              ))}
           </div>
           
           <div className="py-4 text-gray-600 dark:text-gray-300 leading-relaxed max-w-5xl animate-fade-in">
              {activeTab === 'product description' && (
                <div className="space-y-6 text-lg">
                  <p>
                    {product.description} This {product.category} is meticulously engineered for the demanding professional environment. 
                    Offering superior performance, reliability, and precision control, it is the ideal choice for concerts, theaters, 
                    and large-scale installations.
                  </p>
                  <p>
                    Built with high-grade components and housed in a durable chassis, this unit withstands the rigors of touring. 
                    The advanced cooling system ensures whisper-quiet operation, making it suitable for noise-sensitive environments 
                    like broadcasting studios and houses of worship.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                     <div className="bg-gray-50 dark:bg-[#111] p-6 rounded-xl">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">High Efficiency</h4>
                        <p className="text-sm">Optimized power consumption with maximum output.</p>
                     </div>
                     <div className="bg-gray-50 dark:bg-[#111] p-6 rounded-xl">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">Durable Build</h4>
                        <p className="text-sm">Rugged construction designed for touring and rental.</p>
                     </div>
                     <div className="bg-gray-50 dark:bg-[#111] p-6 rounded-xl">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">Precise Control</h4>
                        <p className="text-sm">Advanced DMX protocols for granular adjustment.</p>
                     </div>
                  </div>
                </div>
              )}
              {activeTab === 'specifications' && (
                <div className="bg-gray-50 dark:bg-[#111] rounded-2xl p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                     <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-800">
                        <span className="font-bold text-gray-900 dark:text-white">Power Consumption</span>
                        <span>{product.category === 'Audio' ? '1200W' : '350W'}</span>
                     </div>
                     <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-800">
                        <span className="font-bold text-gray-900 dark:text-white">Voltage</span>
                        <span>AC 100-240V, 50/60Hz</span>
                     </div>
                     <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-800">
                        <span className="font-bold text-gray-900 dark:text-white">Control Mode</span>
                        <span>DMX512, Auto, Master/Slave</span>
                     </div>
                     <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-800">
                        <span className="font-bold text-gray-900 dark:text-white">IP Rating</span>
                        <span>IP20 (Indoor) / IP65 (Outdoor options)</span>
                     </div>
                     <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-800">
                        <span className="font-bold text-gray-900 dark:text-white">Weight</span>
                        <span>8.5 KG</span>
                     </div>
                     {product.features?.map((feat, i) => (
                       <div key={i} className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-800">
                          <span className="font-bold text-gray-900 dark:text-white">Feature {i+1}</span>
                          <span>{feat}</span>
                       </div>
                     ))}
                  </div>
                </div>
              )}
              {activeTab === 'customer reviews' && (
                <div className="space-y-6">
                   <div className="flex items-center gap-4 mb-8 bg-gray-50 dark:bg-[#111] p-6 rounded-2xl">
                      <div className="text-5xl font-bold text-gray-900 dark:text-white">4.8</div>
                      <div>
                         <div className="flex text-yellow-400 mb-1">
                            <Star size={20} fill="currentColor" />
                            <Star size={20} fill="currentColor" />
                            <Star size={20} fill="currentColor" />
                            <Star size={20} fill="currentColor" />
                            <Star size={20} fill="currentColor" className="text-gray-300 dark:text-gray-600" />
                         </div>
                         <p className="text-sm text-gray-500">Based on 128 Reviews</p>
                      </div>
                      <button className="ml-auto bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full font-bold text-sm">Write a Review</button>
                   </div>
                   
                   {[1, 2, 3].map((review) => (
                     <div key={review} className="border-b border-gray-100 dark:border-gray-800 pb-6">
                        <div className="flex items-center justify-between mb-2">
                           <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-700 dark:to-gray-900 flex items-center justify-center font-bold">JD</div>
                              <div>
                                 <div className="font-bold text-gray-900 dark:text-white">John Doe</div>
                                 <div className="flex text-yellow-400 text-xs">
                                    <Star size={12} fill="currentColor" />
                                    <Star size={12} fill="currentColor" />
                                    <Star size={12} fill="currentColor" />
                                    <Star size={12} fill="currentColor" />
                                    <Star size={12} fill="currentColor" />
                                 </div>
                              </div>
                           </div>
                           <span className="text-xs text-gray-400">2 weeks ago</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-3">
                           I purchased this for our main auditorium and the difference is night and day. 
                           The beams are sharp, the colors are vivid, and the build quality feels premium. 
                           Voltaz support helped me with the initial DMX patching. Highly recommended!
                        </p>
                     </div>
                   ))}
                </div>
              )}
           </div>
        </div>

        {/* Explore Related Products */}
        <div className="mt-24 pt-12 border-t border-gray-100 dark:border-gray-900">
           <div className="flex justify-between items-end mb-8">
              <div>
                <span className="text-xs font-bold text-brand-green uppercase tracking-widest">You May Also Like</span>
                <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mt-2">Explore Related Products</h2>
              </div>
              <Link to="/products" className="hidden sm:flex items-center gap-2 text-sm font-bold border-b border-black dark:border-white pb-1">
                View All <ArrowRight size={14} />
              </Link>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map(rel => (
                <Link to={`/product/${rel.id}`} key={rel.id} className="group block">
                   <div className="aspect-[4/5] bg-[#F9FAFB] dark:bg-[#111] rounded-2xl mb-4 overflow-hidden relative">
                      <img src={rel.image} alt={rel.name} className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500 mix-blend-multiply dark:mix-blend-normal" />
                      
                      {rel.price < 500 && (
                        <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-md">
                          SALE
                        </span>
                      )}
                      
                      {/* Quick Action Overlay */}
                      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/50 to-transparent">
                         <button className="w-full bg-white text-black py-2 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-gray-100 shadow-lg">
                           Quick View
                         </button>
                      </div>
                   </div>
                   <h3 className="font-bold text-gray-900 dark:text-white truncate text-lg group-hover:text-brand-green transition-colors">{rel.name}</h3>
                   <div className="flex items-center justify-between mt-1">
                      <span className="text-gray-500 dark:text-gray-400 font-medium">${rel.price.toLocaleString()}</span>
                      <div className="flex text-yellow-400 text-xs gap-0.5">
                         <Star size={12} fill="currentColor" /> 4.8
                      </div>
                   </div>
                </Link>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;