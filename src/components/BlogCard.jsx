import React from 'react';

const BlogCard = ({ post, index }) => {
  const getCategoryColor = (category) => {
    const colors = {
      'Industry Insights': 'from-cyan-500 to-blue-500',
      'Market Research': 'from-purple-500 to-indigo-500',
      'Technology': 'from-green-500 to-teal-500',
      'Political Analysis': 'from-orange-500 to-red-500',
    };
    return colors[category] || 'from-slate-500 to-slate-600';
  };

  return (
    <article className={`group bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden animate-fade-in-up ${
      index % 2 === 0 ? '' : 'delay-200'
    }`}>
      {/* Thumbnail */}
      <div className="relative overflow-hidden">
        <div className="aspect-video bg-slate-700 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500">
          {/* Placeholder for thumbnail - replace with actual image */}
          <img 
            src={post.thumbnail} 
            alt={post.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback if image doesn't exist
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 items-center justify-center hidden">
            <div className="text-center">
              <svg className="w-16 h-16 text-slate-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-slate-500 text-sm">Blog Thumbnail</p>
            </div>
          </div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${getCategoryColor(post.category)} shadow-lg`}>
            {post.category}
          </span>
        </div>

        {/* Read Time Badge */}
        <div className="absolute top-4 right-4">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium text-slate-300 bg-slate-900/80 backdrop-blur-sm">
            {post.readTime}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-4 line-clamp-2 group-hover:text-cyan-400 transition-colors duration-300">
          {post.title}
        </h2>

        {/* Author and Date */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">
                {post.author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-cyan-400 text-sm font-medium">@{post.author}</p>
            </div>
          </div>
          <div className="flex items-center text-slate-400 text-sm">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {post.date}
          </div>
        </div>

        {/* Excerpt */}
        <p className="text-slate-300 leading-relaxed mb-6 line-clamp-4">
          {post.excerpt}
        </p>

        {/* Read More Button */}
        <button className="group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-cyan-500 hover:to-purple-600 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          <span>Read More</span>
          <svg className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>

      {/* Hover effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-500 pointer-events-none"></div>
    </article>
  );
};

export default BlogCard;