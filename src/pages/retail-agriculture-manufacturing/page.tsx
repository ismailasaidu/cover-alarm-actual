
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from '../../components/ContactModal';
import QuoteModal from '../../components/QuoteModal';

export default function RetailAgricultureManufacturing() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSector, setActiveSector] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Add Schema.org JSON-LD for Retail, Agriculture & Manufacturing page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Retail, Agriculture & Manufacturing Security Solutions by CoverAlarm Systems",
      "description": "Specialized security solutions for retail stores, agricultural operations, and manufacturing facilities across Nigeria. Advanced monitoring and protection systems.",
      "provider": {
        "@type": "Organization",
        "name": "CoverAlarm Systems",
        "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}`
      },
      "serviceType": "Industry-Specific Security Solutions",
      "areaServed": "Nigeria",
      "offers": {
        "@type": "Offer",
        "description": "Tailored security systems for retail, agriculture, and manufacturing sectors"
      }
    });
    document.head.appendChild(script);

    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  const sectors = [
    {
      name: 'Retail Security',
      icon: 'ri-store-line',
      color: 'green',
      description: 'Comprehensive security solutions for retail stores, shopping centers, and commercial outlets',
      features: [
        'Anti-theft surveillance systems',
        'Point-of-sale monitoring',
        'Customer behavior analytics',
        'Inventory protection',
        'Staff monitoring systems',
        'Emergency response protocols'
      ],
      benefits: [
        'Reduce shrinkage by up to 70%',
        'Improve customer experience',
        'Enhance staff productivity',
        'Real-time theft alerts'
      ]
    },
    {
      name: 'Agriculture Security',
      icon: 'ri-plant-line',
      color: 'yellow',
      description: 'Advanced monitoring and protection systems for farms, livestock, and agricultural facilities',
      features: [
        'Perimeter security systems',
        'Livestock monitoring',
        'Equipment theft prevention',
        'Crop surveillance',
        'Weather monitoring integration',
        'Remote farm management'
      ],
      benefits: [
        'Protect valuable equipment',
        'Monitor livestock health',
        'Prevent crop theft',
        'Remote farm oversight'
      ]
    },
    {
      name: 'Manufacturing Security',
      icon: 'ri-factory-line',
      color: 'blue',
      description: 'Industrial-grade security solutions for manufacturing plants and production facilities',
      features: [
        'Industrial surveillance systems',
        'Access control systems',
        'Safety compliance monitoring',
        'Equipment protection',
        'Quality control integration',
        'Production line monitoring'
      ],
      benefits: [
        'Ensure workplace safety',
        'Protect intellectual property',
        'Monitor production quality',
        'Prevent industrial espionage'
      ]
    }
  ];

  const solutions = [
    {
      icon: 'ri-camera-line',
      title: 'Smart Surveillance',
      description: 'AI-powered cameras with intelligent detection and analytics'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Access Control',
      description: 'Biometric and card-based access management systems'
    },
    {
      icon: 'ri-alarm-line',
      title: 'Intrusion Detection',
      description: 'Advanced sensors and alarm systems for perimeter protection'
    },
    {
      icon: 'ri-fire-line',
      title: 'Fire Safety',
      description: 'Comprehensive fire detection and suppression systems'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile Monitoring',
      description: 'Real-time alerts and remote monitoring via mobile apps'
    },
    {
      icon: 'ri-cloud-line',
      title: 'Cloud Storage',
      description: 'Secure cloud-based storage and backup solutions'
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
                <Link to="/about" className="text-gray-300 hover:text-red-400 px-2 xl:px-3 py-2 transition-colors cursor-pointer text-sm font-medium">
                  About Us
                </Link>
                <div className="relative group">
                  <a href="#services" className="text-red-400 px-2 xl:px-3 py-2 border-b-2 border-red-400 cursor-pointer flex items-center text-sm font-medium">
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
                      <Link to="/retail-agriculture-manufacturing" className="block px-4 py-2 text-sm text-red-400 bg-red-900/20 border-l-4 border-red-400">
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
                Get Industry Solution
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
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-red-400 px-3 py-3 text-base font-medium hover:bg-gray-800">
                  About Us
                </Link>
                
                {/* Mobile Core Services Menu */}
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
                    <Link to="/retail-agriculture-manufacturing" onClick={() => setIsMobileMenuOpen(false)} className="block text-red-400 py-2 text-sm border-l-4 border-red-400 bg-red-900/20 pl-4">
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
                    Get Industry Solution
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Modern%20Nigerian%20retail%20store%20with%20advanced%20security%20systems%2C%20African%20shopping%20center%20with%20surveillance%20cameras%2C%20manufacturing%20facility%20with%20security%20monitoring%2C%20agricultural%20farm%20with%20protection%20systems%2C%20diverse%20Nigerian%20business%20sectors%20with%20integrated%20security%20technology%2C%20professional%20Black%20African%20workers%20in%20retail%20agriculture%20manufacturing&width=1920&height=1080&seq=retail-agri-manufacturing-hero&orientation=landscape"
            alt="Retail, Agriculture & Manufacturing Security"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-20">
          <div className="w-full max-w-4xl">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center bg-green-500/10 border border-green-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2 sm:mr-3"></div>
                <span className="text-green-400 font-mono text-xs sm:text-sm tracking-wider">INDUSTRY-SPECIFIC SECURITY</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none mb-6 sm:mb-8">
                <div className="bg-gradient-to-r from-white via-green-400 to-white bg-clip-text text-transparent">
                  RETAIL
                </div>
                <div className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                  AGRICULTURE
                </div>
                <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 bg-clip-text text-transparent">
                  MANUFACTURING
                </div>
              </h1>

              <div className="max-w-3xl mb-8 sm:mb-12">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-6">
                  Specialized security solutions tailored for Nigeria's key business sectors. 
                  <span className="text-green-400 font-semibold"> Advanced monitoring, theft prevention, and operational protection</span> 
                  designed for retail stores, farms, and manufacturing facilities.
                </p>
                
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-3 sm:p-4 text-center">
                    <div className="text-lg sm:text-xl font-bold text-green-400 mb-1">70%</div>
                    <div className="text-gray-300 text-xs sm:text-sm">Theft Reduction</div>
                  </div>
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-3 sm:p-4 text-center">
                    <div className="text-lg sm:text-xl font-bold text-yellow-400 mb-1">24/7</div>
                    <div className="text-gray-300 text-xs sm:text-sm">Monitoring</div>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 sm:p-4 text-center">
                    <div className="text-lg sm:text-xl font-bold text-blue-400 mb-1">200+</div>
                    <div className="text-gray-300 text-xs sm:text-sm">Protected Sites</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap shadow-lg shadow-green-500/25"
                >
                  🏪 PROTECT YOUR BUSINESS
                </button>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
                >
                  📞 SCHEDULE ASSESSMENT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black/80 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              INDUSTRY <span className="text-green-400">SOLUTIONS</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored security systems designed for the unique challenges of each industry sector
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {sectors.map((sector, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-${sector.color}-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center`}>
                      <i className={`${sector.icon} text-2xl sm:text-3xl text-${sector.color}-400`}></i>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">{sector.name}</h3>
                  </div>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                    {sector.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                      <div className="space-y-2">
                        {sector.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-2">
                            <i className={`ri-check-line text-${sector.color}-400 mt-1 flex-shrink-0`}></i>
                            <span className="text-sm text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <div className="space-y-2">
                        {sector.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start space-x-2">
                            <i className={`ri-star-line text-${sector.color}-400 mt-1 flex-shrink-0`}></i>
                            <span className="text-sm text-gray-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img
                    src={`https://readdy.ai/api/search-image?query=${
                      index === 0 ? 'Modern Nigerian retail store with security cameras, African shopping center surveillance, retail theft prevention systems, professional Black African retail workers, advanced store monitoring technology' :
                      index === 1 ? 'Nigerian agricultural farm with security systems, African farming operations with monitoring technology, livestock protection systems, crop surveillance cameras, Black African farmers with modern security' :
                      'Nigerian manufacturing facility with security monitoring, African industrial plant surveillance, factory security systems, manufacturing protection technology, Black African industrial workers with safety systems'
                    }&width=600&height=400&seq=${sector.name.toLowerCase().replace(/\s+/g, '-')}-image&orientation=landscape`}
                    alt={sector.name}
                    className="rounded-xl sm:rounded-2xl w-full h-64 sm:h-80 object-cover shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl sm:rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              SECURITY <span className="text-green-400">TECHNOLOGIES</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced security technologies integrated across all industry sectors
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-green-400/50 transition-all duration-300 hover:scale-105 cursor-pointer group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <i className={`${solution.icon} text-2xl sm:text-3xl text-green-400`}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-green-400 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              SUCCESS <span className="text-green-400">STORIES</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from businesses across Nigeria that trust our security solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-4">
                <i className="ri-store-line text-2xl text-green-400"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lagos Shopping Mall</h3>
              <p className="text-gray-300 text-sm mb-4">Reduced theft incidents by 85% and improved customer satisfaction through comprehensive surveillance and access control systems.</p>
              <div className="text-green-400 font-semibold">85% theft reduction</div>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border border-yellow-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-4">
                <i className="ri-plant-line text-2xl text-yellow-400"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Kaduna Rice Farm</h3>
              <p className="text-gray-300 text-sm mb-4">Protected 500 hectares of farmland with perimeter security and livestock monitoring, preventing equipment theft worth ₦50M.</p>
              <div className="text-yellow-400 font-semibold">₦50M equipment protected</div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4">
                <i className="ri-factory-line text-2xl text-blue-400"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Ogun Manufacturing Plant</h3>
              <p className="text-gray-300 text-sm mb-4">Enhanced workplace safety compliance by 95% and eliminated industrial espionage through integrated security systems.</p>
              <div className="text-blue-400 font-semibold">95% safety improvement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-900/20 via-black to-yellow-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              SECURE YOUR <span className="text-green-400">BUSINESS</span> TODAY
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Join hundreds of Nigerian businesses that trust CoverAlarm Systems for industry-specific security solutions.
            </p>
            
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-center text-green-400 space-y-2 sm:space-y-0">
                <i className="ri-checkbox-circle-line text-xl sm:mr-3"></i>
                <span className="font-semibold text-sm sm:text-base md:text-lg text-center">FREE Security Assessment • Custom Solution Design • Same-Day Installation</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap shadow-lg shadow-green-500/25"
              >
                🏪 Get Industry Solution
              </button>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 border border-gray-600 text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
              >
                📞 Schedule Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                Protecting Nigerian businesses across all industry sectors.
              </p>
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-xl flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-facebook-fill text-white text-sm"></i>
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-xl flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-twitter-fill text-white text-sm"></i>
                </div>
                <a 
                  href="https://www.linkedin.com/company/cover-alarm-systems-ltd/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-xl flex items-center justify-center transition-colors cursor-pointer"
                >
                  <i className="ri-linkedin-fill text-white text-sm"></i>
                </a>
                <a 
                  href="https://www.instagram.com/cover.alarm/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-xl flex items-center justify-center transition-colors cursor-pointer"
                >
                  <i className="ri-instagram-fill text-white text-sm"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Retail Solutions</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div>Anti-theft Systems</div>
                <div>POS Monitoring</div>
                <div>Customer Analytics</div>
                <div>Inventory Protection</div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Agriculture Solutions</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div>Farm Security</div>
                <div>Livestock Monitoring</div>
                <div>Equipment Protection</div>
                <div>Crop Surveillance</div>
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