
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AIVideoMonitoring() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('features');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [crimeCount, setCrimeCount] = useState(2847);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ---------------------------------------------------------------------------
  // Show component with a fade‑in animation after mount
  // ---------------------------------------------------------------------------
  useEffect(() => {
    setIsVisible(true);

    // Crime counter animation
    const interval = setInterval(() => {
      setCrimeCount((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // ---------------------------------------------------------------------------
  // Helper – safely trigger a brochure download
  // ---------------------------------------------------------------------------
  const handleDownloadBrochure = () => {
    try {
      const link = document.createElement('a');
      link.href =
        'https://www.canva.com/design/DAG1AE9k-tQ/N9tt6XKyXX9T8MKN6ZFN4w/view?utm_content=DAG1AE9k-tQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha9e5a4fd5e';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Failed to start brochure download:', error);
      // Optional: display a user‑friendly message here
    }
  };

  // ---------------------------------------------------------------------------
  // Static data
  // ---------------------------------------------------------------------------
  const features = [
    {
      icon: 'ri-eye-line',
      title: 'Real-Time Threat Detection',
      description:
        'AI algorithms analyze video feeds in real-time, detecting suspicious activities, unauthorized access, and potential threats within 0.3 seconds.',
    },
    {
      icon: 'ri-user-search-line',
      title: 'Advanced Facial Recognition',
      description:
        'Identify known individuals, blacklisted persons, and unauthorized personnel with 99.7% accuracy, even in low-light conditions.',
    },
    {
      icon: 'ri-brain-line',
      title: 'Behavioral Analysis',
      description:
        'Monitor and analyze human behavior patterns to detect loitering, fighting, crowd gathering, and other suspicious activities.',
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Instant Mobile Alerts',
      description:
        'Receive immediate notifications on your phone with video clips and location details when threats are detected.',
    },
    {
      icon: 'ri-cloud-line',
      title: 'Cloud Storage & Analytics',
      description:
        'Secure cloud storage with 30‑day retention, advanced search capabilities, and detailed analytics reports.',
    },
    {
      icon: 'ri-shield-check-line',
      title: '24/7 Professional Monitoring',
      description:
        'Our trained security professionals monitor your cameras around the clock from our state‑of‑the‑art control center.',
    },
  ];

  const benefits = [
    { icon: 'ri-shield-line', text: 'Prevent crimes before they happen with predictive AI' },
    { icon: 'ri-money-dollar-circle-line', text: 'Reduce security personnel costs by up to 60%' },
    { icon: 'ri-time-line', text: 'Instant alerts and faster emergency response' },
    { icon: 'ri-file-text-line', text: 'Comprehensive evidence collection for investigations' },
    { icon: 'ri-global-line', text: 'Monitor your property from anywhere in the world' },
    { icon: 'ri-settings-line', text: 'Customizable detection zones and sensitivity levels' },
  ];

  const specifications = [
    { label: 'Video Resolution', value: 'Up to 4K Ultra HD' },
    { label: 'Night Vision Range', value: 'Up to 100 meters' },
    { label: 'Detection Accuracy', value: '99.7%' },
    { label: 'Response Time', value: '< 0.3 seconds' },
    { label: 'Storage Duration', value: '30 days cloud storage' },
    { label: 'Weather Rating', value: 'IP67 Weatherproof' },
    { label: 'Power Backup', value: '24‑hour UPS backup' },
    { label: 'Warranty', value: '5 years comprehensive' },
  ];

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
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
                  className="h-8 w-auto sm:h-10 cursor-pointer"
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
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer font-semibold text-sm">
                Deploy Protection
              </button>
            </div>

            {/* Mobile hamburger button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-gray-900 border-t border-gray-700">
              <div className="px-4 py-4 space-y-2">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium"
                >
                  About Us
                </Link>
                
                {/* Mobile Services Dropdown */}
                <div className="space-y-1">
                  <div className="text-gray-300 px-3 py-2 text-sm font-medium">Security Arsenal</div>
                  <div className="pl-6 space-y-1">
                    <Link
                      to="/ai-video-analytics"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-400 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer text-sm"
                    >
                      AI CCTV Analytics
                    </Link>
                    <Link
                      to="/ai-video-monitoring"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-400 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer text-sm"
                    >
                      AI Video Monitoring
                    </Link>
                    <Link
                      to="/fuel-monitoring"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-400 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer text-sm"
                    >
                      Fuel Monitoring
                    </Link>
                    <Link
                      to="/fire-detection"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-400 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer text-sm"
                    >
                      Fire Detection
                    </Link>
                    <Link
                      to="/gps-fleet-tracking"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-400 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer text-sm"
                    >
                      GPS Fleet Tracking
                    </Link>
                    <Link
                      to="/government-solutions"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-400 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer text-sm"
                    >
                      Government Solutions
                    </Link>
                  </div>
                </div>

                <a
                  href="/#case-studies"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium"
                >
                  Case Studies
                </a>
                <a
                  href="/#testimonials"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium"
                >
                  Victory Stories
                </a>
                <a
                  href="/#support"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium"
                >
                  Command Center
                </a>

                {/* Mobile Action Buttons */}
                <div className="pt-4 space-y-3">
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg transition-colors whitespace-nowrap cursor-pointer font-semibold text-sm">
                    🚨 Emergency
                  </button>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors whitespace-nowrap cursor-pointer font-semibold text-sm">
                    Deploy Protection
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ---------- Hero Section ---------- */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Hero Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          >
            <source
              src="https://public.readdy.ai/ai/video_res/85971c2b-62b2-451b-87dc-83418a280e28.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
        </div>

        {/* Animated Matrix Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-red-900/20 to-black/50">
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-20 h-full">
              {[...Array(100)].map((_, i) => (
                <div
                  key={i}
                  className="border-r border-red-500/10 animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 lg:py-16">
          <div
            className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Left Side - Provocative Content */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              {/* Threat Alert Badge */}
              <div className="inline-flex items-center bg-red-600/20 border border-red-500 rounded-full px-3 sm:px-4 py-2 text-red-400">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-xs sm:text-sm font-bold">THREAT LEVEL: CRITICAL</span>
              </div>

              {/* Staggered Typography */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none">
                  <span className="text-white block">THEY'RE</span>
                  <span className="text-red-500 block ml-4 sm:ml-8">WATCHING</span>
                  <span className="text-blue-400 block ml-8 sm:ml-16">YOU</span>
                </h1>
              </div>

              {/* Rotated Badge */}
              <div className="relative">
                <div className="transform rotate-12 bg-yellow-500 text-black px-4 sm:px-6 py-2 rounded-lg font-black text-xs sm:text-sm inline-block">
                  0.3 SECONDS TO DETECT THREATS
                </div>
              </div>

              {/* Crime Counter */}
              <div className="bg-red-900/30 border border-red-500 rounded-lg p-3 sm:p-4">
                <div className="text-red-400 text-xs sm:text-sm font-bold mb-1">CRIMES THIS MONTH</div>
                <div className="text-2xl sm:text-3xl font-black text-white">{crimeCount.toLocaleString()}</div>
                <div className="text-red-300 text-xs">+1 every 3 seconds</div>
              </div>

              {/* Problem vs Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-red-900/20 border border-red-500 rounded-lg p-3 sm:p-4">
                  <div className="text-red-400 font-bold text-xs sm:text-sm mb-2">THE PROBLEM</div>
                  <div className="text-white text-xs">Traditional cameras just record crimes</div>
                </div>
                <div className="bg-green-900/20 border border-green-500 rounded-lg p-3 sm:p-4">
                  <div className="text-green-400 font-bold text-xs sm:text-sm mb-2">OUR SOLUTION</div>
                  <div className="text-white text-xs">AI prevents crimes before they happen</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold transition-all hover:scale-105 whitespace-nowrap">
                  🛡️ ACTIVATE DEFENSE SYSTEM
                </button>
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="border-2 border-red-500 text-red-400 hover:bg-red-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold transition-all hover:scale-105 whitespace-nowrap"
                >
                  📹 SEE AI IN ACTION
                </button>
              </div>

              {/* Status Indicators */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400">SYSTEM ACTIVE</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-400">AI LEARNING</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="text-yellow-400">THREATS NEUTRALIZED</span>
                </div>
              </div>
            </div>

            {/* Right Side - Live Dashboard */}
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20security%20monitoring%20center%20with%20multiple%20screens%20showing%20live%20surveillance%20feeds%2C%20Nigerian%20security%20operators%20monitoring%20AI%20video%20systems%20in%20modern%20command%20center%2C%20high-tech%20security%20control%20room%20with%20real-time%20threat%20detection%20displays&width=800&height=600&seq=live-monitoring-center-fixed&orientation=landscape"
                  alt="Live Security Monitoring Center"
                  className="w-full h-64 sm:h-80 lg:h-full object-cover object-center rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-bold text-sm sm:text-base">LIVE MONITORING</span>
                  </div>
                  <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-2">
                    Eyes That Never Close
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Professional security teams monitoring your cameras 24/7, ready to respond to any threat in 0.3 seconds
                  </p>
                </div>
              </div>

              {/* Floating Alert */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-yellow-500 text-black px-3 sm:px-4 py-1 sm:py-2 rounded-lg font-bold text-xs sm:text-sm animate-bounce">
                PREVENTING CRIME RIGHT NOW
              </div>
            </div>
          </div>
        </div>

        {/* Breaking News Ticker */}
        <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white py-2 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="mx-4 sm:mx-8 text-sm sm:text-base">🚨 BREAKING: AI system prevents break-in at Lagos warehouse</span>
            <span className="mx-4 sm:mx-8 text-sm sm:text-base">🛡️ SUCCESS: Facial recognition identifies wanted suspect in Abuja</span>
            <span className="mx-4 sm:mx-8 text-sm sm:text-base">⚡ ALERT: Fire detection saves ₦50M facility in Port Harcourt</span>
            <span className="mx-4 sm:mx-8 text-sm sm:text-base">🎯 VICTORY: GPS tracking recovers stolen vehicles worth ₦25M</span>
          </div>
        </div>
      </section>

      {/* ---------- Real Success Stories Section ---------- */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Real Protection,</span>{' '}
              <span className="text-green-400">Real Results</span>
            </h2>
            <p className="text-xl text-gray-300">
              See how our AI system has prevented crimes and protected Nigerian businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Success Story 1 */}
            <div className="relative group cursor-pointer">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Nigerian%20warehouse%20manager%20celebrating%20successful%20theft%20prevention%20with%20security%20team%2C%20relieved%20African%20business%20owner%20shaking%20hands%20with%20security%20response%20personnel%20after%20AI%20system%20stopped%20break-in%20attempt%2C%20successful%20security%20intervention%20at%20Lagos%20warehouse%20with%20visible%20security%20equipment&width=500&height=400&seq=warehouse-protection-success-fixed&orientation=landscape"
                  alt="Warehouse Protection Success"
                  className="w-full h-80 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                {/* Success Badge */}
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  100% SUCCESS
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-green-400 font-bold text-lg mb-2">₦15M Equipment Theft Prevented</div>
                  <p className="text-white text-sm mb-3">Lagos Warehouse - AI detected suspicious activity at 2:30 AM</p>
                  <div className="flex items-center text-green-300 text-sm">
                    <i className="ri-time-line mr-2"></i>
                    <span>Response time: 0.2 seconds</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Story 2 */}
            <div className="relative group cursor-pointer">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Happy%20Nigerian%20retail%20store%20owner%20celebrating%20successful%20crime%20prevention%20with%20security%20team%2C%20relieved%20African%20shop%20owner%20shaking%20hands%20with%20security%20personnel%20after%20stopping%20attempted%20robbery%2C%20successful%20business%20protection%20story%20in%20Abuja%20Nigeria%20with%20modern%20retail%20environment&width=500&height=400&seq=retail-protection-success-fixed&orientation=landscape"
                  alt="Retail Store Protection Success"
                  className="w-full h-80 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                {/* Success Badge */}
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  THREAT NEUTRALIZED
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-blue-400 font-bold text-lg mb-2">Armed Robbery Attempt Stopped</div>
                  <p className="text-white text-sm mb-3">Abuja Retail Store - Facial recognition identified known criminal</p>
                  <div className="flex items-center text-blue-300 text-sm">
                    <i className="ri-shield-check-line mr-2"></i>
                    <span>Police alerted & arrived within 5 minutes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Story 3 */}
            <div className="relative group cursor-pointer">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Nigerian%20office%20building%20security%20team%20celebrating%20successful%20intrusion%20prevention%2C%20professional%20African%20security%20officers%20with%20building%20management%20after%20AI%20system%20detected%20unauthorized%20access%20attempt%2C%20successful%20commercial%20security%20intervention%20in%20Port%20Harcourt%20with%20modern%20office%20complex&width=500&height=400&seq=office-protection-success-fixed&orientation=landscape"
                  alt="Office Building Protection Success"
                  className="w-full h-80 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                {/* Success Badge */}
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  INTRUSION BLOCKED
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-purple-400 font-bold text-lg mb-2">Unauthorized Access Prevented</div>
                  <p className="text-white text-sm mb-3">Port Harcourt Office - AI caught intruder scaling perimeter fence</p>
                  <div className="flex items-center text-purple-300 text-sm">
                    <i className="ri-camera-line mr-2"></i>
                    <span>Full incident recorded as evidence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Bar */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">847</div>
                <div className="text-gray-300 text-sm">Sites Protected</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">2,340</div>
                <div className="text-gray-300 text-sm">Threats Detected</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">₦2.8B</div>
                <div className="text-gray-300 text-sm">Assets Protected</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">99.7%</div>
                <div className="text-gray-300 text-sm">Prevention Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Before vs After Comparison ---------- */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-red-400">Before</span> vs <span className="text-green-400">After</span> AI Protection
            </h2>
            <p className="text-xl text-gray-300">
              See the dramatic difference our AI monitoring makes for business security
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Before - The Problem */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-red-400 mb-4">❌ BEFORE: Traditional Security</h3>
                <div className="w-24 h-1 bg-red-500 mx-auto"></div>
              </div>

              <div className="relative rounded-xl overflow-hidden mb-6">
                <img
                  src="https://readdy.ai/api/search-image?query=Traditional%20security%20problems%20showing%20sleeping%20guards%2C%20basic%20CCTV%20cameras%20only%20recording%20after%20crimes%20happen%2C%20Nigerian%20business%20suffering%20from%20security%20failures%2C%20outdated%20security%20system%20with%20guards%20missing%20threats%20and%20break-ins%20occurring&width=600&height=300&seq=traditional-security-problems-fixed&orientation=landscape"
                  alt="Security Problems Before AI"
                  className="w-full h-64 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-red-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-lg">The Reality Without AI Protection</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { icon: '😴', text: 'Guards fall asleep or get distracted' },
                  { icon: '📹', text: 'Cameras only record crimes after they happen' },
                  { icon: '⏱️', text: 'Average response time: 30+ minutes' },
                  { icon: '💸', text: 'High security staff costs with limited coverage' },
                  { icon: '🚫', text: 'No early warning system for threats' },
                  { icon: '📊', text: 'No analytics or behavior prediction' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 bg-red-900/20 border border-red-500/30 rounded-lg p-4"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After - The Solution */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-green-400 mb-4">✅ AFTER: AI Video Monitoring</h3>
                <div className="w-24 h-1 bg-green-500 mx-auto"></div>
              </div>

              <div className="relative rounded-xl overflow-hidden mb-6">
                <img
                  src="https://readdy.ai/api/search-image?query=Advanced%20AI%20security%20system%20successfully%20protecting%20Nigerian%20business%2C%20intelligent%20surveillance%20preventing%20crime%20before%20it%20happens%2C%20modern%20AI%20monitoring%20with%20real-time%20threat%20detection%2C%20Nigerian%20business%20owner%20celebrating%20complete%20security%20protection&width=600&height=300&seq=ai-security-protection-fixed&orientation=landscape"
                  alt="Success With AI Protection"
                  className="w-full h-64 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-lg">Complete Peace of Mind with AI</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { icon: '🤖', text: 'AI never sleeps, never gets tired' },
                  { icon: '⚡', text: 'Prevents crimes before they happen' },
                  { icon: '🚀', text: 'Instant alerts in 0.3 seconds' },
                  { icon: '💰', text: '60% reduction in security costs' },
                  { icon: '🎯', text: 'Predictive threat detection system' },
                  { icon: '📈', text: 'Advanced analytics and reporting' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 bg-green-900/20 border border-green-500/30 rounded-lg p-4"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Transformation CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-red-900/30 via-black to-green-900/30 border-y border-gray-700 py-12 rounded-xl">
              <h3 className="text-3xl font-bold text-white mb-4">
                Make The Switch To AI Protection
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Don't wait for the next break‑in. Transform your security from reactive to proactive today.
              </p>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 text-white px-12 py-4 rounded-lg font-bold text-xl transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
              >
                🛡️ UPGRADE TO AI SECURITY NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Features, Benefits & Specifications ---------- */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Complete AI Video Monitoring Solution</h2>
            <div className="flex justify-center mb-8">
              <div className="bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('features')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === 'features' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Features
                </button>
                <button
                  onClick={() => setActiveTab('benefits')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === 'benefits' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Benefits
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === 'specs' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Specifications
                </button>
              </div>
            </div>
          </div>

          {/* Features Tab */}
          {activeTab === 'features' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <i className={`${feature.icon} text-xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className={`${benefit.icon} text-white`}></i>
                    </div>
                    <div>
                      <p className="text-lg text-gray-300">{benefit.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">ROI Calculator</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Traditional Security Guards (3 shifts)</span>
                    <span className="font-bold">₦450,000/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">AI Video Monitoring System</span>
                    <span className="font-bold text-blue-400">₦150,000/month</span>
                  </div>
                  <div className="border-t border-gray-600 pt-4">
                    <div className="flex justify-between text-xl">
                      <span className="text-green-400 font-bold">Monthly Savings</span>
                      <span className="text-green-400 font-bold">₦300,000</span>
                    </div>
                    <div className="flex justify-between text-lg mt-2">
                      <span className="text-green-400">Annual Savings</span>
                      <span className="text-green-400 font-bold">₦3.6M</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Specifications Tab */}
          {activeTab === 'specs' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center"
                >
                  <div className="text-sm text-gray-400 mb-2">{spec.label}</div>
                  <div className="text-lg font-bold text-blue-400">{spec.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ---------- Call To Action ---------- */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-900/40 to-purple-900/40">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Experience <span className="text-blue-400">AI-Powered Protection?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
            Join 150+ Nigerian businesses already protected by our intelligent video monitoring system
          </p>

          {/* Two cards: Brochure & Demo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Brochure */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 sm:p-6">
              <div className="text-center">
                <i className="ri-download-line text-2xl sm:text-3xl text-blue-400 mb-3"></i>
                <h3 className="text-lg sm:text-xl font-bold mb-3">Download Detailed Brochure</h3>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">
                  Get comprehensive information, pricing, and technical specifications
                </p>
                <button
                  onClick={handleDownloadBrochure}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all hover:scale-105 whitespace-nowrap w-full text-sm sm:text-base"
                >
                  📄 Download Brochure
                </button>
              </div>
            </div>

            {/* Live Demo */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 sm:p-6">
              <div className="text-center">
                <i className="ri-play-circle-line text-2xl sm:text-3xl text-purple-400 mb-3"></i>
                <h3 className="text-lg sm:text-xl font-bold mb-3">Watch Live Demo</h3>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">
                  See our AI video monitoring system in action with real scenarios
                </p>
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all hover:scale-105 whitespace-nowrap w-full text-sm sm:text-base"
                >
                  🎥 Watch Demo
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold transition-all hover:scale-105 whitespace-nowrap">
              🛡️ Get Protected Today
            </button>
            <button
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold transition-all hover:scale-105 whitespace-nowrap"
            >
              📞 Schedule Consultation
            </button>
          </div>

          <div className="text-center mt-4 sm:mt-6 text-xs sm:text-sm text-gray-400">
            ⚡ Free installation • 🚀 Setup within 48 hours • 💰 Money‑back guarantee
          </div>
        </div>
      </section>

      {/* ---------- Video Demo Modal ---------- */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-blue-500 rounded-2xl max-w-4xl w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-blue-400">🎥 AI Video Monitoring Demo</h2>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>

              <div className="aspect-video bg-gray-800 rounded-lg mb-6 flex items-center justify-center">
                <iframe
                  src="https://www.instagram.com/reel/DOk0wdWDXoW/embed"
                  title="AI Video Monitoring Demo"
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">See AI Detection in Real‑Time</h3>
                <p className="text-gray-300 mb-6">
                  Watch how our AI cameras detect faces, analyze behavior, and alert security teams instantly
                </p>
                <button
                  onClick={() => {
                    setIsVideoModalOpen(false);
                    // future: open quote / contact form
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
                >
                  Get This System for My Property
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>
          © 2025 CoverAlarm Systems LTD. All rights reserved. |{' '}
          <a href="https://readdy.ai/?origin=logo" className="hover:text-white">
            Website Builder
          </a>
        </p>
      </div>
    </div>
  );
}
