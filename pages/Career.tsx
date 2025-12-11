import React from 'react';
import { Briefcase, MapPin, DollarSign, Clock, ArrowRight, CheckCircle, Send } from 'lucide-react';

const Career: React.FC = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Lighting Technician",
      department: "Technical",
      type: "Full-time",
      location: "Kochi, Kerala",
      salary: "₹35k - ₹50k / month",
      description: "We are looking for an experienced technician to handle DMX programming and installation for large-scale events."
    },
    {
      id: 2,
      title: "Sales Executive - Pro Audio",
      department: "Sales",
      type: "Full-time",
      location: "Bangalore",
      salary: "₹25k - ₹40k + Comm.",
      description: "Drive sales for our new line array systems. Must have prior experience in audio equipment sales."
    },
    {
      id: 3,
      title: "Customer Support Specialist",
      department: "Support",
      type: "Remote / Hybrid",
      location: "Kerala",
      salary: "₹20k - ₹30k / month",
      description: "Handle customer inquiries, process complaints, and ensure client satisfaction via phone and email."
    },
    {
      id: 4,
      title: "Electronics Repair Engineer",
      department: "Service",
      type: "Full-time",
      location: "Kochi, Kerala",
      salary: "₹30k - ₹45k / month",
      description: "Chip-level service and repair of moving heads, amplifiers, and LED processors."
    }
  ];

  return (
    <div className="bg-white dark:bg-black min-h-screen font-sans">
      
      {/* Hero Section */}
      <div className="bg-gray-50 dark:bg-[#111] py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-6">
            Join the <span className="text-brand-green">Voltaz</span> Revolution
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We are innovators, engineers, and creators building the future of professional stage lighting and audio in India. Come build with us.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Why Join Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 border border-gray-100 dark:border-gray-800 rounded-2xl bg-white dark:bg-dark-card hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <DollarSign size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Competitive Pay</h3>
            <p className="text-gray-500 dark:text-gray-400">Industry-leading salaries with performance bonuses and commission structures.</p>
          </div>
          <div className="p-8 border border-gray-100 dark:border-gray-800 rounded-2xl bg-white dark:bg-dark-card hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-xl flex items-center justify-center mb-6">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Health & Wellness</h3>
            <p className="text-gray-500 dark:text-gray-400">Comprehensive health insurance for you and your family, plus paid sick leave.</p>
          </div>
          <div className="p-8 border border-gray-100 dark:border-gray-800 rounded-2xl bg-white dark:bg-dark-card hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-xl flex items-center justify-center mb-6">
              <Briefcase size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Growth Opportunities</h3>
            <p className="text-gray-500 dark:text-gray-400">Regular training workshops, expo visits, and a clear career progression path.</p>
          </div>
        </div>

        {/* Open Positions */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Open Positions</h2>
        <div className="space-y-6 mb-24">
          {jobs.map(job => (
            <div key={job.id} className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-gray-50 dark:bg-[#111] rounded-xl border border-gray-200 dark:border-gray-800 group hover:border-brand-green transition-colors">
              <div className="flex-1">
                 <div className="flex items-center gap-3 mb-2">
                   <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand-green transition-colors">{job.title}</h3>
                   <span className="px-3 py-1 bg-white dark:bg-gray-800 text-xs font-bold uppercase rounded-full border border-gray-200 dark:border-gray-700">{job.department}</span>
                 </div>
                 <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
                   <span className="flex items-center gap-1"><MapPin size={14}/> {job.location}</span>
                   <span className="flex items-center gap-1"><Clock size={14}/> {job.type}</span>
                   <span className="flex items-center gap-1"><DollarSign size={14}/> {job.salary}</span>
                 </div>
              </div>
              <div className="md:text-right flex flex-col items-start md:items-end gap-3 md:w-1/3">
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                  {job.description}
                </p>
                <button className="text-sm font-bold text-brand-blue flex items-center gap-1 hover:gap-2 transition-all">
                  Apply Now <ArrowRight size={14}/>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* General Application */}
        <div className="bg-brand-green text-white rounded-3xl p-12 text-center relative overflow-hidden">
           <div className="relative z-10 max-w-2xl mx-auto">
             <h2 className="text-3xl font-bold mb-6">Don't see a role for you?</h2>
             <p className="text-white/90 mb-8 text-lg">
               We are always looking for talented individuals. Send us your CV and tell us how you can make a difference at Voltaz.
             </p>
             <a href="mailto:careers@voltaz.in" className="inline-flex items-center gap-2 bg-white text-brand-green px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors">
               <Send size={18} /> Email Your CV
             </a>
           </div>
           
           {/* Decor */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
        </div>

      </div>
    </div>
  );
};

export default Career;