import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
        <div className="prose dark:prose-invert text-gray-600 dark:text-gray-300">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h3>1. Introduction</h3>
          <p>Voltaz Electronics respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>

          <h3>2. Data We Collect</h3>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows: Identity Data, Contact Data, and Technical Data.</p>

          <h3>3. How We Use Your Data</h3>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          </ul>

          <h3>4. Contact Details</h3>
          <p>If you have any questions about this privacy policy or our privacy practices, please contact us at: contact@voltaz.in</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
