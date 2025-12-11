import React from 'react';
import { ArrowRight, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "Understanding DMX512: A Beginner's Guide",
      excerpt: "Learn the basics of DMX lighting control, how to address fixtures, and create your first light show.",
      author: "Alex V.",
      date: "Mar 10, 2025",
      readTime: "5 min read",
      category: "Tutorial",
      image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Active vs Passive Speakers: What's Best for You?",
      excerpt: "We break down the pros and cons of powered (active) and passive PA systems to help you decide.",
      author: "Sarah J.",
      date: "Mar 05, 2025",
      readTime: "8 min read",
      category: "Audio Guides",
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "5 Maintenance Tips for Moving Head Lights",
      excerpt: "Extend the life of your expensive fixtures with these simple cleaning and maintenance routines.",
      author: "Mike R.",
      date: "Feb 28, 2025",
      readTime: "4 min read",
      category: "Maintenance",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "The Future of Stage Lighting: LED vs Lamp",
      excerpt: "Is the traditional discharge lamp dead? We explore why LED engines are taking over the main stage.",
      author: "Voltaz Team",
      date: "Feb 15, 2025",
      readTime: "6 min read",
      category: "Industry News",
      image: "https://images.unsplash.com/photo-1501386761106-fa747390ea36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-white dark:bg-black min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Insights & Updates</span>
          <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mt-4 mb-4">Voltaz Blog</h1>
          <div className="w-16 h-1 bg-brand-green mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col group cursor-pointer">
              <div className="relative aspect-video overflow-hidden rounded-xl mb-6 bg-gray-100 dark:bg-gray-900">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white dark:bg-black px-3 py-1 text-xs font-bold uppercase tracking-wider text-black dark:text-white rounded-sm">
                  {post.category}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span className="flex items-center gap-1"><User size={12}/> {post.author}</span>
                  <span className="flex items-center gap-1"><Clock size={12}/> {post.readTime}</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-green transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-blue-600">
                  Read Article <ArrowRight size={14} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;