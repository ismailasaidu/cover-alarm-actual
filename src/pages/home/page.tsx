import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmergencyModal from '../../components/EmergencyModal';
import QuoteModal from '../../components/QuoteModal';
import LiveChatModal from '../../components/LiveChatModal';
import ServiceModal from '../../components/ServiceModal';
import BookingModal from '../../components/BookingModal';
import PartnershipModal from '../../components/PartnershipModal';
import ContactModal from '../../components/ContactModal';

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isLiveChatModalOpen, setIsLiveChatModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isCommandCenterOpen, setIsCommandCenterOpen] = useState(false);
  const [isPartnershipModalOpen, setIsPartnershipModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [crimeCounter, setCrimeCounter] = useState(847);

  const handleServiceClick = (servicePath: string) => {
    window.REACT_APP_NAVIGATE(servicePath);
  };

  const handleQuoteRequest = () => {
    setIsQuoteModalOpen(true);
  };

  const handleBookMeeting = () => {
    window.open('https://wa.link/i04lde', '_blank');
  };

  const handleEmergencyAlert = () => {
    setIsEmergencyModalOpen(true);
  };

  const handleCommandCenter = () => {
    setIsCommandCenterOpen(true);
  };

  const handleLiveChat = () => {
    // Trigger Readdy Agent widget
    const widget = document.querySelector('#vapi-widget-floating-button') as HTMLElement;
    if (widget) {
      widget.click();
    } else {
      setIsLiveChatModalOpen(true);
    }
  };

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    // Update time and crime counter
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
      setCrimeCounter(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(timeInterval);
    };
  }, []);

  const testimonials = [
    {
      name: "Charlie Wilson",
      role: "LE & ME Maintenance Superintendent, MonuRent (Nigeria) Limited",
      content: "Came to site and advised security locations and weak spots around our areas. Very detailed broke down quotation. Kept to the agreement on quotation, work carried out onsite was to high standards. Basic training on using the system was started before the lockdown was introduced. Would highly recommend your services for anybody wanting security system advice and installations, we thank you and your team for everything you have done with us at Monurent on the BUA OBU Project.",
      initials: "CW"
    },
    {
      name: "Adelana Olamilekan",
      role: "MD/CEO – ZENITH CAREX INTERNATIONAL LTD",
      content: "We recommend Cover Alarms Security Solutions LTD as a reliable and efficient CCTV services provider. Good doing business with you guys…",
      initials: "AO"
    },
    {
      name: "Peter Adejoh",
      role: "CEO, Prime Luxury Ltd",
      content: "Cover Alarm's services are very satisfactory. Their prompt response and quick delivery is an attraction for me.",
      initials: "PA"
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
              <div className="ml-6 flex items-baseline space-x-6">
                <Link
                  to="/"
                  className="text-red-400 px-3 py-2 border-b-2 border-red-400 text-sm font-medium"
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
                  href="#testimonials"
                  className="text-gray-300 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium"
                >
                  Victory Stories
                </a>
                <a
                  href="#case-studies"
                  className="text-gray-300 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium"
                >
                  Case Studies
                </a>
                <a
                  href="#support"
                  className="text-gray-300 hover:text-red-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium"
                >
                  Command Center
                </a>
              </div>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex space-x-2 xl:space-x-3">
              <button onClick={() => setIsPartnershipModalOpen(true)} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-3 xl:px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer font-semibold text-sm">
                🤝 BECOME A PARTNER
              </button>
              <button onClick={() => setIsQuoteModalOpen(true)} className="bg-white text-black hover:bg-gray-200 px-3 xl:px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer font-semibold text-sm">
                Deploy Protection
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
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-red-400 px-3 py-3 text-base font-medium border-l-4 border-red-400 bg-red-900/20">
                  Home
                </Link>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-red-400 px-3 py-3 text-base font-medium hover:bg-gray-800">
                  About Us
                </Link>

                {/* Mobile Services Menu */}
                <div className="px-3 py-2">
                  <div className="text-gray-300 font-medium mb-2">Security Arsenal</div>
                  <div className="pl-4 space-y-1">
                    <Link
                      to="/ai-video-analytics"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-400 hover:text-red-400 py-2 text-sm"
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
                  href="#testimonials"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-red-400 px-3 py-3 text-base font-medium hover:bg-gray-800"
                >
                  Victory Stories
                </a>

                <a
                  href="#case-studies"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-gray-300 hover:text-red-400 transition-colors cursor-pointer"
                >
                  Case Studies
                </a>

                <a
                  href="#support"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-red-400 px-3 py-3 text-base font-medium hover:bg-gray-800"
                >
                  Command Center
                </a>

                <Link to="/bnpl" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-red-400 px-3 py-3 text-base font-medium hover:bg-gray-800">
                  Flexible Payment
                </Link>
                <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-red-400 px-3 py-3 text-base font-medium hover:bg-gray-800">
                  Blog
                </Link>
                <button onClick={() => { handleCommandCenter(); setIsMobileMenuOpen(false); }} className="block w-full text-left text-gray-300 hover:text-red-400 px-3 py-3 text-base font-medium hover:bg-gray-800">
                  Command Center
                </button>

                <div className="pt-4 space-y-3 border-t border-gray-700">
                  <button onClick={() => { setIsPartnershipModalOpen(true); setIsMobileMenuOpen(false); }} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-lg">
                    🤝 BECOME A PARTNER
                  </button>
                  <button onClick={() => { setIsQuoteModalOpen(true); setIsMobileMenuOpen(false); }} className="w-full bg-white text-black hover:bg-gray-200 px-4 py-3 rounded-lg">
                    Deploy Protection
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
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
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 lg:py-16">
          {/* Centered Main Content */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                  <div className="text-white">NIGERIA'S #1</div>
                  <div className="text-red-500">ALARM MONITORING</div>
                  <div className="text-red-500">CENTRE</div>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 max-w-3xl mx-auto px-4">
                  Professional 24/7 Alarm Monitoring with AI-Powered Detection & Rapid Armed Response
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
                >
                  🛡️ START PROTECTION
                </button>
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
                >
                  📞 BOOK CONSULTATION
                </button>
              </div>

            </div>
          </div>

          {/* Analytics Dashboard and Monitoring Center Image Below */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4">
            {/* Command Center Status Card */}
            <div className="bg-gray-900/90 border border-gray-700 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div>
                  <div className="text-red-400 font-bold text-sm sm:text-base lg:text-lg mb-1">COVERALARM COMMAND CENTER</div>
                  <div className="text-green-400 text-xs sm:text-sm font-semibold">OPERATIONAL</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs sm:text-sm font-semibold">LIVE</span>
                </div>
              </div>

              {/* Live Stats Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="bg-black/50 border border-green-500/30 rounded-lg p-3 sm:p-4">
                  <div className="text-green-400 text-xs sm:text-sm font-mono">Sites Monitored:</div>
                  <div className="text-white text-lg sm:text-xl lg:text-2xl font-bold">847</div>
                  <div className="text-gray-400 text-xs">Active</div>
                </div>
                <div className="bg-black/50 border border-blue-500/30 rounded-lg p-3 sm:p-4">
                  <div className="text-blue-400 text-xs sm:text-sm font-mono">Response Teams:</div>
                  <div className="text-white text-lg sm:text-xl lg:text-2xl font-bold">33</div>
                  <div className="text-gray-400 text-xs">Ready</div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                <div className="text-red-400 text-xs mb-1">Avg Response Time:</div>
                <div className="text-white text-xl sm:text-2xl lg:text-3xl font-black">0.3 seconds</div>
                <div className="text-gray-400 text-xs">Detection to Alert</div>
              </div>

              {/* System Status */}
              <div className="border-t border-gray-700 pt-3 sm:pt-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <div className="text-gray-400 text-xs sm:text-sm">{new Date().toLocaleTimeString()}</div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-checkbox-circle-fill text-green-400 text-sm"></i>
                    <span className="text-green-400 text-xs sm:text-sm font-semibold">All Systems Operational</span>
                  </div>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Professional monitoring protecting Nigeria's assets
                </p>
              </div>
            </div>

            {/* Monitoring Center Image */}
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://static.readdy.ai/image/f38dbee0b97d493b71475a98132a7b29/f1cd2eb0838a4f13d75effd8e02b4460.png"
                alt="CoverAlarm Monitoring Center"
                className="w-full h-64 sm:h-80 lg:h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 totransparent"></div>

              {/* Overlay Badge */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                <div className="flex items-center space-x-2 sm:space-x-3 bg-black/70 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 sm:py-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-shield-check-line text-white text-base sm:text-xl"></i>
                  </div>
                  <div>
                    <div className="text-white font-bold text-xs sm:text-sm">State-of-the-Art Facility</div>
                    <div className="text-gray-300 text-xs">24/7 Professional Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Our Alarm Monitoring Works */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              HOW OUR <span className="text-red-400">ALARM MONITORING</span> WORKS
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Professional monitoring center with armed response teams across Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                step: '01',
                title: 'Threat Detected',
                description: 'AI cameras and sensors detect suspicious activity and trigger instant alerts',
                icon: 'ri-camera-line',
                image: 'https://readdy.ai/api/search-image?query=Professional%20Nigerian%20security%20monitoring%20center%20with%20operator%20detecting%20threat%20on%20multiple%20surveillance%20screens%2C%20AI-powered%20CCTV%20system%20showing%20red%20alert%20indicators%20and%20motion%20detection%20overlays%2C%20advanced%20threat%20detection%20technology%20in%20Lagos%20Nigeria%20command%20center%20with%20real-time%20monitoring%20displays&width=400&height=300&seq=threat-detection-story&orientation=landscape'
              },
              {
                step: '02',
                title: 'Instant Verification',
                description: 'Our monitoring center verifies the threat through live video feeds within seconds',
                icon: 'ri-eye-line',
                image: 'https://readdy.ai/api/search-image?query=Nigerian%20security%20operator%20in%20professional%20monitoring%20center%20verifying%20security%20threat%20on%20multiple%20high-definition%20screens%2C%20headset-wearing%20African%20security%20specialist%20examining%20live%20CCTV%20footage%20with%20urgent%20focus%2C%20state-of-the-art%20security%20command%20center%20in%20Nigeria%20with%20instant%20verification%20protocols&width=400&height=300&seq=threat-verification-story&orientation=landscape'
              },
              {
                step: '03',
                title: 'Response Dispatched',
                description: 'Armed response team deployed to your location while police are contacted',
                icon: 'ri-shield-user-line',
                image: 'https://readdy.ai/api/search-image?query=Professional%20armed%20security%20response%20team%20in%20Nigeria%20rushing%20to%20emergency%20with%20tactical%20gear%20and%20communication%20equipment%2C%20African%20security%20officers%20in%20action%20responding%20to%20urgent%20threat%20alert%20with%20vehicles%20and%20emergency%20lights%2C%20rapid%20deployment%20security%20team%20protecting%20Nigerian%20businesses&width=400&height=300&seq=response-dispatch-story&orientation=landscape'
              },
              {
                step: '04',
                title: 'Threat Neutralized',
                description: 'Our team secures your premises and coordinates with authorities for complete protection',
                icon: 'ri-shield-check-line',
                image: 'https://readdy.ai/api/search-image?query=Successful%20security%20operation%20in%20Nigeria%20with%20professional%20security%20team%20having%20secured%20commercial%20property%20after%20neutralizing%20threat%2C%20satisfied%20Nigerian%20business%20owner%20shaking%20hands%20with%20security%20officers%2C%20successful%20threat%20neutralization%20with%20protected%20facility%20in%20background&width=400&height=300&seq=threat-neutralized-story&orientation=landscape'
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 sm:h-48 lg:h-56 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 totransparent"></div>

                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {item.step}
                    </div>
                  </div>

                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-red-600/90 rounded-xl sm:rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      <i className={`${item.icon} text-base sm:text-lg lg:text-xl text-white`}></i>
                    </div>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Protection, Real Results Section */}
      <section className="py-16 sm:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-green-600/20 border border-green-500 rounded-full px-4 py-2 text-green-400 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-bold">REAL SUCCESS STORIES</span>
            </div>
            <h2 className="text-3xl sm: text-4xl md:text-5xl font-bold text-white mb-4">
              REAL PROTECTION, <span className="text-green-400">REAL RESULTS</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              See how our alarm monitoring system has prevented crimes and protected Nigerian businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Success Story 1 */}
            <div className="relative rounded-xl overflow-hidden group cursor-pointer">
              <img
                src="https://readdy.ai/api/search-image?query=Nigerian%20warehouse%20manager%20celebrating%20successful%20crime%20prevention%20attempt%20with%20security%20team%2C%20relieved%20African%20business%20owner%20showing%20gratitude%20to%20professional%20security%20officers%2C%20successful%20warehouse%20protection%20story%20in%20Lagos%20Nigeria%20with%20visible%20security%20equipment%20and%20celebration%20of%20zero%20security%20incidents&width=400&height=320&seq=warehouse-protection-celebration&orientation=landscape"
                alt="Protected Business Success"
                className="w-full h-80 object-cover object-top group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 totransparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-green-400 font-bold mb-2">ZERO INCIDENTS</div>
                <p className="text-white text-sm">847 sites protected with AI monitoring</p>
              </div>
            </div>

            {/* Success Story 2 */}
            <div className="relative rounded-xl overflow-hidden group cursor-pointer">
              <img
                src="https://readdy.ai/api/search-image?query=Nigerian%20logistics%20company%20manager%20celebrating%20successful%20vehicle%20recovery%20with%20GPS%20tracking%20technology%2C%20happy%20African%20fleet%20manager%20showing%20recovered%20trucks%20in%20background%2C%20professional%20GPS%20tracking%20devices%20and%20monitoring%20dashboard%2C%20successful%20vehicle%20theft%20prevention%20in%20Nigerian%20logistics%20industry&width=400&height=320&seq=fleet-recovery-celebration&orientation=landscape"
                alt="Fleet Tracking Success"
                className="w-full h-80 object-cover object-top group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 totransparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-blue-400 font-bold mb-2">100% RECOVERY</div>
                <p className="text-white text-sm">1,203 vehicles tracked and protected</p>
              </div>
            </div>

            {/* Success Story 3 */}
            <div className="relative rounded-xl overflow-hidden group cursor-pointer">
              <img
                src="https://readdy.ai/api/search-image?query=Nigerian%20fire%20safety%20team%20celebrating%20successful%20fire%20prevention%20with%20advanced%20detection%20system%2C%20grateful%20African%20facility%20manager%20with%20firefighters%20after%20fire%20detection%20system%20prevented%20major%20disaster%2C%20modern%20smoke%20detectors%20and%20fire%20safety%20equipment%20in%20Nigerian%20industrial%20facility%2C%20lives%20saved%20through%20early%20fire%20detection%20technology&width=400&height=320&seq=fire-prevention-celebration&orientation=landscape"
                alt="Fire Prevention Success"
                className="w-full h-80 object-cover object-top group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 totransparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-yellow-400 font-bold mb-2">LIVES SAVED</div>
                <p className="text-white text-sm">99.8% fire detection accuracy</p>
              </div>
            </div>
          </div>

          {/* Core Services - Featured */}
          <div className="mb-12 sm:mb-16">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center bg-red-600/20 border border-red-500 rounded-full px-3 sm:px-4 py-2 text-red-400 mb-4">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-xs sm:text-sm font-bold">CORE SERVICES</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {/* AI CCTV Analytics */}
              <div
                onClick={() => handleServiceClick('/ai-video-analytics')}
                className="bg-black/50 border-2 border-red-500/50 rounded-xl overflow-hidden hover:border-red-500 transition-all group cursor-pointer relative"
              >
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-red-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold z-10">
                  CORE SERVICE
                </div>
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=Advanced%20AI%20CCTV%20analytics%20control%20room%20in%20Nigeria%20with%20multiple%20screens%20showing%20facial%20recognition%2C%20behavior%20analysis%2C%20and%20threat%20detection%20overlays%2C%20professional%20African%20security%20operators%20monitoring%20intelligent%20surveillance%20systems%20with%20real-time%20criminal%20behavior%20prediction%20technology%2C%20state-of-the-art%20monitoring%20center%20with%20AI-powered%20threat%20analysis&width=600&height=400&seq=ai-cctv-analytics-story&orientation=landscape"
                    alt="AI CCTV Analytics"
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 totransparent"></div>
                </div>

                <div className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">AI CCTV ANALYTICS</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                    Advanced behavior analysis that predicts criminal intent before it happens. Machine learning that gets smarter with every threat.
                  </p>
                  <div className="text-red-400 hover:text-red-300 font-semibold flex items-center cursor-pointer text-sm sm:text-base">
                    Analyze Behavior <i className="ri-arrow-right-line ml-2"></i>
                  </div>
                </div>
              </div>

              {/* AI Video Alarm Monitoring */}
              <div
                onClick={() => handleServiceClick('/ai-video-monitoring')}
                className="bg-black/50 border-2 border-red-500/50 rounded-xl overflow-hidden hover:border-red-500 transition-all group cursor-pointer relative"
              >
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-red-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold z-10">
                  CORE SERVICE
                </div>
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=Nigerian%20warehouse%20facility%20protected%20by%20AI%20video%20alarm%20monitoring%20system%20during%20night%20operation%2C%20intelligent%20surveillance%20cameras%20with%20motion%20detection%20and%20real-time%20threat%20analysis%2C%20professional%20security%20monitoring%20center%20with%20instant%20alert%20capabilities%20and%20armed%20response%20coordination%20for%20business%20protection&width=600&height=400&seq=ai-video-monitoring-story&orientation=landscape"
                    alt="AI Video Alarm Monitoring"
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 totransparent"></div>
                </div>

                <div className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">AI VIDEO ALARM MONITORING</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                    Intelligent cameras that don't just record - they analyze, predict, and prevent. Real-time threat detection with instant alerts.
                  </p>
                  <div className="text-red-400 hover:text-red-300 font-semibold flex items-center cursor-pointer text-sm sm:text-base">
                    Deploy System <i className="ri-arrow-right-line ml-2"></i>
                  </div>
                </div>
              </div>

              {/* Home Alarm Monitoring */}
              <div
                onClick={() => handleServiceClick('/cover-alarm-monitoring')}
                className="bg-black/50 border-2 border-red-500/50 rounded-xl overflow-hidden hover:border-red-500 transition-all group cursor-pointer relative"
              >
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-red-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold z-10">
                  CORE SERVICE
                </div>
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20home%20alarm%20monitoring%20service%20protecting%20Nigerian%20family%20residence%20with%20modern%20security%20system%2C%20armed%20response%20team%20ready%20for%20deployment%2C%20residential%20property%20with%20comprehensive%20alarm%20coverage%20and%2024%2F7%20monitoring%20center%20coordination%20for%20immediate%20family%20protection%20and%20safety&width=600&height=400&seq=home-alarm-monitoring-story&orientation=landscape"
                    alt="Home Alarm Monitoring"
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 totransparent"></div>
                </div>

                <div className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">HOME ALARM MONITORING/RAPID RESPONSE</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                    24/7 professional monitoring of residential properties with immediate armed response teams. When seconds count, we're already on the way.
                  </p>
                  <div className="text-red-400 hover:text-red-300 font-semibold flex items-center cursor-pointer text-sm sm:text-base">
                    Activate Response <i className="ri-arrow-right-line ml-2"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Security Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Fleet Management Solution (Merged GPS + Fuel) */}
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 cursor-pointer">
              <div className="relative mb-4 sm:mb-6">
                <img
                  src="https://readdy.ai/api/search-image?query=Nigerian%20fleet%20manager%20celebrating%20successful%20GPS%20tracking%20and%20fuel%20monitoring%20implementation%2C%20professional%20logistics%20team%20with%20trucks%20showing%20100%25%20vehicle%20recovery%20and%20fuel%20theft%20prevention%20success%2C%20modern%20fleet%20management%20celebration%20with%20GPS%20technology%20and%20fuel%20sensors%20in%20Lagos%20Nigeria&width=400&height=250&seq=fleet-management-success-celebration&orientation=landscape"
                  alt="Fleet Management Success"
                  className="w-full h-40 sm:h-48 object-cover object-top rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 totransparent rounded-xl"></div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-blue-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                  100% Recovery
                </div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <div className="text-white font-bold text-base sm:text-lg">Fleet Protected</div>
                  <div className="text-blue-400 text-xs sm:text-sm">GPS + Fuel Monitoring</div>
                </div>
              </div>

              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-blue-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform">
                  <i className="ri-truck-line text-lg sm:text-xl lg:text-2xl text-blue-400"></i>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    Fleet Management Solutions
                  </h3>
                  <p className="text-blue-400 text-xs sm:text-sm font-medium">GPS Tracking + Fuel Monitoring</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                Complete fleet protection with real-time GPS tracking and advanced fuel monitoring. Prevent theft, optimize routes, and save millions in fuel costs.
              </p>

              <div className="space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                  <i className="ri-check-line text-blue-400 mr-2"></i>
                  <span>Real-time GPS tracking with 99.8% recovery rate</span>
                </div>
                <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                  <i className="ri-check-line text-blue-400 mr-2"></i>
                  <span>Advanced fuel monitoring prevents 25% theft</span>
                </div>
                <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                  <i className="ri-check-line text-blue-400 mr-2"></i>
                  <span>Route optimization saves 30% on fuel costs</span>
                </div>
              </div>

              <Link
                to="/fleet-management"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-sm group-hover:translate-x-2 transition-all"
              >
                Protect Your Fleet
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>

            {/* Fire Detection */}
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-red-400/50 transition-all duration-500 hover:scale-105 cursor-pointer">
              <div className="relative mb-4 sm:mb-6">
                <img
                  src="https://readdy.ai/api/search-image?query=Grateful%20Nigerian%20family%20and%20firefighters%20celebrating%20lives%20saved%20through%20early%20fire%20detection%20system%2C%20successful%20fire%20prevention%20celebration%20with%20fire%20alarm%20technology%2C%20professional%20fire%20safety%20team%20with%20rescued%20family%20showing%20fire%20detection%20success%20in%20Nigerian%20building&width=400&height=250&seq=fire-detection-lives-saved-celebration&orientation=landscape"
                  alt="Fire Detection Success"
                  className="w-full h-40 sm:h-48 object-cover object-top rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 totransparent rounded-xl"></div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                  Lives Saved
                </div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <div className="text-white font-bold text-base sm:text-lg">Early Detection</div>
                  <div className="text-red-400 text-xs sm:text-sm">Fire Prevention Success</div>
                </div>
              </div>

              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-red-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform">
                  <i className="ri-fire-line text-lg sm:text-xl lg:text-2xl text-red-400"></i>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg lg:font-xl font-bold text-white group-hover:text-red-400 transition-colors">
                    Fire Detection Systems
                  </h3>
                  <p className="text-red-400 text-xs sm:text-sm font-medium">Early Warning Protection</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                Advanced fire detection with instant alerts and emergency response coordination. Protect lives and property with early warning systems.
              </p>

              <div className="space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                  <i className="ri-check-line text-red-400 mr-2"></i>
                  <span>Smoke and heat detection in 15 seconds</span>
                </div>
                <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                  <i className="ri-check-line text-red-400 mr-2"></i>
                  <span>Automatic emergency services notification</span>
                </div>
                <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                  <i className="ri-check-line text-red-400 mr-2"></i>
                  <span>24/7 monitoring and rapid response</span>
                </div>
              </div>

              <Link
                to="/fire-detection"
                className="inline-flex items-center text-red-400 hover:text-red-300 font-semibold text-sm group-hover:translate-x-2 transition-all"
              >
                Protect Lives Now
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>

            {/* Government & Smart City Solutions (Merged) */}
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 cursor-pointer">
              <div className="relative mb-4 sm:mb-6">
                <img
                  src="https://readdy.ai/api/search-image?query=Nigerian%20government%20officials%20and%20smart%20city%20team%20celebrating%20zero%20security%20incidents%20and%20successful%20urban%20protection%2C%20professional%20government%20security%20celebration%20with%20smart%20city%20technology%2C%20modern%20urban%20surveillance%20success%20with%20government%20officials%20in%20Nigerian%20smart%20city%20context&width=400&height=250&seq=government-smart-city-success-celebration&orientation=landscape"
                  alt="Government Smart City Success"
                  className="w-full h-40 sm:h-48 object-cover object-top rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 totransparent rounded-xl"></div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-purple-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                  Zero Incidents
                </div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <div className="text-white font-bold text-base sm:text-lg">City Protected</div>
                  <div className="text-purple-400 text-xs sm:text-sm">Government + Smart City</div>
                </div>
              </div>

              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-purple-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform">
                  <i className="ri-government-line text-lg sm:text-xl lg:text-2xl text-purple-400"></i>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    Government & Smart City
                  </h3>
                  <p className="text-purple-400 text-xs sm:text-sm font-medium">Complete Urban Security</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                Comprehensive government security and smart city solutions. Protect critical infrastructure while creating safer, more efficient urban environments.
              </p>

              <div className="space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                  <i className="ri-check-line text-purple-400 mr-2"></i>
                  <span>Critical infrastructure protection</span>
                </div>
                <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                  <i className="ri-check-line text-purple-400 mr-2"></i>
                  <span>Smart traffic and city-wide surveillance</span>
                </div>
                <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                  <i className="ri-check-line text-purple-400 mr-2"></i>
                  <span>Environmental monitoring and emergency response</span>
                </div>
              </div>

              <Link
                to="/government-solutions"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold text-sm group-hover:translate-x-2 transition-all"
              >
                Secure Your City
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>

            {/* Alarm Monitoring */}
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-green-400/50 transition-all duration-500 hover:scale-105 cursor-pointer">
              <div className="relative mb-4 sm:mb-6">
                <img
                  src="https://readdy.ai/api/search-image?query=Nigerian%20family%20celebrating%20protection%20from%20break-in%20attempt%20with%20armed%20response%20team%2C%20successful%20alarm%20monitoring%20response%20with%20security%20guards%2C%20professional%20security%20team%20with%20grateful%20family%20showing%20alarm%20system%20success%20in%20Nigerian%20home%20protection&width=400&height=250&seq=alarm-monitoring-protection-celebration&orientation=landscape"
                  alt="Alarm Monitoring Success"
                  className="w-full h-40 sm:h-48 object-cover object-top rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 totransparent rounded-xl"></div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                  Lives Protected
                </div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <div className="text-white font-bold text-base sm:text-lg">Rapid Response</div>
                  <div className="text-green-400 text-xs sm:text-sm">Alarm Monitoring Success</div>
                </div>
              </div>

              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-green-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform">
                  <i className="ri-alarm-warning-line text-lg sm:text-xl lg:text-2xl text-green-400"></i>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                    Alarm Monitoring & Response
                  </h3>
                  <p className="text-green-400 text-xs sm:text-sm font-medium">24/7 Armed Response</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                Professional alarm monitoring with rapid armed response. Instant alerts and emergency dispatch for complete property protection.
              </p>

              <div className="space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                  <i className="ri-check-line text-green-400 mr-2"></i>
                  <span>24/7 professional monitoring center</span>
                </div>
                <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                  <i className="ri-check-line text-green-400 mr-2"></i>
                  <span>Armed response within 5 minutes</span>
                </div>
                <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                  <i className="ri-check-line text-green-400 mr-2"></i>
                  <span>Police and emergency coordination</span>
                </div>
              </div>

              <Link
                to="/cover-alarm-monitoring"
                className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold text-sm group-hover:translate-x-2 transition-all"
              >
                Get Armed Response
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          </div>

          {/* Case Studies Section */}
          <section id="case-studies" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Success Stories &amp; Case Studies
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Real-world implementations showcasing how our security solutions have protected businesses and saved lives across various industries.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Case Study 1 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-blue-600 to-purple-700 relative">
                    <img 
                      src="https://readdy.ai/api/search-image?query=modern%20manufacturing%20facility%20with%20advanced%20security%20cameras%20and%20monitoring%20systems%2C%20industrial%20setting%20with%20clean%20production%20lines%2C%20professional%20security%20infrastructure%2C%20high-tech%20surveillance%20equipment%2C%20bright%20industrial%20lighting%2C%20safety%20protocols%20visible&width=600&height=400&seq=case1&orientation=landscape"
                      alt="Manufacturing Security Implementation"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Manufacturing
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Global Manufacturing Plant Security Overhaul
                    </h3>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Challenge:</p>
                          <p className="text-gray-600">15,000 sq ft facility with multiple blind spots and outdated analog cameras</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Solution:</p>
                          <p className="text-gray-600">AI-powered video analytics with 24/7 monitoring and real-time threat detection</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Results:</p>
                          <p className="text-gray-600">87% reduction in security incidents, prevented $2.3M in potential theft</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">87%</div>
                        <div className="text-sm text-gray-600">Incident Reduction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">24/7</div>
                        <div className="text-sm text-gray-600">Monitoring</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">$2.3M</div>
                        <div className="text-sm text-gray-600">Theft Prevented</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Study 2 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-red-600 to-orange-700 relative">
                    <img 
                      src="https://readdy.ai/api/search-image?query=modern%20retail%20shopping%20center%20with%20advanced%20security%20systems%2C%20multiple%20store%20fronts%20with%20professional%20surveillance%20cameras%2C%20clean%20commercial%20environment%2C%20shoppers%20walking%20safely%2C%20bright%20retail%20lighting%2C%20security%20infrastructure%20visible&width=600&height=400&seq=case2&orientation=landscape"
                      alt="Retail Chain Security Solution"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Retail Chain
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Multi-Location Retail Chain Protection
                    </h3>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Challenge:</p>
                          <p className="text-gray-600">12 retail locations experiencing high shoplifting rates and employee theft</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Solution:</p>
                          <p className="text-gray-600">Integrated AI surveillance with facial recognition and behavior analysis</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Results:</p>
                          <p className="text-gray-600">73% decrease in theft, improved customer safety ratings by 92%</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">73%</div>
                        <div className="text-sm text-gray-600">Theft Reduction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">12</div>
                        <div className="text-sm text-gray-600">Locations</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">92%</div>
                        <div className="text-sm text-gray-600">Safety Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-building-line text-2xl text-purple-600"></i>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Corporate Campus</h4>
                  <p className="text-gray-600 mb-4">Fortune 500 company secured 50-acre campus with AI-powered perimeter detection</p>
                  <div className="text-sm text-green-600 font-semibold">95% threat detection accuracy</div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-hospital-line text-2xl text-blue-600"></i>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Healthcare Facility</h4>
                  <p className="text-gray-600 mb-4">Regional hospital implemented comprehensive security for patient and staff safety</p>
                  <div className="text-sm text-green-600 font-semibold">Zero security incidents in 18 months</div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-school-line text-2xl text-green-600"></i>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Educational Institution</h4>
                  <p className="text-gray-600 mb-4">University campus with 15,000 students enhanced safety with smart monitoring</p>
                  <div className="text-sm text-green-600 font-semibold">40% faster emergency response</div>
                </div>
              </div>

              <div className="text-center mt-12">
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Discuss Your Security Needs
                </button>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section id="testimonials" className="py-16 sm:py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                  CLIENT TESTIMONIALS
                </h2>
                <p className="text-lg sm:text-xl text-gray-300">
                  Real protection. Real results. Real peace of mind.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 sm:p-8 backdrop-blur-sm">
                <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8 xl:space-x-12">
                  <div className="lg:w-1/3">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl mx-auto bg-red-600 flex items-center justify-center border-4 border-red-500 shadow-lg">
                      <span className="text-white text-2xl sm:text-3xl font-bold">
                        {testimonials[currentTestimonial].initials}
                      </span>
                    </div>
                  </div>

                  <div className="lg:w-2/3 text-center lg:text-left">
                    <blockquote className="text-lg sm:text-xl text-gray-300 mb-4 sm:mb-6 italic">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>
                    <div>
                      <div className="text-white font-bold text-base sm:text-lg">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-red-400 text-sm sm:text-base">
                        {testimonials[currentTestimonial].role}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Navigation */}
                <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${index === currentTestimonial ? 'bg-red-500' : 'bg-gray-600'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 sm:py-20 bg-gradient-to-r from-red-900 via-black to-red-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                TAKE CONTROL OF YOUR SAFETY & SECURITY TODAY
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
                Every day you wait is another day criminals study your vulnerabilities.
                Join Nigeria's security revolution today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-white text-black hover:bg-gray-200 px-8 sm:px-12 py-3 sm:py-4 rounded-lg font-bold text-lg sm:text-xl transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer"
                >
                  GET PROTECTED NOW
                </button>
                <button
                  onClick={handleBookMeeting}
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 sm:px-12 py-3 sm:py-4 rounded-lg font-bold text-lg sm:text-xl transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer"
                >
                  BOOK STRATEGY SESSION
                </button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-black border-t border-gray-800 py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                <div>
                  <img
                    src="https://static.readdy.ai/image/f38dbee0b97d493b71475a98132a7b29/c567d8d1fd4702e852424c0299bd0094.png"
                    alt="CoverAlarm Systems"
                    className="h-6 w-auto cursor-pointer mb-4"
                  />
                  <p className="text-gray-400 text-sm mb-4">
                    Nigeria's most advanced security technology platform.
                  </p>
                  <div className="flex space-x-3 mt-4">
                    <div className="w-10 h-10 bg-gray-800 hover:bg-red-500 rounded-xl flex items-center justify-center transition-colors cursor-pointer">
                      <i className="ri-facebook-fill text-white text-sm"></i>
                    </div>
                    <div className="w-10 h-10 bg-gray-800 hover:bg-red-500 rounded-xl flex items-center justify-center transition-colors cursor-pointer">
                      <i className="ri-twitter-fill text-white text-sm"></i>
                    </div>
                    <a
                      href="https://www.linkedin.com/company/cover-alarm-systems-ltd/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 hover:bg-red-500 rounded-xl flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <i className="ri-linkedin-fill text-white text-sm"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/cover.alarm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 hover:bg-red-500 rounded-xl flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <i className="ri-instagram-fill text-white text-sm"></i>
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-sm sm:text-base text-gray-400">Security Solutions</h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li><Link to="/ai-video-monitoring" className="hover:text-white">AI Video Monitoring</Link></li>
                    <li><Link to="/ai-video-analytics" className="hover:text-white">AI CCTV Analytics</Link></li>
                    <li><Link to="/cover-alarm-monitoring" className="hover:text-white">Alarm Monitoring/Rapid Response</Link></li>
                    <li><Link to="/fire-detection" className="hover:text-white">Fire Detection</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-sm sm:text-base text-gray-400">Fleet Solutions</h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li><Link to="/gps-fleet-tracking" className="hover:text-white">GPS Tracking</Link></li>
                    <li><Link to="/fuel-monitoring" className="hover:text-white">Fuel Tracking</Link></li>
                    <li><Link to="/vehicle-ai-cctv" className="hover:text-white">Vehicle CCTV</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-sm sm:text-base text-gray-400">Contact</h4>
                  <div className="space-y-2 text-gray-400 text-sm">
                    <div>+2348145540554</div>
                    <div>info@coveralarm.com</div>
                    <div>Abuja, Nigeria</div>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-xs sm:text-sm">
                <p>&copy; 2025 CoverAlarm Systems LTD. All rights reserved. | <a href="https://readdy.ai/?origin=logo" className="hover:text-white">Website Builder</a></p>
              </div>
            </div>
          </footer>

          {/* Modals */}
          <EmergencyModal
            isOpen={isEmergencyModalOpen}
            onClose={() => setIsEmergencyModalOpen(false)}
          />
          <QuoteModal
            isOpen={isQuoteModalOpen}
            onClose={() => setIsQuoteModalOpen(false)}
          />
          <LiveChatModal
            isOpen={isLiveChatModalOpen}
            onClose={() => setIsLiveChatModalOpen(false)}
          />
          <ServiceModal
            isOpen={isServiceModalOpen}
            onClose={() => setIsServiceModalOpen(false)}
            service={selectedService}
          />
          <BookingModal
            isOpen={isBookingModalOpen}
            onClose={() => setIsBookingModalOpen(false)}
          />
          <ContactModal
            isOpen={isContactModalOpen}
            onClose={() => setIsContactModalOpen(false)}
          />
          <PartnershipModal
            isOpen={isPartnershipModalOpen}
            onClose={() => setIsPartnershipModalOpen(false)}
          />

          <style jsx>{`
            @keyframes marquee {
              0% {
                transform: translateX(100%);
              }
              100% {
                transform: translateX(-100%);
              }
            }
            .animate-marquee {
              animation: marquee 30s linear infinite;
            }
          `}</style>
        </div>
      </section>
    </div>
  );
}
