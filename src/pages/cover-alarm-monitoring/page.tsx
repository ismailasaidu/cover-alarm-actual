
import { useState } from 'react';
import { Link } from 'react-router-dom';
import QuoteModal from '../../components/QuoteModal';
import BookingModal from '../../components/BookingModal';
import EmergencyModal from '../../components/EmergencyModal';

export default function CoverAlarmMonitoring() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const handleLiveChat = () => {
    const widget = document.querySelector('#vapi-widget-floating-button') as HTMLElement;
    if (widget) {
      widget.click();
    }
  };

  const plans = [
    {
      id: 'basic',
      name: 'Basic Protection',
      price: '₦45,000',
      period: '/month',
      description: 'Essential alarm monitoring for small businesses',
      features: [
        '24/7 Alarm Monitoring',
        'Basic Intrusion Detection',
        'SMS & Email Alerts',
        'Monthly Security Reports',
        'Standard Response Time: 15 minutes',
        'Basic Mobile App Access'
      ],
      color: 'blue',
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional Shield',
      price: '₦85,000',
      period: '/month',
      description: 'Advanced monitoring with rapid response',
      features: [
        'Advanced AI-Powered Monitoring',
        'Multi-Zone Intrusion Detection',
        'Instant Push Notifications',
        'Weekly Detailed Reports',
        'Rapid Response Time: 5 minutes',
        'Premium Mobile App with Live View',
        'Fire & Smoke Detection',
        'Panic Button Integration',
        'Video Verification'
      ],
      color: 'red',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise Fortress',
      price: '₦150,000',
      period: '/month',
      description: 'Complete security ecosystem for large operations',
      features: [
        'AI-Powered Predictive Monitoring',
        'Multi-Site Management',
        'Real-Time Video Analytics',
        'Daily Executive Reports',
        'Priority Response Time: 2 minutes',
        'Dedicated Security Dashboard',
        'Environmental Monitoring',
        'Access Control Integration',
        'Dedicated Account Manager',
        'Custom Security Protocols',
        '24/7 Security Consultant'
      ],
      color: 'purple',
      popular: false
    }
  ];

  const responseTeams = [
    {
      location: 'Lagos Island',
      teams: 8,
      avgResponse: '2.3 min',
      status: 'active'
    },
    {
      location: 'Victoria Island',
      teams: 6,
      avgResponse: '1.8 min',
      status: 'active'
    },
    {
      location: 'Ikeja',
      teams: 5,
      avgResponse: '3.1 min',
      status: 'active'
    },
    {
      location: 'Lekki',
      teams: 7,
      avgResponse: '2.7 min',
      status: 'active'
    },
    {
      location: 'Abuja Central',
      teams: 4,
      avgResponse: '4.2 min',
      status: 'active'
    },
    {
      location: 'Port Harcourt',
      teams: 3,
      avgResponse: '5.1 min',
      status: 'active'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
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
              <div className="ml-6 flex items-baseline space-x-6">
                <Link to="/" className="text-gray-300 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium">
                  Home
                </Link>
                <Link to="/about" className="text-gray-300 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium">
                  About Us
                </Link>
                <div className="relative group">
                  <a href="#services" className="text-red-400 px-3 py-2 border-b-2 border-red-400 cursor-pointer flex items-center text-sm font-medium">
                    Security Arsenal
                    <i className="ri-arrow-down-s-line ml-1"></i>
                  </a>
                  <div className="absolute top-full left-0 mt-1 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      <Link to="/ai-video-monitoring" className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800">
                        AI Video Monitoring
                      </Link>
                      <Link to="/gps-fleet-tracking" className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800">
                        GPS Fleet Tracking
                      </Link>
                      <Link to="/fire-detection" className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800">
                        Fire Detection
                      </Link>
                      <Link to="/fuel-monitoring" className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800">
                        Fuel Monitoring
                      </Link>
                      <Link to="/cover-alarm-monitoring" className="block px-4 py-2 text-sm text-red-400 bg-gray-800">
                        Alarm Monitoring
                      </Link>
                      <Link to="/smart-city" className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800">
                        Smart City Solutions
                      </Link>
                      <Link to="/government-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800">
                        Government Solutions
                      </Link>
                    </div>
                  </div>
                </div>
                <Link to="/bnpl" className="text-gray-300 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium">
                  Flexible Payment
                </Link>
                <Link to="/blog" className="text-gray-300 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium">
                  Blog
                </Link>
              </div>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex space-x-3">
              <button onClick={() => setIsEmergencyModalOpen(true)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer font-semibold text-sm animate-pulse">
                🚨 BREACH ALERT
              </button>
              <button onClick={() => setIsQuoteModalOpen(true)} className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer font-semibold text-sm">
                Get Quote
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
                <div className="pt-4 space-y-3 border-t border-gray-700">
                  <button onClick={() => { setIsEmergencyModalOpen(true); setIsMobileMenuOpen(false); }} className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg">
                    🚨 BREACH ALERT
                  </button>
                  <button onClick={() => { setIsQuoteModalOpen(true); setIsMobileMenuOpen(false); }} className="w-full bg-white text-black hover:bg-gray-200 px-4 py-3 rounded-lg">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black/80 via-red-950/20 to-black/80">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=professional%20security%20monitoring%20center%20with%20multiple%20screens%20showing%20alarm%20systems%2C%20Nigerian%20security%20operators%20monitoring%20surveillance%20feeds%20in%20modern%20command%20center%2C%20high-tech%20security%20control%20room%20with%20red%20alert%20indicators%2C%20professional%20security%20personnel%20responding%20to%20alarms%2C%20state-of-the-art%20monitoring%20equipment%20and%20communication%20systems&width=1920&height=1080&seq=alarm-monitoring-center-fixed&orientation=landscape"
            alt="Alarm Monitoring Center"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-red-950/50 to-black/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="text-red-400 text-xl font-mono tracking-wider animate-pulse">
                  ALARM MONITORING
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none">
                  <div className="text-white">RAPID</div>
                  <div className="text-red-500">RESPONSE</div>
                  <div className="text-gray-400">PROTECTION</div>
                </h1>

                <div className="text-2xl sm:text-3xl font-bold text-red-400">
                  SUBSCRIPTION-BASED SECURITY
                </div>

                <div className="bg-black/80 border-l-4 border-red-500 p-6 rounded-r-lg backdrop-blur-sm">
                  <div className="text-red-400 font-bold text-xl mb-2">24/7 MONITORING + RAPID RESPONSE:</div>
                  <div className="text-gray-300 text-lg leading-relaxed">
                    Professional alarm monitoring with armed response teams strategically positioned across Nigeria. 
                    When your alarm triggers, we respond in minutes, not hours.
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
                  >
                    START PROTECTION
                  </button>
                  <button 
                    onClick={() => setIsBookingModalOpen(true)}
                    className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
                  >
                    BOOK CONSULTATION
                  </button>
                </div>
              </div>
            </div>

            {/* Live Response Dashboard */}
            <div className="bg-gray-900/80 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="text-green-400 font-bold">LIVE RESPONSE STATUS</div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm">OPERATIONAL</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black/50 border border-green-500/30 rounded-lg p-4">
                  <div className="text-green-400 text-sm mb-2">ACTIVE MONITORING</div>
                  <div className="text-white text-2xl font-bold">1,247</div>
                  <div className="text-gray-400 text-xs">Sites Protected</div>
                </div>
                <div className="bg-black/50 border border-blue-500/30 rounded-lg p-4">
                  <div className="text-blue-400 text-sm mb-2">RESPONSE TEAMS</div>
                  <div className="text-white text-2xl font-bold">33</div>
                  <div className="text-gray-400 text-xs">Teams Active</div>
                </div>
                <div className="bg-black/50 border border-yellow-500/30 rounded-lg p-4">
                  <div className="text-yellow-400 text-sm mb-2">AVG RESPONSE</div>
                  <div className="text-white text-2xl font-bold">2.8</div>
                  <div className="text-gray-400 text-xs">Minutes</div>
                </div>
                <div className="bg-black/50 border border-purple-500/30 rounded-lg p-4">
                  <div className="text-purple-400 text-sm mb-2">SUCCESS RATE</div>
                  <div className="text-white text-2xl font-bold">99.7%</div>
                  <div className="text-gray-400 text-xs">Threat Prevention</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-white font-semibold mb-3">RECENT RESPONSES:</div>
                <div className="bg-green-900/30 border-l-4 border-green-400 p-3 rounded-r">
                  <div className="text-green-400 text-sm font-mono">{new Date().toLocaleTimeString()}</div>
                  <div className="text-white text-sm">Intrusion prevented - Lekki Phase 1</div>
                  <div className="text-gray-400 text-xs">Response time: 1.8 minutes</div>
                </div>
                <div className="bg-blue-900/30 border-l-4 border-blue-400 p-3 rounded-r">
                  <div className="text-blue-400 text-sm font-mono">{new Date(Date.now() - 300000).toLocaleTimeString()}</div>
                  <div className="text-white text-sm">Alarm verification - Victoria Island</div>
                  <div className="text-gray-400 text-xs">Response time: 2.3 minutes</div>
                </div>
                <div className="bg-yellow-900/30 border-l-4 border-yellow-400 p-3 rounded-r">
                  <div className="text-yellow-400 text-sm font-mono">{new Date(Date.now() - 600000).toLocaleTimeString()}</div>
                  <div className="text-white text-sm">Panic button response - Ikeja</div>
                  <div className="text-gray-400 text-xs">Response time: 3.1 minutes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">How Our Alarm Monitoring Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From threat detection to armed response - see how we protect you 24/7
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Alarm Triggered',
                description: 'Motion sensors, door contacts, or panic buttons detect intrusion or emergency',
                icon: 'ri-alarm-warning-line',
                image: 'https://readdy.ai/api/search-image?query=Security%20alarm%20system%20being%20triggered%20with%20red%20flashing%20lights%20and%20motion%20sensor%20detecting%20intruder%20in%20Nigerian%20commercial%20building%2C%20alarm%20control%20panel%20showing%20active%20breach%20alert%20with%20red%20warning%20indicators%2C%20modern%20security%20system%20activation%20with%20visible%20sensors%20and%20alarm%20devices&width=400&height=300&seq=alarm-triggered-step-fixed&orientation=landscape'
              },
              {
                step: '02',
                title: 'Instant Verification',
                description: 'Our monitoring center receives alert and verifies threat through cameras and audio',
                icon: 'ri-shield-check-line',
                image: 'https://readdy.ai/api/search-image?query=Professional%20security%20monitoring%20center%20operators%20verifying%20alarm%20alerts%20through%20multiple%20camera%20feeds%2C%20Nigerian%20security%20personnel%20analyzing%20threat%20verification%20on%20computer%20screens%2C%20modern%20alarm%20verification%20process%20with%20live%20video%20feeds&width=400&height=300&seq=alarm-verification-step-fixed&orientation=landscape'
              },
              {
                step: '03',
                title: 'Response Dispatch',
                description: 'Armed response team immediately dispatched to your location within seconds',
                icon: 'ri-police-car-line',
                image: 'https://readdy.ai/api/search-image?query=Armed%20security%20response%20team%20rushing%20to%20emergency%20vehicles%20after%20receiving%20alarm%20alert%2C%20professional%20Nigerian%20security%20officers%20in%20tactical%20uniforms%20running%20to%20patrol%20cars%2C%20rapid%20response%20security%20personnel%20deploying%20to%20emergency%20location%20with%20communication%20equipment&width=400&height=300&seq=dispatch-step-fixed&orientation=landscape'
              },
              {
                step: '04',
                title: 'Threat Neutralized',
                description: 'Response team arrives on-site, secures premises, and coordinates with police',
                icon: 'ri-shield-user-line',
                image: 'https://readdy.ai/api/search-image?query=Professional%20armed%20security%20response%20team%20arriving%20at%20Nigerian%20business%20facility%20to%20neutralize%20threat%2C%20security%20officers%20securing%20commercial%20property%20perimeter%20after%20alarm%20response%2C%20trained%20security%20personnel%20coordinating%20with%20police%20at%20protected%20site%20with%20patrol%20vehicles&width=400&height=300&seq=neutralized-step-fixed&orientation=landscape'
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                {/* Step Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Step Number & Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="w-8 h-8 bg-gray-900 border-2 border-orange-500 rounded-full flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-orange-600/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <i className={`${item.icon} text-xl text-white`}></i>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Response Timeline */}
          <div className="mt-16 bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Average Response Timeline</h3>
            <div className="flex justify-center items-center gap-4 text-center flex-wrap">
              <div>
                <div className="text-4xl font-black text-orange-400 mb-2">0s</div>
                <div className="text-gray-300 text-sm">Alarm Triggered</div>
              </div>
              <i className="ri-arrow-right-line text-gray-400 text-2xl"></i>
              <div>
                <div className="text-4xl font-black text-yellow-400 mb-2">5s</div>
                <div className="text-gray-300 text-sm">Alert Verified</div>
              </div>
              <i className="ri-arrow-right-line text-gray-400 text-2xl"></i>
              <div>
                <div className="text-4xl font-black text-blue-400 mb-2">15s</div>
                <div className="text-gray-300 text-sm">Team Dispatched</div>
              </div>
              <i className="ri-arrow-right-line text-gray-400 text-2xl"></i>
              <div>
                <div className="text-4xl font-black text-green-400 mb-2">&lt;5min</div>
                <div className="text-gray-300 text-sm">On-Site Arrival</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Success Stories Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-orange-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-600/20 border border-green-500 rounded-full px-4 py-2 text-green-400 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-bold">REAL SUCCESS STORIES</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">Lives Saved, Assets Protected</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real Nigerian businesses protected by our rapid response teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Success Story 1 */}
            <div className="bg-gray-800/50 border border-green-500/30 rounded-2xl overflow-hidden">
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Relieved%20Nigerian%20warehouse%20manager%20standing%20in%20front%20of%20protected%20facility%20after%20successful%20armed%20robbery%20prevention%2C%20grateful%20African%20business%20owner%20shaking%20hands%20with%20security%20response%20team%2C%20successful%20security%20intervention%20at%20Lagos%20warehouse%20with%20visible%20security%20personnel%20and%20patrol%20vehicles&width=400&height=250&seq=warehouse-success-fixed&orientation=landscape"
                  alt="Warehouse Armed Robbery Prevention"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  ₦25M SAVED
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Armed Robbery Prevented</h3>
                <p className="text-gray-300 mb-4">
                  Lagos Warehouse - Response team arrived in 3 minutes, stopped armed robbers before they could access inventory worth ₦25M.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <i className="ri-time-line text-green-400"></i>
                    <span className="text-green-400">3 min response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-shield-check-line text-green-400"></i>
                    <span className="text-green-400">Zero losses</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Story 2 */}
            <div className="bg-gray-800/50 border border-green-500/30 rounded-2xl overflow-hidden">
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Nigerian%20bank%20manager%20expressing%20gratitude%20to%20security%20response%20team%20after%20preventing%20ATM%20theft%2C%20professional%20African%20banker%20with%20security%20officers%20who%20stopped%20criminals%2C%20successful%20security%20intervention%20at%20Abuja%20bank%20with%20response%20team%20and%20police%20coordination&width=400&height=250&seq=bank-success-fixed&orientation=landscape"
                  alt="Bank ATM Theft Prevention"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  THREAT STOPPED
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">ATM Theft Attempt Foiled</h3>
                <p className="text-gray-300 mb-4">
                  Abuja Bank - Alarm triggered at 2:47 AM, response team caught criminals attempting to break into ATM. Police arrested all suspects.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <i className="ri-alarm-warning-line text-orange-400"></i>
                    <span className="text-orange-400">2:47 AM alert</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-police-car-line text-blue-400"></i>
                    <span className="text-blue-400">All arrested</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Story 3 */}
            <div className="bg-gray-800/50 border border-green-500/30 rounded-2xl overflow-hidden">
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Grateful%20Nigerian%20family%20with%20children%20hugging%20security%20response%20officer%20after%20home%20invasion%20prevention%2C%20relieved%20African%20homeowner%20thanking%20armed%20response%20team%20for%20protecting%20family%2C%20successful%20residential%20security%20intervention%20in%20Port%20Harcourt%20with%20family%20and%20security%20personnel&width=400&height=250&seq=family-success-fixed&orientation=landscape"
                  alt="Home Invasion Prevention"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  FAMILY SAFE
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Home Invasion Stopped</h3>
                <p className="text-gray-300 mb-4">
                  Port Harcourt Residence - Panic button pressed during break-in. Response team arrived in 4 minutes, secured family, detained intruders.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <i className="ri-heart-line text-red-400"></i>
                    <span className="text-red-400">Lives saved</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-shield-user-line text-purple-400"></i>
                    <span className="text-purple-400">4 min arrival</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Statistics Bar */}
          <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-500/30 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-black text-orange-400 mb-2">2,847</div>
                <div className="text-gray-300 font-semibold">Sites Protected</div>
              </div>
              <div>
                <div className="text-4xl font-black text-green-400 mb-2">1,234</div>
                <div className="text-gray-300 font-semibold">Threats Stopped</div>
              </div>
              <div>
                <div className="text-4xl font-black text-blue-400 mb-2">₦8.5B</div>
                <div className="text-gray-300 font-semibold">Assets Secured</div>
              </div>
              <div>
                <div className="text-4xl font-black text-purple-400 mb-2">&lt;5min</div>
                <div className="text-gray-300 font-semibold">Avg Response</div>
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
              See what happens when you upgrade from basic alarms to professional monitoring with armed response
            </p>
          </div>

          {/* Transformation Statement */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-900/30 via-black to-green-900/30 border-y border-gray-700 py-12 rounded-xl">
              <h3 className="text-3xl font-bold text-white mb-4">
                Don't Just Have An Alarm - Have Protection
              </h3>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto px-4 mb-8">
                An alarm without monitoring is like a car without an engine. It looks good but doesn't actually protect you when you need it most.
              </p>
              <button className="bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 text-white px-12 py-4 rounded-lg font-bold text-xl transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap">
                🛡️ UPGRADE TO MONITORED PROTECTION
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              CHOOSE YOUR PROTECTION LEVEL
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible subscription plans designed for every security need. All plans include 24/7 monitoring and rapid response.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative bg-gray-900/50 border rounded-xl p-8 transition-all hover:scale-105 cursor-pointer ${
                  plan.popular 
                    ? 'border-red-500 ring-2 ring-red-500/20' 
                    : 'border-gray-700 hover:border-gray-600'
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-${plan.color}-500/20`}>
                        <i className={`ri-check-line text-${plan.color}-400 text-sm`}></i>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap ${
                    plan.popular
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-white text-black hover:bg-gray-200'
                  }`}
                >
                  {plan.popular ? 'START PROTECTION' : 'GET STARTED'}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">
              All plans include installation, training, and 24/7 technical support
            </p>
            <button 
              onClick={handleLiveChat}
              className="text-red-400 hover:text-red-300 font-semibold cursor-pointer"
            >
              Need help choosing? Chat with our security experts
            </button>
          </div>
        </div>
      </section>

      {/* Response Team Coverage */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              NATIONWIDE RESPONSE COVERAGE
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategically positioned response teams across Nigeria ensure rapid deployment to your location.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {responseTeams.map((team, index) => (
              <div key={index} className="bg-black/50 border border-gray-700 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">{team.location}</h3>
                  <div className={`w-3 h-3 rounded-full ${team.status === 'active' ? 'bg-green-400 animate-pulse' : 'bg-gray-500'}`}></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-gray-400 text-sm">Active Teams</div>
                    <div className="text-white text-xl font-bold">{team.teams}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Avg Response</div>
                    <div className="text-green-400 text-xl font-bold">{team.avgResponse}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-red-900/20 border border-red-500/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">EXPANDING COVERAGE</h3>
            <p className="text-gray-300 mb-6">
              We're continuously expanding our response network. Don't see your area? We can establish coverage for high-value clients.
            </p>
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-all cursor-pointer whitespace-nowrap"
            >
              REQUEST COVERAGE ASSESSMENT
            </button>
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              ADVANCED MONITORING TECHNOLOGY
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Military-grade technology adapted for civilian protection with AI-powered threat detection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-brain-line text-3xl text-red-400"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI Verification</h3>
              <p className="text-gray-300">
                Advanced AI algorithms verify threats in real-time, reducing false alarms by 95%.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-camera-ai-line text-3xl text-blue-400"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Video Analytics</h3>
              <p className="text-gray-300">
                Real-time video analysis provides visual confirmation before dispatching response teams.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-smartphone-line text-3xl text-green-400"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Mobile Control</h3>
              <p className="text-gray-300">
                Complete system control from your smartphone with instant notifications and live feeds.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-3xl text-purple-400"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Multi-Layer Security</h3>
              <p className="text-gray-300">
                Intrusion detection, fire monitoring, panic buttons, and environmental sensors in one system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 via-black to-red-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            READY FOR INSTANT PROTECTION?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join over 1,200 businesses across Nigeria who trust Alarm Monitoring for their security needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-white text-black hover:bg-gray-200 px-12 py-4 rounded-lg font-bold text-xl transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              START PROTECTION TODAY
            </button>
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-12 py-4 rounded-lg font-bold text-xl transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              SCHEDULE CONSULTATION
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="text-white font-bold text-xl mb-4">
                <img 
                  src="https://static.readdy.ai/image/f38dbee0b97d493b71475a98132a7b29/c567d8d1fd4702e852424c0299bd0094.png" 
                  alt="CoverAlarm Systems" 
                  className="h-6 w-auto cursor-pointer"
                />
              </div>
              <p className="text-gray-400 mb-4">
                Nigeria's leading security technology company protecting what matters most.
              </p>
              <div className="flex space-x-4">
                <a href="https://wa.link/i04lde" className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="ri-whatsapp-line text-2xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Security Arsenal</h3>
              <ul className="space-y-2">
                <li><Link to="/ai-video-monitoring" className="text-gray-400 hover:text-white cursor-pointer">AI Video Monitoring</Link></li>
                <li><Link to="/gps-fleet-tracking" className="text-gray-400 hover:text-white cursor-pointer">GPS Fleet Tracking</Link></li>
                <li><Link to="/fire-detection" className="text-gray-400 hover:text-white cursor-pointer">Fire Detection</Link></li>
                <li><Link to="/fuel-monitoring" className="text-gray-400 hover:text-white cursor-pointer">Fuel Monitoring</Link></li>
                <li><Link to="/cover-alarm-monitoring" className="text-red-400 cursor-pointer">Alarm Monitoring/Rapid Response</Link></li>
                <li><Link to="/smart-city" className="text-gray-400 hover:text-white cursor-pointer">Smart City Solutions</Link></li>
                <li><Link to="/government-solutions" className="text-gray-400 hover:text-white cursor-pointer">Government Solutions</Link></li>
              </ul>
            </div>

            {/* Existing footer columns */}
            <div> 
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white cursor-pointer">About Us</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white cursor-pointer">Blog</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-white cursor-pointer">Careers</Link></li>
                <li><Link to="/bnpl" className="text-gray-400 hover:text-white cursor-pointer">Flexible Payment</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><button onClick={() => setIsEmergencyModalOpen(true)} className="text-gray-400 hover:text-white cursor-pointer">Emergency</button></li>
                <li><button onClick={handleLiveChat} className="text-gray-400 hover:text-white cursor-pointer">Live Chat</button></li>
                <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white cursor-pointer">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="text-gray-400 hover:text-white cursor-pointer">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 CoverAlarm Systems LTD. All rights reserved.
            </p>
            <a 
              href="https://readdy.ai/?origin=logo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm cursor-pointer mt-4 sm:mt-0"
            >
              Powered by Readdy
            </a>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
      <EmergencyModal 
        isOpen={isEmergencyModalOpen} 
        onClose={() => setIsEmergencyModalOpen(false)} 
      />
    </div>
  );
}
