
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from '../../components/ContactModal';
import QuoteModal from '../../components/QuoteModal';

export default function EnterpriseAI() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Add Schema.org JSON-LD for Enterprise AI page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Enterprise AI Solutions by CoverAlarm Systems",
      "description": "Advanced AI-powered enterprise solutions for business automation, predictive analytics, and intelligent decision-making systems in Nigeria.",
      "provider": {
        "@type": "Organization",
        "name": "CoverAlarm Systems",
        "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}`
      },
      "serviceType": "Enterprise AI Solutions",
      "areaServed": "Nigeria",
      "offers": {
        "@type": "Offer",
        "description": "Custom AI solutions for enterprise automation and analytics"
      }
    });
    document.head.appendChild(script);

    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  const features = [
    {
      icon: 'ri-brain-line',
      title: 'Predictive Analytics',
      description: 'AI-powered insights for business forecasting and decision-making',
      benefits: ['Revenue optimization', 'Risk prediction', 'Market trend analysis']
    },
    {
      icon: 'ri-robot-line',
      title: 'Process Automation',
      description: 'Intelligent automation for repetitive business processes',
      benefits: ['Cost reduction', 'Error elimination', 'Efficiency improvement']
    },
    {
      icon: 'ri-eye-line',
      title: 'Computer Vision',
      description: 'Advanced visual recognition for quality control and monitoring',
      benefits: ['Quality assurance', 'Defect detection', 'Real-time monitoring']
    },
    {
      icon: 'ri-chat-3-line',
      title: 'Natural Language Processing',
      description: 'AI-powered text analysis and customer interaction systems',
      benefits: ['Customer insights', 'Automated responses', 'Sentiment analysis']
    }
  ];

  const industries = [
    {
      name: 'Banking & Finance',
      icon: 'ri-bank-line',
      applications: ['Fraud detection', 'Credit scoring', 'Risk assessment', 'Customer service automation']
    },
    {
      name: 'Healthcare',
      icon: 'ri-hospital-line',
      applications: ['Medical imaging analysis', 'Patient monitoring', 'Drug discovery', 'Diagnostic assistance']
    },
    {
      name: 'Manufacturing',
      icon: 'ri-factory-line',
      applications: ['Quality control', 'Predictive maintenance', 'Supply chain optimization', 'Production planning']
    },
    {
      name: 'Telecommunications',
      icon: 'ri-phone-line',
      applications: ['Network optimization', 'Customer churn prediction', 'Service personalization', 'Infrastructure monitoring']
    },
    {
      name: 'Oil & Gas',
      icon: 'ri-oil-line',
      applications: ['Equipment monitoring', 'Safety compliance', 'Resource optimization', 'Environmental monitoring']
    },
    {
      name: 'Retail & E-commerce',
      icon: 'ri-shopping-cart-line',
      applications: ['Demand forecasting', 'Price optimization', 'Customer segmentation', 'Inventory management']
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
                      <Link to="/enterprise-ai" className="block px-4 py-2 text-sm text-red-400 bg-red-900/20 border-l-4 border-red-400">
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
                Get AI Solution
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
                    <Link to="/enterprise-ai" onClick={() => setIsMobileMenuOpen(false)} className="block text-red-400 py-2 text-sm border-l-4 border-red-400 bg-red-900/20 pl-4">
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
                    Get AI Solution
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
            src="https://readdy.ai/api/search-image?query=Advanced%20AI%20technology%20in%20modern%20Nigerian%20enterprise%20office%2C%20artificial%20intelligence%20systems%2C%20machine%20learning%20algorithms%20visualization%2C%20futuristic%20business%20automation%2C%20digital%20transformation%20in%20Africa%2C%20smart%20technology%20integration%2C%20professional%20Black%20African%20data%20scientists%20working%20with%20AI%20systems%2C%20modern%20tech%20workspace&width=1920&height=1080&seq=enterprise-ai-hero&orientation=landscape"
            alt="Enterprise AI Solutions"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-20">
          <div className="w-full max-w-4xl">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center bg-blue-500/10 border border-blue-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-2 sm:mr-3"></div>
                <span className="text-blue-400 font-mono text-xs sm:text-sm tracking-wider">ENTERPRISE AI SOLUTIONS</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none mb-6 sm:mb-8">
                <div className="bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent">
                  INTELLIGENT
                </div>
                <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 bg-clip-text text-transparent">
                  ENTERPRISE
                </div>
                <div className="bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent">
                  AUTOMATION
                </div>
              </h1>

              <div className="max-w-3xl mb-8 sm:mb-12">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-6">
                  Transform your business with cutting-edge AI solutions designed for Nigerian enterprises. 
                  <span className="text-blue-400 font-semibold"> Predictive analytics, process automation, and intelligent decision-making</span> 
                  systems that drive growth and efficiency.
                </p>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 sm:p-4 text-center">
                    <div className="text-lg sm:text-xl font-bold text-blue-400 mb-1">95%</div>
                    <div className="text-gray-300 text-xs sm:text-sm">Accuracy Rate</div>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-3 sm:p-4 text-center">
                    <div className="text-lg sm:text-xl font-bold text-green-400 mb-1">60%</div>
                    <div className="text-gray-300 text-xs sm:text-sm">Cost Reduction</div>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-3 sm:p-4 text-center">
                    <div className="text-lg sm:text-xl font-bold text-purple-400 mb-1">24/7</div>
                    <div className="text-gray-300 text-xs sm:text-sm">AI Monitoring</div>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 sm:p-4 text-center">
                    <div className="text-lg sm:text-xl font-bold text-red-400 mb-1">50+</div>
                    <div className="text-gray-300 text-xs sm:text-sm">Enterprises</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap shadow-lg shadow-blue-500/25"
                >
                  🤖 GET AI SOLUTION
                </button>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
                >
                  📞 SCHEDULE DEMO
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black/80 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              AI <span className="text-blue-400">CAPABILITIES</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced artificial intelligence features designed to transform your business operations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-gray-800/30 to-gray-900/30 border rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:scale-105 cursor-pointer ${
                  activeFeature === index 
                    ? 'border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/25' 
                    : 'border-gray-700 hover:border-blue-400/50'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 transition-all ${
                  activeFeature === index 
                    ? 'bg-blue-500 shadow-lg shadow-blue-500/25' 
                    : 'bg-gray-700/50 group-hover:bg-blue-500/20'
                }`}>
                  <i className={`${feature.icon} text-lg sm:text-xl ${
                    activeFeature === index ? 'text-white' : 'text-blue-400'
                  }`}></i>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3">
                  {feature.description}
                </p>
                <div className="space-y-1">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-xs text-gray-500">
                      <i className="ri-check-line text-blue-400 mr-2"></i>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              INDUSTRY <span className="text-blue-400">APPLICATIONS</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored AI solutions for Nigeria's key industries and business sectors
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 cursor-pointer group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <i className={`${industry.icon} text-2xl sm:text-3xl text-blue-400`}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-blue-400 transition-colors">
                  {industry.name}
                </h3>
                <div className="space-y-2">
                  {industry.applications.map((app, appIndex) => (
                    <div key={appIndex} className="flex items-start text-sm text-gray-300">
                      <i className="ri-arrow-right-s-line text-blue-400 mr-2 mt-0.5 flex-shrink-0"></i>
                      {app}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              IMPLEMENTATION <span className="text-blue-400">PROCESS</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven methodology for delivering successful AI solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl sm:text-3xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Assessment</h3>
              <p className="text-sm sm:text-base text-gray-300">Analyze your business needs and identify AI opportunities</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl sm:text-3xl font-bold text-green-400">2</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Design</h3>
              <p className="text-sm sm:text-base text-gray-300">Create custom AI solutions tailored to your requirements</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl sm:text-3xl font-bold text-purple-400">3</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Deploy</h3>
              <p className="text-sm sm:text-base text-gray-300">Implement and integrate AI systems into your operations</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl sm:text-3xl font-bold text-red-400">4</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Optimize</h3>
              <p className="text-sm sm:text-base text-gray-300">Continuous monitoring and improvement of AI performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              READY TO <span className="text-blue-400">TRANSFORM</span> YOUR BUSINESS?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Join leading Nigerian enterprises that trust CoverAlarm Systems for their AI transformation journey.
            </p>
            
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-center text-blue-400 space-y-2 sm:space-y-0">
                <i className="ri-checkbox-circle-line text-xl sm:mr-3"></i>
                <span className="font-semibold text-sm sm:text-base md:text-lg text-center">FREE AI Assessment • Custom Solution Design • 30-Day Trial</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap shadow-lg shadow-blue-500/25"
              >
                🤖 Start AI Transformation
              </button>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 border border-gray-600 text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
              >
                📞 Book Consultation
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
                Transforming Nigerian enterprises through intelligent AI solutions.
              </p>
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-xl flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-facebook-fill text-white text-sm"></i>
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-xl flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-twitter-fill text-white text-sm"></i>
                </div>
                <a 
                  href="https://www.linkedin.com/company/cover-alarm-systems-ltd/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-xl flex items-center justify-center transition-colors cursor-pointer"
                >
                  <i className="ri-linkedin-fill text-white text-sm"></i>
                </a>
                <a 
                  href="https://www.instagram.com/cover.alarm/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-xl flex items-center justify-center transition-colors cursor-pointer"
                >
                  <i className="ri-instagram-fill text-white text-sm"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">AI Solutions</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div>Predictive Analytics</div>
                <div>Process Automation</div>
                <div>Computer Vision</div>
                <div>Natural Language Processing</div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Industries</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div>Banking & Finance</div>
                <div>Healthcare</div>
                <div>Manufacturing</div>
                <div>Oil & Gas</div>
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