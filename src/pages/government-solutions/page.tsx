
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QuoteModal from '../../components/QuoteModal';
import BookingModal from '../../components/BookingModal';
import EmergencyModal from '../../components/EmergencyModal';

export default function GovernmentSolutions() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState('comprehensive');
  const [securityBreaches, setSecurityBreaches] = useState(1847);
  const [isVisible, setIsVisible] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Security breach counter
    const interval = setInterval(() => {
      setSecurityBreaches(prev => prev + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleLiveChat = () => {
    const widget = document.querySelector('#vapi-widget-floating-button') as HTMLElement;
    if (widget) {
      widget.click();
    }
  };

  const solutions = [
    {
      id: 'traffic',
      name: 'Smart Traffic Management',
      description: 'AI-powered traffic optimization for urban areas',
      features: [
        'Intelligent Traffic Light Control',
        'Real-time Traffic Flow Analysis',
        'Congestion Prediction & Prevention',
        'Emergency Vehicle Priority',
        'Traffic Violation Detection',
        'Pedestrian Safety Systems',
        'Mobile Traffic Dashboard',
        'Integration with Navigation Apps'
      ],
      color: 'blue',
      icon: 'ri-traffic-light-line'
    },
    {
      id: 'surveillance',
      name: 'City-Wide Surveillance',
      description: 'Comprehensive urban security monitoring',
      features: [
        'AI-Powered Crime Detection',
        'Facial Recognition Systems',
        'License Plate Recognition',
        'Crowd Behavior Analysis',
        'Incident Prediction Algorithms',
        'Real-time Alert Systems',
        'Evidence Management Platform',
        'Integration with Law Enforcement',
        'Privacy-Compliant Operations'
      ],
      color: 'red',
      icon: 'ri-camera-ai-line'
    },
    {
      id: 'environmental',
      name: 'Environmental Monitoring',
      description: 'Smart environmental and infrastructure monitoring',
      features: [
        'Air Quality Monitoring',
        'Noise Level Detection',
        'Weather Station Network',
        'Flood Detection Systems',
        'Waste Management Optimization',
        'Energy Consumption Tracking',
        'Water Quality Monitoring',
        'Environmental Health Reports'
      ],
      color: 'green',
      icon: 'ri-leaf-line'
    },
    {
      id: 'comprehensive',
      name: 'Complete Government & Smart City',
      description: 'Integrated government security and smart city ecosystem',
      features: [
        'All Traffic Management Features',
        'Complete Surveillance Network',
        'Full Environmental Monitoring',
        'Government Facility Protection',
        'Critical Infrastructure Security',
        'Emergency Response Coordination',
        'Citizen Engagement Platform',
        'Data Analytics Dashboard',
        'IoT Device Management',
        'Predictive Maintenance',
        'Smart Parking Solutions',
        'Public Wi-Fi Infrastructure',
        'Digital Signage Network',
        'Dedicated Operations Center'
      ],
      color: 'purple',
      icon: 'ri-building-line',
      popular: true
    }
  ];

  const cityFeatures = [
    {
      title: 'Traffic Optimization',
      description: 'Reduce congestion by up to 40% with AI-powered traffic management',
      icon: 'ri-roadster-line',
      stats: '40% reduction in traffic delays'
    },
    {
      title: 'Crime Prevention',
      description: 'Proactive crime detection and prevention through intelligent surveillance',
      icon: 'ri-shield-check-line',
      stats: '65% reduction in crime rates'
    },
    {
      title: 'Environmental Health',
      description: 'Monitor and improve air quality, noise levels, and environmental conditions',
      icon: 'ri-plant-line',
      stats: '30% improvement in air quality'
    },
    {
      title: 'Emergency Response',
      description: 'Faster emergency response times through integrated communication systems',
      icon: 'ri-alarm-warning-line',
      stats: '50% faster response times'
    },
    {
      title: 'Energy Efficiency',
      description: 'Smart lighting and energy management reduces municipal energy costs',
      icon: 'ri-lightbulb-line',
      stats: '35% energy cost savings'
    },
    {
      title: 'Government Security',
      description: 'Comprehensive protection for government facilities and critical infrastructure',
      icon: 'ri-government-line',
      stats: '99.9% security uptime'
    }
  ];

  const implementedCities = [
    {
      name: 'Lagos Smart City Pilot',
      location: 'Victoria Island, Lagos',
      features: ['Traffic Management', 'Surveillance', 'Environmental'],
      status: 'Active',
      results: '35% traffic improvement, 28% crime reduction'
    },
    {
      name: 'Abuja Federal Capital',
      location: 'Central Business District',
      features: ['Government Security', 'Smart City'],
      status: 'Phase 2',
      results: '45% efficiency improvement, zero security breaches'
    },
    {
      name: 'Port Harcourt Industrial',
      location: 'Trans Amadi Industrial Layout',
      features: ['Environmental', 'Security'],
      status: 'Active',
      results: '40% environmental compliance improvement'
    }
  ];

  const successStories = [
    {
      city: 'Lagos Smart Transformation',
      location: 'Victoria Island Business District',
      challenge: 'Traffic congestion causing ₦2.5B daily economic losses',
      solution: 'AI traffic management with predictive analytics',
      results: '₦850M monthly savings, 45% congestion reduction, 35% faster commutes',
      image: 'https://readdy.ai/api/search-image?query=busy%20Lagos%20Nigeria%20traffic%20intersection%20with%20smart%20traffic%20lights%20and%20digital%20displays%2C%20modern%20Nigerian%20city%20street%20with%20AI%20traffic%20management%20systems%2C%20urban%20traffic%20flow%20optimization%20with%20connected%20vehicles%20and%20smart%20infrastructure%2C%20Victoria%20Island%20Lagos%20business%20district%20with%20intelligent%20transportation%20systems&width=600&height=400&seq=lagos-traffic-success&orientation=landscape'
    },
    {
      city: 'Abuja Security Network',
      location: 'Federal Capital Territory',
      challenge: 'Crime rates increasing 40% annually across government areas',
      solution: 'Comprehensive AI surveillance with predictive policing',
      results: '2,847 cameras deployed, 67% crime reduction, 15 sec response time',
      image: 'https://readdy.ai/api/search-image?query=modern%20Abuja%20Nigeria%20cityscape%20with%20advanced%20security%20cameras%20and%20monitoring%20systems%2C%20Federal%20Capital%20Territory%20with%20AI%20surveillance%20network%2C%20Nigerian%20government%20buildings%20protected%20by%20smart%20security%20technology%2C%20urban%20safety%20infrastructure%20with%20digital%20monitoring&width=600&height=400&seq=abuja-security-success&orientation=landscape'
    },
    {
      city: 'Port Harcourt Green Initiative',
      location: 'Garden City Industrial Zone',
      challenge: 'Air pollution levels 300% above WHO standards',
      solution: 'Environmental monitoring with automated response systems',
      results: '₦1.2B environmental compliance savings, 55% pollution reduction',
      image: 'https://readdy.ai/api/search-image?query=Port%20Harcourt%20Nigeria%20industrial%20area%20with%20environmental%20monitoring%20stations%20and%20clean%20air%20technology%2C%20Garden%20City%20with%20smart%20environmental%20sensors%20and%20pollution%20control%20systems%2C%20Nigerian%20industrial%20zone%20transformed%20with%20green%20technology%20and%20air%20quality%20monitoring&width=600&height=400&seq=portharcourt-environment-success&orientation=landscape'
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
                      <Link to="/cover-alarm-monitoring" className="block px-4 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800">
                        Alarm Monitoring
                      </Link>
                      <Link to="/government-solutions" className="block px-4 py-2 text-sm text-red-400 bg-gray-800">
                        Government & Smart City
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
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black/80 via-blue-950/20 to-black/80">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=futuristic%20smart%20city%20skyline%20with%20digital%20infrastructure%20and%20government%20security%20command%20center%2C%20modern%20Nigerian%20city%20with%20smart%20technology%20integration%20and%20government%20buildings%2C%20urban%20landscape%20with%20connected%20IoT%20devices%20and%20digital%20displays%20protecting%20critical%20infrastructure%2C%20intelligent%20traffic%20systems%20and%20smart%20buildings%20with%20government%20security%20operations%2C%20high-tech%20city%20management%20center%20with%20data%20visualization%20and%20security%20monitoring%2C%20advanced%20urban%20technology%20and%20connectivity%20networks%20protecting%20government%20facilities&width=1920&height=1080&seq=smart-government-city-skyline&orientation=landscape"
            alt="Government & Smart City Solutions"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-blue-950/50 to-black/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="text-blue-400 text-xl font-mono tracking-wider animate-pulse">
                  GOVERNMENT & SMART CITY SOLUTIONS
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none">
                  <div className="text-white">SECURE</div>
                  <div className="text-blue-500">SMART</div>
                  <div className="text-gray-400">CITIES</div>
                </h1>

                <div className="text-2xl sm:text-3xl font-bold text-blue-400">
                  GOVERNMENT SECURITY + URBAN INTELLIGENCE
                </div>

                <div className="bg-black/80 border-l-4 border-blue-500 p-6 rounded-r-lg backdrop-blur-sm">
                  <div className="text-blue-400 font-bold text-xl mb-2">COMPLETE PROTECTION:</div>
                  <div className="text-gray-300 text-lg leading-relaxed">
                    Integrated government security and smart city solutions that protect critical infrastructure 
                    while creating safer, more efficient, and sustainable urban environments across Nigeria.
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
                  >
                    GET QUOTE
                  </button>
                  <button 
                    onClick={() => setIsBookingModalOpen(true)}
                    className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
                  >
                    SCHEDULE DEMO
                  </button>
                </div>
              </div>
            </div>

            {/* Smart City Dashboard */}
            <div className="bg-gray-900/80 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="text-blue-400 font-bold">GOVERNMENT OPERATIONS CENTER</div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-400 text-sm">LIVE DATA</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black/50 border border-green-500/30 rounded-lg p-4">
                  <div className="text-green-400 text-sm mb-2">TRAFFIC FLOW</div>
                  <div className="text-white text-2xl font-bold">87%</div>
                  <div className="text-gray-400 text-xs">Efficiency Rate</div>
                </div>
                <div className="bg-black/50 border border-blue-500/30 rounded-lg p-4">
                  <div className="text-blue-400 text-sm mb-2">SURVEILLANCE</div>
                  <div className="text-white text-2xl font-bold">2,847</div>
                  <div className="text-gray-400 text-xs">Active Cameras</div>
                </div>
                <div className="bg-black/50 border border-yellow-500/30 rounded-lg p-4">
                  <div className="text-yellow-400 text-sm mb-2">AIR QUALITY</div>
                  <div className="text-white text-2xl font-bold">Good</div>
                  <div className="text-gray-400 text-xs">AQI: 45</div>
                </div>
                <div className="bg-black/50 border border-purple-500/30 rounded-lg p-4">
                  <div className="text-purple-400 text-sm mb-2">SECURITY</div>
                  <div className="text-white text-2xl font-bold">99.9%</div>
                  <div className="text-gray-400 text-xs">Uptime</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-white font-semibold mb-3">REAL-TIME EVENTS:</div>
                <div className="bg-green-900/30 border-l-4 border-green-400 p-3 rounded-r">
                  <div className="text-green-400 text-sm font-mono">{new Date().toLocaleTimeString()}</div>
                  <div className="text-white text-sm">Traffic optimization activated - Lagos Island</div>
                </div>
                <div className="bg-blue-900/30 border-l-4 border-blue-400 p-3 rounded-r">
                  <div className="text-blue-400 text-sm font-mono">{new Date(Date.now() - 180000).toLocaleTimeString()}</div>
                  <div className="text-white text-sm">Government facility secured - Abuja</div>
                </div>
                <div className="bg-yellow-900/30 border-l-4 border-yellow-400 p-3 rounded-r">
                  <div className="text-yellow-400 text-sm font-mono">{new Date(Date.now() - 360000).toLocaleTimeString()}</div>
                  <div className="text-white text-sm">Environmental alert resolved - Port Harcourt</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- How It Works ---------- */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">How Our Government Security Solutions Work</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security infrastructure designed specifically for government operations
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Infrastructure Assessment',
                description: 'Comprehensive security audit of all government facilities and critical infrastructure',
                icon: 'ri-search-eye-line',
                image: 'https://readdy.ai/api/search-image?query=Professional%20security%20consultants%20conducting%20comprehensive%20facility%20assessment%20in%20Nigerian%20government%20building%2C%20African%20security%20experts%20with%20tablets%20and%20equipment%20evaluating%20building%20security%20infrastructure%2C%20detailed%20security%20audit%20of%20government%20facility%20with%20professional%20team%20taking%20notes%20and%20measurements%2C%20security%20assessment%20team%20inspecting%20critical%20infrastructure%20in%20Abuja%20Nigeria%2C%20thorough%20evaluation%20of%20government%20security%20systems&width=400&height=300&seq=gov-assessment-step&orientation=landscape'
              },
              {
                step: '02',
                title: 'System Integration',
                description: 'Deploy integrated security systems across all facilities with centralized monitoring',
                icon: 'ri-settings-3-line',
                image: 'https://readdy.ai/api/search-image?query=Professional%20technicians%20installing%20advanced%20security%20systems%20in%20Nigerian%20government%20facility%2C%20African%20security%20engineers%20integrating%20surveillance%20cameras%20and%20access%20control%20systems%2C%20technical%20installation%20of%20comprehensive%20security%20infrastructure%20in%20government%20building%2C%20professional%20security%20system%20deployment%20with%20multiple%20cameras%20and%20sensors%20being%20installed%2C%20modern%20security%20technology%20integration%20in%20Abuja%20government%20complex&width=400&height=300&seq=gov-integration-step&orientation=landscape'
              },
              {
                step: '03',
                title: '24/7 Monitoring',
                description: 'Round-the-clock surveillance by trained security professionals in command center',
                icon: 'ri-eye-line',
                image: 'https://readdy.ai/api/search-image?query=Professional%20African%20security%20operators%20monitoring%20multiple%20screens%20in%20government%20command%20center%2C%20trained%20security%20personnel%20watching%20surveillance%20feeds%20in%20modern%20control%20room%2C%2024%2F7%20security%20monitoring%20operations%20with%20Nigerian%20security%20staff%20at%20workstations%2C%20advanced%20security%20operations%20center%20with%20multiple%20displays%20showing%20real-time%20government%20facility%20monitoring%2C%20professional%20security%20team%20coordinating%20surveillance%20in%20Abuja%20Nigeria&width=400&height=300&seq=gov-monitoring-step&orientation=landscape'
              },
              {
                step: '04',
                title: 'Rapid Response',
                description: 'Immediate deployment of armed response teams to any security threat or breach',
                icon: 'ri-shield-user-line',
                image: 'https://readdy.ai/api/search-image?query=Professional%20armed%20security%20response%20team%20in%20Nigeria%20wearing%20tactical%20uniforms%20rushing%20to%20government%20facility%2C%20trained%20African%20security%20officers%20with%20communication%20equipment%20responding%20to%20emergency%20alert%2C%20rapid%20response%20security%20personnel%20arriving%20at%20critical%20infrastructure%20location%2C%20professional%20security%20guards%20in%20action%20protecting%20Nigerian%20government%20property%20with%20vehicles%20and%20emergency%20equipment%2C%20tactical%20security%20team%20deployment%20in%20Abuja&width=400&height=300&seq=gov-response-step&orientation=landscape'
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
                    <div className="w-8 h-8 bg-gray-900 border-2 border-blue-500 rounded-full flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-blue-600/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <i className={`${item.icon} text-xl text-white`}></i>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Real Success Stories Section ---------- */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              REAL SUCCESS STORIES
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven results from government security and smart city implementations across Nigeria's major urban centers.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {successStories.map((story, index) => (
              <div key={index} className="bg-black/50 border border-gray-700 rounded-xl overflow-hidden group hover:border-blue-500/50 transition-all">
                <div className="relative">
                  <img 
                    src={story.image} 
                    alt={story.city}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    SUCCESS
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{story.city}</h3>
                  <p className="text-blue-400 text-sm mb-4">{story.location}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-red-400 font-semibold text-sm mb-1">Challenge:</div>
                      <div className="text-gray-300 text-sm">{story.challenge}</div>
                    </div>
                    
                    <div>
                      <div className="text-blue-400 font-semibold text-sm mb-1">Solution:</div>
                      <div className="text-gray-300 text-sm">{story.solution}</div>
                    </div>
                    
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                      <div className="text-green-400 font-semibold text-sm mb-1">Results:</div>
                      <div className="text-white font-bold text-sm">{story.results}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics Bar */}
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">12</div>
                <div className="text-gray-300 text-sm">Cities Protected</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">₦48.5B</div>
                <div className="text-gray-300 text-sm">Economic Impact</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">2.8M</div>
                <div className="text-gray-300 text-sm">Citizens Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">99.2%</div>
                <div className="text-gray-300 text-sm">System Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government & Smart City Capabilities */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              COMPREHENSIVE CAPABILITIES
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete government security and urban intelligence that transforms how cities operate and protects critical infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cityFeatures.map((feature, index) => (
              <div key={index} className="bg-black/50 border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all group">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                  <i className={`${feature.icon} text-3xl text-blue-400`}></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-blue-400 font-semibold text-sm">{feature.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Packages */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              GOVERNMENT & SMART CITY PACKAGES
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modular solutions designed to meet the unique needs of Nigerian government facilities and urban centers.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div 
                key={solution.id}
                className={`relative bg-gray-900/50 border rounded-xl p-8 transition-all hover:scale-105 cursor-pointer ${
                  solution.popular 
                    ? 'border-blue-500 ring-2 ring-blue-500/20' 
                    : 'border-gray-700 hover:border-gray-600'
                }`}
                onClick={() => setSelectedSolution(solution.id)}
              >
                {solution.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      MOST COMPREHENSIVE
                    </div>
                  </div>
                )}

                <div className="flex items-start space-x-6 mb-8">
                  <div className={`w-16 h-16 bg-${solution.color}-500/20 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <i className={`${solution.icon} text-3xl text-${solution.color}-400`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{solution.name}</h3>
                    <p className="text-gray-400 mb-4">{solution.description}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-${solution.color}-500/20`}>
                        <i className={`ri-check-line text-${solution.color}-400 text-sm`}></i>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap ${
                    solution.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-white text-black hover:bg-gray-200'
                  }`}
                >
                  GET QUOTE
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">
              All solutions include installation, training, ongoing support, and regular system updates
            </p>
            <button 
              onClick={handleLiveChat}
              className="text-blue-400 hover:text-blue-300 font-semibold cursor-pointer"
            >
              Speak with our government & smart city specialists for custom solutions
            </button>
          </div>
        </div>
      </section>

      {/* Implementation Success Stories */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              SUCCESSFUL IMPLEMENTATIONS
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from government security and smart city deployments across Nigeria's major urban centers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {implementedCities.map((city, index) => (
              <div key={index} className="bg-black/50 border border-gray-700 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">{city.name}</h3>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    city.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {city.status}
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{city.location}</p>
                
                <div className="mb-4">
                  <div className="text-gray-300 text-sm mb-2">Implemented Features:</div>
                  <div className="flex flex-wrap gap-2">
                    {city.features.map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-gray-300 text-sm mb-1">Results:</div>
                  <div className="text-white font-semibold">{city.results}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-900/20 border border-blue-500/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">READY TO TRANSFORM YOUR CITY?</h3>
            <p className="text-gray-300 mb-6">
              Join the growing network of secure smart cities across Nigeria. Our team will work with your municipal government 
              to design and implement a custom government security and smart city solution.
            </p>
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all cursor-pointer whitespace-nowrap"
            >
              SCHEDULE ASSESSMENT
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-black to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            BUILD THE FUTURE OF SECURE SMART CITIES
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your urban center into a secure, smart, efficient, and sustainable city that serves citizens better 
            while protecting critical infrastructure and reducing operational costs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-white text-black hover:bg-gray-200 px-12 py-4 rounded-lg font-bold text-xl transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              GET QUOTE
            </button>
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-12 py-4 rounded-lg font-bold text-xl transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              SCHEDULE DEMO
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
                <a href="https://www.instagram.com/cover.alarm/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="ri-instagram-line text-2xl"></i>
                </a>
                <a href="https://www.linkedin.com/company/cover-alarm-systems-ltd/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="ri-linkedin-line text-2xl"></i>
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
                <li><Link to="/cover-alarm-monitoring" className="text-gray-400 hover:text-white cursor-pointer">Alarm Monitoring</Link></li>
                <li><Link to="/government-solutions" className="text-blue-400 cursor-pointer">Government & Smart City</Link></li>
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
              Web Design
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
