import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FuelMonitoring() {
  const [showDemo, setShowDemo] = useState(false);
  const [activeMetric, setActiveMetric] = useState('consumption');
  const [fuelTheft, setFuelTheft] = useState(2847);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Fuel theft counter
    const interval = setInterval(() => {
      setFuelTheft(prev => prev + 1);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

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
                <Link
                  to="/bnpl"
                  className="text-gray-300 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium"
                >
                  Secure Now Pay Later
                </Link>
                <a
                  href="/#case-studies"
                  className="text-gray-300 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium"
                >
                  Case Studies
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
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer font-semibold text-sm">
                Stop Fuel Theft
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

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-gray-900 border-t border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-gray-300 hover:text-red-400 transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-gray-300 hover:text-red-400 transition-colors"
                >
                  About Us
                </Link>
                <div className="px-3 py-2 text-gray-400 text-sm font-medium">Security Arsenal</div>
                <Link
                  to="/ai-video-analytics"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-6 py-2 text-gray-300 hover:text-red-400 transition-colors text-sm"
                >
                  AI CCTV Analytics
                </Link>
                <Link
                  to="/ai-video-monitoring"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-6 py-2 text-gray-300 hover:text-red-400 transition-colors text-sm"
                >
                  AI Video Monitoring
                </Link>
                <Link
                  to="/fuel-monitoring"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-6 py-2 text-gray-300 hover:text-red-400 transition-colors text-sm"
                >
                  Fuel Monitoring
                </Link>
                <Link
                  to="/fire-detection"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-6 py-2 text-gray-300 hover:text-red-400 transition-colors text-sm"
                >
                  Fire Detection
                </Link>
                <Link
                  to="/gps-fleet-tracking"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-6 py-2 text-gray-300 hover:text-red-400 transition-colors text-sm"
                >
                  GPS Fleet Tracking
                </Link>
                <Link
                  to="/government-solutions"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-6 py-2 text-gray-300 hover:text-red-400 transition-colors text-sm"
                >
                  Government Solutions
                </Link>
                <Link
                  to="/bnpl"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-gray-300 hover:text-red-400 transition-colors"
                >
                  Secure Now Pay Later
                </Link>
                <a
                  href="/#case-studies"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-gray-300 hover:text-red-400 transition-colors"
                >
                  Case Studies
                </a>
                <a
                  href="/#support"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-gray-300 hover:text-red-400 transition-colors"
                >
                  Command Center
                </a>
                <div className="px-3 py-4 space-y-2">
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors font-semibold text-sm">
                    🚨 Emergency
                  </button>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors font-semibold text-sm">
                    Stop Fuel Theft
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
            src="https://readdy.ai/api/search-image?query=Professional%20fuel%20monitoring%20system%20with%20sensors%20and%20gauges%20on%20industrial%20fuel%20tanks%2C%20modern%20fuel%20management%20technology%20with%20digital%20displays%2C%20Nigerian%20fuel%20depot%20with%20advanced%20monitoring%20equipment%2C%20fuel%20theft%20prevention%20systems%20with%20security%20cameras%20and%20sensors%20showing%20successful%20fuel%20protection&width=1920&height=1080&seq=fuel-monitoring-hero-new&orientation=landscape"
            alt="Fuel Monitoring System"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-red-900/20 to-green-900/20">
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-20 h-full">
              {[...Array(100)].map((_, i) => (
                <div key={i} className="border-r border-red-500/10 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 lg:py-16">
          <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Left Side - Provocative Content */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              {/* Theft Alert Badge */}
              <div className="inline-flex items-center bg-red-600/20 border border-red-500 rounded-full px-3 sm:px-4 py-2 text-red-400">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-xs sm:text-sm font-bold">FUEL THEFT EPIDEMIC</span>
              </div>

              {/* Staggered Typography */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none">
                  <span className="text-white block">THEY'RE</span>
                  <span className="text-red-500 block ml-4 sm:ml-8">STEALING</span>
                  <span className="text-green-400 block ml-8 sm:ml-16">YOUR FUEL</span>
                </h1>
              </div>

              {/* Rotated Badge */}
              <div className="relative">
                <div className="transform rotate-12 bg-yellow-500 text-black px-4 sm:px-6 py-2 rounded-lg font-black text-xs sm:text-sm inline-block">
                  REAL-TIME MONITORING STOPS THEFT
                </div>
              </div>

              {/* Theft Counter */}
              <div className="bg-red-900/30 border border-red-500 rounded-lg p-3 sm:p-4">
                <div className="text-red-400 text-xs sm:text-sm font-bold mb-1">FUEL THIEF INCIDENTS TODAY</div>
                <div className="text-2xl sm:text-3xl font-black text-white">{fuelTheft.toLocaleString()}</div>
                <div className="text-red-300 text-xs">+1 every 3.5 seconds in Nigeria</div>
              </div>

              {/* Problem vs Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-red-900/20 border border-red-500 rounded-lg p-3 sm:p-4">
                  <div className="text-red-400 font-bold text-xs sm:text-sm mb-2">THE BLEEDING</div>
                  <div className="text-white text-xs">25% of fuel stolen without monitoring</div>
                </div>
                <div className="bg-green-900/20 border border-green-500 rounded-lg p-3 sm:p-4">
                  <div className="text-green-400 font-bold text-xs sm:text-sm mb-2">THE HEALING</div>
                  <div className="text-white text-xs">35% savings with smart monitoring</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold transition-all hover:scale-105 whitespace-nowrap">
                  ⛽ STOP FUEL THEFT NOW
                </button>
                <button
                  onClick={() => setShowDemo(true)}
                  className="border-2 border-green-500 text-green-400 hover:bg-green-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold transition-all hover:scale-105 whitespace-nowrap"
                >
                  📊 SEE LIVE MONITORING
                </button>
              </div>

                {/* Status Indicators */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400">±1% ACCURACY</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-blue-400">30 SEC DETECTION</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-yellow-400">35% SAVINGS</span>
                  </div>
                </div>
            </div>

            {/* Right Side - Fuel Monitoring Dashboard */}
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20fuel%20monitoring%20system%20with%20sensors%20and%20gauges%20on%20industrial%20fuel%20tanks%2C%20modern%20fuel%20management%20technology%20with%20digital%20displays%2C%20Nigerian%20fuel%20depot%20with%20advanced%20monitoring%20equipment%2C%20fuel%20theft%20prevention%20systems%20with%20security%20cameras%20and%20sensors%2C%20real-time%20fuel%20level%20tracking%20dashboard%20showing%20analytics%20and%20consumption%20patterns&width=800&height=600&seq=fuel-monitoring-center-new&orientation=landscape"
                  alt="Fuel Monitoring Command Center"
                  className="w-full h-64 sm:h-80 lg:h-full object-cover object-center rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-bold text-sm sm:text-base">MONITORING ACTIVE</span>
                  </div>
                  <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-2">
                    Stop Fuel Theft in 30 Seconds
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Real-time monitoring detects fuel theft attempts instantly, saving you millions in losses
                  </p>
                </div>
              </div>

              {/* Floating Success Badge */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-green-500 text-black px-3 sm:px-4 py-1 sm:py-2 rounded-lg font-bold text-xs sm:text-sm animate-bounce">
                SAVING MILLIONS
              </div>
            </div>
          </div>
        </div>

        {/* Breaking News Ticker */}
        <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white py-2 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="mx-4 sm:mx-8 text-sm sm:text-base">🚨 BREAKING: Fuel monitoring prevents ₦5M theft in Lagos fleet</span>
            <span className="mx-4 sm:mx-8 text-sm sm:text-base">⛽ SUCCESS: Smart sensors save Dangote ₦50M in fuel costs</span>
            <span className="mx-4 sm:mx-8 text-sm sm:text-base">⚡ ALERT: Real-time monitoring catches fuel siphoning in Abuja</span>
            <span className="mx-4 sm:mx-8 text-sm sm:text-base">🛡️ VICTORY: 35% fuel savings achieved across 200+ fleets</span>
          </div>
        </div>
      </section>

      {/* Fuel Loss Statistics */}
      <section className="py-12 sm:py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">THE FUEL THEFT CRISIS</h2>
            <p className="text-lg sm:text-xl text-gray-300">Nigerian businesses are hemorrhaging fuel</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center bg-red-900/20 border border-red-500 rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-400 mb-2">₦145B</div>
              <div className="text-gray-300 font-medium text-sm sm:text-base">Annual Fuel Theft</div>
              <div className="text-red-300 text-xs sm:text-sm">Nigeria estimate</div>
            </div>
            <div className="text-center bg-orange-900/20 border border-orange-500 rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 mb-2">65%</div>
              <div className="text-gray-300 font-medium text-sm sm:text-base">Fleet Operators</div>
              <div className="text-orange-300 text-xs sm:text-sm">Experience fuel theft</div>
            </div>
            <div className="text-center bg-yellow-900/20 border border-yellow-500 rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">25%</div>
              <div className="text-gray-300 font-medium text-sm sm:text-base">Average Loss</div>
              <div className="text-yellow-300 text-xs sm:text-sm">Of total fuel purchased</div>
            </div>
            <div className="text-center bg-green-900/20 border border-green-500 rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400 mb-2">35%</div>
              <div className="text-gray-300 font-medium text-sm sm:text-base">Savings Potential</div>
              <div className="text-green-300 text-xs sm:text-sm">With monitoring systems</div>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Features */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Complete Fuel Management Solution
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Monitor every drop with precision sensors, real-time analytics, and intelligent theft detection.
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-8 sm:mb-12 gap-2 sm:gap-4">
            {[
              { id: 'consumption', label: 'Fuel Consumption', icon: 'ri-gas-station-line' },
              { id: 'theft', label: 'Theft Detection', icon: 'ri-shield-line' },
              { id: 'efficiency', label: 'Efficiency Analytics', icon: 'ri-bar-chart-line' },
              { id: 'alerts', label: 'Smart Alerts', icon: 'ri-notification-line' }
            ].map((metric) => (
              <button
                key={metric.id}
                onClick={() => setActiveMetric(metric.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer text-sm sm:text-base ${
                  activeMetric === metric.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className={`${metric.icon} text-base sm:text-lg`}></i>
                <span className="hidden sm:inline">{metric.label}</span>
                <span className="sm:hidden">{metric.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
            {activeMetric === 'consumption' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Real-time Fuel Monitoring
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-drop-line text-blue-600 text-lg sm:text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Precise Level Measurement</h4>
                        <p className="text-gray-600 text-sm sm:text-base">Ultrasonic sensors provide ±1% accuracy in fuel level readings.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-speed-line text-green-600 text-lg sm:text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Consumption Tracking</h4>
                        <p className="text-gray-600 text-sm sm:text-base">Monitor fuel usage patterns and identify inefficient vehicles or routes.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-history-line text-teal-600 text-lg sm:text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Historical Analysis</h4>
                        <p className="text-gray-600 text-sm sm:text-base">Comprehensive fuel usage reports and trend analysis for better planning.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Real-time%20fuel%20consumption%20dashboard%20showing%20fuel%20levels%2C%20usage%20patterns%2C%20and%20consumption%20analytics%20for%20fleet%20vehicles%2C%20modern%20fuel%20monitoring%20interface%20with%20gauges%20and%20charts%2C%20professional%20fuel%20management%20software%20display%20in%20Nigerian%20fleet%20management%20context&width=600&height=400&seq=fuel-consumption-dashboard-new&orientation=landscape"
                    alt="Fuel Consumption Dashboard"
                    className="w-full h-auto rounded-xl sm:rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            )}

            {activeMetric === 'theft' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://readdy.ai/api/search-image?query=Fuel%20theft%20detection%20alert%20system%20showing%20suspicious%20fuel%20level%20drops%20and%20unauthorized%20access%20attempts%2C%20security%20monitoring%20interface%20with%20red%20warning%20indicators%2C%20professional%20fuel%20security%20system%20display%20in%20Nigerian%20fuel%20depot&width=600&height=400&seq=fuel-theft-detection-new&orientation=landscape"
                    alt="Fuel Theft Detection"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Advanced Theft Detection
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">Unusual Drop Detection</span>
                        <span className="text-red-600 font-bold">AI-Powered</span>
                      </div>
                      <div className="text-sm text-gray-600">Identifies abnormal fuel level decreases within 30 seconds</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">Siphoning Detection</span>
                        <span className="text-orange-600 font-bold">99.5% Accuracy</span>
                      </div>
                      <div className="text-sm text-gray-600">Detects rapid fuel drainage patterns and unauthorized access</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">Tank Tampering</span>
                        <span className="text-yellow-600 font-bold">Instant Alerts</span>
                      </div>
                      <div className="text-sm text-gray-600">Sensors detect physical tampering with fuel tanks or caps</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">False Fill Detection</span>
                        <span className="text-green-600 font-bold">Smart Recognition</span>
                      </div>
                      <div className="text-sm text-gray-600">Identifies fake fuel deliveries and billing fraud</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeMetric === 'efficiency' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Fuel Efficiency Analytics
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-3">Fleet Performance Comparison</h4>
                      <p className="text-gray-600 mb-4">Compare fuel efficiency across your entire fleet and identify top performers.</p>
                      <div className="flex items-center gap-4">
                        <div className="text-2xl font-bold text-blue-600">8.5 L/100km</div>
                        <div className="text-sm text-gray-600">Average fleet efficiency</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-3">Route Optimization Impact</h4>
                      <p className="text-gray-600 mb-4">See how route changes affect fuel consumption and costs.</p>
                      <div className="flex items-center gap-4">
                        <div className="text-2xl font-bold text-green-600">22%</div>
                        <div className="text-sm text-gray-600">Fuel savings from optimization</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-3">Driver Behavior Analysis</h4>
                      <p className="text-gray-600 mb-4">Monitor driving habits that impact fuel consumption.</p>
                      <div className="flex items-center gap-4">
                        <div className="text-2xl font-bold text-teal-600">18%</div>
                        <div className="text-sm text-gray-600">Improvement with driver training</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://readdy.ai/api/search-image?query=Fuel%20efficiency%20analytics%20dashboard%20with%20charts%20showing%20consumption%20patterns%2C%20driver%20performance%20metrics%2C%20route%20optimization%20data%2C%20colorful%20data%20visualization%20for%20fleet%20fuel%20management%2C%20modern%20business%20intelligence%20interface%20in%20Nigerian%20fleet%20context&width=600&height=400&seq=fuel-efficiency-analytics-new&orientation=landscape"
                    alt="Fuel Efficiency Analytics"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            )}

            {activeMetric === 'alerts' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://readdy.ai/api/search-image?query=Smart%20fuel%20monitoring%20alert%20notifications%20on%20mobile%20device%20showing%20fuel%20theft%20warnings%2C%20low%20fuel%20alerts%2C%20and%20maintenance%20reminders%2C%20modern%20mobile%20app%20interface%20with%20fuel%20management%20notifications%20in%20Nigerian%20context&width=600&height=400&seq=fuel-smart-alerts-new&orientation=landscape"
                    alt="Smart Fuel Alerts"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Intelligent Alert System
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-red-50 rounded-xl">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <i className="ri-alarm-warning-line text-red-600"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-red-900">Theft Alerts</div>
                        <div className="text-sm text-red-700">Instant notifications when unusual fuel loss is detected</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <i className="ri-gas-station-line text-orange-600"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-orange-900">Low Fuel Warnings</div>
                        <div className="text-sm text-orange-700">Prevent unexpected fuel shortages with early warnings</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-xl">
                      <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                        <i className="ri-error-warning-line text-yellow-600"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-yellow-900">Sensor Maintenance</div>
                        <div className="text-sm text-yellow-700">Proactive alerts for sensor calibration and maintenance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <i className="ri-bar-chart-line text-blue-600"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-blue-900">Efficiency Reports</div>
                        <div className="text-sm text-blue-700">Weekly and monthly fuel usage and savings reports</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Calculate Your Fuel Savings
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              See how you can save by preventing fuel theft and optimizing consumption
            </p>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fleet Size
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      defaultValue="15"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs sm:text-sm text-gray-500 mt-1">
                      <span>1</span>
                      <span className="font-semibold text-green-600">15 vehicles</span>
                      <span>100+</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Fuel Cost per Vehicle
                    </label>
                    <input
                      type="range"
                      min="100000"
                      max="800000"
                      defaultValue="300000"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs sm:text-sm text-gray-500 mt-1">
                      <span>₦100K</span>
                      <span className="font-semibold text-green-600">₦300K</span>
                      <span>₦800K+</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Estimated Theft/Loss Rate
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="40"
                      defaultValue="25"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs sm:text-sm text-gray-500 mt-1">
                      <span>10%</span>
                      <span className="font-semibold text-red-600">25%</span>
                      <span>40%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Your Potential Savings</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm sm:text-base">Monthly Fuel Loss</span>
                    <span className="text-xl sm:text-2xl font-bold text-red-600">₦1.1M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm sm:text-base">Monthly Savings</span>
                    <span className="text-xl sm:text-2xl font-bold text-green-600">₦950K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm sm:text-base">Annual Savings</span>
                    <span className="text-xl sm:text-2xl font-bold text-green-600">₦11.4M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm sm:text-base">ROI Timeline</span>
                    <span className="text-base sm:text-lg font-semibold text-teal-600">1.8 months</span>
                  </div>
                </div>
                <button className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition-colors font-semibold mt-4 sm:mt-6 whitespace-nowrap cursor-pointer text-sm sm:text-base">
                  Get Your Monitoring Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
            Stop Fuel Theft Today!
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
            Join 200+ businesses that have eliminated fuel theft and saved millions with our monitoring system.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold text-base sm:text-lg whitespace-nowrap cursor-pointer"
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'https://www.canva.com/design/DAG1AE9k-tQ/N9tt6XKyXX9T8MKN6ZFN4w/view?utm_content=DAG1AE9k-tQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha9e5a4fd5e';
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <i className="ri-download-line mr-2"></i>
              Download Brochure
            </button>
            <button 
              onClick={() => setShowDemo(true)}
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white hover:text-green-600 transition-colors font-semibold text-base sm:text-lg whitespace-nowrap cursor-pointer"
            >
              <i className="ri-play-fill mr-2"></i>
              Watch Demo
            </button>
            <button className="bg-yellow-500 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-yellow-400 transition-colors font-semibold text-base sm:text-lg whitespace-nowrap cursor-pointer">
              Start Monitoring Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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
                Nigeria's leading fuel monitoring and fleet security solutions provider.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Fleet Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/fuel-monitoring" className="hover:text-white">Fuel Monitoring</a></li>
                <li><a href="/gps-fleet-tracking" className="hover:text-white">GPS Tracking</a></li>
                <li><a href="/vehicle-ai-cctv" className="hover:text-white">Vehicle CCTV</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Security</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/ai-video-monitoring" className="hover:text-white">AI Video Monitoring</a></li>
                <li><a href="/fire-detection" className="hover:text-white">Fire Detection</a></li>
                <li><a href="/ai-video-analytics" className="hover:text-white">Video Analytics</a></li>
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

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900">Fuel Monitoring System Demo</h3>
              <button 
                onClick={() => setShowDemo(false)}
                className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            <div className="p-6">
              <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <div className="text-center text-white">
                  <i className="ri-gas-station-line text-6xl mb-4 text-green-500"></i>
                  <p className="text-xl">Fuel Monitoring Demo Video</p>
                  <p className="text-gray-300 mt-2">See how our system prevents fuel theft and optimizes consumption</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <i className="ri-drop-line text-3xl text-green-600 mb-2"></i>
                  <div className="font-semibold">Real-time Monitoring</div>
                  <div className="text-sm text-gray-600">Live fuel level tracking</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <i className="ri-shield-line text-3xl text-red-600 mb-2"></i>
                  <div className="font-semibold">Theft Detection</div>
                  <div className="text-sm text-gray-600">Instant theft alerts</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <i className="ri-bar-chart-line text-3xl text-blue-600 mb-2"></i>
                  <div className="font-semibold">Analytics</div>
                  <div className="text-sm text-gray-600">Consumption analysis</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}