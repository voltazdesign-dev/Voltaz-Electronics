import React from 'react';

const Shipping: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-8">Shipping & Returns</h1>
        <div className="prose dark:prose-invert text-gray-600 dark:text-gray-300">
          
          <h3>Shipping Policy</h3>
          <p>We strive to deliver products purchased from Voltaz in excellent condition and in the fastest time possible.</p>
          <ul>
            <li><strong>Delivery Time:</strong> Standard delivery time is 3-5 business days.</li>
            <li><strong>Shipping Charges:</strong> Free shipping on all orders above ₹500. A flat rate of ₹50 applies for orders below ₹500.</li>
          </ul>

          <h3>Return & Refund Policy</h3>
          <p>We have a "no questions asked" return policy which entitles all our customers to return the product at the time of delivery if due to some reason they are not satisfied with the quality or freshness of the product.</p>
          
          <h4>Conditions for Returns</h4>
          <ul>
            <li>Products must be unused and in their original packaging.</li>
            <li>Return request must be raised within 7 days of delivery.</li>
            <li>Receipt or proof of purchase is required.</li>
          </ul>

          <h3>Cancellations</h3>
          <p>You can cancel your order before it is dispatched. If the order is already dispatched, you can refuse it at the time of delivery.</p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
