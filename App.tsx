import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { User, Product, UserRole } from './types';
import { INITIAL_PRODUCTS } from './constants';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductsPage from './pages/Products';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Shipping from './pages/Shipping';
import FAQ from './pages/FAQ';
import Services from './pages/Services';
import RegisterComplaint from './pages/RegisterComplaint';
import Events from './pages/Events';
import Blog from './pages/Blog';
import OfferZone from './pages/OfferZone';
import Career from './pages/Career';
import ProductDetails from './pages/ProductDetails';

// Simple WhatsApp Icon Component for the button
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const App: React.FC = () => {
  // --- State ---
  const [user, setUser] = useState<User | null>(null);
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // --- Effects ---
  useEffect(() => {
    // Check system preference for dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    
    // Check localStorage for persisted session
    const savedUser = localStorage.getItem('voltaz_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // --- Handlers ---
  const handleLogin = (email: string, role: UserRole) => {
    const newUser: User = {
      id: Date.now().toString(),
      name: role === 'admin' ? 'Admin User' : email.split('@')[0],
      email,
      role,
      avatar: 'https://i.pravatar.cc/150?u=' + email
    };
    setUser(newUser);
    localStorage.setItem('voltaz_user', JSON.stringify(newUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('voltaz_user');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleAddProduct = (product: Product) => {
    setProducts([product, ...products]);
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  // --- Protected Route Helper ---
  const ProtectedRoute = ({ children, roleRequired }: { children: React.ReactElement, roleRequired?: UserRole }) => {
    if (!user) return <Navigate to="/login" replace />;
    if (roleRequired && user.role !== roleRequired) return <Navigate to="/" replace />;
    return children;
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
        <Navbar 
          user={user} 
          onLogout={handleLogout} 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/products" element={<ProductsPage products={products} />} />
            <Route path="/product/:id" element={<ProductDetails products={products} />} />
            <Route path="/offers" element={<OfferZone products={products} />} />
            <Route path="/careers" element={<Career />} />
            
            <Route path="/services" element={<Services />} />
            <Route path="/complaints" element={<RegisterComplaint />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blog" element={<Blog />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/faq" element={<FAQ />} />
            
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute roleRequired="admin">
                  <Admin 
                    products={products} 
                    onAddProduct={handleAddProduct}
                    onDeleteProduct={handleDeleteProduct}
                    user={user!}
                  />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/login" 
              element={user ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} 
            />
             <Route 
              path="/register" 
              element={user ? <Navigate to="/" /> : <Register onRegister={handleLogin} />} 
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <Footer />
        
        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/+918086660122" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
          title="Chat with us on WhatsApp"
        >
          <WhatsAppIcon />
        </a>
      </div>
    </Router>
  );
};

export default App;