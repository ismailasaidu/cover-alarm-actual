import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FleetManagement() {
  const [showDemo, setShowDemo] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [theftCount, setTheftCount] = useState(1247);
  const [fuelTheft, setFuelTheft] = useState(2847);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Theft counter animation
    const interval = setInterval(() => {
      setTheftCount(prev => prev + 1);
      setFuelTheft(prev => prev + 1);
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
                    Core Security
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
                        to="/fire-detection"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800"
                      >
                        Fire Detection
                      </Link>
                      <Link
                        to="/cover-alarm-monitoring"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800"
                      >
                        Alarm Monitoring
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <a
                    href="#other-services"
                    className="text-red-400 px-3 py-2 border-b-2 border-red-400 cursor-pointer flex items-center text-sm font-medium"
                  >
                    Other Services
                    <i className="ri-arrow-down-s-line ml-1"></i>
                  </a>
                  <div className="absolute top-full left-0 mt-1 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      <Link
                        to="/fleet-management"
                        className="block px-4 py-2 text-sm text-red-400 bg-gray-800"
                      >
                        Fleet Management
                      </Link>
                      <Link
                        to="/government-solutions"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800"
                      >
                        Government Solutions
                      </Link>
                      <Link
                        to="/government-smart-cities"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800"
                      >
                        Smart Cities
                      </Link>
                      <Link
                        to="/vehicle-ai-cctv"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800"
                      >
                        Vehicle AI CCTV
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
                Protect Fleet Now
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
            src="https://readdy.ai/api/search-image?query=Fleet%20of%20commercial%20trucks%20with%20GPS%20tracking%20devices%20and%20fuel%20monitoring%20sensors%20on%20Nigerian%20highways%2C%20aerial%20view%20of%20logistics%20vehicles%20with%20digital%20tracking%20overlays%20and%20fuel%20management%20technology%2C%20modern%20fleet%20management%20with%20GPS%20and%20fuel%20monitoring%20systems%2C%20professional%20transportation%20and%20logistics%20in%20Nigeria%20showing%20successful%20fleet%20operations&width=1920&height=1080&seq=fleet-management-hero-combined&orientation=landscape"
            alt="Fleet Management Solutions"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
        </div>

        {/* Animated Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-red-900/20 to-blue-900/20">
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
                <span className="text-sm font-bold">FLEET UNDER ATTACK</span>
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
                  COMPLETE FLEET PROTECTION SAVES MILLIONS
                </div>
              </div>

              {/* Dual Threat Counters */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-900/30 border border-red-500 rounded-lg p-4">
                  <div className="text-red-400 text-sm font-bold mb-1">VEHICLES STOLEN</div>
                  <div className="text-2xl font-black text-white">{theftCount.toLocaleString()}</div>
                  <div className="text-red-300 text-xs">This month</div>
                </div>
                <div className="bg-orange-900/30 border border-orange-500 rounded-lg p-4">
                  <div className="text-orange-400 text-sm font-bold mb-1">FUEL THEFT INCIDENTS</div>
                  <div className="text-2xl font-black text-white">{fuelTheft.toLocaleString()}</div>
                  <div className="text-orange-300 text-xs">This month</div>
                </div>
              </div>

              {/* Problem vs Solution */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-900/20 border border-red-500 rounded-lg p-4">
                  <div className="text-red-400 font-bold text-sm mb-2">THE BLEEDING</div>
                  <div className="text-white text-xs">₦60B lost annually to fleet theft & fuel losses</div>
                </div>
                <div className="bg-green-900/20 border border-green-500 rounded-lg p-4">
                  <div className="text-green-400 font-bold text-sm mb-2">THE HEALING</div>
                  <div className="text-white text-xs">99.8% recovery + 35% fuel savings</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all hover:scale-105 whitespace-nowrap">
                  🛡️ STOP ALL FLEET LOSSES
                </button>
                <button
                  onClick={() => setShowDemo(true)}
                  className="border-2 border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-bold transition-all hover:scale-105 whitespace-nowrap"
                >
                  📊 SEE COMPLETE SOLUTION
                </button>
              </div>

              {/* Status Indicators */}
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400">99.8% RECOVERY RATE</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-400">35% FUEL SAVINGS</span>
                </div>
              </div>
            </div>

            {/* Right Side - Fleet Management Dashboard */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Fleet%20management%20command%20center%20with%20GPS%20tracking%20and%20fuel%20monitoring%20displays%2C%20real-time%20vehicle%20tracking%20map%20showing%20multiple%20trucks%20across%20Lagos%20with%20fuel%20level%20indicators%2C%20advanced%20fleet%20monitoring%20control%20center%20with%20live%20location%20and%20fuel%20consumption%20displays&width=800&height=600&seq=fleet-management-center-combined&orientation=landscape"
                  alt="Fleet Management Command Center"
                  className="w-full h-full object-cover object-top rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-blue-400 font-bold text-sm sm:text-base">COMPLETE PROTECTION ACTIVE</span>
                  </div>
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                    Total Fleet Protection Solution
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    GPS tracking + fuel monitoring + route optimization = Complete fleet security and massive savings
                  </p>
                </div>
              </div>

              {/* Floating Success Badge */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-black px-4 py-2 rounded-lg font-bold text-sm animate-bounce">
                SAVING ₦5M+ MONTHLY
              </div>
            </div>
          </div>
        </div>

        {/* Breaking News Ticker */}
        <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white py-2 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="mx-8">🚨 BREAKING: Complete fleet solution recovers ₦45M in stolen vehicles + prevents ₦25M fuel theft</span>
            <span className="mx-8">🛡️ SUCCESS: Fleet optimization saves Dangote ₦80M in combined tracking and fuel costs</span>
            <span className="mx-8">⚡ ALERT: Real-time monitoring prevents hijacking and fuel siphoning in same incident</span>
            <span className="mx-8">🎯 VICTORY: 99.8% vehicle recovery + 35% fuel savings achieved simultaneously</span>
          </div>
        </div>
      </section>

      {/* Combined Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">THE COMPLETE FLEET CRISIS</h2>
            <p className="text-xl text-gray-300">Nigerian fleet operators face multiple threats simultaneously</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-red-900/20 border border-red-500 rounded-xl p-6">
              <div className="text-4xl font-bold text-red-400 mb-2">₦60B</div>
              <div className="text-gray-300 font-medium">Combined Annual Losses</div>
              <div className="text-red-300 text-sm">Vehicle theft + fuel theft</div>
            </div>
            <div className="text-center bg-orange-900/20 border border-orange-500 rounded-xl p-6">
              <div className="text-4xl font-bold text-orange-400 mb-2">75%</div>
              <div className="text-gray-300 font-medium">Fleet Operators</div>
              <div className="text-orange-300 text-sm">Face both threats</div>
            </div>
            <div className="text-center bg-yellow-900/20 border border-yellow-500 rounded-xl p-6">
              <div className="text-4xl font-bold text-yellow-400 mb-2">50%</div>
              <div className="text-gray-300 font-medium">Total Losses</div>
              <div className="text-yellow-300 text-sm">Without protection</div>
            </div>
            <div className="text-center bg-green-900/20 border border-green-500 rounded-xl p-6">
              <div className="text-4xl font-bold text-green-400 mb-2">65%</div>
              <div className="text-gray-300 font-medium">Combined Savings</div>
              <div className="text-green-300 text-sm">With complete solution</div>
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
              GPS tracking, fuel monitoring, route optimization, and theft prevention - everything you need in one integrated system.
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {[
              { id: 'overview', label: 'Complete Overview', icon: 'ri-dashboard-3-line' },
              { id: 'tracking', label: 'GPS Tracking', icon: 'ri-navigation-line' },
              { id: 'fuel', label: 'Fuel Monitoring', icon: 'ri-gas-station-line' },
              { id: 'analytics', label: 'Advanced Analytics', icon: 'ri-bar-chart-line' }
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
                    Complete Fleet Protection
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-map-2-line text-blue-600 text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Real-time GPS Tracking</h4>
                        <p className="text-gray-600">Monitor every vehicle's exact location with 99.8% recovery rate for stolen vehicles.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-drop-line text-green-600 text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Advanced Fuel Monitoring</h4>
                        <p className="text-gray-600">Prevent fuel theft with ±1% accuracy sensors and save 35% on fuel costs.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-route-line text-teal-600 text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Smart Route Optimization</h4>
                        <p className="text-gray-600">AI-powered routing reduces travel time by 30% and optimizes fuel consumption.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://readdy.ai/api/search-image?query=Complete%20fleet%20management%20dashboard%20interface%20showing%20GPS%20tracking%2C%20fuel%20monitoring%2C%20and%20route%20optimization%20on%20digital%20map%20of%20Nigeria%2C%20integrated%20fleet%20management%20software%20with%20vehicle%20icons%20and%20fuel%20indicators%2C%20professional%20fleet%20monitoring%20interface&width=600&height=400&seq=complete-fleet-dashboard&orientation=landscape"
                    alt="Complete Fleet Management Dashboard"
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
                    Advanced GPS Fleet Tracking
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
                        <span className="font-semibold text-gray-900">Recovery Success Rate</span>
                        <span className="text-green-600 font-bold">99.8%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '99%' }}></div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">GPS Accuracy</span>
                        <span className="text-blue-600 font-bold">±3 meters</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'fuel' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Advanced Fuel Monitoring
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">Theft Detection</span>
                        <span className="text-red-600 font-bold">30 seconds</span>
                      </div>
                      <div className="text-sm text-gray-600">Identifies abnormal fuel level decreases instantly</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">Measurement Accuracy</span>
                        <span className="text-green-600 font-bold">±1%</span>
                      </div>
                      <div className="text-sm text-gray-600">Ultrasonic sensors provide precise fuel level readings</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">Average Savings</span>
                        <span className="text-blue-600 font-bold">35%</span>
                      </div>
                      <div className="text-sm text-gray-600">Reduction in fuel costs through monitoring and optimization</div>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://readdy.ai/api/search-image?query=Fuel%20monitoring%20dashboard%20with%20real-time%20fuel%20levels%2C%20consumption%20patterns%2C%20and%20theft%20detection%20alerts%20for%20fleet%20vehicles%2C%20modern%20fuel%20management%20interface%20with%20gauges%20and%20charts%2C%20professional%20fuel%20monitoring%20software%20display&width=600&height=400&seq=fuel-monitoring-dashboard&orientation=landscape"
                    alt="Fuel Monitoring Dashboard"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://readdy.ai/api/search-image?query=Advanced%20fleet%20analytics%20dashboard%20with%20charts%20showing%20fuel%20consumption%2C%20GPS%20tracking%20data%2C%20driver%20performance%20metrics%2C%20route%20efficiency%20analysis%2C%20colorful%20data%20visualization%20interface%20for%20comprehensive%20fleet%20management&width=600&height=400&seq=fleet-analytics-combined&orientation=landscape"
                    alt="Fleet Analytics Dashboard"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Comprehensive Fleet Analytics
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-3">Combined Savings Report</h4>
                      <div className="flex items-center gap-4">
                        <div className="text-3xl font-bold text-green-600">₦5.2M</div>
                        <div className="text-sm text-gray-600">Monthly savings from GPS + fuel monitoring</div>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-3">Fleet Efficiency Score</h4>
                      <div className="flex items-center gap-4">
                        <div className="text-3xl font-bold text-blue-600">92%</div>
                        <div className="text-sm text-gray-600">Overall fleet performance rating</div>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-3">ROI Achievement</h4>
                      <div className="flex items-center gap-4">
                        <div className="text-3xl font-bold text-purple-600">1.5</div>
                        <div className="text-sm text-gray-600">Months to full return on investment</div>
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
              Calculate Your Complete Fleet Savings
            </h2>
            <p className="text-xl text-gray-600">
              See total savings from GPS tracking + fuel monitoring + route optimization
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-6">
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
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>1</span>
                      <span className="font-semibold text-teal-600">15 vehicles</span>
                      <span>100+</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Operating Cost per Vehicle
                    </label>
                    <input
                      type="range"
                      min="200000"
                      max="1000000"
                      defaultValue="500000"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>₦200K</span>
                      <span className="font-semibold text-teal-600">₦500K</span>
                      <span>₦1M+</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Loss Rate (Theft + Fuel + Inefficiency)
                    </label>
                    <input
                      type="range"
                      min="20"
                      max="60"
                      defaultValue="40"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>20%</span>
                      <span className="font-semibold text-red-600">40%</span>
                      <span>60%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-teal-50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Complete Savings</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monthly Losses</span>
                    <span className="text-2xl font-bold text-red-600">₦3M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monthly Savings</span>
                    <span className="text-2xl font-bold text-green-600">₦1.95M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Annual Savings</span>
                    <span className="text-2xl font-bold text-green-600">₦23.4M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">ROI Timeline</span>
                    <span className="text-lg font-semibold text-teal-600">1.5 months</span>
                  </div>
                </div>
                <button className="w-full bg-teal-600 text-white py-3 rounded-full hover:bg-teal-700 transition-colors font-semibold mt-6 whitespace-nowrap cursor-pointer">
                  Get Complete Protection Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Complete Fleet Protection?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ businesses that have eliminated fleet losses with our complete GPS + fuel monitoring solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg whitespace-nowrap cursor-pointer">
              <i className="ri-download-line mr-2"></i>
              Download Complete Solution Brochure
            </button>
            <button 
              onClick={() => setShowDemo(true)}
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-teal-600 transition-colors font-semibold text-lg whitespace-nowrap cursor-pointer"
            >
              <i className="ri-play-fill mr-2"></i>
              Watch Complete Demo
            </button>
            <button className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-full hover:bg-yellow-400 transition-colors font-semibold text-lg whitespace-nowrap cursor-pointer">
              Start Complete Protection
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
                Nigeria's leading complete fleet management and security solutions provider.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Fleet Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/fleet-management" className="hover:text-white">Complete Fleet Management</a></li>
                <li><a href="/fleet-management" className="hover:text-white">GPS Tracking</a></li>
                <li><a href="/fleet-management" className="hover:text-white">Fuel Monitoring</a></li>
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
              <h3 className="text-2xl font-bold text-gray-900">Complete Fleet Management Demo</h3>
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
                  <i className="ri-truck-line text-6xl mb-4 text-teal-500"></i>
                  <p className="text-xl">Complete Fleet Management Demo</p>
                  <p className="text-gray-300 mt-2">See how GPS tracking + fuel monitoring protects your entire fleet</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-teal-50 rounded-xl">
                  <i className="ri-navigation-line text-3xl text-teal-600 mb-2"></i>
                  <div className="font-semibold">GPS Tracking</div>
                  <div className="text-sm text-gray-600">Real-time vehicle monitoring</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <i className="ri-gas-station-line text-3xl text-green-600 mb-2"></i>
                  <div className="font-semibold">Fuel Monitoring</div>
                  <div className="text-sm text-gray-600">Theft prevention & optimization</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <i className="ri-bar-chart-line text-3xl text-blue-600 mb-2"></i>
                  <div className="font-semibold">Complete Analytics</div>
                  <div className="text-sm text-gray-600">Comprehensive reporting</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}