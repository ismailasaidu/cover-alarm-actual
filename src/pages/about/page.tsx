
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from '../../components/ContactModal';
import QuoteModal from '../../components/QuoteModal';

export default function AboutUs() {
  const [activeService, setActiveService] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');

  useEffect(() => {
    setIsVisible(true);
    
    // Add Schema.org JSON-LD for about page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "About UsPage",
      "name": "About Us CoverAlarm Systems",
      "description": "Learn about CoverAlarm Systems, Nigeria's fast-growing security technology company providing cutting-edge solutions that combine AI, automation, and human expertise.",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/about`,
      "mainEntity": {
        "@type": "Organization",
        "name": "CoverAlarm Systems",
        "description": "A fast-growing Nigerian security technology company providing cutting-edge solutions that combine AI, automation, and human expertise to protect homes, businesses, fleets, and entire communities.",
        "foundingDate": "2020",
        "numberOfEmployees": "17+",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "NG",
          "addressRegion": "Lagos"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+234-814-554-0554",
          "email": "info@coveralarm.com",
          "contactType": "customer service"
        },
        "employee": [
          {
            "@type": "Person",
            "name": "Ridwan Olanihun",
            "jobTitle": "CEO & Founder"
          },
          {
            "@type": "Person",
            "name": "Abdullahi Saidu",
            "jobTitle": "Creative Director"
          },
          {
            "@type": "Person",
            "name": "Habeebah Shuaib",
            "jobTitle": "Operations Lead"
          },
          {
            "@type": "Person",
            "name": "Joseph Omozokpia",
            "jobTitle": "IT Support/Automation Engineer"
          }
        ]
      }
    });
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  const services = [
    {
      icon: 'ri-camera-line',
      title: 'AI Video Monitoring',
      description: '24/7 surveillance powered by smart detection systems'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'GPS Tracking & Fleet Management',
      description: 'Real-time tracking of vehicles, assets, and fuel consumption'
    },
    {
      icon: 'ri-fire-line',
      title: 'Fire Alarm Monitoring',
      description: 'Early detection and instant alerts to protect lives and property'
    },
    {
      icon: 'ri-oil-line',
      title: 'Fuel Monitoring',
      description: 'Advanced sensors and dashboards to eliminate fuel theft and wastage'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Drone & Aerial Surveillance',
      description: 'Expanding coverage with eyes in the sky'
    },
    {
      icon: 'ri-shield-user-line',
      title: 'Private Security Guards',
      description: 'Skilled professionals ready for fast action when needed'
    },
    {
      icon: 'ri-government-line',
      title: 'Governmental Security Solutions',
      description: 'Large-scale systems for public safety and infrastructure protection'
    },
    {
      icon: 'ri-credit-card-line',
      title: 'Buy Now Pay Later (BNPL)',
      description: 'Making security affordable and accessible without delays'
    }
  ];

  const values = [
    {
      icon: 'ri-shield-check-line',
      title: 'Trust',
      description: 'Security starts with confidence'
    },
    {
      icon: 'ri-eye-line',
      title: 'Accountability',
      description: 'Every action is trackable and transparent'
    },
    {
      icon: 'ri-star-line',
      title: 'Excellence',
      description: 'No shortcuts — only the highest standards'
    },
    {
      icon: 'ri-chat-3-line',
      title: 'Communication',
      description: 'Clear, timely, and honest updates'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Innovation',
      description: 'Constantly evolving with AI and modern tech'
    },
    {
      icon: 'ri-heart-line',
      title: 'Service',
      description: 'Because behind every system is a life worth protecting'
    }
  ];

  const teamMembers = [
    {
      name: 'Ridwan Olanihun',
      role: 'CEO & Founder',
      image: 'https://static.readdy.ai/image/f38dbee0b97d493b71475a98132a7b29/0e712ef97ca2a3ab33295ef17f288645.png',
      description: 'Visionary leader with 12+ years in security technology. Former consultant for multinational corporations, passionate about protecting Nigerian businesses.',
      expertise: ['Strategic Leadership', 'Security Consulting', 'Business Development']
    },
    {
      name: 'Abdullahi Saidu',
      role: 'Chief Technical Officer',
      image: 'https://static.readdy.ai/image/f38dbee0b97d493b71475a98132a7b29/9eadd4fabe2c94c61bd925e43ce43b2a.png',
      description: 'Chief Technology Officer leading our technical innovation and system architecture. Oversees all technology development and ensures cutting‑edge security solutions.',
      expertise: ['AI Development', 'System Architecture', 'Technical Innovation']
    },
    {
      name: 'Habeebah Shuaib',
      role: 'Operations Lead',
      image: 'https://static.readdy.ai/image/f38dbee0b97d493b71475a98132a7b29/108a29a221043fcc36afec445428c8d4.png',
      description: 'Operations specialist with expertise in security systems deployment. Ensures seamless installation and 24/7 monitoring services across Nigeria.',
      expertise: ['Operations Management', 'System Deployment', 'Quality Assurance']
    },
    {
      name: 'Joseph Omozokpia',
      role: 'IT Support & Automation Engineer',
      image: 'https://static.readdy.ai/image/f38dbee0b97d493b71475a98132a7b29/928544e9e52c47396cd9a1a8435daf9f.png',
      description: 'IT support specialist ensuring optimal system performance and providing technical assistance. Maintains our IT infrastructure and resolves technical issues efficiently.',
      expertise: ['IT Infrastructure', 'Automation', 'Technical Support']
    },
    {
      name: 'Bash Ibrahim',
      role: 'Systems Integrator',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20Nigerian%20male%20CCTV%20installer%20technician%2C%20confident%20Black%20African%20security%20camera%20specialist%20in%20work%20uniform%2C%20Nigerian%20technical%20installation%20expert%20portrait%2C%20security%20equipment%20and%20cameras%20background%2C%20skilled%20Black%20African%20technician%20presence%2C%20hands-on%20expertise&width=200&height=200&seq=cctv-bash-african&orientation=squarish',
      description: 'Expert systems integrator with 8+ years of experience. Specializes in integrating complex security systems and ensuring seamless connectivity across all platforms.',
      expertise: ['System Integration', 'Hardware Installation', 'Network Configuration']
    },
    {
      name: 'Shina Adeshina',
      role: 'Senior Systems Integrator',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20Nigerian%20male%20CCTV%20installer%20technician%20specialist%20in%20technical%20uniform%2C%20Black%20African%20surveillance%20systems%20expert%20portrait%2C%20professional%20headshot%20of%20Nigerian%20security%20technician%2C%20CCTV%20equipment%20and%20installation%20tools%20background%2C%20experienced%20African%20field%20technician%2C%20skilled%20Black%20African%20professional&width=200&height=200&seq=cctv-shina-african&orientation=squarish',
      description: 'Senior systems integrator with expertise in complex security network integration. Handles large-scale commercial system integrations with precision and efficiency.',
      expertise: ['Large-scale Integration', 'Commercial Systems', 'Project Management']
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="bg-black/90 backdrop-blur-sm border-b border-red-500/30 sticky top-0 z-50">
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
  <div className="ml-6 flex items-baseline space-x-4 xl:space-x-6">
    <Link to="/" className="text-gray-300 hover:text-red-400 px-2 xl:px-3 py-2 transition-colors cursor-pointer text-sm font-medium">
      Home
    </Link>
    <Link to="/about" className="text-red-400 px-2 xl:px-3 py-2 border-b-2 border-red-400 text-sm font-medium">
      About Us
    </Link>
    <div className="relative group">
      <a href="#services" className="text-gray-300 hover:text-red-400 px-2 xl:px-3 py-2 transition-colors cursor-pointer flex items-center text-sm font-medium">
        Core Security Services
        <i className="ri-arrow-down-s-line ml-1"></i>
      </a>
      <div className="absolute top-full left-0 mt-1 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="py-2">
          <Link to="/ai-video-monitoring" className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800">
            AI Video Monitoring
          </Link>
          <Link to="/ai-video-analytics" className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800">
            AI CCTV Analytics
          </Link>
          <Link to="/fire-detection" className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800">
            Fire Detection
          </Link>
          <Link to="/cover-alarm-monitoring" className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800">
            Alarm Monitoring
          </Link>
          <Link to="/enterprise-ai" className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800">
            Enterprise AI
          </Link>
          <Link to="/retail-agriculture-manufacturing" className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800">
            Retail, Agriculture & Manufacturing
          </Link>
        </div>
      </div>
    </div>
    <div className="relative group">
      <a href="#other-services" className="text-gray-300 hover:text-red-400 px-2 xl:px-3 py-2 transition-colors cursor-pointer flex items-center text-sm font-medium">
        Other Services
        <i className="ri-arrow-down-s-line ml-1"></i>
      </a>
      <div className="absolute top-full left-0 mt-1 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="py-2">
          <Link to="/fleet-management" className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800">
            Fleet Management
          </Link>
          <Link to="/government-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800">
            Government Solutions
          </Link>
          <Link to="/government-smart-cities" className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800">
            Smart Cities
          </Link>
          <Link to="/vehicle-ai-cctv" className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800">
            Vehicle AI CCTV
          </Link>
        </div>
      </div>
    </div>
    <Link to="/blog" className="text-gray-300 hover:text-red-400 px-2 xl:px-3 py-2 transition-colors cursor-pointer text-sm font-medium">
      Blog
    </Link>
  </div>
</div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex space-x-2 xl:space-x-3">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-3 xl:px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer font-semibold text-sm"
              >
                🚨 EMERGENCY
              </button>
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-white text-black hover:bg-gray-200 px-3 xl:px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer font-semibold text-sm"
              >
                Deploy Protection
              </button>
            </div>

            {/* Mobile hamburger button */}
            <div className="lg:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white transition-colors cursor-pointer">
                <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-700 bg-black/95 backdrop-blur-sm">
              <div className="px-3 pt-2 pb-3 space-y-1 max-h-screen overflow-y-auto">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-red-400 px-3 py-3 text-base font-medium hover:bg-gray-800">
                  Home
                </Link>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-red-400 px-3 py-3 text-base font-medium border-l-4 border-red-400 bg-red-900/20">
                  About Us
                </Link>
                
                {/* Mobile Services Menu */}
                <div className="px-3 py-2">
                  <div className="text-gray-300 font-medium mb-2">Core Security Services</div>
                  <div className="pl-4 space-y-1">
                    <Link to="/ai-video-monitoring" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-400 hover:text-red-400 py-2 text-sm">
                      AI Video Monitoring
                    </Link>
                    <Link to="/ai-video-analytics" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-400 hover:text-red-400 py-2 text-sm">
                      AI CCTV Analytics
                    </Link>
                    <Link to="/fire-detection" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-400 hover:text-red-400 py-2 text-sm">
                      Fire Detection
                    </Link>
                    <Link to="/cover-alarm-monitoring" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-400 hover:text-red-400 py-2 text-sm">
                      Alarm Monitoring
                    </Link>
                    <Link to="/enterprise-ai" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-400 hover:text-red-400 py-2 text-sm">
                      Enterprise AI
                    </Link>
                    <Link to="/retail-agriculture-manufacturing" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-400 hover:text-red-400 py-2 text-sm">
                      Retail, Agriculture & Manufacturing
                    </Link>
                  </div>
                </div>

                {/* Mobile Other Services Menu */}
                <div className="px-3 py-2">
                  <div className="text-gray-300 font-medium mb-2">Other Services</div>
                  <div className="pl-4 space-y-1">
                    <Link to="/fleet-management" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-400 hover:text-red-400 py-2 text-sm">
                      Fleet Management
                    </Link>
                    <Link to="/government-solutions" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-400 hover:text-red-400 py-2 text-sm">
                      Government Solutions
                    </Link>
                    <Link to="/government-smart-cities" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-400 hover:text-red-400 py-2 text-sm">
                      Smart Cities
                    </Link>
                    <Link to="/vehicle-ai-cctv" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-400 hover:text-red-400 py-2 text-sm">
                      Vehicle AI CCTV
                    </Link>
                  </div>
                </div>

                <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-red-400 px-3 py-3 text-base font-medium hover:bg-gray-800">
                  Blog
                </Link>
                
                <div className="pt-4 space-y-3 border-t border-gray-700">
                  <button onClick={() => { setIsContactModalOpen(true); setIsMobileMenuOpen(false); }} className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg">
                    🚨 EMERGENCY
                  </button>
                  <button onClick={() => { setIsQuoteModalOpen(true); setIsMobileMenuOpen(false); }} className="w-full bg-white text-black hover:bg-gray-200 px-4 py-3 rounded-lg">
                    Deploy Protection
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Responsive */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-blue-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-2 h-2 bg-green-500 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-10 w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-3000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-20">
          <div className="w-full">
            {/* Main Hero Content */}
            <div className="text-center mb-16">
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center bg-red-500/10 border border-red-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2 sm:mr-3"></div>
                  <span className="text-red-400 font-mono text-xs sm:text-sm tracking-wider">NIGERIA'S SECURITY REVOLUTION</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none mb-6 sm:mb-8 px-4">
                  <div className="bg-gradient-to-r from-white via-red-400 to-white bg-clip-text text-transparent">
                    ABOUT
                  </div>
                  <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-500 bg-clip-text text-transparent">
                    COVERALARM
                  </div>
                </h1>

                <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                    A fast-growing Nigerian security technology company providing cutting-edge solutions that combine 
                    <span className="text-red-400 font-semibold"> AI, automation, and human expertise</span> to protect homes, 
                    businesses, fleets, and entire communities.
                  </p>
                </div>

                {/* Interactive Stats Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 px-4">
                  <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="text-2xl sm:text-3xl font-bold text-red-400 mb-1 sm:mb-2">2020</div>
                    <div className="text-gray-300 text-xs sm:text-sm">Founded</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">17+</div>
                    <div className="text-gray-300 text-xs sm:text-sm">Team Members</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1 sm:mb-2">500+</div>
                    <div className="text-gray-300 text-xs sm:text-sm">Protected Sites</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1 sm:mb-2">6</div>
                    <div className="text-gray-300 text-xs sm:text-sm">Nigerian States</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
                  <button 
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap shadow-lg shadow-red-500/25"
                  >
                    GET PROTECTED NOW
                  </button>
                  <button 
                    onClick={() => setIsContactModalOpen(true)}
                    className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
                  >
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values - Responsive Tabbed Interface */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black/80 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              OUR <span className="text-red-400">FOUNDATION</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              The principles and vision that drive everything we do
            </p>
          </div>

          {/* Tab Navigation - Responsive */}
          <div className="flex justify-center mb-8 sm:mb-12 px-4">
            <div className="bg-gray-800/50 rounded-xl sm:rounded-2xl p-1.5 sm:p-2 border border-gray-700 w-full sm:w-auto">
              <div className="flex space-x-1 sm:space-x-2">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`flex-1 sm:flex-none px-4 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all cursor-pointer whitespace-nowrap text-sm sm:text-base ${
                    activeTab === 'mission'
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Mission
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`flex-1 sm:flex-none px-4 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all cursor-pointer whitespace-nowrap text-sm sm:text-base ${
                    activeTab === 'vision'
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Vision
                </button>
                <button
                  onClick={() => setActiveTab('values')}
                  className={`flex-1 sm:flex-none px-4 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all cursor-pointer whitespace-nowrap text-sm sm:text-base ${
                    activeTab === 'values'
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Values
                </button>
              </div>
            </div>
          </div>

          {/* Tab Content - Responsive */}
          <div className="min-h-[400px]">
            {activeTab === 'mission' && (
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center">
                      <i className="ri-target-line text-2xl sm:text-3xl text-red-400"></i>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">Our Mission</h3>
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                    To redefine security in Nigeria through innovation, trust, and relentless vigilance — ensuring that every client feels protected, always.
                  </p>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="ri-check-line text-red-400 text-xs sm:text-sm"></i>
                      </div>
                      <span className="text-sm sm:text-base text-gray-300">Protecting Nigerian businesses and communities</span>
                    </div>
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="ri-check-line text-red-400 text-xs sm:text-sm"></i>
                      </div>
                      <span className="text-sm sm:text-base text-gray-300">Combining cutting‑edge technology with human expertise</span>
                    </div>
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="ri-check-line text-red-400 text-xs sm:text-sm"></i>
                      </div>
                      <span className="text-sm sm:text-base text-gray-300">Delivering 24/7 peace of mind through innovation</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://static.readdy.ai/image/f38dbee0b97d493b71475a98132a7b29/38be2e9b73cd59a15cec125d7c95f620.jpeg"
                    alt="Our Mission"
                    className="rounded-xl sm:rounded-2xl w-full h-64 sm:h-80 object-cover shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl sm:rounded-2xl"></div>
                </div>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="relative lg:order-2">
                  <img
                    src="https://readdy.ai/api/search-image?query=Futuristic%20African%20cityscape%20with%20advanced%20security%20technology%2C%20surveillance%20drones%20over%20modern%20Nigerian%20buildings%2C%20digital%20security%20network%20overlay%2C%20technological%20advancement%20in%20Africa%2C%20urban%20development%2C%20bright%20future%20vision%2C%20Black%20African%20professionals%20in%20tech%2C%20modern%20African%20city%20with%20security%20infrastructure&width=600&height=400&seq=vision-image-african&orientation=landscape"
                    alt="Our Vision"
                    className="rounded-xl sm:rounded-2xl w-full h-64 sm:h-80 object-cover shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl sm:rounded-2xl"></div>
                </div>
                <div className="space-y-4 sm:space-y-6 lg:order-1">
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center">
                      <i className="ri-eye-line text-2xl sm:text-3xl text-blue-400"></i>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">Our Vision</h3>
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                    To become Africa's most trusted security technology brand, known for merging world-class systems with human dedication.
                  </p>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="ri-check-line text-blue-400 text-xs sm:text-sm"></i>
                      </div>
                      <span className="text-sm sm:text-base text-gray-300">Leading Africa's security technology revolution</span>
                    </div>
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="ri-check-line text-blue-400 text-xs sm:text-sm"></i>
                      </div>
                      <span className="text-sm sm:text-base text-gray-300">Setting new standards for security excellence</span>
                    </div>
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="ri-check-line text-blue-400 text-xs sm:text-sm"></i>
                      </div>
                      <span className="text-sm sm:text-base text-gray-300">Expanding across Africa with innovative solutions</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {values.map((value, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-red-400/50 transition-all duration-300 hover:scale-105 cursor-pointer group">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                      <i className={`${value.icon} text-xl sm:text-2xl text-red-400`}></i>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{value.title}</h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Team Section - Responsive Card-based Design */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              MEET OUR <span className="text-red-400">EXPERT TEAM</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              The dedicated professionals behind Nigeria's most trusted security technology solutions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-red-400/50 transition-all duration-500 hover:scale-105 cursor-pointer">
                  {/* Profile Image */}
                  <div className="relative mb-4 sm:mb-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-xl sm:rounded-2xl overflow-hidden border-4 border-red-500/30 group-hover:border-red-500 transition-colors">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <i className="ri-user-star-line text-white text-xs sm:text-sm"></i>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-red-400 font-semibold mb-3 sm:mb-4 text-sm">{member.role}</p>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{member.description}</p>
                  </div>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 justify-center mb-4 sm:mb-6">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-red-500/10 border border-red-500/30 text-red-400 px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-700/50 hover:bg-red-500 rounded-xl flex items-center justify-center transition-colors cursor-pointer">
                      <i className="ri-linkedin-fill text-white text-sm"></i>
                    </div>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-700/50 hover:bg-red-500 rounded-xl flex items-center justify-center transition-colors cursor-pointer">
                      <i className="ri-twitter-fill text-white text-sm"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Stats - Responsive */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-red-400 mb-1 sm:mb-2">17+</div>
              <div className="text-gray-300 text-xs sm:text-base">Team Members</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">45+</div>
              <div className="text-gray-300 text-xs sm:text-base">Years Combined Experience</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1 sm:mb-2">6</div>
              <div className="text-gray-300 text-xs sm:text-base">Nigerian States Covered</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1 sm:mb-2">24/7</div>
              <div className="text-gray-300 text-xs sm:text-base">Support Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Responsive Interactive Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black/80 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              OUR <span className="text-red-400">SECURITY ARSENAL</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Comprehensive security solutions powered by cutting‑edge technology and human expertise
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-gray-800/30 to-gray-900/30 border rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:scale-105 cursor-pointer ${
                  activeService === index 
                    ? 'border-red-500 bg-red-500/10 shadow-lg shadow-red-500/25' 
                    : 'border-gray-700 hover:border-red-400/50'
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 transition-all ${
                  activeService === index 
                    ? 'bg-red-500 shadow-lg shadow-red-500/25' 
                    : 'bg-gray-700/50 group-hover:bg-red-500/20'
                }`}>
                  <i className={`${service.icon} text-lg sm:text-xl ${
                    activeService === index ? 'text-white' : 'text-red-400'
                  }`}></i>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 group-hover:text-red-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Recognition - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              OUR <span className="text-red-400">ACHIEVEMENTS</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-4">
              Milestones that mark our journey to becoming Nigeria's leading security technology company
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <i className="ri-shield-check-line text-2xl sm:text-3xl text-red-400"></i>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">500+</div>
              <div className="text-gray-300 text-xs sm:text-base">Protected Properties</div>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <i className="ri-time-line text-2xl sm:text-3xl text-blue-400"></i>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">99.9%</div>
              <div className="text-gray-300 text-xs sm:text-base">System Uptime</div>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <i className="ri-customer-service-2-line text-2xl sm:text-3xl text-green-400"></i>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">24/7</div>
              <div className="text-gray-300 text-xs sm:text-base">Monitoring Coverage</div>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <i className="ri-team-line text-2xl sm:text-3xl text-purple-400"></i>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">150+</div>
              <div className="text-gray-300 text-xs sm:text-base">Security Professionals</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Responsive Enhanced */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-red-900/20 via-black to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              READY TO GET <span className="text-red-400">PROTECTED</span>?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Join hundreds of satisfied clients who trust CoverAlarm Systems to keep their assets, people, and peace of mind secure.
            </p>
            
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-center text-green-400 space-y-2 sm:space-y-0">
                <i className="ri-checkbox-circle-line text-xl sm:mr-3"></i>
                <span className="font-semibold text-sm sm:text-base md:text-lg text-center">FREE Security Assessment • No Obligation • 2 Hour Response</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 mb-4 sm:mb-6">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap shadow-lg shadow-red-500/25"
              >
                🛡️ Get FREE Security Quote
              </button>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 border border-gray-600 text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
              >
                📞 Schedule Consultation
              </button>
            </div>
            
            <div className="text-center text-gray-400">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm">
                <div className="flex items-center">
                  <i className="ri-flashlight-line text-yellow-400 mr-2"></i>
                  <span>Same-day response</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-rocket-line text-blue-400 mr-2"></i>
                  <span>Installation within 48 hours</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-shield-check-line text-green-400 mr-2"></i>
                  <span>Lifetime support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Responsive */}
      <footer className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-4">
              <Link to="/">
                <img 
                  src="https://static.readdy.ai/image/f38dbee0b97d493b71475a98132a7b29/c567d8d1fd4702e852424c0299bd0094.png" 
                  alt="CoverAlarm Systems" 
                  className="h-8 w-auto cursor-pointer"
                />
              </Link>
              <p className="text-gray-400 text-sm">
                Protecting Nigeria through innovation, trust, and relentless vigilance.
              </p>
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-gray-800 hover:bg-red-500 rounded-xl flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-facebook-fill text-white text-sm"></i>
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-red-500 rounded-xl flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-twitter-fill text-white text-sm"></i>
                </div>
                <a 
                  href="https://www.linkedin.com/company/cover-alarm-systems-ltd/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-red-500 rounded-xl flex items-center justify-center transition-colors cursor-pointer"
                >
                  <i className="ri-linkedin-fill text-white text-sm"></i>
                </a>
                <a 
                  href="https://www.instagram.com/cover.alarm/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-red-500 rounded-xl flex items-center justify-center transition-colors cursor-pointer"
                >
                  <i className="ri-instagram-fill text-white text-sm"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Security Solutions</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div><Link to="/ai-video-monitoring" className="hover:text-red-400 cursor-pointer">AI Video Monitoring</Link></div>
                <div><Link to="/ai-video-analytics" className="hover:text-red-400 cursor-pointer">AI CCTV Analytics</Link></div>
                <div><Link to="/cover-alarm-monitoring" className="hover:text-red-400 cursor-pointer">Alarm Monitoring/Rapid Response</Link></div>
                <div><Link to="/fire-detection" className="hover:text-red-400 cursor-pointer">Fire Detection</Link></div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Fleet Solutions</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div><Link to="/fleet-management" className="hover:text-red-400 cursor-pointer">Complete Fleet Management</Link></div>
                <div><Link to="/fleet-management" className="hover:text-red-400 cursor-pointer">GPS Tracking</Link></div>
                <div><Link to="/fleet-management" className="hover:text-red-400 cursor-pointer">Fuel Monitoring</Link></div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div>+2348145540554</div>
                <div>info@coveralarm.com</div>
                <div>Abuja, Nigeria</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
            <p>&copy; 2025 CoverAlarm Systems LTD. All rights reserved. | <a href="https://readdy.ai/?origin=logo" className="hover:text-white">Website Builder</a></p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}
