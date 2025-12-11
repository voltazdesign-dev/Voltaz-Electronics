import React, { useState } from 'react';
import { UserRole } from '../types';
import { Link } from 'react-router-dom';

interface LoginProps {
  onLogin: (email: string, role: UserRole) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      // Simple mock validation
      if (isAdmin && password !== 'admin123') {
        alert("Incorrect admin password (hint: admin123)");
        return;
      }
      onLogin(email, isAdmin ? 'admin' : 'user');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white dark:bg-dark-card p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome Back</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Sign in to your Voltaz account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-voltaz-500 focus:outline-none transition-all"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-voltaz-500 focus:outline-none transition-all"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={isAdmin} 
                onChange={(e) => setIsAdmin(e.target.checked)}
                className="rounded border-gray-300 text-voltaz-600 focus:ring-voltaz-500" 
              />
              <span className="text-sm text-gray-600 dark:text-gray-400">Login as Admin</span>
            </label>
            <a href="#" className="text-sm font-medium text-voltaz-600 hover:text-voltaz-500">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-voltaz-600 hover:bg-voltaz-500 text-white font-bold rounded-lg shadow-lg shadow-voltaz-500/30 transition-all transform hover:scale-[1.02]"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Don't have an account? 
          <Link to="/register" className="ml-1 font-medium text-voltaz-600 hover:text-voltaz-500">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
