
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QuoteModal from '../../components/QuoteModal';
import BookingModal from '../../components/BookingModal';
import EmergencyModal from '../../components/EmergencyModal';
import SmartSolutionModal from './components/SmartSolutionModal';
import PilotProjectModal from './components/PilotProjectModal';

export default function GovernmentSmartCities() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);
  const [energyWaste, setEnergyWaste] = useState(40);
  const [responseTime, setResponseTime] = useState(60);
  const [coverage, setCoverage] = useState(100);

  useEffect(() => {
    // Animate metrics on load
    const animateMetrics = () => {
      let energyCount = 0;
      let responseCount = 0;
      let coverageCount = 0;

      const interval = setInterval(() => {
        if (energyCount < 40) {
          energyCount += 1;
          setEnergyWaste(energyCount);
        }
        if (responseCount < 60) {
          responseCount += 2;
          setResponseTime(responseCount);
        }
        if (coverageCount < 100) {
          coverageCount += 3;
          setCoverage(coverageCount);
        }

        if (energyCount >= 40 && responseCount >= 60 && coverageCount >= 100) {
          clearInterval(interval);
        }
      }, 50);
    };

    animateMetrics();

    // Auto-rotate case studies
    const caseStudyInterval = setInterval(() => {
      setCurrentCaseStudy(prev => (prev + 1) % caseStudies.length);
    }, 5000);

    return () => clearInterval(caseStudyInterval);
  }, []);

  const handleLiveChat = () => {
    const widget = document.querySelector('#vapi-widget-floating-button') as HTMLElement;
    if (widget) {
      widget.click();
    }
  };

  const smartSolutions = [
    {
      id: 'streetlights',
      title: 'AI-Integrated Streetlight Systems',
      description: 'Automated lighting that adapts to real-time activity and enhances energy efficiency',
      icon: 'ri-lightbulb-line',
      color: 'yellow',
      features: [
        'Motion-activated smart lighting',
        'Energy consumption optimization',
        'Remote monitoring and control',
        'Weather-responsive brightness',
        'Maintenance alert systems',
        'Integration with city networks'
      ],
      benefits: [
        '70% reduction in energy costs',
        'Enhanced public safety',
        'Predictive maintenance',
        'Real-time monitoring'
      ],
      image: 'https://readdy.ai/api/search-image?query=modern%20smart%20streetlights%20with%20LED%20technology%20illuminating%20Nigerian%20city%20street%20at%20night%2C%20intelligent%20street%20lighting%20system%20with%20sensors%20and%20connectivity%2C%20automated%20urban%20lighting%20infrastructure%20with%20glowing%20blue%20indicators%2C%20energy-efficient%20smart%20streetlights%20in%20Lagos%20Nigeria%20with%20data%20visualization%20overlays%2C%20connected%20street%20lighting%20network%20with%20AI%20monitoring%20systems&width=600&height=400&seq=smart-streetlights&orientation=landscape'
    },
    {
      id: 'biometric',
      title: 'Smart Fingerprint Access Control',
      description: 'Advanced biometric systems for government facilities and critical infrastructure',
      icon: 'ri-fingerprint-line',
      color: 'blue',
      features: [
        'Multi-factor biometric authentication',
        'Real-time access logging',
        'Integration with security systems',
        'Visitor management',
        'Emergency override protocols',
        'Cloud-based administration'
      ],
      benefits: [
        '99.9% security accuracy',
        'Instant access verification',
        'Comprehensive audit trails',
        'Scalable deployment'
      ],
      image: 'https://readdy.ai/api/search-image?query=modern%20biometric%20fingerprint%20scanner%20at%20Nigerian%20government%20building%20entrance%2C%20advanced%20access%20control%20system%20with%20glowing%20blue%20interface%2C%20professional%20African%20security%20officer%20using%20fingerprint%20authentication%2C%20high-tech%20biometric%20security%20terminal%20with%20digital%20display%2C%20government%20facility%20access%20control%20with%20fingerprint%20technology%20and%20LED%20indicators&width=600&height=400&seq=biometric-access&orientation=landscape'
    },
    {
      id: 'traffic',
      title: 'Traffic & Surveillance Analytics',
      description: 'AI monitoring to manage congestion, detect anomalies, and improve safety',
      icon: 'ri-traffic-light-line',
      color: 'green',
      features: [
        'Real-time traffic flow analysis',
        'Congestion prediction algorithms',
        'Incident detection and alerts',
        'License plate recognition',
        'Crowd behavior monitoring',
        'Emergency vehicle priority'
      ],
      benefits: [
        '45% reduction in traffic delays',
        'Faster emergency response',
        'Improved road safety',
        'Data-driven planning'
      ],
      image: 'https://readdy.ai/api/search-image?query=intelligent%20traffic%20management%20system%20in%20busy%20Lagos%20Nigeria%20intersection%2C%20AI-powered%20traffic%20cameras%20monitoring%20vehicle%20flow%2C%20smart%20traffic%20lights%20with%20digital%20displays%20and%20sensors%2C%20urban%20traffic%20analytics%20with%20data%20visualization%20overlays%2C%20connected%20traffic%20infrastructure%20with%20real-time%20monitoring%20in%20Nigerian%20city&width=600&height=400&seq=traffic-analytics&orientation=landscape'
    },
    {
      id: 'emergency',
      title: 'Emergency Response Integration',
      description: 'Real-time alerts, panic sensors, and command center coordination',
      icon: 'ri-alarm-warning-line',
      color: 'red',
      features: [
        'Panic button networks',
        'Automated emergency alerts',
        'Multi-agency coordination',
        'Real-time location tracking',
        'Communication systems',
        'Response time optimization'
      ],
      benefits: [
        '80% faster response times',
        'Coordinated emergency action',
        'Life-saving alerts',
        'Comprehensive coverage'
      ],
      image: 'https://readdy.ai/api/search-image?query=modern%20emergency%20response%20command%20center%20in%20Nigeria%20with%20multiple%20screens%20and%20monitoring%20systems%2C%20professional%20African%20emergency%20operators%20coordinating%20response%2C%20high-tech%20emergency%20management%20facility%20with%20real-time%20data%20displays%2C%20government%20emergency%20response%20center%20with%20communication%20equipment%20and%20alert%20systems&width=600&height=400&seq=emergency-response&orientation=landscape'
    }
  ];

  const caseStudies = [
    {
      title: 'Lagos Smart Streetlight Initiative',
      location: 'Victoria Island Business District',
      description: 'Deployed 2,500 AI-integrated streetlights across Lagos\' busiest commercial area, resulting in 65% energy savings and enhanced nighttime security.',
      results: ['65% energy cost reduction', '40% crime rate decrease', '24/7 monitoring coverage'],
      image: 'https://readdy.ai/api/search-image?query=Lagos%20Victoria%20Island%20at%20night%20with%20modern%20smart%20streetlights%20illuminating%20busy%20commercial%20district%2C%20intelligent%20LED%20street%20lighting%20system%20with%20blue%20connectivity%20indicators%2C%20Nigerian%20business%20district%20transformed%20with%20smart%20lighting%20infrastructure%2C%20energy-efficient%20streetlights%20creating%20safe%20urban%20environment%20in%20Lagos&width=800&height=500&seq=lagos-streetlights-case&orientation=landscape'
    },
    {
      title: 'Abuja Government Complex Security',
      location: 'Federal Capital Territory',
      description: 'Implemented comprehensive biometric access control across 15 government buildings, securing critical infrastructure with advanced authentication.',
      results: ['100% unauthorized access prevention', '99.9% system uptime', '15 facilities secured'],
      image: 'https://readdy.ai/api/search-image?query=modern%20Abuja%20government%20complex%20with%20advanced%20biometric%20security%20systems%2C%20Federal%20Capital%20Territory%20buildings%20with%20high-tech%20access%20control%2C%20Nigerian%20government%20facilities%20protected%20by%20smart%20security%20technology%2C%20professional%20government%20building%20entrance%20with%20biometric%20scanners%20and%20digital%20displays&width=800&height=500&seq=abuja-biometric-case&orientation=landscape'
    },
    {
      title: 'Port Harcourt Traffic Optimization',
      location: 'Garden City Commercial Hub',
      description: 'AI-powered traffic management system deployed across 50 intersections, dramatically improving traffic flow and reducing congestion.',
      results: ['50% congestion reduction', '30% faster commute times', '85% incident detection rate'],
      image: 'https://readdy.ai/api/search-image?query=Port%20Harcourt%20Nigeria%20busy%20intersection%20with%20intelligent%20traffic%20management%20system%2C%20AI-powered%20traffic%20cameras%20and%20smart%20traffic%20lights%2C%20Garden%20City%20commercial%20area%20with%20optimized%20traffic%20flow%2C%20connected%20traffic%20infrastructure%20with%20real-time%20monitoring%20and%20data%20analytics&width=800&height=500&seq=portharcourt-traffic-case&orientation=landscape'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* Navigation */}
      <nav className="bg-black/90 backdrop-blur-sm border-b border-blue-500/30 sticky top-0 z-50">
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
                <Link to="/" className="text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium">
                  Home
                </Link>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium">
                  About Us
                </Link>
                <div className="relative group">
                  <a href="#services" className="text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors cursor-pointer flex items-center text-sm font-medium">
                    Core Security
                    <i className="ri-arrow-down-s-line ml-1"></i>
                  </a>
                  <div className="absolute top-full left-0 mt-1 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      <Link to="/ai-video-monitoring" className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800">
                        AI Video Monitoring
                      </Link>
                      <Link to="/ai-video-analytics" className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800">
                        AI CCTV Analytics
                      </Link>
                      <Link to="/fire-detection" className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800">
                        Fire Detection
                      </Link>
                      <Link to="/cover-alarm-monitoring" className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800">
                        Alarm Monitoring
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <a href="#other-services" className="text-blue-400 px-3 py-2 border-b-2 border-blue-400 cursor-pointer flex items-center text-sm font-medium">
                    Other Services
                    <i className="ri-arrow-down-s-line ml-1"></i>
                  </a>
                  <div className="absolute top-full left-0 mt-1 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      <Link to="/fleet-management" className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800">
                        Fleet Management
                      </Link>
                      <Link to="/government-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800">
                        Government Solutions
                      </Link>
                      <Link to="/government-smart-cities" className="block px-4 py-2 text-sm text-blue-400 bg-gray-800">
                        Smart Cities
                      </Link>
                      <Link to="/vehicle-ai-cctv" className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800">
                        Vehicle AI CCTV
                      </Link>
                    </div>
                  </div>
                </div>
                <Link to="/bnpl" className="text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium">
                  Flexible Payment
                </Link>
                <Link to="/blog" className="text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium">
                  Blog
                </Link>
              </div>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex space-x-3">
              <button onClick={() => setIsEmergencyModalOpen(true)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer font-semibold text-sm animate-pulse">
                🚨 EMERGENCY
              </button>
              <button onClick={() => setIsBookingModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer font-semibold text-sm">
                Request Demo
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
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-blue-400 px-3 py-3 text-base font-medium hover:bg-gray-800">
                  Home
                </Link>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-blue-400 px-3 py-3 text-base font-medium hover:bg-gray-800">
                  About Us
                </Link>
                <div className="pt-4 space-y-3 border-t border-gray-700">
                  <button onClick={() => { setIsEmergencyModalOpen(true); setIsMobileMenuOpen(false); }} className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg">
                    🚨 EMERGENCY
                  </button>
                  <button onClick={() => { setIsBookingModalOpen(true); setIsMobileMenuOpen(false); }} className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg">
                    Request Demo
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=futuristic%20smart%20city%20skyline%20at%20night%20with%20illuminated%20buildings%20and%20digital%20data%20streams%2C%20Nigerian%20cityscape%20with%20connected%20IoT%20devices%20and%20glowing%20streetlights%2C%20modern%20urban%20landscape%20with%20AI%20monitoring%20systems%20and%20data%20visualization%20overlays%2C%20intelligent%20city%20infrastructure%20with%20blue%20and%20gold%20lighting%20effects%2C%20high-tech%20city%20management%20with%20digital%20connectivity%20networks%20and%20smart%20sensors&width=1920&height=1080&seq=smart-city-hero-bg&orientation=landscape"
            alt="Smart City Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-blue-950/60 to-black/80"></div>
          
          {/* Animated Data Flow Lines */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-pulse"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="text-blue-400 text-xl font-mono tracking-wider animate-pulse flex items-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-ping"></div>
                  GOVERNMENT & SMART CITIES
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none">
                  <div className="text-white">BUILDING</div>
                  <div className="text-blue-500">SAFER</div>
                  <div className="text-yellow-400">SMARTER</div>
                  <div className="text-gray-400">CITIES</div>
                </h1>

                <div className="text-xl sm:text-2xl font-bold text-blue-400">
                  WITH AI & AUTOMATION
                </div>

                <div className="bg-black/80 border-l-4 border-yellow-500 p-6 rounded-r-lg backdrop-blur-sm">
                  <div className="text-yellow-400 font-bold text-xl mb-2">INTELLIGENT URBAN MANAGEMENT:</div>
                  <div className="text-gray-300 text-lg leading-relaxed">
                    CoverAlarm delivers advanced public safety and infrastructure solutions that redefine 
                    urban management through intelligent monitoring and automation across Nigeria.
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setIsBookingModalOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap flex items-center justify-center"
                  >
                    <i className="ri-government-line mr-2"></i>
                    REQUEST GOVERNMENT DEMO
                  </button>
                  <button 
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="bg-yellow-600 hover:bg-yellow-700 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap flex items-center justify-center"
                  >
                    <i className="ri-download-line mr-2"></i>
                    DOWNLOAD BROCHURE
                  </button>
                </div>
              </div>
            </div>

            {/* Smart City Control Panel */}
            <div className="bg-gray-900/80 border border-blue-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="text-blue-400 font-bold">SMART CITY COMMAND CENTER</div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm">LIVE SYSTEMS</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black/50 border border-blue-500/30 rounded-lg p-4">
                  <div className="text-blue-400 text-sm mb-2 flex items-center">
                    <i className="ri-lightbulb-line mr-2"></i>
                    SMART LIGHTING
                  </div>
                  <div className="text-white text-2xl font-bold">2,847</div>
                  <div className="text-gray-400 text-xs">Active Streetlights</div>
                </div>
                <div className="bg-black/50 border border-yellow-500/30 rounded-lg p-4">
                  <div className="text-yellow-400 text-sm mb-2 flex items-center">
                    <i className="ri-fingerprint-line mr-2"></i>
                    ACCESS CONTROL
                  </div>
                  <div className="text-white text-2xl font-bold">99.9%</div>
                  <div className="text-gray-400 text-xs">Security Rate</div>
                </div>
                <div className="bg-black/50 border border-green-500/30 rounded-lg p-4">
                  <div className="text-green-400 text-sm mb-2 flex items-center">
                    <i className="ri-traffic-light-line mr-2"></i>
                    TRAFFIC FLOW
                  </div>
                  <div className="text-white text-2xl font-bold">87%</div>
                  <div className="text-gray-400 text-xs">Efficiency Rate</div>
                </div>
                <div className="bg-black/50 border border-red-500/30 rounded-lg p-4">
                  <div className="text-red-400 text-sm mb-2 flex items-center">
                    <i className="ri-alarm-warning-line mr-2"></i>
                    EMERGENCY
                  </div>
                  <div className="text-white text-2xl font-bold">&lt;2min</div>
                  <div className="text-gray-400 text-xs">Response Time</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-white font-semibold mb-3 flex items-center">
                  <i className="ri-pulse-line mr-2 text-blue-400"></i>
                  REAL-TIME ACTIVITY:
                </div>
                <div className="bg-blue-900/30 border-l-4 border-blue-400 p-3 rounded-r">
                  <div className="text-blue-400 text-sm font-mono">{new Date().toLocaleTimeString()}</div>
                  <div className="text-white text-sm">Smart lighting optimization - Lagos Island</div>
                </div>
                <div className="bg-green-900/30 border-l-4 border-green-400 p-3 rounded-r">
                  <div className="text-green-400 text-sm font-mono">{new Date(Date.now() - 180000).toLocaleTimeString()}</div>
                  <div className="text-white text-sm">Traffic flow improved - Abuja CBD</div>
                </div>
                <div className="bg-yellow-900/30 border-l-4 border-yellow-400 p-3 rounded-r">
                  <div className="text-yellow-400 text-sm font-mono">{new Date(Date.now() - 360000).toLocaleTimeString()}</div>
                  <div className="text-white text-sm">Biometric access secured - Port Harcourt</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Infrastructure Solutions */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Circuit Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300bcd4' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Cpath d='M30 0v30M60 30H30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-blue-400 text-lg font-mono mb-4 flex items-center justify-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-ping"></div>
              SMART INFRASTRUCTURE SOLUTIONS
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              INTELLIGENT URBAN SYSTEMS
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Aerial views of cities with connected sensors and streetlights, transforming urban landscapes 
              through AI-powered infrastructure and automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {smartSolutions.map((solution, index) => (
              <div 
                key={solution.id}
                className="group bg-black/50 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedSolution(solution)}
              >
                <div className="relative">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 bg-${solution.color}-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-${solution.color}-500/30`}>
                      <i className={`${solution.icon} text-xl text-${solution.color}-400`}></i>
                    </div>
                  </div>

                  {/* Animated Data Points */}
                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    {[1, 2, 3].map((dot) => (
                      <div 
                        key={dot}
                        className={`w-2 h-2 bg-${solution.color}-400 rounded-full animate-pulse`}
                        style={{animationDelay: `${dot * 0.5}s`}}
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {solution.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="text-xs text-gray-400">
                          <i className={`ri-check-line text-${solution.color}-400 mr-1`}></i>
                          {benefit}
                        </div>
                      ))}
                    </div>
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                      <i className="ri-arrow-right-line text-xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => setIsPilotModalOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              REQUEST A PILOT PROJECT
            </button>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-yellow-400 text-lg font-mono mb-4 flex items-center justify-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-ping"></div>
              IMPACT METRICS & RESULTS
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              MEASURABLE TRANSFORMATION
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real data from our smart city implementations across Nigeria showing the power of intelligent infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Energy Waste Reduction */}
            <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-xl p-8 text-center">
              <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-lightbulb-line text-3xl text-yellow-400"></i>
              </div>
              <div className="text-6xl font-black text-yellow-400 mb-4">
                {energyWaste}%
              </div>
              <div className="text-xl font-bold text-white mb-2">
                REDUCTION IN PUBLIC ENERGY WASTE
              </div>
              <div className="text-gray-300 text-sm">
                Through AI-integrated streetlight systems and smart energy management
              </div>
              
              {/* Progress Bar */}
              <div className="mt-6 bg-gray-800 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full transition-all duration-1000"
                  style={{width: `${energyWaste}%`}}
                ></div>
              </div>
            </div>

            {/* Emergency Response Time */}
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-xl p-8 text-center">
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-alarm-warning-line text-3xl text-blue-400"></i>
              </div>
              <div className="text-6xl font-black text-blue-400 mb-4">
                {responseTime}%
              </div>
              <div className="text-xl font-bold text-white mb-2">
                FASTER EMERGENCY RESPONSE TIME
              </div>
              <div className="text-gray-300 text-sm">
                Real-time alerts, panic sensors, and command center coordination
              </div>
              
              {/* Progress Bar */}
              <div className="mt-6 bg-gray-800 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full transition-all duration-1000"
                  style={{width: `${responseTime}%`}}
                ></div>
              </div>
            </div>

            {/* AI Monitoring Coverage */}
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-8 text-center">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-eye-line text-3xl text-green-400"></i>
              </div>
              <div className="text-6xl font-black text-green-400 mb-4">
                {coverage}%
              </div>
              <div className="text-xl font-bold text-white mb-2">
                AI-ASSISTED MONITORING COVERAGE
              </div>
              <div className="text-gray-300 text-sm">
                Complete surveillance and analytics across all deployed systems
              </div>
              
              {/* Progress Bar */}
              <div className="mt-6 bg-gray-800 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full transition-all duration-1000"
                  style={{width: `${coverage}%`}}
                ></div>
              </div>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="mt-16 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-xl p-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">12</div>
                <div className="text-gray-300 text-sm">Cities Transformed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">₦2.8B</div>
                <div className="text-gray-300 text-sm">Cost Savings Generated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">4.2M</div>
                <div className="text-gray-300 text-sm">Citizens Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">99.8%</div>
                <div className="text-gray-300 text-sm">System Reliability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Carousel */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-green-400 text-lg font-mono mb-4 flex items-center justify-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-ping"></div>
              OUR WORK IN ACTION
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              CASE STUDY SHOWCASE
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From streetlight automation in key Nigerian cities to biometric access control in state facilities — 
              CoverAlarm's solutions are setting the pace for modern governance.
            </p>
          </div>

          <div className="relative">
            <div className="bg-black/50 border border-gray-700 rounded-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src={caseStudies[currentCaseStudy].image} 
                    alt={caseStudies[currentCaseStudy].title}
                    className="w-full h-96 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                  
                  {/* Case Study Navigation */}
                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    {caseStudies.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentCaseStudy(index)}
                        className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                          index === currentCaseStudy ? 'bg-blue-400' : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                      ></button>
                    ))}
                  </div>
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="text-blue-400 text-sm font-mono mb-4">
                    CASE STUDY {String(currentCaseStudy + 1).padStart(2, '0')}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {caseStudies[currentCaseStudy].title}
                  </h3>
                  
                  <div className="text-yellow-400 font-semibold mb-4">
                    📍 {caseStudies[currentCaseStudy].location}
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {caseStudies[currentCaseStudy].description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="text-white font-semibold mb-3">KEY RESULTS:</div>
                    {caseStudies[currentCaseStudy].results.map((result, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                          <i className="ri-check-line text-green-400 text-sm"></i>
                        </div>
                        <span className="text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={() => setCurrentCaseStudy(prev => prev === 0 ? caseStudies.length - 1 : prev - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/80 border border-gray-600 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors cursor-pointer"
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </button>
            <button 
              onClick={() => setCurrentCaseStudy(prev => (prev + 1) % caseStudies.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/80 border border-gray-600 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors cursor-pointer"
            >
              <i className="ri-arrow-right-line text-xl"></i>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-black to-yellow-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-yellow-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            PARTNER WITH COVERALARM FOR A SMARTER NIGERIA
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your city into a safe, connected, and intelligent ecosystem powered by AI and data. 
            Join the future of urban governance and public safety.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={handleLiveChat}
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg font-bold text-xl transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap flex items-center justify-center"
            >
              <i className="ri-customer-service-line mr-2"></i>
              CONTACT OUR GOVERNMENT UNIT
            </button>
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-yellow-600 hover:bg-yellow-700 text-black px-12 py-4 rounded-lg font-bold text-xl transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap flex items-center justify-center"
            >
              <i className="ri-download-line mr-2"></i>
              DOWNLOAD SMART CITY BROCHURE
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
                Nigeria's leading security technology company building smarter, safer cities.
              </p>
              <div className="flex space-x-4">
                <a href="https://wa.link/i04lde" className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="ri-whatsapp-line text-2xl"></i>
                </a>
                <a href="https://www.instagram.com/cover.alarm/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="ri-instagram-line text-2xl"></i>
                </a>
                <a href="https://www.linkedin.com/company/cover-alarm-systems-ltd/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="ri-linkedin-line text-2xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Smart Solutions</h3>
              <ul className="space-y-2">
                <li><button onClick={() => setSelectedSolution(smartSolutions[0])} className="text-gray-400 hover:text-white cursor-pointer">Smart Streetlights</button></li>
                <li><button onClick={() => setSelectedSolution(smartSolutions[1])} className="text-gray-400 hover:text-white cursor-pointer">Biometric Access</button></li>
                <li><button onClick={() => setSelectedSolution(smartSolutions[2])} className="text-gray-400 hover:text-white cursor-pointer">Traffic Analytics</button></li>
                <li><button onClick={() => setSelectedSolution(smartSolutions[3])} className="text-gray-400 hover:text-white cursor-pointer">Emergency Response</button></li>
              </ul>
            </div>

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
      <SmartSolutionModal 
        isOpen={!!selectedSolution} 
        onClose={() => setSelectedSolution(null)} 
        solution={selectedSolution}
      />
      <PilotProjectModal 
        isOpen={isPilotModalOpen} 
        onClose={() => setIsPilotModalOpen(false)} 
      />
    </div>
  );
}
