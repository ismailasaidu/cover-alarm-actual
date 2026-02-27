
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QuoteModal from '../../components/QuoteModal';
import BookingModal from '../../components/BookingModal';

export default function AIVideoAnalytics() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('behavior');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [analyticsCount, setAnalyticsCount] = useState(15847);

  useEffect(() => {
    setIsVisible(true);
    
    // Analytics counter animation
    const interval = setInterval(() => {
      setAnalyticsCount(prev => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleDownloadBrochure = () => {
    try {
      const link = document.createElement('a');
      link.href = 'https://www.canva.com/design/DAG1AE9k-tQ/N9tt6XKyXX9T8MKN6ZFN4w/view?utm_content=DAG1AE9k-tQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha9e5a4fd5e';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Failed to start brochure download:', error);
    }
  };

  const handleActivateAI = () => {
    setIsQuoteModalOpen(true);
  };

  const handleScheduleDemo = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="bg-black/50 backdrop-blur-sm border-b border-red-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/">
                <img
                  src="https://static.readdy.ai/image/f38dbee0b97d493b71475a98132a7b29/c567d8d1fd4702e852424c0299bd0094.png"
                  alt="CoverAlarm Systems"
                  className="h-8 w-auto cursor-pointer"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-6 flex items-baseline space-x-6">
                <Link
                  to="/"
                  className="text-gray-300 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium"
                >
                  About Us
                </Link>
                <div className="relative group">
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer flex items-center text-sm font-medium"
                  >
                    Security Arsenal
                    <i className="ri-arrow-down-s-line ml-1"></i>
                  </a>
                  <div className="absolute top-full left-0 mt-1 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      <Link
                        to="/ai-video-analytics"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800"
                      >
                        AI CCTV Analytics
                      </Link>
                      <Link
                        to="/ai-video-monitoring"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800"
                      >
                        AI Video Monitoring
                      </Link>
                      <Link
                        to="/fuel-monitoring"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800"
                      >
                        Fuel Monitoring
                      </Link>
                      <Link
                        to="/fire-detection"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800"
                      >
                        Fire Detection
                      </Link>
                      <Link
                        to="/gps-fleet-tracking"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800"
                      >
                        GPS Fleet Tracking
                      </Link>
                      <Link
                        to="/government-solutions"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800"
                      >
                        Government Solutions
                      </Link>
                    </div>
                  </div>
                </div>
                <a
                  href="/#case-studies"
                  className="text-gray-300 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium"
                >
                  Case Studies
                </a>
                <a
                  href="/#testimonials"
                  className="text-gray-300 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium"
                >
                  Victory Stories
                </a>
                <a
                  href="/#support"
                  className="text-gray-300 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium"
                >
                  Command Center
                </a>
              </div>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex space-x-3">
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer font-semibold text-sm">
                🚨 Emergency
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer font-semibold text-sm">
                Deploy AI Analytics
              </button>
            </div>

            {/* Mobile hamburger button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
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
                  className="block text-gray-300 hover:text-red-400 px-3 py-3 text-base font-medium hover:bg-gray-800"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-red-400 px-3 py-3 text-base font-medium hover:bg-gray-800"
                >
                  About Us
                </Link>

                {/* Mobile Services Menu */}
                <div className="px-3 py-2">
                  <div className="text-gray-300 font-medium mb-2">Security Arsenal</div>
                  <div className="pl-4 space-y-1">
                    <Link
                      to="/ai-video-analytics"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-red-400 py-2 text-sm border-l-4 border-red-400 bg-red-900/20"
                    >
                      AI CCTV Analytics
                    </Link>
                    <Link
                      to="/ai-video-monitoring"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-400 hover:text-red-400 py-2 text-sm"
                    >
                      AI Video Monitoring
                    </Link>
                    <Link
                      to="/fuel-monitoring"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-400 hover:text-red-400 py-2 text-sm"
                    >
                      Fuel Monitoring
                    </Link>
                    <Link
                      to="/fire-detection"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-400 hover:text-red-400 py-2 text-sm"
                    >
                      Fire Detection
                    </Link>
                    <Link
                      to="/gps-fleet-tracking"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-400 hover:text-red-400 py-2 text-sm"
                    >
                      GPS Fleet Tracking
                    </Link>
                    <Link
                      to="/government-solutions"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-400 hover:text-red-400 py-2 text-sm"
                    >
                      Government Solutions
                    </Link>
                  </div>
                </div>

                <a
                  href="/#case-studies"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-red-400 px-3 py-3 text-base font-medium hover:bg-gray-800"
                >
                  Case Studies
                </a>

                <a
                  href="/#testimonials"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-red-400 px-3 py-3 text-base font-medium hover:bg-gray-800"
                >
                  Victory Stories
                </a>

                <a
                  href="/#support"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-red-400 px-3 py-3 text-base font-medium hover:bg-gray-800"
                >
                  Command Center
                </a>

                <Link
                  to="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-red-400 px-3 py-3 text-base font-medium hover:bg-gray-800"
                >
                  Blog
                </Link>

                <div className="pt-4 space-y-3 border-t border-gray-700">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-red-600 hover:bg-red-7
                    00 text-white px-4 py-3 rounded-lg font-semibold"
                  >
                    🚨 Emergency
                  </button>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg font-semibold"
                  >
                    Deploy AI Analytics
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Advanced%20AI%20video%20analytics%20control%20room%20with%20multiple%20screens%20showing%20behavioral%20analysis%20overlays%2C%20artificial%20intelligence%20processing%20surveillance%20footage%20with%20colored%20tracking%20indicators%2C%20modern%20AI%20security%20command%20center%20with%20machine%20learning%20visualization%2C%20futuristic%20video%20analytics%20technology%20displaying%20real-time%20threat%20detection%20in%20Nigerian%20business%20environment&width=1920&height=1080&seq=ai-analytics-hero-fixed&orientation=landscape"
            alt="AI Video Analytics"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
        </div>

        {/* Animated Matrix Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-purple-900/20 to-blue-900/20">
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-20 h-full">
              {[...Array(100)].map((_, i) => (
                <div key={i} className="border-r border-purple-500/10 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Left Side - Provocative Content */}
            <div className="space-y-8">
              {/* AI Alert Badge */}
              <div className="inline-flex items-center bg-purple-600/20 border border-purple-500 rounded-full px-4 py-2 text-purple-400">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-bold">AI INTELLIGENCE ACTIVE</span>
              </div>

              {/* Staggered Typography */}
              <div className="space-y-2">
                <h1 className="text-6xl md:text-8xl font-black leading-none">
                  <span className="text-white block">AI</span>
                  <span className="text-purple-500 block ml-8">SEES</span>
                  <span className="text-blue-400 block ml-16">EVERYTHING</span>
                </h1>
              </div>

              {/* Rotated Badge */}
              <div className="relative">
                <div className="transform rotate-12 bg-yellow-500 text-black px-6 py-2 rounded-lg font-black text-sm inline-block">
                  PREDICTS BEHAVIOR BEFORE IT HAPPENS
                </div>
              </div>

              {/* Analytics Counter */}
              <div className="bg-purple-900/30 border border-purple-500 rounded-lg p-4">
                <div className="text-purple-400 text-sm font-bold mb-1">BEHAVIORS ANALYZED TODAY</div>
                <div className="text-3xl font-black text-white">{analyticsCount.toLocaleString()}</div>
                <div className="text-purple-300 text-xs">+1 every 2 seconds across Nigeria</div>
              </div>

              {/* Problem vs Solution */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-900/20 border border-red-500 rounded-lg p-4">
                  <div className="text-red-400 font-bold text-sm mb-2">THE BLINDNESS</div>
                  <div className="text-white text-xs">Cameras record but don't understand</div>
                </div>
                <div className="bg-green-900/20 border border-green-500 rounded-lg p-4">
                  <div className="text-green-400 font-bold text-sm mb-2">THE VISION</div>
                  <div className="text-white text-xs">AI predicts and prevents incidents</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all hover:scale-105 whitespace-nowrap">
                  🧠 ACTIVATE AI BRAIN
                </button>
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="border-2 border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg text-lg font-bold transition-all hover:scale-105 whitespace-nowrap"
                >
                  👁️ SEE AI THINKING
                </button>
              </div>

              {/* Status Indicators */}
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400">99.7% ACCURACY</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-purple-400">REAL-TIME ANALYSIS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-400">PREDICTIVE AI</span>
                </div>
              </div>
            </div>

            {/* Right Side - AI Analytics Dashboard */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Advanced%20AI%20video%20analytics%20system%20analyzing%20human%20behavior%20in%20Nigerian%20business%20environment%2C%20computer%20vision%20technology%20with%20colored%20tracking%20overlays%20showing%20behavioral%20pattern%20recognition%2C%20futuristic%20AI%20security%20monitoring%20with%20facial%20recognition%20and%20movement%20analysis%2C%20intelligent%20surveillance%20system%20displaying%20real-time%20threat%20detection%20and%20behavior%20prediction&width=800&height=600&seq=ai-behavior-analysis-fixed&orientation=landscape"
                  alt="AI Behavior Analysis Technology"
                  className="w-full h-full object-cover object-top rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-purple-400 font-bold text-sm sm:text-base">AI ANALYZING</span>
                  </div>
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                    Intelligence That Never Sleeps
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Our AI analyzes every movement, predicts suspicious behavior, and alerts you before incidents occur
                  </p>
                </div>
              </div>

              {/* Floating AI Badge */}
              <div className="absolute -top-4 -right-4 bg-purple-500 text-white px-4 py-2 rounded-lg font-bold text-sm animate-bounce">
                AI THINKING
              </div>
            </div>
          </div>
        </div>

        {/* Breaking News Ticker */}
        <div className="absolute bottom-0 left-0 right-0 bg-purple-600 text-white py-2 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="mx-8">🧠 BREAKING: AI analytics prevents security breach at Lagos mall</span>
            <span className="mx-8">👁️ SUCCESS: Behavior analysis identifies shoplifting before it happens</span>
            <span className="mx-8">⚡ ALERT: Crowd analysis prevents stampede at Abuja event</span>
            <span className="mx-8">🎯 VICTORY: 99.7% accuracy in predicting suspicious behavior</span>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">AI THAT THINKS LIKE SECURITY EXPERTS</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced artificial intelligence that understands human behavior and predicts threats
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {[
              { id: 'behavior', label: 'Behavior Analysis', icon: 'ri-user-search-line' },
              { id: 'crowd', label: 'Crowd Analytics', icon: 'ri-group-line' },
              { id: 'object', label: 'Object Detection', icon: 'ri-search-eye-line' },
              { id: 'prediction', label: 'Threat Prediction', icon: 'ri-brain-line' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <i className={`${tab.icon} text-lg`}></i>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-gray-900/50 border border-gray-700 rounded-3xl p-8 lg:p-12">
            {activeTab === 'behavior' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Advanced Behavior Analysis
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-user-search-line text-purple-600 text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Suspicious Activity Detection</h4>
                        <p className="text-gray-300">AI identifies loitering, aggressive behavior, and unusual movement patterns in real-time.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-eye-line text-blue-600 text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Facial Expression Analysis</h4>
                        <p className="text-gray-300">Detects stress, aggression, and suspicious intent through micro-expression analysis.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-time-line text-green-600 text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Predictive Modeling</h4>
                        <p className="text-gray-300">Learns from patterns to predict potential security incidents before they occur.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://readdy.ai/api/search-image?query=Advanced%20AI%20behavior%20analysis%20interface%20showing%20human%20silhouettes%20with%20behavioral%20pattern%20overlays%2C%20computer%20vision%20tracking%20multiple%20people%20with%20colored%20indicators%20for%20different%20behaviors%2C%20modern%20security%20analytics%20dashboard%20with%20behavior%20recognition%20technology%20displaying%20suspicious%20activity%20detection%20in%20Nigerian%20commercial%20setting&width=600&height=400&seq=behavior-analysis-fixed&orientation=landscape"
                    alt="AI Behavior Analysis"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            )}

            {activeTab === 'crowd' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://readdy.ai/api/search-image?query=Crowd%20analytics%20AI%20system%20showing%20density%20heatmaps%20and%20flow%20patterns%20in%20Nigerian%20public%20spaces%2C%20intelligent%20crowd%20monitoring%20with%20color-coded%20density%20zones%2C%20modern%20crowd%20management%20technology%20interface%20with%20real-time%20people%20counting%20and%20safety%20alerts%20in%20Lagos%20shopping%20mall&width=600&height=400&seq=crowd-analytics-fixed&orientation=landscape"
                    alt="Crowd Analytics"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Intelligent Crowd Analytics
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gray-800 p-4 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-white">Crowd Density Monitoring</span>
                        <span className="text-purple-400 font-bold">Real-time</span>
                      </div>
                      <div className="text-sm text-gray-300">Tracks crowd density and identifies overcrowding risks</div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-white">Flow Pattern Analysis</span>
                        <span className="text-blue-400 font-bold">Predictive</span>
                      </div>
                      <div className="text-sm text-gray-300">Analyzes movement patterns to optimize space usage</div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-white">Stampede Prevention</span>
                        <span className="text-green-400 font-bold">Proactive</span>
                      </div>
                      <div className="text-sm text-gray-300">Early warning system for dangerous crowd conditions</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'object' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Advanced Object Detection
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 p-6 rounded-xl border border-red-500/30">
                      <h4 className="font-semibold text-white mb-3">Weapon Detection</h4>
                      <p className="text-gray-300 mb-4">Instantly identifies firearms, knives, and other weapons with 99.8% accuracy.</p>
                      <div className="flex items-center gap-4">
                        <div className="text-2xl font-bold text-red-400">0.2 sec</div>
                        <div className="text-sm text-gray-300">Average detection time</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 rounded-xl border border-blue-500/30">
                      <h4 className="font-semibold text-white mb-3">Abandoned Object Alert</h4>
                      <p className="text-gray-300 mb-4">Monitors for suspicious packages and unattended items in restricted areas.</p>
                      <div className="flex items-center gap-4">
                        <div className="text-2xl font-bold text-blue-400">30 sec</div>
                        <div className="text-sm text-gray-300">Alert threshold time</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://readdy.ai/api/search-image?query=AI%20object%20detection%20system%20identifying%20various%20objects%20in%20security%20footage%2C%20computer%20vision%20highlighting%20weapons%2C%20bags%2C%20and%20suspicious%20items%20with%20colored%20bounding%20boxes%2C%20modern%20object%20recognition%20interface%20with%20threat%20classification%20showing%20weapon%20detection%20in%20Nigerian%20security%20environment&width=600&height=400&seq=object-detection-fixed&orientation=landscape"
                    alt="Object Detection AI"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            )}

            {activeTab === 'prediction' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://readdy.ai/api/search-image?query=Predictive%20AI%20threat%20analysis%20dashboard%20showing%20risk%20assessment%20algorithms%2C%20machine%20learning%20models%20predicting%20security%20incidents%2C%20futuristic%20threat%20prediction%20interface%20with%20probability%20scores%20and%20risk%20indicators%20displaying%20Nigerian%20security%20analytics&width=600&height=400&seq=threat-prediction-fixed&orientation=landscape"
                    alt="Threat Prediction AI"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Predictive Threat Intelligence
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-purple-900/20 rounded-xl border border-purple-500/30">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                        <i className="ri-brain-line text-white"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Machine Learning Models</div>
                        <div className="text-sm text-purple-300">Continuously learns from security incidents</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-blue-900/20 rounded-xl border border-blue-500/30">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <i className="ri-line-chart-line text-white"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Risk Assessment</div>
                        <div className="text-sm text-blue-300">Calculates threat probability in real-time</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-green-900/20 rounded-xl border border-green-500/30">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <i className="ri-shield-check-line text-white"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Proactive Prevention</div>
                        <div className="text-sm text-green-300">Prevents incidents before they occur</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Real Success Stories Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-600/20 border border-green-500 rounded-full px-4 py-2 text-green-400 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-bold">REAL SUCCESS STORIES</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">AI ANALYTICS SAVES THE DAY</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real Nigerian businesses protected by our AI intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Success Story 1 */}
            <div className="bg-gray-800/50 border border-green-500/30 rounded-2xl overflow-hidden">
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Security%20camera%20footage%20showing%20AI%20successfully%20detecting%20and%20preventing%20warehouse%20theft%20in%20Nigeria%2C%20green%20overlay%20indicators%20showing%20successful%20threat%20prevention%2C%20modern%20warehouse%20with%20AI%20analytics%20overlay%20preventing%20crime%20before%20it%20happens%2C%20Nigerian%20warehouse%20manager%20celebrating%20successful%20crime%20prevention&width=400&height=250&seq=warehouse-success-fixed&orientation=landscape"
                  alt="Warehouse Theft Prevention Success"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  ₦15M SAVED
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Lagos Warehouse Saved</h3>
                <p className="text-gray-300 mb-4">
                  AI detected unusual behavior patterns and prevented a coordinated theft attempt worth ₦15 million.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <i className="ri-time-line text-green-400"></i>
                    <span className="text-green-400">2 minutes warning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-shield-check-line text-green-400"></i>
                    <span className="text-green-400">100% prevented</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Story 2 */}
            <div className="bg-gray-800/50 border border-green-500/30 rounded-2xl overflow-hidden">
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=AI%20security%20system%20detecting%20and%20stopping%20armed%20robbery%20attempt%20at%20Nigerian%20bank%2C%20real-time%20threat%20detection%20with%20red%20alert%20overlays%2C%20security%20personnel%20responding%20to%20AI%20warning%20before%20robbery%20occurs%2C%20Nigerian%20bank%20security%20team%20celebrating%20successful%20threat%20prevention&width=400&height=250&seq=bank-robbery-prevention-fixed&orientation=landscape"
                  alt="Bank Robbery Prevention"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  THREAT NEUTRALIZED
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Abuja Bank Protected</h3>
                <p className="text-gray-300 mb-4">
                  Weapon detection AI identified armed suspects 30 seconds before they entered the bank premises.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <i className="ri-alert-line text-orange-400"></i>
                    <span className="text-orange-400">Instant alert</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-police-car-line text-blue-400"></i>
                    <span className="text-blue-400">Police notified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Story 3 */}
            <div className="bg-gray-800/50 border border-green-500/30 rounded-2xl overflow-hidden">
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=AI%20crowd%20analytics%20preventing%20stampede%20at%20Nigerian%20shopping%20mall%2C%20crowd%20density%20monitoring%20showing%20safe%20evacuation%20guided%20by%20AI%20system%2C%20people%20safely%20exiting%20building%20with%20AI%20analytics%20overlay%20showing%20crowd%20flow%20management%2C%20Nigerian%20mall%20security%20celebrating%20successful%20crowd%20management&width=400&height=250&seq=crowd-safety-success-fixed&orientation=landscape"
                  alt="Crowd Safety Success"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  99.7% ACCURACY
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Port Harcourt Mall Safe</h3>
                <p className="text-gray-300 mb-4">
                  Crowd analytics predicted dangerous density levels and prevented a potential stampede during Black Friday.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <i className="ri-group-line text-purple-400"></i>
                    <span className="text-purple-400">2,000 people</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-heart-line text-red-400"></i>
                    <span className="text-red-4
                    00">Lives saved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Statistics Bar */}
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-black text-purple-400 mb-2">847</div>
                <div className="text-gray-300 font-semibold">Sites Protected</div>
              </div>
              <div>
                <div className="text-4xl font-black text-green-400 mb-2">₦2.8B</div>
                <div className="text-gray-300 font-semibold">Assets Secured</div>
              </div>
              <div>
                <div className="text-4xl font-black text-blue-400 mb-2">99.7%</div>
                <div className="text-gray-300 font-semibold">Threat Prevention</div>
              </div>
              <div>
                <div className="text-4xl font-black text-red-400 mb-2">0.2s</div>
                <div className="text-gray-300 font-semibold">Detection Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before vs After Transformation */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">THE TRANSFORMATION IS REAL</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what happens when you upgrade from basic cameras to AI intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Before Section */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-sm rotate-[-5deg]">
                WITHOUT AI
              </div>
              <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-red-400 mb-6">The Reality of Basic Security</h3>
                <img 
                  src="https://readdy.ai/api/search-image?query=Traditional%20security%20problems%20showing%20guards%20sleeping%2C%20basic%20CCTV%20cameras%20recording%20crime%20after%20it%20happens%2C%20Nigerian%20business%20suffering%20from%20security%20failures%2C%20outdated%20security%20system%20unable%20to%20prevent%20theft%20and%20break-ins&width=600&height=300&seq=basic-security-problems-fixed&orientation=landscape"
                  alt="Basic Security Problems"
                  className="w-full h-64 object-cover object-top rounded-xl mb-6"
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-red-300">
                    <i className="ri-close-circle-line text-red-500"></i>
                    <span>Cameras only record AFTER incidents happen</span>
                  </div>
                  <div className="flex items-center gap-3 text-red-300">
                    <i className="ri-close-circle-line text-red-500"></i>
                    <span>Security guards miss 90% of suspicious behavior</span>
                  </div>
                  <div className="flex items-center gap-3 text-red-300">
                    <i className="ri-close-circle-line text-red-500"></i>
                    <span>₦45M lost annually to preventable crimes</span>
                  </div>
                  <div className="flex items-center gap-3 text-red-300">
                    <i className="ri-close-circle-line text-red-500"></i>
                    <span>No prediction, only reaction to disasters</span>
                  </div>
                </div>
              </div>
            </div>

            {/* After Section */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-sm rotate-[5deg]">
                WITH AI
              </div>
              <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-6">The Power of AI Intelligence</h3>
                <img 
                  src="https://readdy.ai/api/search-image?query=Advanced%20AI%20security%20system%20successfully%20protecting%20Nigerian%20business%2C%20intelligent%20surveillance%20preventing%20crime%20before%20it%20happens%2C%20modern%20AI%20analytics%20showing%20real-time%20threat%20detection%2C%20Nigerian%20business%20owner%20celebrating%20AI%20security%20success&width=600&height=300&seq=ai-security-success-fixed&orientation=landscape"
                  alt="AI Security Success"
                  className="w-full h-64 object-cover object-top rounded-xl mb-6"
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-green-300">
                    <i className="ri-check-circle-line text-green-500"></i>
                    <span>AI PREDICTS and PREVENTS incidents before they occur</span>
                  </div>
                  <div className="flex items-center gap-3 text-green-300">
                    <i className="ri-check-circle-line text-green-500"></i>
                    <span>99.7% accuracy in detecting suspicious behavior</span>
                  </div>
                  <div className="flex items-center gap-3 text-green-300">
                    <i className="ri-check-circle-line text-green-500"></i>
                    <span>₦2.8B in assets protected across Nigeria</span>
                  </div>
                  <div className="flex items-center gap-3 text-green-300">
                    <i className="ri-check-circle-line text-green-500"></i>
                    <span>Sleep peacefully knowing AI never stops watching</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transformation Arrow */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 bg-purple-600/20 border border-purple-500 rounded-full px-8 py-4">
              <span className="text-purple-400 font-bold">UPGRADE TO AI PROTECTION TODAY</span>
              <i className="ri-arrow-right-line text-purple-400 text-2xl"></i>
            </div>
          </div>
        </div>
      </section>

      {/* How AI Works Step by Step */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">HOW AI PROTECTS YOU IN 4 STEPS</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch AI intelligence work in real-time to protect your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -top-4 left-4 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div className="bg-gray-800/50 border border-purple-500/30 rounded-2xl p-6 h-full">
                <img 
                  src="https://readdy.ai/api/search-image?query=AI%20camera%20with%20glowing%20purple%20indicators%20analyzing%20incoming%20video%20feed%2C%20computer%20vision%20processing%20multiple%20camera%20angles%20simultaneously%2C%20artificial%20intelligence%20brain%20actively%20scanning%20and%20processing%20security%20footage%20in%20real-time%20in%20Nigerian%20business%20environment&width=300&height=200&seq=ai-detection-step1-fixed&orientation=landscape"
                  alt="AI Detection Process"
                  className="w-full h-40 object-cover object-top rounded-xl mb-4"
                />
                <h3 className="text-lg font-bold text-purple-400 mb-2">AI SEES EVERYTHING</h3>
                <p className="text-gray-300 text-sm">
                  Advanced AI processes every frame from all cameras simultaneously, analyzing 1000x faster than humans.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -top-4 left-4 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div className="bg-gray-800/50 border border-blue-500/30 rounded-2xl p-6 h-full">
                <img 
                  src="https://readdy.ai/api/search-image?query=AI%20system%20analyzing%20human%20behavior%20patterns%20with%20colored%20overlays%20showing%20threat%20assessment%2C%20machine%20learning%20algorithms%20evaluating%20suspicious%20activities%2C%20behavioral%20analysis%20with%20risk%20probability%20indicators%20and%20warning%20levels%20in%20Nigerian%20security%20setting&width=300&height=200&seq=ai-analysis-step2-fixed&orientation=landscape"
                  alt="AI Threat Analysis"
                  className="w-full h-40 object-cover object-top rounded-xl mb-4"
                />
                <h3 className="text-lg font-bold text-blue-400 mb-2">AI ANALYZES THREATS</h3>
                <p className="text-gray-300 text-sm">
                  Behavioral analysis identifies suspicious patterns, weapon detection, and calculates threat probability in real-time.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -top-4 left-4 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div className="bg-gray-800/50 border border-orange-500/30 rounded-2xl p-6 h-full">
                <img 
                  src="https://readdy.ai/api/search-image?query=Instant%20security%20alert%20notification%20system%20with%20red%20warning%20signals%2C%20mobile%20phone%20and%20computer%20screens%20showing%20urgent%20AI%20threat%20alerts%2C%20emergency%20notification%20dashboard%20with%20immediate%20response%20activation%20in%20Nigerian%20security%20context&width=300&height=200&seq=instant-alerts-step3-fixed&orientation=landscape"
                  alt="Instant Alerts"
                  className="w-full h-40 object-cover object-top rounded-xl mb-4"
                />
                <h3 className="text-lg font-bold text-orange-400 mb-2">INSTANT ALERTS</h3>
                <p className="text-gray-300 text-sm">
                  0.2-second alerts sent to security team, police, and management before incidents escalate.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="absolute -top-4 left-4 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div className="bg-gray-800/50 border border-green-500/30 rounded-2xl p-6 h-full">
                <img 
                  src="https://readdy.ai/api/search-image?query=Security%20response%20team%20and%20police%20officers%20responding%20to%20AI%20alert%2C%20professional%20security%20personnel%20taking%20immediate%20action%20based%20on%20AI%20predictions%2C%20successful%20threat%20prevention%20and%20incident%20response%20in%20Nigeria%20with%20celebrating%20security%20team&width=300&height=200&seq=response-team-step4-fixed&orientation=landscape"
                  alt="Response Team Action"
                  className="w-full h-40 object-cover object-top rounded-xl mb-4"
                />
                <h3 className="text-lg font-bold text-green-400 mb-2">IMMEDIATE RESPONSE</h3>
                <p className="text-gray-300 text-sm">
                  Trained response teams neutralize threats before they become incidents, saving lives and assets.
                </p>
              </div>
            </div>
          </div>

          {/* Process Flow Arrow */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-4 text-center">
              <div className="text-purple-400 font-bold">DETECTION</div>
              <i className="ri-arrow-right-line text-gray-400"></i>
              <div className="text-blue-400 font-bold">ANALYSIS</div>
              <i className="ri-arrow-right-line text-gray-400"></i>
              <div className="text-orange-400 font-bold">ALERT</div>
              <i className="ri-arrow-right-line text-gray-400"></i>
              <div className="text-green-400 font-bold">PREVENTION</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-900/40 to-blue-900/40">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Deploy <span className="text-purple-400">AI Intelligence?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the security revolution with AI that thinks, learns, and protects
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all hover:scale-105 whitespace-nowrap">
              🧠 ACTIVATE AI BRAIN
            </button>
            <button
              onClick={handleDownloadBrochure}
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg text-lg font-bold transition-all hover:scale-105 whitespace-nowrap"
            >
              📄 Download AI Specs
            </button>
          </div>

          <div className="text-center mt-6 text-sm text-gray-400">
            ⚡ Real-time analysis • 🧠 Self-learning AI • 🎯 99.7% accuracy
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link to="/">
                <img 
                  src="https://static.readdy.ai/image/f38dbee0b97d493b71475a98132a7b29/c567d8d1fd4702e852424c0299bd0094.png" 
                  alt="CoverAlarm Systems" 
                  className="h-6 w-auto cursor-pointer"
                />
              </Link>
              <p className="text-gray-400 mb-4">
                Nigeria's most advanced AI-powered security analytics platform.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">AI Analytics</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/ai-video-analytics" className="hover:text-white">Behavior Analysis</a></li>
                <li><a href="/ai-video-monitoring" className="hover:text-white">Video Monitoring</a></li>
                <li><a href="/fire-detection" className="hover:text-white">Fire Detection</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Fleet Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/gps-fleet-tracking" className="hover:text-white">GPS Tracking</a></li>
                <li><a href="/fuel-monitoring" className="hover:text-white">Fuel Monitoring</a></li>
                <li><a href="/vehicle-ai-cctv" className="hover:text-white">Vehicle CCTV</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div>+2348145540554</div>
                <div>info@coveralarm.com</div>
                <div>Abuja, Nigeria</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CoverAlarm Systems LTD. All rights reserved. | <a href="https://readdy.ai/?origin=logo" className="hover:text-white">Website Builder</a></p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-purple-500 rounded-2xl max-w-4xl w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-purple-400">🧠 AI Analytics Demo</h2>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>

              <div className="aspect-video bg-gray-800 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center text-white">
                  <i className="ri-brain-line text-6xl mb-4 text-purple-500"></i>
                  <p className="text-xl">AI Analytics in Action</p>
                  <p className="text-gray-300 mt-2">Watch how our AI analyzes behavior and predicts threats</p>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">See AI Intelligence at Work</h3>
                <p className="text-gray-300 mb-6">
                  Experience how our AI thinks, learns, and protects your assets
                </p>
                <button
                  onClick={() => {
                    setIsVideoModalOpen(false);
                  }}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold"
                >
                  Deploy This AI for My Property
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
}
