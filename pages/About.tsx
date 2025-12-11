import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">About Voltaz</h1>
          <div className="w-16 h-1 bg-brand-green mx-auto"></div>
        </div>

        <div className="prose prose-lg dark:prose-invert mx-auto text-gray-600 dark:text-gray-300">
          <p className="lead text-xl">
            Welcome to <strong>Voltaz Electronics & LED Planet</strong>, your premier destination for high-quality electronics and cutting-edge LED lighting solutions.
          </p>
          <p>
            Established with a vision to bring the latest technology to your doorstep, Voltaz has grown into a trusted name in the electronics retail sector. We specialize in a wide range of products including home appliances, personal gadgets, and industrial-grade LED lighting.
          </p>
          <h3>Our Mission</h3>
          <p>
            Our mission is simple: to provide reliable, innovative, and energy-efficient electronic solutions that enhance the quality of life for our customers. We believe in technology that works for you.
          </p>
          <h3>Why Choose Us?</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Quality Assurance:</strong> We only stock products from reputed brands and verified manufacturers.</li>
            <li><strong>Expert Support:</strong> Our team is knowledgeable and ready to assist you in finding the perfect solution.</li>
            <li><strong>Customer First:</strong> Your satisfaction is our top priority. We offer dedicated after-sales support.</li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
           <div className="bg-gray-50 dark:bg-[#111] p-8 rounded-lg text-center">
             <h3 className="text-4xl font-bold text-brand-green mb-2">1000+</h3>
             <p className="text-sm font-medium uppercase tracking-widest text-gray-500">Happy Customers</p>
           </div>
           <div className="bg-gray-50 dark:bg-[#111] p-8 rounded-lg text-center">
             <h3 className="text-4xl font-bold text-brand-blue mb-2">5+</h3>
             <p className="text-sm font-medium uppercase tracking-widest text-gray-500">Years of Excellence</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
