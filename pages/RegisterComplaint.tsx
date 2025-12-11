import React, { useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

const RegisterComplaint: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white dark:bg-black min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Complaint Registered</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Your complaint has been successfully registered. Ticket #89234 has been created. Our support team will contact you within 24 hours.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-brand-blue hover:text-blue-600 font-medium underline"
          >
            Register another complaint
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-black min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">Register Complaint</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Facing an issue with a product or service? Let us know and we'll resolve it as soon as possible.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-[#111] p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:outline-none" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                <input type="tel" className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:outline-none" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Order ID (Optional)</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:outline-none" placeholder="#ORD-..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Product Name</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Issue Type</label>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:outline-none">
                <option>Product Defect</option>
                <option>Delivery Issue</option>
                <option>Service Request</option>
                <option>Billing Issue</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description of Issue</label>
              <textarea rows={5} className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:outline-none" required></textarea>
            </div>

            <div className="flex items-start gap-3 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <AlertCircle size={20} className="text-red-500 shrink-0 mt-0.5" />
              <p className="text-sm text-red-600 dark:text-red-400">
                Please provide clear images of the product if it is physically damaged. You will receive an email to upload images after submitting this form.
              </p>
            </div>

            <button type="submit" className="w-full bg-black dark:bg-white text-white dark:text-black font-bold py-3 rounded-lg hover:opacity-80 transition-opacity">
              Submit Complaint
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterComplaint;