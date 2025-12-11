import React, { useState } from 'react';
import { Product, User } from '../types';
import { CATEGORIES } from '../constants';
import { generateProductContent } from '../services/geminiService';
import { Plus, Trash2, Edit2, Wand2, Package, Users, Activity, Save, X } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface AdminProps {
  products: Product[];
  onAddProduct: (p: Product) => void;
  onDeleteProduct: (id: string) => void;
  user: User;
}

const Admin: React.FC<AdminProps> = ({ products, onAddProduct, onDeleteProduct, user }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'products'>('dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // Form State
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    category: 'Par lights',
    price: 0,
    description: '',
    features: [],
    image: `https://picsum.photos/400/400?random=${Math.floor(Math.random() * 100)}`
  });

  const handleGenerateAI = async () => {
    if (!formData.name || !formData.category) {
      alert("Please enter a product name and category first.");
      return;
    }
    setIsGenerating(true);
    const data = await generateProductContent(formData.name, formData.category);
    setFormData(prev => ({
      ...prev,
      description: data.description,
      features: data.features
    }));
    setIsGenerating(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return;
    
    const newProduct: Product = {
      id: Date.now().toString(),
      name: formData.name,
      category: formData.category || 'Par lights',
      price: Number(formData.price),
      description: formData.description || '',
      features: formData.features || [],
      image: formData.image || '',
      stock: 100,
      featured: false
    };

    onAddProduct(newProduct);
    setIsModalOpen(false);
    setFormData({ name: '', category: 'Par lights', price: 0, description: '', features: [], image: 'https://picsum.photos/400/400' });
  };

  // Dummy Chart Data
  const chartData = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 2000 },
    { name: 'Apr', sales: 2780 },
    { name: 'May', sales: 1890 },
    { name: 'Jun', sales: 2390 },
  ];

  if (activeTab === 'dashboard') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
          <div className="flex gap-2">
             <button onClick={() => setActiveTab('products')} className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">Manage Products</button>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                <Package size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Products</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{products.length}</h3>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl">
                <Users size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Active Users</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">1,245</h3>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl">
                <Activity size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Monthly Revenue</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">$45,230</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Sales Overview</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#F3F4F6' }}
                  itemStyle={{ color: '#F3F4F6' }}
                />
                <Bar dataKey="sales" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <button onClick={() => setActiveTab('dashboard')} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
             &larr; Back
          </button>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Product Management</h1>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-voltaz-600 hover:bg-voltaz-500 text-white rounded-lg font-medium transition-colors"
        >
          <Plus size={18} /> Add Product
        </button>
      </div>

      {/* Product Table */}
      <div className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Product</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Category</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Price</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Stock</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {products.map(product => (
                <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <img src={product.image} alt="" className="w-10 h-10 rounded-lg object-cover bg-gray-100" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{product.name}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{product.category}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">${product.price}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{product.stock}</td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => onDeleteProduct(product.id)} className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Product Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-dark-card rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center sticky top-0 bg-white dark:bg-dark-card z-10">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Add New Product</h2>
              <button onClick={() => setIsModalOpen(false)}><X className="text-gray-500" /></button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Product Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-voltaz-500 focus:outline-none"
                    placeholder="e.g. Voltaz X1"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
                  <select 
                    value={formData.category}
                    onChange={e => setFormData({...formData, category: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-voltaz-500 focus:outline-none"
                  >
                    {CATEGORIES.filter(c => c !== 'All').map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price ($)</label>
                <input 
                  type="number" 
                  value={formData.price}
                  onChange={e => setFormData({...formData, price: Number(e.target.value)})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-voltaz-500 focus:outline-none"
                  min="0"
                />
              </div>

              {/* AI Section */}
              <div className="bg-voltaz-50 dark:bg-voltaz-900/20 p-4 rounded-xl border border-voltaz-100 dark:border-voltaz-900/50">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-voltaz-700 dark:text-voltaz-300 flex items-center gap-2">
                    <Wand2 size={16} /> AI Content Generator
                  </label>
                  <button 
                    type="button"
                    onClick={handleGenerateAI}
                    disabled={isGenerating}
                    className="text-xs px-3 py-1 bg-voltaz-600 text-white rounded-md hover:bg-voltaz-500 disabled:opacity-50"
                  >
                    {isGenerating ? 'Thinking...' : 'Generate Description'}
                  </button>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Enter a name and category, then click generate to let Gemini AI write the description.</p>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
                    <textarea 
                      value={formData.description}
                      onChange={e => setFormData({...formData, description: e.target.value})}
                      rows={3}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:ring-2 focus:ring-voltaz-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Features (Comma separated)</label>
                    <input 
                      type="text"
                      value={formData.features?.join(', ')}
                      onChange={e => setFormData({...formData, features: e.target.value.split(',').map(s => s.trim())})}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:ring-2 focus:ring-voltaz-500 focus:outline-none"
                      placeholder="e.g. Noise Cancelling, Bluetooth 5.0"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-voltaz-600 hover:bg-voltaz-500 text-white font-bold flex items-center gap-2"
                >
                  <Save size={18} /> Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;