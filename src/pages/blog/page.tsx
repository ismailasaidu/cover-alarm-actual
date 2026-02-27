
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QuoteModal from '../../components/QuoteModal';

export default function Blog() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // Add Schema.org JSON-LD for blog page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "CoverAlarm Security Blog",
      "description":
        "Latest insights, tips, and updates on security technology, AI monitoring, and protection strategies for Nigerian businesses.",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/blog`,
      "publisher": {
        "@type": "Organization",
        "name": "CoverAlarm Systems",
        "logo":
          "https://static.readdy.ai/image/f38dbee0b97d493b71475a98132a7b29/176a8e2651bf87ff1e704ec65a49fb51.png",
      },
    });
    document.head.appendChild(script);

    return () => {
      const scripts = document.querySelectorAll(
        'script[type="application/ld+json"]'
      );
      scripts.forEach((script) => script.remove());
    };
  }, []);

  const categories = [
    { id: 'all', name: 'All Posts', count: 12 },
    { id: 'security-tips', name: 'Security Tips', count: 4 },
    { id: 'technology', name: 'Technology', count: 3 },
    { id: 'case-studies', name: 'Case Studies', count: 3 },
    { id: 'industry-news', name: 'Industry News', count: 2 },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'How AI Video Monitoring Prevented ₦2.3 Billion Equipment Theft in Lagos',
      excerpt:
        'A detailed case study of how our AI-powered surveillance system detected and prevented a major theft attempt at a Victoria Island construction site.',
      category: 'case-studies',
      author: 'Ridwan Olanihun',
      date: 'December 15, 2024',
      readTime: '8 min read',
      image:
        'https://readdy.ai/api/search-image?query=AI%20security%20camera%20system%20detecting%20theft%20attempt%20at%20Nigerian%20construction%20site%2C%20surveillance%20monitoring%20dashboard%20with%20alerts%2C%20professional%20security%20control%20room%2C%20theft%20prevention%20technology%2C%20Lagos%20construction%20site%20security&width=400&height=250&seq=blog-ai-theft&orientation=landscape',
      featured: true,
    },
    {
      id: 2,
      title: '5 Essential Security Measures Every Nigerian Business Needs',
      excerpt:
        'Protect your business with these proven security strategies that have helped over 500 Nigerian companies prevent crime and reduce losses.',
      category: 'security-tips',
      author: 'Habeebah Shuaib',
      date: 'December 12, 2024',
      readTime: '6 min read',
      image:
        'https://readdy.ai/api/search-image?query=Nigerian%20business%20security%20measures%2C%20CCTV%20cameras%20and%20access%20control%20systems%2C%20professional%20office%20building%20security%2C%20business%20protection%20equipment%2C%20modern%20security%20installation&width=400&height=250&seq=blog-business-security&orientation=landscape',
      featured: false,
    },
    {
      id: 3,
      title: 'GPS Fleet Tracking: How to Stop Fuel Theft and Save Millions',
      excerpt:
        'Learn how GPS tracking and fuel monitoring systems have helped Nigerian companies reduce fuel theft by 95% and save millions in operational costs.',
      category: 'technology',
      author: 'Abdullahi Saidu',
      date: 'December 10, 2024',
      readTime: '7 min read',
      image:
        'https://readdy.ai/api/search-image?query=GPS%20fleet%20tracking%20dashboard%20showing%20Nigerian%20vehicles%2C%20fuel%20monitoring%20system%20interface%2C%20real-time%20vehicle%20tracking%20map%2C%20fleet%20management%20technology%2C%20fuel%20theft%20prevention&width=400&height=250&seq=blog-gps-fleet&orientation=landscape',
      featured: false,
    },
    {
      id: 4,
      title: 'Fire Detection Systems: Early Warning Saves Lives and Property',
      excerpt:
        'Discover how advanced fire detection technology can provide early warnings and automatic emergency response to protect your most valuable assets.',
      category: 'security-tips',
      author: 'Joseph Omozokpia',
      date: 'December 8, 2024',
      readTime: '5 min read',
      image:
        'https://readdy.ai/api/search-image?query=Advanced%20fire%20detection%20system%20in%20Nigerian%20building%2C%20smoke%20sensors%20and%20fire%20alarms%2C%20emergency%20response%20equipment%2C%20fire%20safety%20technology%2C%20professional%20fire%20protection%20installation&width=400&height=250&seq=blog-fire-detection&orientation=landscape',
      featured: false,
    },
    {
      id: 5,
      title: 'Government Security Solutions: Protecting Critical Infrastructure',
      excerpt:
        'How CoverAlarm Systems partners with Nigerian government agencies to secure critical infrastructure and public facilities across the country.',
      category: 'case-studies',
      author: 'Ridwan Olanihun',
      date: 'December 5, 2024',
      readTime: '9 min read',
      image:
        'https://readdy.ai/api/search-image?query=Government%20security%20command%20center%20in%20Nigeria%2C%20large-scale%20surveillance%20monitoring%2C%20critical%20infrastructure%20protection%2C%20government%20building%20security%2C%20professional%20security%20operations&width=400&height=250&seq=blog-government&orientation=landscape',
      featured: false,
    },
    {
      id: 6,
      title: 'The Future of Security: AI and Automation in Nigeria',
      excerpt:
        'Explore how artificial intelligence and automation are revolutionizing security technology and what it means for Nigerian businesses.',
      category: 'technology',
      author: 'Abdullahi Saidu',
      date: 'December 3, 2024',
      readTime: '6 min read',
      image:
        'https://readdy.ai/api/search-image?query=Futuristic%20AI%20security%20technology%2C%20automated%20surveillance%20systems%2C%20artificial%20intelligence%20in%20security%2C%20modern%20Nigerian%20tech%20infrastructure%2C%20advanced%20security%20automation&width=400&height=250&seq=blog-ai-future&orientation=landscape',
      featured: false,
    },
  ];

  const filteredPosts =
    selectedCategory === 'all'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="bg-black/50 backdrop-blur-sm border-b border-blue-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/">
                <img
                  src="https://static.readdy.ai/image/f38dbee0b97d493b71475a98132a7b29/c567d8d1fd4702e852424c0299bd0094.png"
                  alt="CoverAlarm Systems"
                  className="h-8 w-auto sm:h-10 cursor-pointer"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-6 flex items-baseline space-x-6">
                <Link
                  to="/"
                  className="text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium"
                >
                  About Us
                </Link>
                <div className="relative group">
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors cursor-pointer flex items-center text-sm font-medium"
                  >
                    Security Arsenal
                    <i className="ri-arrow-down-s-line ml-1"></i>
                  </a>
                  <div className="absolute top-full left-0 mt-1 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      <Link
                        to="/ai-video-analytics"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                      >
                        AI CCTV Analytics
                      </Link>
                      <Link
                        to="/ai-video-monitoring"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                      >
                        AI Video Monitoring
                      </Link>
                      <Link
                        to="/fuel-monitoring"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                      >
                        Fuel Monitoring
                      </Link>
                      <Link
                        to="/fire-detection"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                      >
                        Fire Detection
                      </Link>
                      <Link
                        to="/gps-fleet-tracking"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                      >
                        GPS Fleet Tracking
                      </Link>
                      <Link
                        to="/government-solutions"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                      >
                        Government Solutions
                      </Link>
                    </div>
                  </div>
                </div>
                <Link
                  to="/blog"
                  className="text-blue-400 px-3 py-2 border-b-2 border-blue-400 text-sm font-medium"
                >
                  Blog
                </Link>
              </div>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex space-x-3">
              <a
                href="https://calendly.com/coveralarm/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-green-600 text-green-400 hover:bg-green-600 hover:text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer font-semibold text-sm"
              >
                📅 Book Demo
              </a>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer font-semibold text-sm"
              >
                Get Free Quote
              </button>
            </div>

            {/* Mobile hamburger button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <i
                  className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}
                ></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-700 bg-black/95 backdrop-blur-sm">
              <div className="px-3 pt-2 pb-3 space-y-1 max-h-screen overflow-y-auto">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-blue-400 px-3 py-3 text-base font-medium hover:bg-gray-800"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-blue-400 px-3 py-3 text-base font-medium hover:bg-gray-800"
                >
                  About Us
                </Link>

                {/* Mobile Services Menu */}
                <div className="px-3 py-2">
                  <div className="text-gray-300 font-medium mb-2">
                    Security Arsenal
                  </div>
                  <div className="pl-4 space-y-1">
                    <Link
                      to="/ai-video-analytics"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-400 hover:text-blue-400 py-2 text-sm"
                    >
                      AI CCTV Analytics
                    </Link>
                    <Link
                      to="/ai-video-monitoring"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-400 hover:text-blue-400 py-2 text-sm"
                    >
                      AI Video Monitoring
                    </Link>
                    <Link
                      to="/fuel-monitoring"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-400 hover:text-blue-400 py-2 text-sm"
                    >
                      Fuel Monitoring
                    </Link>
                    <Link
                      to="/fire-detection"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-400 hover:text-blue-400 py-2 text-sm"
                    >
                      Fire Detection
                    </Link>
                    <Link
                      to="/gps-fleet-tracking"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-400 hover:text-blue-400 py-2 text-sm"
                    >
                      GPS Fleet Tracking
                    </Link>
                    <Link
                      to="/government-solutions"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-400 hover:text-blue-400 py-2 text-sm"
                    >
                      Government Solutions
                    </Link>
                  </div>
                </div>

                <Link
                  to="/bnpl"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-blue-400 px-3 py-3 text-base font-medium hover:bg-gray-800"
                >
                  Buy Now Pay Later
                </Link>
                <Link
                  to="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-blue-400 px-3 py-3 text-base font-medium hover:bg-gray-800 border-l-4 border-blue-400"
                >
                  Blog
                </Link>
                <Link
                  to="/careers"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-blue-400 px-3 py-3 text-base font-medium hover:bg-gray-800"
                >
                  Careers
                </Link>

                {/* Mobile Action Buttons */}
                <div className="pt-4 space-y-3 border-t border-gray-700">
                  <a
                    href="https://calendly.com/coveralarm/demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border border-green-600 text-green-400 hover:bg-green-600 hover:text-white px-4 py-3 rounded-lg text-center block"
                  >
                    📅 Book Demo
                  </a>
                  <button
                    onClick={() => {
                      setIsQuoteModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg"
                  >
                    Get Free Quote
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-gray-900 via-blue-900/20 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Security <span className="text-blue-400">Insights</span> &amp; Updates
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay informed with the latest security technology trends, expert
              tips, and real-world case studies from Nigeria's leading security
              professionals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="https://calendly.com/coveralarm/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
              >
                📅 Schedule Security Consultation
              </a>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
              >
                Get Free Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-red-400">Featured</span> Story
              </h2>
            </div>

            <div className="bg-gray-900/60 border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-400 transition-all">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                      {
                        categories.find(
                          (cat) => cat.id === featuredPost.category
                        )?.name
                      }
                    </span>
                    <span>{featuredPost.date}</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <i className="ri-user-line text-white"></i>
                      </div>
                      <div>
                        <div className="text-white font-medium">
                          {featuredPost.author}
                        </div>
                        <div className="text-gray-400 text-sm">
                          Security Expert
                        </div>
                      </div>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                      Read Full Story
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-gray-900/60 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-400 transition-all hover:scale-105 cursor-pointer"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                      {categories.find((cat) => cat.id === post.category)
                        ?.name}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 text-xs text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <i className="ri-user-line text-white text-xs"></i>
                      </div>
                      <span className="text-gray-400 text-sm">{post.author}</span>
                    </div>
                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Stay{' '}
            <span className="text-blue-400">Informed</span> &amp;{' '}
            <span className="text-green-400">Protected</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get the latest security insights, threat alerts, and expert tips
            delivered to your inbox weekly.
          </p>
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to <span className="text-blue-400">Secure</span> Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Don't wait any longer. Contact us today to protect your assets with
            cutting‑edge security solutions.
          </p>
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get a Free Quote
          </button>
        </div>
      </section>

      {/* Modals */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}
