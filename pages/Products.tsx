import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { CATEGORIES } from '../constants';
import { Search, ChevronLeft, ChevronRight, Maximize2, MessageCircle, Diamond, Flag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductsPageProps {
  products: Product[];
}

const FlagIcon = ({ country }: { country?: string }) => {
  const flags: Record<string, string> = {
    'US': '🇺🇸', 'CN': '🇨🇳', 'HK': '🇭🇰', 'IN': '🇮🇳', 'VN': '🇻🇳', 'DE': '🇩🇪'
  };
  return <span className="text-sm ml-1">{flags[country || ''] || '🌐'}</span>;
};

const ProductsPage: React.FC<ProductsPageProps> = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <div className="bg-[#f7f7f7] dark:bg-black min-h-screen pt-8 pb-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
           <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Marketplace</h1>
           
           {/* Search Bar */}
           <div className="relative w-full md:w-96">
             <input 
               type="text" 
               placeholder="Search 100+ products..." 
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-brand-green"
             />
             <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
           </div>
        </div>

        {/* Categories Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat 
                ? 'bg-black text-white dark:bg-white dark:text-black shadow-md' 
                : 'bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Marketplace Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-3 hover:shadow-lg transition-shadow duration-300 group flex flex-col">
                
                {/* Image Area */}
                <div className="relative aspect-square mb-3 bg-gray-100 dark:bg-black rounded-lg overflow-hidden group-hover:border-gray-300">
                  <Link to={`/product/${product.id}`} className="block w-full h-full">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain p-2 mix-blend-multiply dark:mix-blend-normal transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  
                  {/* Overlay Controls */}
                  <div className="absolute top-2 right-2 flex items-center gap-1 bg-white/90 dark:bg-black/90 backdrop-blur-sm px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                     <input type="checkbox" className="w-3 h-3 accent-black" />
                     <span className="text-[10px] text-gray-600 dark:text-gray-300">Compare</span>
                  </div>

                  <Link to={`/product/${product.id}`} className="absolute bottom-2 left-2 p-1.5 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 hover:bg-white transition-all shadow-sm">
                    <Maximize2 size={14} className="text-gray-600" />
                  </Link>
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-1">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-sm text-gray-700 dark:text-gray-200 leading-snug line-clamp-2 mb-2 min-h-[2.5em] group-hover:text-brand-blue transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  
                  <div className="mb-1">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">€{product.price}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">/ piece</span>
                  </div>
                  
                  <div className="text-[11px] text-gray-500 dark:text-gray-400 mb-3">
                    Min. order: {product.minOrder} piece{product.minOrder !== 1 && 's'}
                  </div>

                  {/* Vendor Info */}
                  <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-between mb-1">
                       <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400 truncate max-w-[120px] hover:underline cursor-pointer">
                         {product.vendor || 'Voltaz Verified'}
                       </span>
                       <div className="flex items-center text-[10px] text-gray-400">
                          <span>{product.yearsActive} yr</span>
                          <FlagIcon country={product.country} />
                       </div>
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      <div className="flex text-orange-400">
                        <Diamond size={10} fill="currentColor" />
                        <Diamond size={10} fill="currentColor" />
                        <Diamond size={10} fill="currentColor" />
                        <Diamond size={10} fill="currentColor" />
                        <Diamond size={10} fill="currentColor" className="opacity-50" />
                      </div>
                      <span className="text-[10px] text-gray-400">({product.reviewCount || 0})</span>
                    </div>

                    {/* Action Button */}
                    <Link 
                      to={`/product/${product.id}`}
                      className="w-full py-1.5 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-xs font-bold hover:border-black hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
                    >
                       View Details
                    </Link>
                  </div>
                </div>

              </div>
            ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-32">
            <h3 className="text-xl text-gray-400">No products found for "{searchQuery}"</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;