
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FireDetection() {
  const [showDemo, setShowDemo] = useState(false);
  const [activeFeature, setActiveFeature] = useState('thermal');
  const [fireIncidents, setFireIncidents] = useState(892);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Fire incident counter
    const interval = setInterval(() => {
      setFireIncidents((prev) => prev + 1);
    }, 5000);

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
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer font-semibold text-sm">
                Deploy Fire Shield
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
            src="https://readdy.ai/api/search-image?query=Advanced%20fire%20detection%20system%20with%20thermal%20imaging%20cameras%20and%20smoke%20detectors%20in%20industrial%20facility%2C%20professional%20fire%20safety%20equipment%20with%20red%20warning%20lights%2C%20modern%20fire%20prevention%20technology%20in%20warehouse%20setting%2C%20emergency%20fire%20detection%20sensors%20and%20alarms%20in%20Nigerian%20industrial%20facility&width=1920&height=1080&seq=fire-detection-hero-new&orientation=landscape"
            alt="Fire Detection System"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
        </div>

        {/* Animated Fire Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-red-900/30 to-orange-900/20">
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-20 h-full">
              {[...Array(100)].map((_, i) => (
                <div
                  key={i}
                  className="border-r border-orange-500/10 animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Left Side - Provocative Content */}
            <div className="space-y-8">
              {/* Fire Alert Badge */}
              <div className="inline-flex items-center bg-red-600/20 border border-red-500 rounded-full px-4 py-2 text-red-400">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-bold">FIRE EMERGENCY LEVEL: CRITICAL</span>
              </div>

              {/* Staggered Typography */}
              <div className="space-y-2">
                <h1 className="text-6xl md:text-8xl font-black leading-none">
                  <span className="text-white block">FIRE</span>
                  <span className="text-red-500 block ml-8">DESTROYS</span>
                  <span className="text-orange-400 block ml-16">EVERYTHING</span>
                </h1>
              </div>

              {/* Rotated Badge */}
              <div className="relative">
                <div className="transform rotate-12 bg-yellow-500 text-black px-6 py-2 rounded-lg font-black text-sm inline-block">
                  12 SECONDS TO DETECT &amp; ALERT
                </div>
              </div>

              {/* Fire Incident Counter */}
              <div className="bg-red-900/30 border border-red-500 rounded-lg p-4">
                <div className="text-red-400 text-sm font-bold mb-1">FIRE INCIDENTS THIS MONTH</div>
                <div className="text-3xl font-black text-white">{fireIncidents.toLocaleString()}</div>
                <div className="text-red-300 text-xs">+1 every 5 seconds in Nigeria</div>
              </div>

              {/* Problem vs Solution */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-900/20 border border-red-500 rounded-lg p-4">
                  <div className="text-red-400 font-bold text-sm mb-2">THE DEVASTATION</div>
                  <div className="text-white text-xs">Traditional alarms detect too late</div>
                </div>
                <div className="bg-green-900/20 border border-green-500 rounded-lg p-4">
                  <div className="text-green-400 font-bold text-sm mb-2">THE SALVATION</div>
                  <div className="text-white text-xs">AI detects fire in 12 seconds</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all hover:scale-105 whitespace-nowrap">
                  🔥 ACTIVATE FIRE SHIELD
                </button>
                <button
                  onClick={() => setShowDemo(true)}
                  className="border-2 border-orange-500 text-orange-400 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-lg text-lg font-bold transition-all hover:scale-105 whitespace-nowrap"
                >
                  🚨 SEE DETECTION DEMO
                </button>
              </div>

              {/* Status Indicators */}
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400">99.8% ACCURACY</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                  <span className="text-orange-400">12 SEC DETECTION</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="text-yellow-400">LIVES SAVED</span>
                </div>
              </div>
            </div>

            {/* Right Side - Fire Detection Dashboard */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Advanced%20fire%20detection%20system%20with%20thermal%20imaging%20cameras%20and%20smoke%20detectors%20in%20industrial%20facility%2C%20professional%20fire%20safety%20equipment%20with%20red%20warning%20lights%2C%20modern%20fire%20prevention%20technology%20in%20warehouse%20setting%2C%20emergency%20fire%20detection%20sensors%20and%20alarms%2C%20state-of-the-art%20fire%20monitoring%20control%20room%20with%20multiple%20displays%20showing%20Nigerian%20industrial%20facility&width=800&height=600&seq=fire-detection-center-new&orientation=landscape"
                  alt="Fire Detection Command Center"
                  className="w-full h-full object-cover object-top rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <span className="text-red-400 font-bold text-sm sm:text-base">FIRE DETECTION ACTIVE</span>
                  </div>
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                    12 Seconds to Save Lives
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Our AI detects fire threats in 12 seconds with 99.8% accuracy, giving you precious time to respond
                  </p>
                </div>
              </div>

              {/* Floating Success Badge */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-black px-4 py-2 rounded-lg font-bold text-sm animate-bounce">
                SAVING LIVES DAILY
              </div>
            </div>
          </div>
        </div>

        {/* Breaking News Ticker */}
        <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white py-2 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="mx-8">🚨 BREAKING: AI fire detection saves ₦50M warehouse in Lagos</span>
            <span className="mx-8">🔥 SUCCESS: Early warning evacuates 200 workers in Port Harcourt</span>
            <span className="mx-8">⚡ ALERT: Thermal imaging prevents factory fire in Kano</span>
            <span className="mx-8">🛡️ VICTORY: 99.8% fire detection accuracy achieved this quarter</span>
          </div>
        </div>
      </section>

      {/* Emergency Stats */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">THE FIRE CRISIS</h2>
            <p className="text-xl text-gray-300">Every second counts when fire strikes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-red-900/20 border border-red-500 rounded-xl p-6">
              <div className="text-4xl font-bold text-red-400 mb-2">12</div>
              <div className="text-gray-300 font-medium">AI Detection Time</div>
              <div className="text-red-300 text-sm">vs 5-10 min traditional</div>
            </div>
            <div className="text-center bg-orange-900/20 border border-orange-500 rounded-xl p-6">
              <div className="text-4xl font-bold text-orange-400 mb-2">99.8%</div>
              <div className="text-gray-300 font-medium">Detection Accuracy</div>
              <div className="text-orange-300 text-sm">False alarm rate &lt; 0.2%</div>
            </div>
            <div className="text-center bg-yellow-900/20 border border-yellow-500 rounded-xl p-6">
              <div className="text-4xl font-bold text-yellow-400 mb-2">₦500M+</div>
              <div className="text-gray-300 font-medium">Property Saved</div>
              <div className="text-yellow-300 text-sm">From fire damage</div>
            </div>
            <div className="text-center bg-green-900/20 border border-green-500 rounded-xl p-6">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300 font-medium">Monitoring</div>
              <div className="text-green-300 text-sm">Never sleeps protection</div>
            </div>
          </div>
        </div>
      </section>

      {/* Detection Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Multi-Layer Fire Detection Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI system combines multiple detection methods for the most reliable fire detection available.
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {[
              { id: 'thermal', label: 'Thermal Imaging', icon: 'ri-temp-hot-line' },
              { id: 'smoke', label: 'Smoke Detection', icon: 'ri-cloud-line' },
              { id: 'flame', label: 'Flame Recognition', icon: 'ri-fire-line' },
              { id: 'alerts', label: 'Smart Alerts', icon: 'ri-alarm-warning-line' },
            ].map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                  activeFeature === feature.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className={`${feature.icon} text-lg`}></i>
                {feature.label}
              </button>
            ))}
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            {activeFeature === 'thermal' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Advanced Thermal Imaging</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-temp-hot-line text-red-600 text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Heat Signature Detection</h4>
                        <p className="text-gray-600">
                          Detects temperature anomalies as small as 2°C above ambient temperature.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-focus-3-line text-orange-600 text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Precise Location Mapping</h4>
                        <p className="text-gray-600">
                          Pinpoints exact fire location within 1-meter accuracy for rapid response.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-eye-line text-yellow-600 text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">24/7 Monitoring</h4>
                        <p className="text-gray-600">Works in complete darkness and adverse weather conditions.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="https://readdy.ai/api/search-image?query=Thermal%20imaging%20camera%20display%20showing%20heat%20signatures%20in%20industrial%20facility%2C%20colorful%20thermal%20map%20with%20temperature%20gradients%20from%20blue%20to%20red%2C%20professional%20fire%20detection%20thermal%20imaging%20interface%2C%20modern%20heat%20detection%20technology%20visualization%20in%20Nigerian%20industrial%20setting&width=600&height=400&seq=thermal-imaging-new&orientation=landscape"
                    alt="Thermal Imaging Fire Detection"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            )}

            {activeFeature === 'smoke' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src="https://readdy.ai/api/search-image?query=AI%20smoke%20detection%20system%20with%20advanced%20sensors%20and%20cameras%20detecting%20smoke%20patterns%20in%20warehouse%20facility%2C%20intelligent%20smoke%20recognition%20technology%2C%20modern%20fire%20safety%20equipment%20with%20LED%20indicators%2C%20professional%20smoke%20detection%20visualization%20in%20Nigerian%20facility&width=600&height=400&seq=smoke-detection-new&orientation=landscape"
                    alt="AI Smoke Detection"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Intelligent Smoke Detection</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">Smoke Pattern Recognition</span>
                        <span className="text-orange-600 font-bold">AI-Powered</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Distinguishes between smoke and steam/dust particles
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">Detection Range</span>
                        <span className="text-orange-600 font-bold">50+ meters</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Wide-area coverage with multiple sensor points
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">Response Time</span>
                        <span className="text-orange-600 font-bold">&lt; 15 seconds</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        From first smoke detection to alert transmission
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">False Alarm Rate</span>
                        <span className="text-green-600 font-bold">&lt; 0.1%</span>
                      </div>
                      <div className="text-sm text-gray-600">Advanced AI eliminates false triggers</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeFeature === 'flame' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">AI Flame Recognition</h3>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-3">Visual Flame Detection</h4>
                      <p className="text-gray-600 mb-4">
                        Advanced computer vision identifies flame characteristics including color, movement, and intensity patterns.
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="text-2xl font-bold text-red-600">0.8 sec</div>
                        <div className="text-sm text-gray-600">Average flame recognition time</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-3">Multi-Spectrum Analysis</h4>
                      <p className="text-gray-600 mb-4">
                        Analyzes visible light, infrared, and ultraviolet spectrums for comprehensive flame detection.
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="text-2xl font-bold text-orange-600">99.9%</div>
                        <div className="text-sm text-gray-600">Flame detection accuracy rate</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-50 to-red-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-3">Environmental Adaptation</h4>
                      <p className="text-gray-600 mb-4">
                        Automatically adjusts sensitivity based on lighting conditions and environmental factors.
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="text-2xl font-bold text-yellow-600">100m</div>
                        <div className="text-sm text-gray-600">Maximum detection distance</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="https://readdy.ai/api/search-image?query=AI%20flame%20detection%20camera%20system%20identifying%20fire%20and%20flames%20in%20industrial%20setting%2C%20computer%20vision%20flame%20recognition%20interface%20showing%20flame%20characteristics%20analysis%2C%20modern%20fire%20detection%20technology%20with%20flame%20pattern%20visualization%2C%20professional%20fire%20safety%20equipment%20in%20Nigerian%20industrial%20facility&width=600&height=400&seq=flame-detection-new&orientation=landscape"
                    alt="AI Flame Recognition"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            )}

            {activeFeature === 'alerts' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src="https://readdy.ai/api/search-image?query=Emergency%20fire%20alert%20system%20dashboard%20showing%20multiple%20notification%20methods%2C%20mobile%20phone%20receiving%20fire%20emergency%20alerts%2C%20professional%20fire%20monitoring%20control%20room%20with%20red%20warning%20lights%20and%20alert%20screens%2C%20modern%20emergency%20response%20interface%20in%20Nigerian%20fire%20safety%20center&width=600&height=400&seq=fire-alerts-new&orientation=landscape"
                    alt="Fire Emergency Alerts"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Multi-Channel Alert System</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-red-50 rounded-xl">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <i className="ri-smartphone-line text-red-600"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-red-900">Instant SMS &amp; Push</div>
                        <div className="text-sm text-red-700">Immediate alerts to all authorized personnel</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <i className="ri-phone-line text-orange-600"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-orange-900">Automated Voice Calls</div>
                        <div className="text-sm text-orange-700">Direct calls to fire department and security team</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-xl">
                      <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                        <i className="ri-mail-line text-yellow-600"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-yellow-900">Email Notifications</div>
                        <div className="text-sm text-yellow-700">Detailed incident reports with images and location</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <i className="ri-sound-module-line text-blue-600"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-blue-900">On-site Alarms</div>
                        <div className="text-sm text-blue-700">Sirens and strobe lights activate automatically</div>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Fire Detection Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how our AI fire detection system has saved lives and property across Nigeria
            </p>
          </div>

          {/* Success Statistics Bar */}
          <div className="bg-red-600 text-white rounded-2xl p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">347</div>
                <div className="text-red-100">Facilities Protected</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">₦1.2B</div>
                <div className="text-red-100">Property Saved</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">99.8%</div>
                <div className="text-red-100">Detection Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">850+</div>
                <div className="text-red-100">Lives Protected</div>
              </div>
            </div>
          </div>

          {/* Success Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Story 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20warehouse%20facility%20in%20Lagos%20Nigeria%20with%20fire%20detection%20systems%2C%20industrial%20building%20with%20fire%20safety%20equipment%2C%20professional%20warehouse%20interior%20with%20thermal%20cameras%20and%20smoke%20detectors%2C%20Nigerian%20business%20facility%20protected%20from%20fire%20with%20celebrating%20warehouse%20team&width=400&height=250&seq=lagos-warehouse-fire-new&orientation=landscape"
                  alt="Lagos Warehouse Fire Prevention"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  FIRE PREVENTED
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <i className="ri-map-pin-line text-red-600"></i>
                  <span className="font-semibold text-gray-900">Lagos Warehouse</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ₦50M Warehouse Fire Prevented
                </h3>
                <p className="text-gray-600 mb-4">
                  AI thermal detection identified overheating electrical equipment 8 minutes before
                  ignition. Immediate shutdown prevented catastrophic fire.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-green-600 font-bold">Property Saved: ₦50M</div>
                  <div className="text-sm text-gray-500">March 2024</div>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Manufacturing%20factory%20in%20Abuja%20Nigeria%20with%20fire%20safety%20systems%2C%20industrial%20production%20facility%20with%20emergency%20lighting%20and%20fire%20detection%20equipment%2C%20modern%20Nigerian%20factory%20interior%20with%20fire%20prevention%20technology%20and%20celebrating%20factory%20workers&width=400&height=250&seq=abuja-factory-fire-new&orientation=landscape"
                  alt="Abuja Factory Fire Detection"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  LIVES SAVED
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <i className="ri-map-pin-line text-red-600"></i>
                  <span className="font-semibold text-gray-900">Abuja Factory</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  200 Workers Evacuated Safely
                </h3>
                <p className="text-gray-600 mb-4">
                  Smoke detection AI identified chemical reaction fire risk. All 200 night shift workers
                  evacuated 15 minutes before flash fire occurred.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-blue-600 font-bold">Lives Saved: 200</div>
                  <div className="text-sm text-gray-500">February 2024</div>
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Shopping%20mall%20in%20Port%20Harcourt%20Nigeria%20with%20modern%20fire%20safety%20systems%2C%20commercial%20retail%20center%20with%20fire%20detection%20cameras%20and%20emergency%20exits%2C%20Nigerian%20shopping%20center%20with%20advanced%20fire%20prevention%20technology%20and%20celebrating%20mall%20management%20team&width=400&height=250&seq=port-harcourt-mall-new&orientation=landscape"
                  alt="Port Harcourt Mall Fire Prevention"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  EARLY WARNING
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <i className="ri-map-pin-line text-red-600"></i>
                  <span className="font-semibold text-gray-900">Port Harcourt Mall</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Kitchen Fire Contained in 3 Minutes
                </h3>
                <p className="text-gray-600 mb-4">
                  Flame recognition AI detected restaurant kitchen fire instantly. Suppression system
                  activated before fire spread to dining area.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-orange-600 font-bold">Response: 3 min</div>
                  <div className="text-sm text-gray-500">January 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before vs After Transformation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Fire Protection Transformation
            </h2>
            <p className="text-xl text-gray-600">
              See the dramatic difference between traditional fire alarms and AI detection
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Before */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-red-500 text-white px-6 py-2 rounded-full font-bold z-10">
                BEFORE: Traditional Alarms
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-red-400 mb-6">The Fire Crisis Without AI</h3>
                <img
                  src="https://readdy.ai/api/search-image?query=Fire%20damage%20in%20Nigerian%20facility%20showing%20destruction%20from%20late%20fire%20detection%2C%20burned%20warehouse%20interior%20with%20traditional%20fire%20alarms%20that%20detected%20too%20late%2C%20fire%20damage%20and%20destruction%20that%20could%20have%20been%20prevented%20with%20AI%20detection&width=600&height=300&seq=fire-damage-without-ai-new&orientation=landscape"
                  alt="Fire Damage Without AI Protection"
                  className="w-full h-64 object-cover object-top rounded-xl mb-6"
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-red-700">
                    <i className="ri-close-circle-line text-xl"></i>
                    <span>Fire detected only after smoke fills the room</span>
                  </div>
                  <div className="flex items-center gap-3 text-red-700">
                    <i className="ri-close-circle-line text-xl"></i>
                    <span>5-10 minutes response time - too late</span>
                  </div>
                  <div className="flex items-center gap-3 text-red-700">
                    <i className="ri-close-circle-line text-xl"></i>
                    <span>High false alarm rates disrupt operations</span>
                  </div>
                  <div className="flex items-center gap-3 text-red-700">
                    <i className="ri-close-circle-line text-xl"></i>
                    <span>No precise location identification</span>
                  </div>
                  <div className="bg-red-100 p-4 rounded-lg mt-6">
                    <div className="text-red-800 font-bold text-lg">Result: Fire Spreads</div>
                    <div className="text-red-700">Property damage, business disruption, safety risks</div>
                  </div>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-green-500 text-white px-6 py-2 rounded-full font-bold z-10">
                AFTER: AI Fire Detection
              </div>
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-6">Complete Fire Protection with AI</h3>
                <img
                  src="https://readdy.ai/api/search-image?query=Protected%20Nigerian%20facility%20with%20AI%20fire%20detection%20system%2C%20modern%20industrial%20building%20with%20advanced%20fire%20safety%20technology%2C%20successful%20fire%20prevention%20with%20AI%20monitoring%2C%20Nigerian%20facility%20celebrating%20fire%20safety%20success%20with%20no%20damage&width=600&height=300&seq=fire-protection-with-ai-new&orientation=landscape"
                  alt="Protected Facility with AI Fire Detection"
                  className="w-full h-64 object-cover object-top rounded-xl mb-6"
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-green-700">
                    <i className="ri-check-circle-line text-xl"></i>
                    <span>Fire detected before ignition occurs</span>
                  </div>
                  <div className="flex items-center gap-3 text-green-700">
                    <i className="ri-check-circle-line text-xl"></i>
                    <span>12-second detection and alert time</span>
                  </div>
                  <div className="flex items-center gap-3 text-green-700">
                    <i className="ri-check-circle-line text-xl"></i>
                    <span>99.8% accuracy - virtually no false alarms</span>
                  </div>
                  <div className="flex items-center gap-3 text-green-700">
                    <i className="ri-check-circle-line text-xl"></i>
                    <span>Exact location pinpointed within 1‑meter radius</span>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg mt-6">
                    <div className="text-green-800 font-bold text-lg">Result: No Damage</div>
                    <div className="text-green-700">Rapid response prevents spread, safeguards assets</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transformation Stats */}
          <div className="mt-16">
            {/* Placeholder for future stats or charts */}
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900">Fire Detection Demo</h3>
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
                  <i className="ri-fire-line text-6xl mb-4 text-red-500"></i>
                  <p className="text-xl">Fire Detection Demo Video</p>
                  <p className="text-gray-300 mt-2">See how our AI system detects fires in real-time</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <i className="ri-temp-hot-line text-3xl text-red-600 mb-2"></i>
                  <div className="font-semibold">Thermal Detection</div>
                  <div className="text-sm text-gray-600">AI temperature anomaly detection</div>
                </div>

                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <i className="ri-cloud-line text-3xl text-orange-600 mb-2"></i>
                  <div className="font-semibold">Smoke Recognition</div>
                  <div className="text-sm text-gray-600">AI smoke pattern detection</div>
                </div>

                <div className="text-center p-4 bg-yellow-50 rounded-xl">
                  <i className="ri-fire-line text-3xl text-yellow-600 mb-2"></i>
                  <div className="font-semibold">Flame Detection</div>
                  <div className="text-sm text-gray-600">Visual flame recognition</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
