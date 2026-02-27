
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QuoteModal from '../../components/QuoteModal';

export default function PrivacyPolicy() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Add Schema.org JSON-LD for privacy policy page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy - CoverAlarm Systems",
      "description": "CoverAlarm Systems privacy policy outlining how we collect, use, and protect your personal information and security data.",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/privacy-policy`,
      "dateModified": "2024-12-15",
      "publisher": {
        "@type": "Organization",
        "name": "CoverAlarm Systems"
      }
    });
    document.head.appendChild(script);

    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="bg-black/50 backdrop-blur-sm border-b border-blue-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/">
                <div className="bg-white rounded-lg p-2">
                  <img
                    src="https://static.readdy.ai/image/f38dbee0b97d493b71475a98132a7b29/176a8e2651bf87ff1e704ec65a49fb51.png"
                    alt="CoverAlarm Systems"
                    className="h-6 w-auto sm:h-8 cursor-pointer"
                  />
                </div>
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
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium"
                >
                  Blog
                </Link>
                <Link
                  to="/careers"
                  className="text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors cursor-pointer text-sm font-medium"
                >
                  Careers
                </Link>
              </div>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex space-x-3">
              <a
                href="https://calendly.com/coveralarm/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-green-600 text-green-400 hover:bg-green-600 hover:text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer font-semibold text-sm"
              >
                📅 Book Demo
              </a>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer font-semibold text-sm"
              >
                Get Free Quote
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
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-blue-400 px-3 py-3 text-base font-medium hover:bg-gray-800"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-blue-400 px-3 py-3 text-base font-medium hover:bg-gray-800"
                >
                  About Us
                </Link>

                {/* Mobile Services Submenu */}
                <div className="space-y-1">
                  <div className="text-gray-300 px-3 py-2 text-base font-medium border-b border-gray-700">
                    Products &amp; Services
                  </div>
                  <Link
                    to="/ai-video-monitoring"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-400 hover:text-blue-400 px-6 py-2 text-sm hover:bg-gray-800"
                  >
                    AI Video Monitoring
                  </Link>
                  <Link
                    to="/gps-fleet-tracking"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-400 hover:text-blue-400 px-6 py-2 text-sm hover:bg-gray-800"
                  >
                    GPS Fleet Tracking
                  </Link>
                  <Link
                    to="/fire-detection"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-400 hover:text-blue-400 px-6 py-2 text-sm hover:bg-gray-800"
                  >
                    Fire Detection
                  </Link>
                  <Link
                    to="/fuel-monitoring"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-400 hover:text-blue-400 px-6 py-2 text-sm hover:bg-gray-800"
                  >
                    Fuel Monitoring
                  </Link>
                  <Link
                    to="/government-solutions"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-400 hover:text-blue-400 px-6 py-2 text-sm hover:bg-gray-800"
                  >
                    Armed Response
                  </Link>
                </div>

                <Link
                  to="/bnpl"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-blue-400 px-3 py-3 text-base font-medium hover:bg-gray-800"
                >
                  Buy Now Pay Later
                </Link>
                <Link
                  to="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-blue-400 px-3 py-3 text-base font-medium hover:bg-gray-800"
                >
                  Blog
                </Link>
                <Link
                  to="/careers"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-blue-400 px-3 py-3 text-base font-medium hover:bg-gray-800"
                >
                  Careers
                </Link>

                {/* Mobile Action Buttons */}
                <div className="pt-4 space-y-3 border-t border-gray-700">
                  <a
                    href="https://calendly.com/coveralarm/demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border border-green-600 text-green-400 hover:bg-green-600 hover:text-white px-4 py-3 rounded-lg text-center block"
                  >
                    📅 Book Demo
                  </a>
                  <button
                    onClick={() => {
                      setIsQuoteModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg"
                  >
                    Get Free Quote
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-gray-900 via-blue-900/20 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy <span className="text-blue-400">Policy</span>
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              Your privacy and data security are fundamental to our mission of protecting you.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: December 15, 2024
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            
            {/* Introduction */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                CoverAlarm Systems ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our security services, visit our website, or interact with our systems.
              </p>
              <div className="mt-4 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                <p className="text-blue-300 text-sm">
                  <strong>Important:</strong> As a security company, we handle sensitive data with the highest level of protection and comply with Nigerian data protection laws and international security standards.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-green-400">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white">Personal Information</h3>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-line text-green-400 mr-2 mt-1"></i>
                  Contact details (name, email, phone number, address)
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-line text-green-400 mr-2 mt-1"></i>
                  Business information (company name, industry, security requirements)
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-line text-green-400 mr-2 mt-1"></i>
                  Emergency contact information
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-line text-green-400 mr-2 mt-1"></i>
                  Payment and billing information
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-white">Security Data</h3>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-line text-green-400 mr-2 mt-1"></i>
                  Video surveillance footage and images
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-line text-green-400 mr-2 mt-1"></i>
                  GPS location data from tracked vehicles and assets
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-line text-green-400 mr-2 mt-1"></i>
                  Access control logs and entry records
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-line text-green-400 mr-2 mt-1"></i>
                  Alarm and sensor data
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-line text-green-400 mr-2 mt-1"></i>
                  Incident reports and security event logs
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-white">Technical Information</h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-line text-green-400 mr-2 mt-1"></i>
                  Device information and system configurations
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-line text-green-400 mr-2 mt-1"></i>
                  Network and connectivity data
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-line text-green-400 mr-2 mt-1"></i>
                  Usage patterns and system performance metrics
                </li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">How We Use Your Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Security Services</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <i className="ri-shield-check-line text-blue-400 mr-2 mt-1"></i>
                      Provide 24/7 monitoring and protection
                    </li>
                    <li className="flex items-start">
                      <i className="ri-shield-check-line text-blue-400 mr-2 mt-1"></i>
                      Detect and respond to security threats
                    </li>
                    <li className="flex items-start">
                      <i className="ri-shield-check-line text-blue-400 mr-2 mt-1"></i>
                      Generate security reports and analytics
                    </li>
                    <li className="flex items-start">
                      <i className="ri-shield-check-line text-blue-400 mr-2 mt-1"></i>
                      Coordinate emergency response
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Business Operations</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <i className="ri-building-line text-green-400 mr-2 mt-1"></i>
                      Process payments and manage accounts
                    </li>
                    <li className="flex items-start">
                      <i className="ri-building-line text-green-400 mr-2 mt-1"></i>
                      Provide customer support
                    </li>
                    <li className="flex items-start">
                      <i className="ri-building-line text-green-400 mr-2 mt-1"></i>
                      Improve our services and technology
                    </li>
                    <li className="flex items-start">
                      <i className="ri-building-line text-green-400 mr-2 mt-1"></i>
                      Comply with legal requirements
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Protection */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-red-400">Data Protection &amp; Security</h2>
              
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3 text-red-300">Enterprise-Grade Security</h3>
                <p className="text-gray-300">
                  We implement military-grade encryption, secure data centers, and strict access controls to protect your information with the same level of security we provide to government agencies.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Technical Safeguards</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <i className="ri-lock-line text-red-400 mr-2 mt-1"></i>
                      AES-256 encryption for all data
                    </li>
                    <li className="flex items-start">
                      <i className="ri-lock-line text-red-400 mr-2 mt-1"></i>
                      Secure cloud infrastructure
                    </li>
                    <li className="flex items-start">
                      <i className="ri-lock-line text-red-400 mr-2 mt-1"></i>
                      Regular security audits and penetration testing
                    </li>
                    <li className="flex items-start">
                      <i className="ri-lock-line text-red-400 mr-2 mt-1"></i>
                      Multi-factor authentication
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Operational Safeguards</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <i className="ri-user-settings-line text-blue-400 mr-2 mt-1"></i>
                      Background-checked personnel only
                    </li>
                    <li className="flex items-start">
                      <i className="ri-user-settings-line text-blue-400 mr-2 mt-1"></i>
                      Role-based access controls
                    </li>
                    <li className="flex items-start">
                      <i className="ri-user-settings-line text-blue-400 mr-2 mt-1"></i>
                      Comprehensive staff training
                    </li>
                    <li className="flex items-start">
                      <i className="ri-user-settings-line text-blue-400 mr-2 mt-1"></i>
                      Incident response procedures
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">Information Sharing &amp; Disclosure</h2>
              
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-6">
                <p className="text-yellow-300">
                  <strong>We do not sell, rent, or trade your personal information.</strong> We only share information in specific circumstances outlined below.
                </p>
              </div>

              <h3 className="text-lg font-semibold mb-3 text-white">When We May Share Information</h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start">
                  <i className="ri-police-car-line text-red-400 mr-2 mt-1"></i>
                  <div>
                    <strong>Emergency Response:</strong> With law enforcement, emergency services, or security personnel during active security incidents
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-scales-line text-blue-400 mr-2 mt-1"></i>
                  <div>
                    <strong>Legal Requirements:</strong> When required by Nigerian law, court orders, or government regulations
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-team-line text-green-400 mr-2 mt-1"></i>
                  <div>
                    <strong>Service Providers:</strong> With trusted partners who help us provide security services (under strict confidentiality agreements)
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-user-line text-purple-400 mr-2 mt-1"></i>
                  <div>
                    <strong>With Your Consent:</strong> When you explicitly authorize us to share specific information
                  </div>
                </li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Your Privacy Rights</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Access &amp; Control</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <i className="ri-eye-line text-blue-400 mr-2 mt-1"></i>
                      View your personal information
                    </li>
                    <li className="flex items-start">
                      <i className="ri-edit-line text-green-400 mr-2 mt-1"></i>
                      Update or correct your data
                    </li>
                    <li className="flex items-start">
                      <i className="ri-download-line text-purple-400 mr-2 mt-1"></i>
                      Request a copy of your data
                    </li>
                    <li className="flex items-start">
                      <i className="ri-delete-bin-line text-red-400 mr-2 mt-1"></i>
                      Request data deletion (where legally permitted)
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Communication Preferences</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <i className="ri-mail-line text-blue-400 mr-2 mt-1"></i>
                      Opt out of marketing communications
                    </li>
                    <li className="flex items-start">
                      <i className="ri-notification-line text-green-400 mr-2 mt-1"></i>
                      Manage alert preferences
                    </li>
                    <li className="flex items-start">
                      <i className="ri-settings-line text-purple-400 mr-2 mt-1"></i>
                      Control data processing preferences
                    </li>
                    <li className="flex items-start">
                      <i className="ri-question-line text-yellow-400 mr-2 mt-1"></i>
                      File privacy complaints
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                <p className="text-blue-300 text-sm">
                  <strong>Note:</strong> Some data retention may be required for security, legal, or operational purposes. We'll explain any limitations when you make a request.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-green-400">Data Retention</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-camera-line text-blue-400 mr-3 mt-1"></i>
                  <div>
                    <strong className="text-white">Video Surveillance:</strong>
                    <span className="text-gray-300"> Stored for 30-90 days unless involved in an incident (extended as needed for investigations)</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="ri-map-pin-line text-green-400 mr-3 mt-1"></i>
                  <div>
                    <strong className="text-white">GPS Tracking Data:</strong>
                    <span className="text-gray-300"> Retained for 12 months for operational and analytical purposes</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="ri-file-text-line text-purple-400 mr-3 mt-1"></i>
                  <div>
                    <strong className="text-white">Incident Reports:</strong>
                    <span className="text-gray-300"> Kept for 7 years for legal and insurance purposes</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="ri-user-line text-yellow-400 mr-3 mt-1"></i>
                  <div>
                    <strong className="text-white">Personal Information:</strong>
                    <span className="text-gray-300"> Retained while you're a customer and for 3 years after service termination</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Contact Us About Us Privacy</h2>
              
              <p className="text-gray-300 mb-6">
                If you have questions about this Privacy Policy or want to exercise your privacy rights, contact our Data Protection Officer:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Privacy Inquiries</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center">
                      <i className="ri-mail-line text-blue-400 mr-2"></i>
                      <span>info@coveralarm.com</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-phone-line text-green-400 mr-2"></i>
                      <span>+234-814-554-0554</span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-map-pin-line text-purple-400 mr-2 mt-1"></i>
                      <span>Data Protection Officer<br />CoverAlarm Systems<br />Abuja, Nigeria</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Response Times</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <i className="ri-time-line text-blue-400 mr-2 mt-1"></i>
                      Privacy requests: 48 hours acknowledgment
                    </li>
                    <li className="flex items-start">
                      <i className="ri-calendar-line text-green-400 mr-2 mt-1"></i>
                      Full response: Within 30 days
                    </li>
                    <li className="flex items-start">
                      <i className="ri-alarm-line text-red-400 mr-2 mt-1"></i>
                      Urgent privacy concerns: Same day
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Updates */}
            <div className="mt-8 p-6 bg-gray-800/30 border border-gray-600 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-yellow-400">Policy Updates</h3>
              <p className="text-gray-300 text-sm">
                We may update this Privacy Policy to reflect changes in our practices or legal requirements. We'll notify you of significant changes via email or through our services. Continued use of our services after updates constitutes acceptance of the revised policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Questions About Us <span className="text-blue-400">Privacy</span>?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Our Data Protection Officer is here to help with any privacy concerns or questions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="mailto:info@coveralarm.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
            >
              📧 Contact Privacy Officer
            </a>
            <a
              href="https://calendly.com/coveralarm/privacy-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-600 text-green-400 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
            >
              📅 Schedule Privacy Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Modals */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}
