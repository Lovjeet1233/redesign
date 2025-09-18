import React from 'react';

const BlogCard = ({ post, index }) => {
  const getCategoryColor = (category) => {
    const colors = {
      'Industry Insights': 'bg-accent',
      'Market Research': 'bg-primary',
      'Technology': 'bg-gray-400',
      'Political Analysis': 'bg-secondary',
    };
    return colors[category] || 'bg-gray-400';
  };

  return (
    <article className="group bg-white rounded-lg border border-gray-200 hover:border-accent transition-all duration-300 hover-lift shadow-soft hover:shadow-medium overflow-hidden">
      {/* Thumbnail */}
      <div className="relative overflow-hidden">
        <div className="aspect-video bg-gray-100 flex items-center justify-center relative">
          {/* Keeping original image functionality */}
          <img 
            src={post.thumbnail} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              // Fallback if image doesn't exist
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="w-full h-full bg-gray-100 items-center justify-center hidden">
            <div className="text-center">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-400 text-sm font-body">Blog Thumbnail</p>
            </div>
          </div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-white ${getCategoryColor(post.category)} shadow-soft font-body`}>
            {post.category}
          </span>
        </div>

        {/* Read Time Badge */}
        <div className="absolute top-4 right-4">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium text-gray-600 bg-white/90 backdrop-blur-sm shadow-soft font-body">
            {post.readTime}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Title */}
        <h2 className="font-heading text-2xl font-bold text-primary mb-4 line-clamp-2 group-hover:text-accent transition-colors duration-300">
          {post.title}
        </h2>

        {/* Author and Date */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold font-body">
                {post.author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-accent text-sm font-medium font-body">@{post.author}</p>
            </div>
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-body">{post.date}</span>
          </div>
        </div>

        {/* Excerpt */}
        <p className="text-gray-300 leading-relaxed mb-6 line-clamp-4 font-body">
          {post.excerpt}
        </p>

        {/* Read More Button */}
        <button className="btn-professional px-6 py-3 font-medium hover-lift font-body">
          <span>Read More</span>
          <svg className="inline-block ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default BlogCard;