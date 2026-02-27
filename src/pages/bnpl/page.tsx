
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QuoteModal from '../../components/QuoteModal';
import LiveChatModal from '../../components/LiveChatModal';

export default function BNPL() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isLiveChatModalOpen, setIsLiveChatModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Add Schema.org JSON-LD for BNPL page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Buy Now Pay Later Security Solutions",
      "description": "Affordable security technology solutions with flexible payment plans. Get protected now and pay later with CoverAlarm Systems BNPL options.",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/bnpl`,
      "provider": {
        "@type": "Organization",
        "name": "CoverAlarm Systems"
      },
      "offers": {
        "@type": "Offer",
        "priceRange": "₦45,000 - ₦500,000",
        "availability": "https://schema.org/InStock",
        "paymentAccepted": "Installment Payment"
      }
    });
    document.head.appendChild(script);

    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  const packages = [
    {
      title: "4 Camera CCTV Package",
      price: "₦85,000",
      monthly: "₦14,167/month",
      image: "https://readdy.ai/api/search-image?query=Professional%204-camera%20CCTV%20security%20system%20installed%20on%20Nigerian%20home%2C%20modern%20surveillance%20cameras%20on%20building%20exterior%2C%20security%20monitoring%20setup%2C%20clean%20installation%20with%20cables%2C%20realistic%20home%20security%20system%2C%20professional%20installation%20quality&width=300&height=200&seq=4cam-cctv&orientation=landscape",
      features: ["4 HD Security Cameras", "24/7 Recording", "Mobile App Access", "Professional Installation", "1-Year Warranty"]
    },
    {
      title: "8 Camera CCTV Package",
      price: "₦150,000",
      monthly: "₦25,000/month",
      image: "https://readdy.ai/api/search-image?query=Comprehensive%208-camera%20CCTV%20surveillance%20system%20on%20Nigerian%20commercial%20building%2C%20multiple%20security%20cameras%20covering%20all%20angles%2C%20professional%20security%20installation%2C%20modern%20surveillance%20technology%2C%20complete%20coverage%20setup&width=300&height=200&seq=8cam-cctv&orientation=landscape",
      features: ["8 HD Security Cameras", "Central Monitoring Station", "Cloud Storage", "Night Vision", "Motion Detection"]
    },
    {
      title: "Home Automation Package",
      price: "₦200,000",
      monthly: "₦33,333/month",
      image: "https://readdy.ai/api/search-image?query=Modern%20Nigerian%20home%20with%20smart%20automation%20system%2C%20automated%20lighting%20and%20security%20controls%2C%20smart%20home%20technology%20integration%2C%20family%20using%20home%20automation%20app%2C%20sophisticated%20home%20technology%20setup&width=300&height=200&seq=home-automation&orientation=landscape",
      features: ["Smart Lighting Control", "Automated Security", "Climate Control", "Mobile App", "Voice Commands"]
    },
    {
      title: "Smart Door Lock",
      price: "₦45,000",
      monthly: "₦7,500/month",
      image: "https://readdy.ai/api/search-image?query=High-tech%20smart%20door%20lock%20system%20on%20Nigerian%20home%20entrance%2C%20biometric%20fingerprint%20access%2C%20digital%20keypad%20lock%2C%20modern%20security%20door%20hardware%2C%20sleek%20smart%20lock%20design%2C%20professional%20installation&width=300&height=200&seq=smart-door-lock&orientation=landscape",
      features: ["Biometric Access", "Keypad Entry", "Mobile Control", "Access Logs", "Emergency Override"]
    },
    {
      title: "Smart Sound System",
      price: "₦120,000",
      monthly: "₦20,000/month",
      image: "https://readdy.ai/api/search-image?query=Premium%20smart%20sound%20system%20integrated%20in%20Nigerian%20modern%20home%2C%20wireless%20speakers%20throughout%20house%2C%20family%20enjoying%20smart%20audio%20system%2C%20high-quality%20sound%20equipment%2C%20sophisticated%20audio%20setup&width=300&height=200&seq=smart-sound&orientation=landscape",
      features: ["Wireless Speakers", "Multi-Room Audio", "Voice Control", "Streaming Integration", "Smart Home Sync"]
    },
    {
      title: "Intercom Systems Package",
      price: "₦95,000",
      monthly: "₦15,833/month",
      image: "https://readdy.ai/api/search-image?query=Modern%20intercom%20communication%20system%20at%20Nigerian%20building%20entrance%2C%20video%20intercom%20with%20clear%20display%2C%20professional%20intercom%20installation%2C%20building%20security%20communication%2C%20visitor%20access%20control%20system&width=300&height=200&seq=intercom-system&orientation=landscape",
      features: ["Video Communication", "Remote Access", "Visitor Management", "Audio/Video Recording", "Mobile Integration"]
    },
    {
      title: "GPS Car Tracker",
      price: "₦65,000",
      monthly: "₦10,833/month",
      image: "https://readdy.ai/api/search-image?query=Nigerian%20car%20with%20GPS%20tracking%20system%2C%20real-time%20vehicle%20location%20monitoring%2C%20GPS%20tracker%20device%20in%20vehicle%2C%20fleet%20tracking%20dashboard%20showing%20car%20locations%2C%20professional%20vehicle%20tracking%20setup&width=300&height=200&seq=gps-tracker&orientation=landscape",
      features: ["Real-time Tracking", "Geofencing Alerts", "Speed Monitoring", "Theft Protection", "Mobile App"]
    },
    {
      title: "Starlink Satellite Internet",
      price: "₦350,000",
      monthly: "₦58,333/month",
      image: "https://readdy.ai/api/search-image?query=Starlink%20satellite%20internet%20dish%20installed%20on%20Nigerian%20home%20roof%2C%20high-speed%20satellite%20internet%20connection%2C%20modern%20satellite%20dish%20installation%2C%20family%20using%20fast%20internet%2C%20professional%20satellite%20setup&width=1920&height=1080&seq=starlink-internet&orientation=landscape",
      features: ["High-Speed Internet", "Satellite Connection", "Global Coverage", "Low Latency", "Weather Resistant"]
    },
    {
      title: "Fibre-to-Home Internet",
      price: "₦180,000",
      monthly: "₦30,000/month",
      image: "https://readdy.ai/api/search-image?query=Fiber%20optic%20internet%20cable%20installation%20to%20Nigerian%20home%2C%20high-speed%20fiber%20internet%20connection%2C%20professional%20fiber%20optic%20cable%20setup%2C%20modern%20internet%20infrastructure%2C%20fast%20internet%20installation&width=300&height=200&seq=fiber-internet&orientation=landscape",
      features: ["Ultra-Fast Speed", "Fiber Optic Cable", "Reliable Connection", "Professional Installation", "24/7 Support"]
    },
    {
      title: "Electric Fence",
      price: "₦250,000",
      monthly: "₦41,667/month",
      image: "https://readdy.ai/api/search-image?query=Professional%20electric%20fence%20security%20system%20around%20Nigerian%20property%20perimeter%2C%20electric%20fence%20installation%20with%20warning%20signs%2C%20secure%20property%20boundary%20protection%2C%20modern%20electric%20fencing%20system%2C%20professional%20perimeter%20security&width=300&height=200&seq=electric-fence&orientation=landscape",
      features: ["Perimeter Security", "High Voltage Protection", "Alarm Integration", "Professional Installation", "Warning Systems"]
    },
    {
      title: "Fire Alarm",
      price: "₦110,000",
      monthly: "₦18,333/month",
      image: "https://readdy.ai/api/search-image?query=Advanced%20fire%20alarm%20detection%20system%20in%20Nigerian%20building%2C%20smoke%20detectors%20and%20fire%20alarms%20installed%20on%20ceiling%2C%20fire%20safety%20equipment%2C%20professional%20fire%20alarm%20installation%2C%20building%20fire%20protection%20system&width=300&height=200&seq=fire-alarm&orientation=landscape",
      features: ["Smoke Detection", "Heat Sensors", "Automatic Alerts", "Central Monitoring", "Emergency Response"]
    },
    {
      title: "Access Control",
      price: "₦130,000",
      monthly: "₦21,667/month",
      image: "https://readdy.ai/api/search-image?query=Modern%20access%20control%20system%20at%20Nigerian%20office%20building%20entrance%2C%20keycard%20access%20reader%2C%20biometric%20access%20control%2C%20professional%20security%20access%20installation%2C%20employee%20using%20access%20control%20system&width=300&height=200&seq=access-control&orientation=landscape",
      features: ["Keycard Access", "Biometric Scanner", "Time Management", "Access Logs", "Remote Control"]
    },
    {
      title: "Security Grant Package",
      price: "₦500,000",
      monthly: "₦83,333/month",
      image: "https://readdy.ai/api/search-image?query=Comprehensive%20security%20system%20installation%20for%20Nigerian%20business%2C%20complete%20security%20package%20with%20multiple%20technologies%2C%20professional%20security%20team%20installing%20equipment%2C%20enterprise-level%20security%20setup%2C%20government%20security%20grant%20program&width=300&height=200&seq=security-grant&orientation=landscape",
      features: ["Complete Security Suite", "Government Partnership", "Subsidized Pricing", "Priority Installation", "Extended Warranty"],
      special: true
    }
  ];

  const testimonials = [
    {
      name: "Adeola Adebayo",
      role: "Business Owner, Lagos",
      content: "BNPL made it possible for me to secure my shop immediately. I'm paying ₦15,000 monthly and my business is completely protected.",
      rating: 5,
      savings: "Saved ₦50,000 upfront"
    },
    {
      name: "Chief Emeka Okonkwo",
      role: "Fleet Manager",
      content: "Our 20 vehicles are now tracked with GPS. The monthly payments fit our cash flow perfectly. No more fuel theft!",
      rating: 5,
      savings: "Prevented ₦200,000 in losses"
    },
    {
      name: "Mrs. Fatima Ibrahim",
      role: "Homeowner, Abuja",
      content: "Got our 8-camera system installed same day. Paying ₙ25,000 monthly is much easier than ₦150,000 upfront.",
      rating: 5,
      savings: "Immediate protection"
    }
  ];

  const faqs = [
    {
      question: "How long are the payment plans?",
      answer: "Our standard BNPL plans are 6 months with 0% interest. For larger packages, we offer 12-month plans with minimal interest rates."
    },
    {
      question: "What services qualify for BNPL?",
      answer: "All our security solutions qualify including CCTV systems, GPS tracking, fire alarms, smart locks, and complete security packages."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No hidden fees! You pay exactly what's quoted in equal monthly installments. No processing fees, no setup charges."
    },
    {
      question: "What happens if I miss a payment?",
      answer: "We offer flexible payment rescheduling. Contact our support team and we'll work out a payment plan that fits your situation."
    },
    {
      question: "Can I pay off early?",
      answer: "Yes! You can pay off your balance early with no penalties. Early payment may even qualify for additional discounts."
    },
    {
      question: "Is installation immediate?",
      answer: "Yes! Once approved, we schedule installation within 24-48 hours. You get protected immediately while paying over time."
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="bg-black/50 backdrop-blur-sm border-b border-blue-500/20 sticky top-0 z-50">
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
              <div className="ml-10 flex items-baseline space-x-6">
                <Link to="/" className="text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium">Home</Link>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium">About Us</Link>
                <div className="relative group">
                  <a href="/#services" className="text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors cursor-pointer flex items-center text-sm font-medium">
                    Products &amp; Services
                    <i className="ri-arrow-down-s-line ml-1"></i>
                  </a>
                  <div className="absolute top-full left-0 mt-1 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      <a href="/#services" className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800">AI Video Monitoring</a>
                      <a href="/#services" className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800">GPS Fleet Tracking</a>
                      <a href="/#services" className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800">Fire Detection</a>
                      <a href="/#services" className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800">Fuel Monitoring</a>
                      <a href="/#services" className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800">Armed Response</a>
                    </div>
                  </div>
                </div>
                <Link to="/bnpl" className="text-blue-400 px-3 py-2 border-b-2 border-blue-400 text-sm font-medium">Buy Now Pay Later</Link>
                <a href="/#testimonials" className="text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium">Success Stories</a>
                <a href="/#support" className="text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium">Support Center</a>
              </div>
            </div>
            
            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex space-x-3">
              <button 
                onClick={() => setIsLiveChatModalOpen(true)}
                className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer font-semibold text-sm"
              >
                💬 Chat with Us
              </button>
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer font-semibold text-sm"
              >
                Request Plan
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
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-blue-400 px-3 py-3 text-base font-medium hover:bg-gray-800 transition-colors cursor-pointer">Home</Link>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-blue-400 px-3 py-3 text-base font-medium hover:bg-gray-800 transition-colors cursor-pointer">About Us</Link>
                
                {/* Mobile Services Submenu */}
                <div className="space-y-1">
                  <div className="text-gray-300 px-3 py-2 text-base font-medium border-b border-gray-700">Products &amp; Services</div>
                  <a href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-400 hover:text-blue-400 px-6 py-2 text-sm hover:bg-gray-800 transition-colors cursor-pointer">AI Video Monitoring</a>
                  <a href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-400 hover:text-blue-400 px-6 py-2 text-sm hover:bg-gray-800 transition-colors cursor-pointer">GPS Fleet Tracking</a>
                  <a href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-400 hover:text-blue-400 px-6 py-2 text-sm hover:bg-gray-800 transition-colors cursor-pointer">Fire Detection</a>
                  <a href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-400 hover:text-blue-400 px-6 py-2 text-sm hover:bg-gray-800 transition-colors cursor-pointer">Fuel Monitoring</a>
                  <a href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-400 hover:text-blue-400 px-6 py-2 text-sm hover:bg-gray-800 transition-colors cursor-pointer">Armed Response</a>
                </div>
                
                <Link to="/bnpl" onClick={() => setIsMobileMenuOpen(false)} className="block text-blue-400 px-3 py-3 text-base font-medium border-l-4 border-blue-400 bg-blue-900/20">Buy Now Pay Later</Link>
                <a href="/#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-blue-400 px-3 py-3 text-base font-medium hover:bg-gray-800 transition-colors cursor-pointer">Success Stories</a>
                <a href="/#support" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-blue-400 px-3 py-3 text-base font-medium hover:bg-gray-800 transition-colors cursor-pointer">Support Center</a>
                
                {/* Mobile Action Buttons */}
                <div className="pt-4 space-y-3 border-t border-gray-700">
                  <button 
                    onClick={() => {setIsLiveChatModalOpen(true); setIsMobileMenuOpen(false);}}
                    className="w-full border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-4 py-3 rounded-lg transition-colors whitespace-nowrap cursor-pointer text-center font-semibold"
                  >
                    💬 Chat with Us
                  </button>
                  <button 
                    onClick={() => {setIsQuoteModalOpen(true); setIsMobileMenuOpen(false);}}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors whitespace-nowrap cursor-pointer text-center font-semibold"
                  >
                    Request Plan
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Cinematic%20Nigerian%20family%20in%20modern%20secured%20home%20with%20CCTV%20cameras%20visible%2C%20multiple%20security%20screens%20showing%20surveillance%20feeds%2C%20happy%20African%20family%20feeling%20safe%20and%20protected%2C%20high-tech%20home%20security%20system%2C%20warm%20family%20atmosphere%20with%20advanced%20security%20technology%2C%20professional%20security%20installation%20background&width=1920&height=1080&seq=bnpl-hero&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-blue-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className={`text-center space-y-6 sm:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-6 sm:mb-8 opacity-80">
              <div className="flex items-center space-x-2 text-green-400">
                <i className="ri-shield-check-line text-lg sm:text-xl"></i>
                <span className="text-xs sm:text-sm font-medium">0% Interest</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <i className="ri-time-line text-lg sm:text-xl"></i>
                <span className="text-xs sm:text-sm font-medium">Instant Install</span>
              </div>
              <div className="flex items-center space-x-2 text-yellow-400">
                <i className="ri-hand-heart-line text-lg sm:text-xl"></i>
                <span className="text-xs sm:text-sm font-medium">No Hidden Fees</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight px-2">
              Get <span className="text-blue-400">Protected</span> Now
              <br />
              <span className="text-green-400">Pay Later</span>
            </h1>
            <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-3 sm:mb-4 px-2">
              CoverAlarm makes security affordable with flexible installments
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              No delays, no excuses. Get enterprise‑grade security today and spread payments over 6 months.
              <br className="hidden sm:block" />
              <span className="text-blue-400 font-semibold">Zero interest. Zero hidden fees. Zero waiting.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6 px-4">
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-lg text-lg sm:text-xl font-bold transition-all hover:scale-105 whitespace-nowrap cursor-pointer shadow-lg shadow-red-600/30"
              >
                🛡️ Start Your Plan Today
              </button>
              <button 
                onClick={() => setIsLiveChatModalOpen(true)}
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white px-8 sm:px-12 py-4 sm:py-5 rounded-lg text-lg sm:text-xl font-bold transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                💬 Chat About Us Options
              </button>
            </div>
            
            <div className="text-center pt-3 sm:pt-4 px-4">
              <div className="text-sm text-gray-400 mb-2">Join 500+ customers paying flexibly</div>
              <div className="text-xs text-gray-500">Instant approval • Same‑day installation</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              How <span className="text-blue-400">Buy Now Pay Later</span> Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Three simple steps to get protected immediately
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <i className="ri-shopping-cart-line text-2xl sm:text-3xl text-white"></i>
              </div>
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-full px-4 sm:px-6 py-1 sm:py-2 text-blue-400 font-bold text-xs sm:text-sm mb-3 sm:mb-4 inline-block">
                STEP 1
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white px-2">Choose Your Package</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base px-4">
                Select from our comprehensive security solutions. From basic CCTV to complete smart home automation.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-gradient-to-br from-green-600 to-green-800 rounded-full mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <i className="ri-tools-line text-2xl sm:text-3xl text-white"></i>
              </div>
              <div className="bg-green-900/20 border border-green-500/30 rounded-full px-4 sm:px-6 py-1 sm:py-2 text-green-400 font-bold text-xs sm:text-sm mb-3 sm:mb-4 inline-block">
                STEP 2
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white px-2">We Install Immediately</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base px-4">
                Our expert team installs your system within 24‑48 hours. You’re protected while we handle the paperwork.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-gradient-to-br from-purple-600 to-purple-800 rounded-full mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <i className="ri-calendar-check-line text-2xl sm:text-3xl text-white"></i>
              </div>
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-full px-4 sm:px-6 py-1 sm:py-2 text-purple-400 font-bold text-xs sm:text-sm mb-3 sm:mb-4 inline-block">
                STEP 3
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white px-2">Pay in Flexible Installments</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base px-4">
                Spread payments over 6 months with 0% interest. Easy monthly payments that fit your budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BNPL Offerings */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Our <span className="text-blue-400">Buy Now Pay Later</span> Offerings
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Every security solution available with flexible payment plans
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`group bg-gray-900/80 border rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer relative ${pkg.special ? 'border-yellow-500 ring-2 ring-yellow-500/50' : 'border-gray-700 hover:border-blue-500'}`}>
                {pkg.special && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-yellow-600 text-black px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                      🎯 SPECIAL OFFER
                    </span>
                  </div>
                )}
                
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                    {pkg.monthly}
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{pkg.title}</h3>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="text-xl sm:text-2xl font-bold text-blue-400">{pkg.price}</div>
                    <div className="text-xs sm:text-sm text-gray-400">6 months</div>
                  </div>
                  
                  <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-xs sm:text-sm">
                        <i className="ri-checkbox-circle-line text-green-400 mr-2 flex-shrink-0"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => setIsQuoteModalOpen(true)}
                    className={`w-full py-2 sm:py-3 rounded-lg font-bold transition-all whitespace-nowrap cursor-pointer text-sm sm:text-base ${pkg.special ? 'bg-yellow-600 hover:bg-yellow-700 text-black' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                  >
                    Request Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CoverAlarm BNPL */}
      <section className="py-16 sm:py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Why Choose <span className="text-blue-400">CoverAlarm Buy Now Pay Later</span>?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              More than just flexible payments - it's peace of mind made affordable
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="text-center bg-gray-900/60 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-green-400 transition-all">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-green-600 rounded-full mx-auto mb-3 sm:mb-4">
                <i className="ri-time-line text-lg sm:text-2xl text-white"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-green-400">Instant Installation</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Get protected today, not tomorrow. Installation within 24‑48 hours guaranteed.</p>
            </div>

            <div className="text-center bg-gray-900/60 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-blue-400 transition-all">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-blue-600 rounded-full mx-auto mb-3 sm:mb-4">
                <i className="ri-hand-heart-line text-lg sm:text-2xl text-white"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-blue-400">Zero Hidden Fees</h3>
              <p className="text-gray-300 text-xs sm:text-sm">What you see is what you pay. No processing fees, no setup charges, no surprises.</p>
            </div>

            <div className="text-center bg-gray-900/60 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-purple-400 transition-all">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-purple-600 rounded-full mx-auto mb-3 sm:mb-4">
                <i className="ri-calendar-line text-lg sm:text-2xl text-white"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-purple-400">Pay at Your Pace</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Flexible 6‑month plans with 0% interest. Pay early with no penalties.</p>
            </div>

            <div className="text-center bg-gray-900/60 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-red-400 transition-all">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-red-600 rounded-full mx-auto mb-3 sm:mb-4">
                <i className="ri-shield-check-line text-lg sm:text-2xl text-white"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-red-400">Trusted Experts</h3>
              <p className="text-gray-300 text-xs sm:text-sm">500+ protected properties. 99.9% customer satisfaction. Nigeria's #1 security tech.</p>
            </div>
          </div>

          {/* Customer Testimonials */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900/60 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-blue-400 transition-all">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="flex space-x-1 text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-sm"></i>
                    ))}
                  </div>
                  <span className="ml-2 text-green-400 text-xs sm:text-sm font-semibold">{testimonial.savings}</span>
                </div>
                <blockquote className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 italic">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                  <div className="text-blue-400 text-xs">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Frequently Asked <span className="text-blue-400">Questions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 px-4">
              Everything you need to know about our BNPL plans
            </p>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900/60 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-400 transition-all">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center cursor-pointer"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <i className={`ri-arrow-${openFaq === index ? 'up' : 'down'}-s-line text-blue-400 text-lg sm:text-xl transition-transform flex-shrink-0`}></i>
                </button>
                {openFaq === index && (
                  <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-red-900/40 to-blue-900/40">
        <div className="max-w-4xl mx-auto text-center px-4 sm:6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Your Safety <span className="text-red-400">Can't Wait</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-4">
            Get protected today with flexible payments. Secure your home, business, or fleet now.
          </p>
          <div className="bg-green-900/20 border border-green-500 rounded-lg p-3 sm:p-4 mb-6 sm:mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center text-green-400">
              <i className="ri-checkbox-circle-line mr-2"></i>
              <span className="font-semibold text-sm sm:text-base">Instant Approval • Same‑Day Installation • 0% Interest</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6 px-4">
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-bold transition-all hover:scale-105 whitespace-nowrap cursor-pointer shadow-lg shadow-red-600/30"
            >
              🛡️ Request a BNPL Plan
            </button>
            <button 
              onClick={() => setIsLiveChatModalOpen(true)}
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-bold transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              💬 Talk to Our Team
            </button>
          </div>
          <div className="text-center mt-4 sm:mt-6 text-xs sm:text-sm text-gray-400 px-4">
            ⚡ 24/7 Support Available • 🚀 Installation within 48 hours • 🛡️ Lifetime warranty
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-3 sm:space-y-4">
              <Link to="/">
                <img 
                  src="https://static.readdy.ai/image/f38dbee0b97d493b71475a98132a7b29/c567d8d1fd4702e852424c0299bd0094.png" 
                  alt="CoverAlarm Systems" 
                  className="h-6 w-auto cursor-pointer"
                />
              </Link>
              <p className="text-gray-400 text-sm">
                Making enterprise‑grade security affordable for everyone through flexible payment plans.
              </p>
              <div className="flex space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-600 transition-colors cursor-pointer">
                  <i className="ri-facebook-fill text-white text-sm"></i>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-600 transition-colors cursor-pointer">
                  <i className="ri-twitter-fill text-white text-sm"></i>
                </div>
                <a 
                  href="https://www.linkedin.com/company/cover-alarm-systems-ltd/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-600 transition-colors cursor-pointer"
                >
                  <i className="ri-linkedin-fill text-white text-sm"></i>
                </a>
                <a 
                  href="https://www.instagram.com/cover.alarm/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-600 transition-colors cursor-pointer"
                >
                  <i className="ri-instagram-fill text-white text-sm"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Buy Now Pay Later Plans</h4>
              <div className="space-y-1 sm:space-y-2 text-gray-400 text-sm">
                <div className="hover:text-blue-400 cursor-pointer">Home Security Packages</div>
                <div className="hover:text-blue-400 cursor-pointer">Business Solutions</div>
                <div className="hover:text-blue-400 cursor-pointer">Smart Home Automation</div>
                <div className="hover:text-blue-400 cursor-pointer">Fleet Tracking</div>
                <div className="hover:text-blue-400 cursor-pointer">Payment Calculator</div>
              </div>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Quick Actions</h4>
              <div className="space-y-1 sm:space-y-2 text-gray-400 text-sm">
                <div className="hover:text-blue-400 cursor-pointer" onClick={() => setIsQuoteModalOpen(true)}>Request Buy Now Pay Later Quote</div>
                <div className="hover:text-blue-400 cursor-pointer" onClick={() => setIsLiveChatModalOpen(true)}>Chat About Us Plans</div>
                <div className="hover:text-blue-400 cursor-pointer">Check Eligibility</div>
                <div className="hover:text-blue-400 cursor-pointer">Schedule Assessment</div>
                <div className="hover:text-blue-400 cursor-pointer">Customer Stories</div>
              </div>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Support</h4>
              <div className="space-y-1 sm:space-y-2 text-gray-400 text-sm">
                <div className="hover:text-blue-400 cursor-pointer">Payment Support</div>
                <div className="hover:text-blue-400 cursor-pointer">Installation Help</div>
                <div className="hover:text-blue-400 cursor-pointer">Technical Support</div>
                <div className="hover:text-blue-400 cursor-pointer">Terms & Conditions</div>
                <a href="https://readdy.ai/?origin=logo" className="block hover:text-blue-400 cursor-pointer">Made with Readdy</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 CoverAlarm Systems LTD. All rights reserved. Buy Now Pay Later services subject to approval.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Chat Button */}
      <button
        onClick={() => setIsLiveChatModalOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:scale-110 transition-all cursor-pointer z-40 flex items-center justify-center"
      >
        <i className="ri-chat-3-line text-xl"></i>
      </button>

      {/* Modals */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <LiveChatModal isOpen={isLiveChatModalOpen} onClose={() => setIsLiveChatModalOpen(false)} />
    </div>
  );
}
