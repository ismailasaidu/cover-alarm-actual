

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function VehicleAICCTV() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('features');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadBrochure = () => {
    const link = document.createElement('a');
    link.href = 'https://www.canva.com/design/DAG1AE9k-tQ/N9tt6XKyXX9T8MKN6ZFN4w/view?utm_content=DAG1AE9k-tQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha9e5a4fd5e';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const features = [
    {
      icon: 'ri-car-line',
      title: 'In-Vehicle AI Cameras',
      description: 'Advanced dashboard and cabin cameras with AI processing for real-time driver and passenger monitoring.'
    },
    {
      icon: 'ri-user-search-line',
      title: 'Driver Behavior Analysis',
      description: 'Monitor driver alertness, drowsiness, distraction, and dangerous driving behaviors in real-time.'
    },
    {
      icon: 'ri-road-map-line',
      title: 'Route Monitoring',
      description: 'Track vehicle routes, unauthorized stops, and deviations from planned journeys with GPS integration.'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Live Fleet Dashboard',
      description: 'Monitor your entire fleet in real-time with live video feeds, alerts, and comprehensive analytics.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Theft Prevention',
      description: 'Instant alerts for unauthorized vehicle access, break-ins, or theft attempts with video evidence.'
    },
    {
      icon: 'ri-cloud-line',
      title: 'Cloud Storage',
      description: 'Secure cloud storage of all video footage with easy access and advanced search capabilities.'
    }
  ];

  const benefits = [
    { icon: 'ri-shield-line', text: 'Reduce vehicle theft and unauthorized usage by 95%' },
    { icon: 'ri-money-dollar-circle-line', text: 'Lower insurance premiums by up to 30%' },
    { icon: 'ri-user-line', text: 'Improve driver safety and behavior compliance' },
    { icon: 'ri-file-text-line', text: 'Comprehensive evidence for insurance claims' },
    { icon: 'ri-global-line', text: 'Monitor your fleet from anywhere in Nigeria' },
    { icon: 'ri-settings-line', text: 'Customizable alerts and monitoring zones' }
  ];

  const specifications = [
    { label: 'Camera Resolution', value: '1080P Full HD' },
    { label: 'Night Vision', value: 'Infrared up to 10m' },
    { label: 'Storage Capacity', value: '128GB + Cloud' },
    { label: 'Power Source', value: '12V/24V Vehicle Power' },
    { label: 'Operating Temperature', value: '-20°C to +70°C' },
    { label: 'Connectivity', value: '4G LTE + WiFi' },
    { label: 'Installation Time', value: '2-4 hours' },
    { label: 'Warranty', value: '3 years comprehensive' }
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
              <div className="ml-6 flex items-baseline space-x-6">
                <Link
                  to="/"
                  className="text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium"
                >
                  About Us
                </Link>
                <div className="relative group">
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors cursor-pointer flex items-center text-sm font-medium"
                  >
                    Products &amp; Services
                    <i className="ri-arrow-down-s-line ml-1"></i>
                  </a>
                  <div className="absolute top-full left-0 mt-1 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      <Link
                        to="/ai-video-monitoring"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                      >
                        AI Video Monitoring
                      </Link>
                      <Link
                        to="/gps-fleet-tracking"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                      >
                        GPS Fleet Tracking
                      </Link>
                      <Link
                        to="/fire-detection"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                      >
                        Fire Detection
                      </Link>
                      <Link
                        to="/fuel-monitoring"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                      >
                        Fuel Monitoring
                      </Link>
                      <Link
                        to="/government-solutions"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                      >
                        Armed Response
                      </Link>
                    </div>
                  </div>
                </div>
                <Link
                  to="/bnpl"
                  className="text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium"
                >
                  Buy Now Pay Later
                </Link>
                <a
                  href="/#testimonials"
                  className="text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium"
                >
                  Success Stories
                </a>
                <a
                  href="/#support"
                  className="text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium"
                >
                  Support Center
                </a>
              </div>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex space-x-3">
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer font-semibold text-sm">
                🚨 Emergency
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer font-semibold text-sm">
                Get Free Quote
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

      {/* Small Logo (additional placement) */}
      <Link to="/">
        <div className="bg-white rounded-lg p-2 inline-block">
          <img 
            src="https://static.readdy.ai/image/f38dbee0b97d493b71475a98132a7b29/c567d8d1fd4702e852424c0299bd0094.png" 
            alt="CoverAlarm Systems" 
            className="h-6 w-auto cursor-pointer"
          />
        </div>
      </Link>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900/40 to-indigo-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-purple-400">
                    <i className="ri-car-line text-2xl"></i>
                    <span className="text-sm font-semibold uppercase tracking-wide">Vehicle AI CCTV Camera</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Smart Vehicle <span className="text-purple-400">Surveillance</span> System
                  </h1>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Protect your fleet with AI-powered vehicle cameras. Monitor driver behavior, prevent theft, track routes, and ensure passenger safety with intelligent in-vehicle surveillance technology.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all hover:scale-105 whitespace-nowrap">
                    🚗 Secure My Fleet
                  </button>
                  <button 
                    onClick={() => setIsVideoModalOpen(true)}
                    className="border-2 border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg text-lg font-bold transition-all hover:scale-105 whitespace-nowrap"
                  >
                    📹 Watch Demo
                  </button>
                </div>

                <div className="flex items-center space-x-8 text-sm">
                  <div className="flex items-center space-x-2">
                    <i className="ri-shield-check-line text-green-400"></i>
                    <span>95% Theft Reduction</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-time-line text-blue-400"></i>
                    <span>Real-time Monitoring</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-award-line text-yellow-400"></i>
                    <span>Insurance Approved</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=AI-powered%20vehicle%20CCTV%20camera%20system%20installed%20in%20Nigerian%20commercial%20vehicle%20dashboard%2C%20modern%20car%20interior%20with%20smart%20surveillance%20camera%2C%20vehicle%20security%20monitoring%20technology%2C%20purple%20digital%20indicators%2C%20professional%20installation&width=600&height=400&seq=vehicle-ai-hero&orientation=landscape"
                  alt="Vehicle AI CCTV System"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-purple-400 font-bold text-lg">🚗 VEHICLE MONITORING ACTIVE</div>
                    <div className="text-sm text-gray-300">Driver behavior analysis • Route tracking • Real-time alerts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">How Vehicle AI CCTV Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced in-vehicle surveillance with AI-powered monitoring and real-time fleet management
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Camera Installation',
                description: 'Professional installation of AI cameras in dashboard, cabin, and exterior positions',
                icon: 'ri-tools-line'
              },
              {
                step: '02',
                title: 'AI Monitoring',
                description: 'Real-time analysis of driver behavior, passenger activity, and vehicle surroundings',
                icon: 'ri-brain-line'
              },
              {
                step: '03',
                title: 'Alert System',
                description: 'Instant notifications for dangerous driving, unauthorized access, or security incidents',
                icon: 'ri-notification-3-line'
              },
              {
                step: '04',
                title: 'Fleet Management',
                description: 'Comprehensive dashboard for monitoring entire fleet with live feeds and analytics',
                icon: 'ri-dashboard-line'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${item.icon} text-2xl text-white`}></i>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 border-2 border-purple-500 rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Complete Vehicle Security Solution</h2>
            <div className="flex justify-center mb-8">
              <div className="bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('features')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === 'features' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Features
                </button>
                <button
                  onClick={() => setActiveTab('benefits')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === 'benefits' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Benefits
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === 'specs' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Specifications
                </button>
              </div>
            </div>
          </div>

          {activeTab === 'features' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition-colors">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <i className={`${feature.icon} text-xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          )}

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
                <h3 className="text-2xl font-bold mb-6 text-center">Fleet Protection ROI</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Vehicle Theft Insurance Claims</span>
                    <span className="font-bold">₦2.5M/incident</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Vehicle AI CCTV System (per vehicle)</span>
                    <span className="font-bold text-purple-400">₦180,000</span>
                  </div>
                  <div className="border-t border-gray-600 pt-4">
                    <div className="flex justify-between text-xl">
                      <span className="text-green-400 font-bold">Protection Value</span>
                      <span className="text-green-400 font-bold">₦2.32M</span>
                    </div>
                    <div className="text-center mt-4 text-sm text-gray-400">
                      One prevented theft pays for the entire system
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specifications.map((spec, index) => (
                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center">
                  <div className="text-sm text-gray-400 mb-2">{spec.label}</div>
                  <div className="text-lg font-bold text-purple-400">{spec.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Perfect for Every Vehicle Type</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security solutions for different vehicle categories and use cases
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'ri-truck-line',
                title: 'Commercial Trucks',
                description: 'Protect cargo, monitor driver fatigue, prevent hijacking',
                color: 'blue'
              },
              {
                icon: 'ri-bus-line',
                title: 'Public Transport',
                description: 'Passenger safety, route compliance, driver behavior',
                color: 'green'
              },
              {
                icon: 'ri-car-line',
                title: 'Private Vehicles',
                description: 'Family safety, theft prevention, driver monitoring',
                color: 'purple'
              },
              {
                icon: 'ri-taxi-line',
                title: 'Taxi & Ride-share',
                description: 'Passenger security, driver protection, incident evidence',
                color: 'orange'
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-gray-900/60 border border-gray-700 rounded-xl p-6 text-center hover:border-purple-500 transition-colors">
                <div className={`w-16 h-16 bg-${useCase.color}-600 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${useCase.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-gray-400">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/40 to-indigo-900/40">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Secure Your Fleet with <span className="text-purple-400">AI Technology</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of Nigerian fleet owners who trust our Vehicle AI CCTV systems
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="text-center">
                <i className="ri-download-line text-3xl text-purple-400 mb-3"></i>
                <h3 className="text-xl font-bold mb-3">Vehicle Security Brochure</h3>
                <p className="text-gray-400 mb-4">Complete guide to vehicle AI CCTV systems and fleet protection</p>
                <button 
                  onClick={handleDownloadBrochure}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 whitespace-nowrap w-full"
                >
                  📄 Download Brochure
                </button>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="text-center">
                <i className="ri-play-circle-line text-3xl text-indigo-400 mb-3"></i>
                <h3 className="text-xl font-bold mb-3">Live Installation Demo</h3>
                <p className="text-gray-400 mb-4">Watch our professional installation process and system features</p>
                <button 
                  onClick={() => setIsVideoModalOpen(true)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 whitespace-nowrap w-full"
                >
                  🎥 Watch Demo
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all hover:scale-105 whitespace-nowrap">
              🚗 Secure My Fleet Now
            </button>
            <button className="border-2 border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg text-lg font-bold transition-all hover:scale-105 whitespace-nowrap">
              📞 Schedule Installation
            </button>
          </div>

          <div className="text-center mt-6 text-sm text-gray-400">
            ⚡ Professional installation • 🚀 Same-day setup available • 💰 Fleet discounts available
          </div>
        </div>
      </section>

      {/* Video Demo Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-purple-500 rounded-2xl max-w-4xl w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-purple-400">🎥 Vehicle AI CCTV Demo</h2>
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
                  title="Vehicle AI CCTV Demo"
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">See Vehicle AI CCTV in Action</h3>
                <p className="text-gray-300 mb-6">
                  Watch real installation process, AI driver monitoring, and fleet management dashboard
                </p>
                <button
                  onClick={() => {
                    setIsVideoModalOpen(false);
                  }}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold"
                >
                  Install This System in My Vehicles
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

