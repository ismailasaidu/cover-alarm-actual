
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function GPSFleetTracking() {
  const [showDemo, setShowDemo] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [theftCount, setTheftCount] = useState(1247);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Theft counter animation
    const interval = setInterval(() => {
      setTheftCount(prev => prev + 1);
    }, 4000);

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
                <Link
                  to="/bnpl"
                  className="text-gray-300 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium"
                >
                  Secure Now Pay Later
                </Link>
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
              <button className="w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white transition-colors cursor-pointer">
                <i className="ri-menu-line text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Fleet%20of%20commercial%20trucks%20and%20vehicles%20with%20GPS%20tracking%20devices%20on%20Nigerian%20highways%2C%20aerial%20view%20of%20logistics%20vehicles%20with%20digital%20tracking%20overlays%2C%20modern%20fleet%20management%20with%20GPS%20technology%2C%20professional%20transportation%20and%20logistics%20in%20Nigeria%20showing%20successful%20fleet%20operations&width=1920&height=1080&seq=gps-fleet-hero-new&orientation=landscape"
            alt="GPS Fleet Tracking"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
        </div>

        {/* Animated Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-red-900/20 to-black/50">
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-20 h-full">
              {[...Array(100)].map((_, i) => (
                <div key={i} className="border-r border-red-500/10 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Left Side - Provocative Content */}
            <div className="space-y-8">
              {/* Threat Alert Badge */}
              <div className="inline-flex items-center bg-red-600/20 border border-red-500 rounded-full px-4 py-2 text-red-400">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-bold">VEHICLE THEFT EPIDEMIC</span>
              </div>

              {/* Staggered Typography */}
              <div className="space-y-2">
                <h1 className="text-6xl md:text-8xl font-black leading-none">
                  <span className="text-white block">YOUR</span>
                  <span className="text-red-500 block ml-8">FLEET</span>
                  <span className="text-blue-400 block ml-16">IS BLEEDING</span>
                </h1>
              </div>

              {/* Rotated Badge */}
              <div className="relative">
                <div className="transform rotate-12 bg-yellow-500 text-black px-6 py-2 rounded-lg font-black text-sm inline-block">
                  REAL-TIME TRACKING SAVES MILLIONS
                </div>
              </div>

              {/* Theft Counter */}
              <div className="bg-red-900/30 border border-red-500 rounded-lg p-4">
                <div className="text-red-400 text-sm font-bold mb-1">VEHICLES STOLEN THIS MONTH</div>
                <div className="text-3xl font-black text-white">{theftCount.toLocaleString()}</div>
                <div className="text-red-300 text-xs">+1 every 4 seconds in Nigeria</div>
              </div>

              {/* Problem vs Solution */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-900/20 border border-red-500 rounded-lg p-4">
                  <div className="text-red-400 font-bold text-sm mb-2">THE BLEEDING</div>
                  <div className="text-white text-xs">₦45B lost annually to fleet theft</div>
                </div>
                <div className="bg-green-900/20 border border-green-500 rounded-lg p-4">
                  <div className="text-green-400 font-bold text-sm mb-2">THE CURE</div>
                  <div className="text-white text-xs">99.8% recovery rate with GPS</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all hover:scale-105 whitespace-nowrap">
                  🛡️ STOP THE BLEEDING NOW
                </button>
                <button
                  onClick={() => setShowDemo(true)}
                  className="border-2 border-red-500 text-red-400 hover:bg-red-600 hover:text-white px-8 py-4 rounded-lg text-lg font-bold transition-all hover:scale-105 whitespace-nowrap"
                >
                  📍 SEE LIVE TRACKING
                </button>
              </div>

              {/* Status Indicators */}
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400">5,000+ VEHICLES PROTECTED</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-400">99.8% RECOVERY RATE</span>
                </div>
              </div>
            </div>

            {/* Right Side - Live Tracking Dashboard */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Fleet%20of%20commercial%20trucks%20and%20vehicles%20with%20GPS%20tracking%20devices%20on%20Nigerian%20highways%2C%20aerial%20view%20of%20logistics%20vehicles%20with%20digital%20tracking%20overlays%2C%20modern%20fleet%20management%20with%20GPS%20technology%2C%20real-time%20vehicle%20tracking%20map%20showing%20multiple%20trucks%20across%20Lagos%2C%20advanced%20fleet%20monitoring%20control%20center%20with%20live%20location%20displays&width=800&height=600&seq=gps-fleet-center-new&orientation=landscape"
                  alt="GPS Fleet Tracking Command Center"
                  className="w-full h-full object-cover object-top rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-blue-400 font-bold text-sm sm:text-base">TRACKING ACTIVE</span>
                  </div>
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                    99.8% Vehicle Recovery Rate
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Real-time GPS tracking recovers stolen vehicles within 24 hours, protecting your fleet investment
                  </p>
                </div>
              </div>

              {/* Floating Success Badge */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-black px-4 py-2 rounded-lg font-bold text-sm animate-bounce">
                SAVING ₦2.8M MONTHLY
              </div>
            </div>
          </div>
        </div>

        {/* Breaking News Ticker */}
        <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white py-2 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="mx-8">🚨 BREAKING: GPS tracking recovers ₦25M worth of stolen vehicles in Lagos</span>
            <span className="mx-8">🛡️ SUCCESS: Fleet optimization saves Dangote ₦50M in fuel costs</span>
            <span className="mx-8">⚡ ALERT: Real-time tracking prevents hijacking attempt in Abuja</span>
            <span className="mx-8">🎯 VICTORY: 99.8% vehicle recovery rate achieved this quarter</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">THE BRUTAL REALITY</h2>
            <p className="text-xl text-gray-300">Nigerian fleet operators are under siege</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-red-900/20 border border-red-500 rounded-xl p-6">
              <div className="text-4xl font-bold text-red-400 mb-2">₦45B</div>
              <div className="text-gray-300 font-medium">Lost to Fleet Theft</div>
              <div className="text-red-300 text-sm">Annually in Nigeria</div>
            </div>
            <div className="text-center bg-orange-900/20 border border-orange-500 rounded-xl p-6">
              <div className="text-4xl font-bold text-orange-400 mb-2">65%</div>
              <div className="text-gray-300 font-medium">Fleet Operators</div>
              <div className="text-orange-300 text-sm">Experience theft</div>
            </div>
            <div className="text-center bg-yellow-900/20 border border-yellow-500 rounded-xl p-6">
              <div className="text-4xl font-bold text-yellow-400 mb-2">40%</div>
              <div className="text-gray-300 font-medium">Fuel Wastage</div>
              <div className="text-yellow-300 text-sm">Without tracking</div>
            </div>
            <div className="text-center bg-green-900/20 border border-green-500 rounded-xl p-6">
              <div className="text-4xl font-bold text-green-400 mb-2">99.8%</div>
              <div className="text-gray-300 font-medium">Recovery Rate</div>
              <div className="text-green-300 text-sm">With our GPS system</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Fleet Management Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From real-time tracking to advanced analytics, everything you need to manage your fleet efficiently.
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {[
              { id: 'overview', label: 'Overview', icon: 'ri-dashboard-3-line' },
              { id: 'tracking', label: 'Real-time Tracking', icon: 'ri-navigation-line' },
              { id: 'analytics', label: 'Analytics', icon: 'ri-bar-chart-line' },
              { id: 'alerts', label: 'Smart Alerts', icon: 'ri-notification-line' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className={`${tab.icon} text-lg`}></i>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Complete Fleet Visibility
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-map-2-line text-teal-600 text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Live Location Tracking</h4>
                        <p className="text-gray-600">Monitor every vehicle's exact location with GPS precision down to 3 meters.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-route-line text-teal-600 text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Route Optimization</h4>
                        <p className="text-gray-600">AI-powered route planning reduces travel time by up to 30% and fuel costs by 25%.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-shield-check-line text-teal-600 text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Driver Safety</h4>
                        <p className="text-gray-600">Monitor driving behavior, speed violations, and harsh braking for improved safety.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://readdy.ai/api/search-image?query=Modern%20fleet%20management%20dashboard%20interface%20showing%20multiple%20vehicles%20on%20digital%20map%20of%20Nigeria%2C%20real-time%20GPS%20tracking%20display%20with%20vehicle%20icons%2C%20clean%20UI%20design%20with%20blue%20and%20teal%20color%20scheme%2C%20professional%20fleet%20monitoring%20software%20interface%20showing%20Nigerian%20routes&width=600&height=400&seq=fleet-dashboard-new&orientation=landscape"
                    alt="Fleet Management Dashboard"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            )}

            {activeTab === 'tracking' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://readdy.ai/api/search-image?query=Real-time%20GPS%20tracking%20map%20showing%20multiple%20delivery%20trucks%20and%20vehicles%20across%20Nigerian%20cities%2C%20satellite%20view%20with%20route%20paths%2C%20live%20tracking%20interface%20with%20vehicle%20status%20indicators%2C%20modern%20fleet%20monitoring%20technology%20displaying%20Lagos%20and%20Abuja%20routes&width=600&height=400&seq=realtime-tracking-new&orientation=landscape"
                    alt="Real-time GPS Tracking"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Real-time Fleet Monitoring
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">Update Frequency</span>
                        <span className="text-teal-600 font-bold">Every 10 seconds</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-teal-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">GPS Accuracy</span>
                        <span className="text-teal-600 font-bold">±3 meters</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-teal-600 h-2 rounded-full" style={{ width: '99%' }}></div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">Network Coverage</span>
                        <span className="text-teal-600 font-bold">99.8% Nigeria</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-teal-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Advanced Fleet Analytics
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-3">Fuel Efficiency Reports</h4>
                      <div className="flex items-center gap-4">
                        <div className="text-3xl font-bold text-green-600">₦2.8M</div>
                        <div className="text-sm text-gray-600">Monthly savings achieved</div>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-3">Driver Performance</h4>
                      <div className="flex items-center gap-4">
                        <div className="text-3xl font-bold text-blue-600">94%</div>
                        <div className="text-sm text-gray-600">Average safety score</div>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-3">Route Optimization</h4>
                      <div className="flex items-center gap-4">
                        <div className="text-3xl font-bold text-purple-600">28%</div>
                        <div className="text-sm text-gray-600">Reduction in travel time</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://readdy.ai/api/search-image?query=Fleet%20analytics%20dashboard%20with%20charts%20and%20graphs%20showing%20fuel%20consumption%2C%20driver%20performance%20metrics%2C%20route%20efficiency%20data%2C%20colorful%20data%20visualization%20interface%2C%20modern%20business%20intelligence%20software%20for%20fleet%20management&width=600&height=400&seq=fleet-analytics-new&orientation=landscape"
                    alt="Fleet Analytics Dashboard"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            )}

            {activeTab === 'alerts' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://readdy.ai/api/search-image?query=Smart%20alert%20notifications%20on%20mobile%20phone%20showing%20fleet%20management%20warnings%2C%20GPS%20tracking%20alerts%20for%20speeding%20and%20route%20deviations%2C%20instant%20notification%20system%20interface%2C%20modern%20mobile%20app%20design%20with%20red%20warning%20indicators%20for%20Nigerian%20fleet%20management&width=600&height=400&seq=smart-alerts-new&orientation=landscape"
                    alt="Smart Fleet Alerts"
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
                        <div className="font-semibold text-red-900">Speed Violations</div>
                        <div className="text-sm text-red-700">Instant alerts when speed limits are exceeded</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <i className="ri-map-pin-line text-orange-600"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-orange-900">Geofence Alerts</div>
                        <div className="text-sm text-orange-700">Notifications when vehicles enter/exit designated areas</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <i className="ri-time-line text-blue-600"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-blue-900">Maintenance Reminders</div>
                        <div className="text-sm text-blue-700">Proactive alerts for scheduled maintenance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                      <div className="w-10 h-10 bg-green-100 flex items-center justify-center">
                        <i className="ri-gas-station-line text-green-600"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-green-900">Fuel Monitoring</div>
                        <div className="text-sm text-green-700">Real-time fuel level and consumption alerts</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Calculate Your Fleet Savings
            </h2>
            <p className="text-xl text-gray-600">
              See how much you can save with our GPS fleet tracking solution
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Vehicles
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      defaultValue="10"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>1</span>
                      <span className="font-semibold text-teal-600">10 vehicles</span>
                      <span>100+</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Fuel Cost per Vehicle
                    </label>
                    <input
                      type="range"
                      min="50000"
                      max="500000"
                      defaultValue="150000"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>₦50K</span>
                      <span className="font-semibold text-teal-600">₦150K</span>
                      <span>₦500K+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-teal-50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Potential Savings</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monthly Fuel Savings</span>
                    <span className="text-2xl font-bold text-green-600">₦375K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Annual Savings</span>
                    <span className="text-2xl font-bold text-green-600">₦4.5M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">ROI Timeline</span>
                    <span className="text-lg font-semibold text-teal-600">2.3 months</span>
                  </div>
                </div>
                <button className="w-full bg-teal-600 text-white py-3 rounded-full hover:bg-teal-700 transition-colors font-semibold mt-6 whitespace-nowrap cursor-pointer">
                  Get Your Custom Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Success Stories Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-600/20 border border-green-500 rounded-full px-4 py-2 text-green-400 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-bold">REAL SUCCESS STORIES</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">GPS Tracking Saves Millions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how Nigerian businesses transformed their fleet operations and stopped losses with our GPS tracking system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Success Story 1 */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-green-500 transition-all duration-300">
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Nigerian%20logistics%20warehouse%20with%20trucks%20parked%20outside%2C%20modern%20fleet%20management%20facility%20in%20Lagos%20Nigeria%2C%20commercial%20vehicles%20with%20GPS%20tracking%20devices%2C%20professional%20transportation%20depot%20with%20security%20systems%2C%20successful%20fleet%20operation%20with%20celebrating%20logistics%20team&width=400&height=250&seq=success-warehouse-lagos-new&orientation=landscape"
                  alt="Lagos Warehouse Success"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  SUCCESS
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-lg text-sm">
                  Lagos State
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-green-400">Major Logistics Company</h3>
                <p className="text-gray-300 mb-4">
                  "GPS tracking helped us recover 8 stolen trucks worth ₦45M within 24 hours. Our fuel theft dropped by 85%."
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Recovery Time:</span>
                    <span className="text-green-400 font-bold">24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Assets Saved:</span>
                    <span className="text-green-400 font-bold">₦45M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Fuel Theft Reduction:</span>
                    <span className="text-green-400 font-bold">85%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Story 2 */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Nigerian%20delivery%20trucks%20with%20GPS%20tracking%20systems%20on%20Abuja%20highways%2C%20fleet%20management%20success%20story%2C%20commercial%20vehicles%20with%20real-time%20monitoring%20technology%2C%20professional%20logistics%20operation%20in%20Nigerian%20capital%20city%20with%20celebrating%20delivery%20team&width=400&height=250&seq=success-delivery-abuja-new&orientation=landscape"
                  alt="Abuja Delivery Success"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  VICTORY
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-lg text-sm">
                  Abuja FCT
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">National Delivery Service</h3>
                <p className="text-gray-300 mb-4">
                  "Route optimization reduced our delivery time by 40% and fuel costs by ₦8M monthly. ROI achieved in 6 weeks."
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Delivery Speed:</span>
                    <span className="text-blue-400 font-bold">40% faster</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monthly Savings:</span>
                    <span className="text-blue-400 font-bold">₦8M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">ROI Timeline:</span>
                    <span className="text-blue-400 font-bold">6 weeks</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Story 3 */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Nigerian%20oil%20and%20gas%20fleet%20vehicles%20with%20GPS%20tracking%20systems%20in%20Port%20Harcourt%2C%20industrial%20fleet%20management%20success%2C%20petroleum%20sector%20transportation%20with%20real-time%20monitoring%2C%20professional%20energy%20sector%20logistics%20operation%20with%20celebrating%20oil%20and%20gas%20team&width=400&height=250&seq=success-oilgas-portharcourt-new&orientation=landscape"
                  alt="Port Harcourt Fleet Success"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  PROTECTED
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-lg text-sm">
                  Rivers State
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-purple-400">Energy Sector Fleet</h3>
                <p className="text-gray-300 mb-4">
                  "GPS tracking prevented 12 hijacking attempts and recovered ₦120M worth of fuel trucks in 3 months."
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Hijackings Prevented:</span>
                    <span className="text-purple-400 font-bold">12 attempts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Assets Protected:</span>
                    <span className="text-purple-400 font-bold">₦120M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Success Period:</span>
                    <span className="text-purple-400 font-bold">3 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Statistics Bar */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-black text-green-400 mb-2">1,247</div>
                <div className="text-gray-300 text-sm">Fleets Protected</div>
              </div>
              <div>
                <div className="text-3xl font-black text-blue-400 mb-2">₦12.8B</div>
                <div className="text-gray-300 text-sm">Assets Secured</div>
              </div>
              <div>
                <div className="text-3xl font-black text-purple-400 mb-2">99.8%</div>
                <div className="text-gray-300 text-sm">Recovery Rate</div>
              </div>
              <div>
                <div className="text-3xl font-black text-orange-400 mb-2">47%</div>
                <div className="text-gray-300 text-sm">Average Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before vs After Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Transformation is Dramatic
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the stark difference between managing fleets with basic methods vs our advanced GPS tracking system
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Before - Left Side */}
            <div className="relative">
              <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8">
                <div className="absolute -top-4 left-8 bg-red-500 text-white px-6 py-2 rounded-full font-bold text-lg">
                  WITHOUT GPS TRACKING
                </div>
                
                <div className="mt-8 mb-8">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Fleet%20problems%20without%20GPS%20tracking%20showing%20stolen%20vehicles%2C%20Nigerian%20trucks%20being%20hijacked%2C%20fleet%20operators%20suffering%20losses%2C%20traditional%20fleet%20management%20failures%20with%20vehicles%20missing%20and%20theft%20occurring&width=600&height=300&seq=fleet-problems-without-gps-new&orientation=landscape"
                    alt="Fleet Problems Without GPS"
                    className="w-full h-64 object-cover object-top rounded-2xl"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <i className="ri-close-line text-red-600 font-bold"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-red-900">65% experience theft</div>
                      <div className="text-sm text-red-700">₦45B lost annually to fleet theft</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <i className="ri-close-line text-red-600 font-bold"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-red-900">40% fuel wastage</div>
                      <div className="text-sm text-red-700">No visibility into consumption</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <i className="ri-close-line text-red-600 font-bold"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-red-900">60% longer routes</div>
                      <div className="text-sm text-red-700">Inefficient route planning</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <i className="ri-close-line text-red-600 font-bold"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-red-900">Zero recovery rate</div>
                      <div className="text-sm text-red-700">Stolen vehicles never found</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-red-100 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-700 mb-1">₦15M+ Annual Losses</div>
                    <div className="text-sm text-red-600">Average per 10-vehicle fleet</div>
                  </div>
                </div>
              </div>
            </div>

            {/* After - Right Side */}
            <div className="relative">
              <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-8">
                <div className="absolute -top-4 left-8 bg-green-500 text-white px-6 py-2 rounded-full font-bold text-lg">
                  WITH GPS TRACKING
                </div>
                
                <div className="mt-8 mb-8">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Successful%20Nigerian%20fleet%20operation%20with%20GPS%20tracking%2C%20protected%20vehicles%20with%20real-time%20monitoring%2C%20fleet%20managers%20celebrating%20successful%20vehicle%20recovery%2C%20modern%20fleet%20management%20with%20GPS%20technology%20preventing%20theft%20and%20optimizing%20routes&width=600&height=300&seq=fleet-success-with-gps-new&orientation=landscape"
                    alt="Fleet Success With GPS"
                    className="w-full h-64 object-cover object-top rounded-2xl"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-green-600 font-bold"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-green-900">99.8% recovery rate</div>
                      <div className="text-sm text-green-700">Stolen vehicles recovered within hours</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-green-600 font-bold"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-green-900">25% fuel savings</div>
                      <div className="text-sm text-green-700">Real-time monitoring prevents theft</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-green-600 font-bold"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-green-900">30% shorter routes</div>
                      <div className="text-sm text-green-700">AI-powered route optimization</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-green-600 font-bold"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-green-900">24/7 protection</div>
                      <div className="text-sm text-green-700">Real-time alerts and monitoring</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-100 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-700 mb-1">₦4.5M+ Annual Savings</div>
                    <div className="text-sm text-green-600">Average per 10-vehicle fleet</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transformation Stats */}
          <div className="mt-16 bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">The Numbers Don't Lie</h3>
              <p className="text-gray-600">Average transformation results within 90 days</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">2400%</div>
                <div className="text-sm text-gray-700">Faster Recovery</div>
                <div className="text-xs text-gray-500">From 3 weeks to 24 hours</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">65%</div>
                <div className="text-sm text-gray-700">Cost Reduction</div>
                <div className="text-xs text-gray-500">In operational expenses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">30%</div>
                <div className="text-sm text-gray-700">Time Savings</div>
                <div className="text-xs text-gray-500">In delivery routes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">99.8%</div>
                <div className="text-sm text-gray-700">Security Rate</div>
                <div className="text-xs text-gray-500">Vehicle protection</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How GPS Works - 4 Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How GPS Fleet Tracking Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See exactly how our advanced GPS system protects your fleet in real-time, from detection to recovery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-teal-100 hover:border-teal-300 transition-all duration-300">
                <div className="absolute -top-4 left-6 bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div className="mt-4 mb-6">
                  <img 
                    src="https://readdy.ai/api/search-image?query=GPS%20tracking%20device%20installation%20on%20Nigerian%20commercial%20truck%2C%20satellite%20technology%20device%20mounted%20on%20vehicle%20dashboard%2C%20real-time%20positioning%20system%20hardware%2C%20professional%20GPS%20tracker%20with%20antenna%20on%20fleet%20vehicle%20in%20Lagos%20Nigeria&width=300&height=200&seq=step1-gps-installation-new&orientation=landscape"
                    alt="GPS Installation"
                    className="w-full h-40 object-cover object-top rounded-xl"
                  />
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-navigation-line text-teal-600 text-xl"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">GPS Installation</h3>
                  <p className="text-sm text-gray-600">
                    Advanced GPS trackers installed discretely in your vehicles with satellite connectivity
                  </p>
                </div>
              </div>
              {/* Arrow for desktop */}
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <i className="ri-arrow-right-line text-3xl text-teal-400"></i>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
                <div className="absolute -top-4 left-6 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div className="mt-4 mb-6">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Real-time%20fleet%20monitoring%20command%20center%20with%20multiple%20screens%20showing%20vehicle%20locations%20across%20Nigeria%2C%20GPS%20tracking%20control%20room%20with%20operators%20monitoring%20fleet%20movements%2C%20advanced%20surveillance%20technology%20dashboard%20in%20Nigerian%20fleet%20management%20center&width=300&height=200&seq=step2-realtime-monitoring-new&orientation=landscape"
                    alt="Real-time Monitoring"
                    className="w-full h-40 object-cover object-top rounded-xl"
                  />
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-radar-line text-blue-600 text-xl"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Real-time Monitoring</h3>
                  <p className="text-sm text-gray-600">
                    24/7 live tracking with updates every 10 seconds from our monitoring center
                  </p>
                </div>
              </div>
              {/* Arrow for desktop */}
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <i className="ri-arrow-right-line text-3xl text-blue-400"></i>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-100 hover:border-orange-300 transition-all duration-300">
                <div className="absolute -top-4 left-6 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div className="mt-4 mb-6">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Smartphone%20showing%20GPS%20fleet%20tracking%20alerts%20and%20notifications%2C%20mobile%20app%20displaying%20theft%20warning%20messages%2C%20instant%20alert%20system%20on%20phone%20screen%20with%20red%20emergency%20indicators%2C%20fleet%20manager%20receiving%20security%20notifications%20in%20Nigeria&width=300&height=200&seq=step3-instant-alerts-new&orientation=landscape"
                    alt="Instant Alerts"
                    className="w-full h-40 object-cover object-top rounded-xl"
                  />
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-notification-2-line text-orange-600 text-xl"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Instant Alerts</h3>
                  <p className="text-sm text-gray-600">
                    Immediate notifications for theft, route deviations, or unauthorized use
                  </p>
                </div>
              </div>
              {/* Arrow for desktop */}
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <i className="ri-arrow-right-line text-3xl text-orange-400"></i>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100 hover:border-green-300 transition-all duration-300">
                <div className="absolute -top-4 left-6 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div className="mt-4 mb-6">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Nigerian%20police%20and%20security%20team%20recovering%20stolen%20vehicles%20using%20GPS%20tracking%20coordinates%2C%20successful%20vehicle%20recovery%20operation%2C%20law%20enforcement%20working%20with%20GPS%20tracking%20system%2C%20recovered%20truck%20being%20returned%20to%20owner%20with%20celebrating%20team&width=300&height=200&seq=step4-recovery-action-new&orientation=landscape"
                    alt="Recovery Action"
                    className="w-full h-40 object-cover object-top rounded-xl"
                  />
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-shield-check-line text-green-600 text-xl"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Recovery Action</h3>
                  <p className="text-sm text-gray-600">
                    Rapid response teams and police coordination for 99.8% recovery success
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Timeline */}
          <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">From Theft to Recovery</h3>
              <p className="text-gray-600">Average timeline for complete vehicle recovery</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl font-bold text-red-600">0s</span>
                </div>
                <div className="text-sm font-semibold text-gray-900">Theft Occurs</div>
                <div className="text-xs text-gray-500">Vehicle moved</div>
              </div>
              <div className="hidden md:block w-12 h-px bg-gray-300"></div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl font-bold text-orange-600">10s</span>
                </div>
                <div className="text-sm font-semibold text-gray-900">Alert Sent</div>
                <div className="text-xs text-gray-500">You're notified</div>
              </div>
              <div className="hidden md:block w-12 h-px bg-gray-300"></div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl font-bold text-blue-600">2m</span>
                </div>
                <div className="text-sm font-semibold text-gray-900">Response Team</div>
                <div className="text-xs text-gray-500">Dispatched</div>
              </div>
              <div className="hidden md:block w-12 h-px bg-gray-300"></div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl font-bold text-green-600">24h</span>
                </div>
                <div className="text-sm font-semibold text-gray-900">Vehicle Recovered</div>
                <div className="text-xs text-gray-500">99.8% success rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Fleet Management?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ businesses that have reduced their fleet costs by 40% with our GPS tracking solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-white text-teal-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg whitespace-nowrap cursor-pointer"
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
              Download Fleet Brochure
            </button>
            <button 
              onClick={() => setShowDemo(true)}
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-teal-600 transition-colors font-semibold text-lg whitespace-nowrap cursor-pointer"
            >
              <i className="ri-play-fill mr-2"></i>
              Watch Live Demo
            </button>
            <button className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-full hover:bg-yellow-400 transition-colors font-semibold text-lg whitespace-nowrap cursor-pointer">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="space-y-3">
                <Link to="/">
                  <img 
                    src="https://static.readdy.ai/image/f38dbee0b97d493b71475a98132a7b29/c567d8d1fd4702e852424c0299bd0094.png" 
                    alt="CoverAlarm Systems"
                    className="h-6 w-auto cursor-pointer"
                  />
                </Link>
                <p className="text-gray-400 mb-4">
                  Nigeria's leading GPS fleet tracking and security solutions provider.
                </p>
              </div>
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
                <div>info@coveralarm.com
</div>
                <div>Abuja, Nigeria</div>
              </div>
              <div className="flex space-x-3 mt-4">
                <div className="w-10 h-10 bg-gray-800 hover:bg-teal-500 rounded-xl flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-facebook-fill text-white text-sm"></i>
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-teal-500 rounded-xl flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-twitter-fill text-white text-sm"></i>
                </div>
                <a 
                  href="https://www.linkedin.com/company/cover-alarm-systems-ltd/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-teal-500 rounded-xl flex items-center justify-center transition-colors cursor-pointer"
                >
                  <i className="ri-linkedin-fill text-white text-sm"></i>
                </a>
                <a 
                  href="https://www.instagram.com/cover.alarm/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-teal-500 rounded-xl flex items-center justify-center transition-colors cursor-pointer"
                >
                  <i className="ri-instagram-fill text-white text-sm"></i>
                </a>
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
              <h3 className="text-2xl font-bold text-gray-900">GPS Fleet Tracking Demo</h3>
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
                  <i className="ri-play-circle-line text-6xl mb-4 opacity-80"></i>
                  <p className="text-xl">Fleet Tracking Demo Video</p>
                  <p className="text-gray-300 mt-2">See how our GPS tracking system works in real-time</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <i className="ri-map-2-line text-3xl text-teal-600 mb-2"></i>
                  <div className="font-semibold">Real-time Tracking</div>
                  <div className="text-sm text-gray-600">Live vehicle locations</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <i className="ri-route-line text-3xl text-blue-600 mb-2"></i>
                  <div className="font-semibold">Route Optimization</div>
                  <div className="text-sm text-gray-600">AI-powered routing</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <i className="ri-notification-line text-3xl text-orange-600 mb-2"></i>
                  <div className="font-semibold">Smart Alerts</div>
                  <div className="text-sm text-gray-600">Instant notifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
