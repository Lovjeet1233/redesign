import React from 'react';
import BlogHeader from './BlogHeader';
import BlogCard from './BlogCard';
import Footer from './Footer';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Traditional Online Panel vs. Programmatic Sample",
      author: "Art Padilla-Ponce",
      date: "Thu Nov 07 2019",
      excerpt: "Editor's Note: The state of the online sample is an ongoing source of debate in the survey industry. Given the rapid pace of technology change, it is healthy to have a vigorous debate, and we've certainly had a fair number of submissions on the topic in the past year. Here, Art Padilla gives us his take on the debate over online panels .....",
      thumbnail: "/blog-1.jpeg", // Replace with your actual image path
      category: "Industry Insights",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The importance of race and socioeconomic status to LATAM sample",
      author: "Art Padilla-Ponce",
      date: "Mon Oct 21 2019",
      excerpt: "Editor's note: For many American brands, expanding into Latin America is the next logical step in their strategic growth plan. While direct i .....",
      thumbnail: "/blog-2.jpg", // Replace with your actual image path
      category: "Market Research",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Online DIY Sample Tools, Not A Fit For Most",
      author: "Art Padilla-Ponce",
      date: "Tue Jul 13 2021",
      excerpt: "The concept of \"do-it-yourself\" may bring to mind images of re-tiling the bathroom floor or reseeding the lawn. But DIY goes far beyond home improvement projects. About five years ago, online do-it-yourself sample tools began trending. Sample companies would create these tools for clients at little to no charge to facilitate sample buying. However, it wasn't long before clients realized, like m .....",
      thumbnail: "/blog-3.jpg", // Replace with your actual image path
      category: "Technology",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Hispanic Votes Shift in the 2020 U.S. Presidential Election",
      author: "Art Padilla-Ponce",
      date: "Fri Dec 11 2020",
      excerpt: "Hispanic voters were more divided than ever during the 2020 presidential election. September 15th marks the start of National Hispanic Heritage Month. During this month-long celebration, the contributions and culture of Hispanic and Latino Americans are thrust into the national spotlight and i .....",
      thumbnail: "/blog-4.png", // Replace with your actual image path
      category: "Political Analysis",
      readTime: "7 min read"
    }
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <BlogHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Blogs
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Insights, trends, and expert perspectives on market research and data collection
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-6">
          {/* Navigation breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-slate-400 mb-12">
            <a href="/" className="hover:text-cyan-400 transition-colors">Admin</a>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <a href="/" className="hover:text-cyan-400 transition-colors">Home</a>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">Our Blogs</span>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {/* Load More Section */}
          <div className="text-center mt-16">
            <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
              Load More Articles
              <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;