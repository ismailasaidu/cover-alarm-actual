

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QuoteModal from '../../components/QuoteModal';

export default function TermsOfService() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Add Schema.org JSON-LD for terms of service page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms of Service - CoverAlarm Systems",
      "description": "Terms and conditions for using CoverAlarm Systems security services, including AI monitoring, GPS tracking, and emergency response.",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/terms-of-service`,
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
              Terms of <span className="text-blue-400">Service</span>
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              Clear terms for our security services that protect both you and our mission to keep Nigeria safe.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: December 15, 2024
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            
            {/* Agreement */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Agreement to Terms</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you ("Customer," "you," or "your") and CoverAlarm Systems ("CoverAlarm," "we," "us," or "our") regarding your use of our security services, including but not limited to AI video monitoring, GPS tracking, fire detection, fuel monitoring, and emergency response services.
              </p>
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <p className="text-blue-300 text-sm">
                  <strong>By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms.</strong> If you do not agree to these Terms, you may not use our services.
                </p>
              </div>
            </div>

            {/* Services Description */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-green-400">Our Security Services</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Monitoring Services</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <i className="ri-camera-line text-blue-400 mr-2 mt-1"></i>
                      24/7 AI-powered video surveillance
                    </li>
                    <li className="flex items-start">
                      <i className="ri-map-pin-line text-green-400 mr-2 mt-1"></i>
                      Real-time GPS tracking and fleet management
                    </li>
                    <li className="flex items-start">
                      <i className="ri-fire-line text-red-400 mr-2 mt-1"></i>
                      Fire detection and alarm monitoring
                    </li>
                    <li className="flex items-start">
                      <i className="ri-oil-line text-yellow-400 mr-2 mt-1"></i>
                      Fuel monitoring and theft prevention
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Response Services</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <i className="ri-shield-user-line text-purple-400 mr-2 mt-1"></i>
                      Armed security response teams
                    </li>
                    <li className="flex items-start">
                      <i className="ri-phone-line text-blue-400 mr-2 mt-1"></i>
                      Emergency dispatch coordination
                    </li>
                    <li className="flex items-start">
                      <i className="ri-hospital-line text-red-400 mr-2 mt-1"></i>
                      Medical emergency assistance
                    </li>
                    <li className="flex items-start">
                      <i className="ri-police-car-line text-green-400 mr-2 mt-1"></i>
                      Law enforcement coordination
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">Payment Terms &amp; Billing</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Payment Schedule</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <i className="ri-calendar-line text-blue-400 mr-2 mt-1"></i>
                      Monthly billing for ongoing services
                    </li>
                    <li className="flex items-start">
                      <i className="ri-money-dollar-circle-line text-green-400 mr-2 mt-1"></i>
                      Installation fees due upon completion
                    </li>
                    <li className="flex items-start">
                      <i className="ri-credit-card-line text-purple-400 mr-2 mt-1"></i>
                      Automatic payment processing
                    </li>
                    <li className="flex items-start">
                      <i className="ri-time-line text-yellow-400 mr-2 mt-1"></i>
                      30-day payment terms for enterprise clients
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Late Payments</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <i className="ri-error-warning-line text-red-400 mr-2 mt-1"></i>
                      Service suspension after 15 days overdue
                    </li>
                    <li className="flex items-start">
                      <i className="ri-percent-line text-orange-400 mr-2 mt-1"></i>
                      Late fees: 2% per month on overdue amounts
                    </li>
                    <li className="flex items-start">
                      <i className="ri-file-text-line text-blue-400 mr-2 mt-1"></i>
                      Collection agency referral after 60 days
                    </li>
                    <li className="flex items-start">
                      <i className="ri-restart-line text-green-400 mr-2 mt-1"></i>
                      Reconnection fees apply for restored service
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Liability & Limitations */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-red-400">Liability &amp; Limitations</h2>
              
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3 text-red-300">Important Disclaimer</h3>
                <p className="text-gray-300 text-sm">
                  While we provide professional security services with industry-leading technology, no security system can guarantee 100% prevention of all criminal activity or emergencies. Our services are designed to deter, detect, and respond to security threats, but cannot eliminate all risks.
                </p>
              </div>

              <h3 className="text-lg font-semibold mb-3 text-white">Our Responsibilities</h3>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li className="flex items-start">
                  <i className="ri-shield-check-line text-green-400 mr-2 mt-1"></i>
                  Provide services with professional care and industry standards
                </li>
                <li className="flex items-start">
                  <i className="ri-time-line text-blue-400 mr-2 mt-1"></i>
                  Maintain 24/7 monitoring capabilities with minimal downtime
                </li>
                <li className="flex items-start">
                  <i className="ri-phone-line text-purple-400 mr-2 mt-1"></i>
                  Respond to alerts according to agreed response protocols
                </li>
                <li className="flex items-start">
                  <i className="ri-tools-line text-yellow-400 mr-2 mt-1"></i>
                  Maintain equipment in good working condition
                </li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 text-white">Limitation of Liability</h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <i className="ri-information-line text-blue-400 mr-2 mt-1"></i>
                  Liability limited to 12 months of service fees paid
                </li>
                <li className="flex items-start">
                  <i className="ri-close-circle-line text-red-400 mr-2 mt-1"></i>
                  No liability for consequential or indirect damages
                </li>
                <li className="flex items-start">
                  <i className="ri-shield-line text-green-400 mr-2 mt-1"></i>
                  Customer maintains primary responsibility for property security
                </li>
                <li className="flex items-start">
                  <i className="ri-file-shield-line text-purple-400 mr-2 mt-1"></i>
                  Insurance coverage recommended for comprehensive protection
                </li>
              </ul>
            </div>

            {/* Termination */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Service Termination</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Customer Termination</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <i className="ri-calendar-line text-blue-400 mr-2 mt-1"></i>
                      30-day written notice required
                    </li>
                    <li className="flex items-start">
                      <i className="ri-money-dollar-circle-line text-green-400 mr-2 mt-1"></i>
                      Final billing through notice period
                    </li>
                    <li className="flex items-start">
                      <i className="ri-tools-line text-purple-400 mr-2 mt-1"></i>
                      Equipment removal within 14 days
                    </li>
                    <li className="flex items-start">
                      <i className="ri-file-text-line text-yellow-400 mr-2 mt-1"></i>
                      Early termination fees may apply
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">CoverAlarm Termination</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <i className="ri-error-warning-line text-red-400 mr-2 mt-1"></i>
                      Immediate termination for breach of terms
                    </li>
                    <li className="flex items-start">
                      <i className="ri-money-dollar-circle-line text-orange-400 mr-2 mt-1"></i>
                      Non-payment after 30 days overdue
                    </li>
                    <li className="flex items-start">
                      <i className="ri-shield-cross-line text-purple-400 mr-2 mt-1"></i>
                      Misuse of security services
                    </li>
                    <li className="flex items-start">
                      <i className="ri-scales-line text-blue-400 mr-2 mt-1"></i>
                      Illegal activities on monitored premises
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Governing Law &amp; Disputes</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Jurisdiction</h3>
                  <p className="text-gray-300">
                    These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from these Terms or our services shall be resolved in the courts of Lagos State, Nigeria.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Dispute Resolution</h3>
                  <ol className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                      Direct negotiation between parties (30 days)
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                      Mediation through Lagos Chamber of Commerce (60 days)
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                      Arbitration under Nigerian Arbitration and Conciliation Act
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">4</span>
                      Court proceedings as final resort
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Questions About Us Terms?</h2>
              
              <p className="text-gray-300 mb-6">
                If you have questions about these Terms of Service or need clarification on any provisions, our legal team is here to help.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Legal Inquiries</h3>
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
                      <span>Legal Department<br />CoverAlarm Systems<br />Abuja, Nigeria</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Business Hours</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <i className="ri-time-line text-blue-400 mr-2 mt-1"></i>
                      Monday - Friday: 8:00 AM - 6:00 PM
                    </li>
                    <li className="flex items-start">
                      <i className="ri-calendar-line text-green-400 mr-2 mt-1"></i>
                      Saturday: 9:00 AM - 2:00 PM
                    </li>
                    <li className="flex items-start">
                      <i className="ri-alarm-line text-red-400 mr-2 mt-1"></i>
                      Emergency support: 24/7 available
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Updates */}
            <div className="mt-8 p-6 bg-gray-800/30 border border-gray-600 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-yellow-400">Terms Updates</h3>
              <p className="text-gray-300 text-sm">
                We may update these Terms of Service to reflect changes in our services, legal requirements, or business practices. We'll notify you of significant changes via email or through our services at least 30 days before they take effect. Continued use of our services after updates constitutes acceptance of the revised terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to <span className="text-blue-400">Get Started</span>?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us to discuss your security needs and get a customized protection plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="https://calendly.com/coveralarm/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
            >
              📅 Schedule Consultation
            </a>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
            >
              🛡️ Get Security Quote
            </button>
          </div>
        </div>
      </section>

      {/* Modals */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}

