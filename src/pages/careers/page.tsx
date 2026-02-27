


import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QuoteModal from '../../components/QuoteModal';
import JobDetailsModal from '../../components/JobDetailsModal';

export default function Careers() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [isJobDetailsModalOpen, setIsJobDetailsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    // Add Schema.org JSON-LD for careers page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Careers at CoverAlarm Systems",
      "description": "Join Nigeria's leading security technology company. Explore career opportunities in AI, security systems, and technology innovation.",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/careers`,
      "mainEntity": {
        "@type": "Organization",
        "name": "CoverAlarm Systems",
        "description": "Nigeria's leading security technology company"
      }
    });
    document.head.appendChild(script);

    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  const departments = [
    { id: 'all', name: 'All Positions', count: 8 },
    { id: 'engineering', name: 'Engineering', count: 3 },
    { id: 'security', name: 'Security Operations', count: 2 },
    { id: 'sales', name: 'Sales & Marketing', count: 2 },
    { id: 'support', name: 'Customer Support', count: 1 }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "engineering",
      location: "Abuja, Nigeria",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of AI-powered security systems and computer vision algorithms for our surveillance platforms.",
      requirements: [
        "Bachelor's/Master's in Computer Science or AI",
        "5+ years experience in AI/ML development",
        "Expertise in Python, TensorFlow, OpenCV",
        "Experience with computer vision and object detection",
        "Knowledge of security systems is a plus"
      ],
      benefits: [
        "Competitive salary + equity",
        "Health insurance for family",
        "Professional development budget",
        "Flexible working arrangements",
        "Annual performance bonuses"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Security Systems Installer",
      department: "security",
      location: "Lagos, Abuja",
      type: "Full-time",
      experience: "2+ years",
      description: "Install and maintain CCTV systems, access control, and security equipment for residential and commercial clients.",
      requirements: [
        "Technical diploma or equivalent",
        "2+ years in security systems installation",
        "Knowledge of CCTV, access control systems",
        "Valid driver's license",
        "Ability to work at heights and in various conditions"
      ],
      benefits: [
        "Competitive salary",
        "Transportation allowance",
        "Training and certifications",
        "Health insurance",
        "Career advancement opportunities"
      ],
      featured: false
    },
    {
      id: 3,
      title: "Sales Executive - Enterprise Solutions",
      department: "sales",
      location: "Abuja, Nigeria",
      type: "Full-time",
      experience: "3+ years",
      description: "Drive sales of enterprise security solutions to large corporations, government agencies, and commercial clients.",
      requirements: [
        "Bachelor's degree in Business or related field",
        "3+ years in B2B sales, preferably security/tech",
        "Strong presentation and negotiation skills",
        "Existing network in corporate/government sectors",
        "Proven track record of meeting sales targets"
      ],
      benefits: [
        "Base salary + attractive commission",
        "Car allowance",
        "Health insurance",
        "Sales incentive trips",
        "Professional development"
      ],
      featured: false
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "engineering",
      location: "Abuja, Nigeria (Remote OK)",
      type: "Full-time",
      experience: "3+ years",
      description: "Manage cloud infrastructure, CI/CD pipelines, and ensure high availability of our security monitoring platforms.",
      requirements: [
        "Bachelor's in Computer Science or related",
        "3+ years DevOps/Infrastructure experience",
        "Expertise in AWS, Docker, Kubernetes",
        "Experience with monitoring and logging tools",
        "Knowledge of security best practices"
      ],
      benefits: [
        "Competitive salary",
        "Remote work options",
        "Health insurance",
        "Learning and development budget",
        "Stock options"
      ],
      featured: false
    },
    {
      id: 5,
      title: "Security Operations Center (SOC) Analyst",
      department: "security",
      location: "Abuja, Nigeria",
      type: "Full-time",
      experience: "1+ years",
      description: "Monitor security systems 24/7, respond to alerts, and coordinate with emergency response teams.",
      requirements: [
        "Bachelor's degree or relevant certification",
        "1+ years in security monitoring or related field",
        "Knowledge of CCTV systems and security protocols",
        "Excellent communication skills",
        "Ability to work night shifts and weekends"
      ],
      benefits: [
        "Competitive salary",
        "Shift allowances",
        "Health insurance",
        "Training and certifications",
        "Career progression opportunities"
      ],
      featured: false
    },
    {
      id: 6,
      title: "Frontend Developer",
      department: "engineering",
      location: "Abuja, Nigeria",
      type: "Full-time",
      experience: "2+ years",
      description: "Develop user interfaces for our security monitoring dashboards and mobile applications.",
      requirements: [
        "Bachelor's in Computer Science or related",
        "2+ years frontend development experience",
        "Proficiency in React, TypeScript, Tailwind CSS",
        "Experience with real-time data visualization",
        "Understanding of security application requirements"
      ],
      benefits: [
        "Competitive salary",
        "Flexible working hours",
        "Health insurance",
        "Professional development",
        "Modern tech stack"
      ],
      featured: false
    },
    {
      id: 7,
      title: "Digital Marketing Specialist",
      department: "sales",
      location: "Abuja, Nigeria",
      type: "Full-time",
      experience: "2+ years",
      description: "Drive digital marketing campaigns, manage social media, and generate leads for our security solutions.",
      requirements: [
        "Bachelor's in Marketing or related field",
        "2+ years digital marketing experience",
        "Expertise in Google Ads, Facebook Ads, SEO",
        "Content creation and social media management",
        "Analytics and performance tracking skills"
      ],
      benefits: [
        "Competitive salary",
        "Performance bonuses",
        "Health insurance",
        "Creative freedom",
        "Marketing tools and resources"
      ],
      featured: false
    },
    {
      id: 8,
      title: "Technical Support Specialist",
      department: "support",
      location: "Abuja, Nigeria",
      type: "Full-time",
      experience: "2+ years",
      description: "Provide technical support for security systems, troubleshoot issues, and ensure optimal system performance for our clients.",
      requirements: [
        "Bachelor's degree in Engineering or related field",
        "2+ years in technical support or field service",
        "Strong troubleshooting and problem-solving skills",
        "Knowledge of CCTV, access control, and security systems",
        "Excellent communication and customer service skills"
      ],
      benefits: [
        "Competitive salary",
        "Technical training and certifications",
        "Health insurance",
        "Field work allowances",
        "Career advancement opportunities"
      ],
      featured: false
    }
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  const benefits = [
    {
      icon: 'ri-heart-pulse-line',
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance for you and your family'
    },
    {
      icon: 'ri-graduation-cap-line',
      title: 'Learning & Development',
      description: 'Annual budget for courses, conferences, and certifications'
    },
    {
      icon: 'ri-time-line',
      title: 'Work-Life Balance',
      description: 'Flexible hours and remote work options'
    },
    {
      icon: 'ri-trophy-line',
      title: 'Performance Rewards',
      description: 'Annual bonuses and recognition programs'
    },
    {
      icon: 'ri-team-line',
      title: 'Great Team Culture',
      description: 'Collaborative environment with passionate professionals'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Career Growth',
      description: 'Clear advancement paths and leadership opportunities'
    }
  ];

  const handleViewDetails = (job) => {
    setSelectedJob(job);
    setIsJobDetailsModalOpen(true);
  };

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
                  className="text-blue-400 px-3 py-2 border-b-2 border-blue-400 text-sm font-medium"
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
                  className="block text-blue-400 px-3 py-3 text-base font-medium border-l-4 border-blue-400 bg-blue-900/20"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Nigeria's <span className="text-blue-400">Leading</span> Security Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build the future of security technology in Africa. Work with cutting-edge AI, protect communities, and grow your career with us.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="#open-positions"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
              >
                View Open Positions
              </a>
              <a
                href="mailto:careers@coveralarm.com"
                className="border border-green-600 text-green-400 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
              >
                Send Your Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Work at <span className="text-blue-400">CoverAlarm</span>?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Join a mission-driven team that's revolutionizing security technology across Nigeria and Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-900/60 border border-gray-700 rounded-xl p-6 hover:border-blue-400 transition-all hover:scale-105"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-lg mb-4">
                  <i className={`${benefit.icon} text-xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedDepartment === dept.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {dept.name} ({dept.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-green-400">Open</span> Positions
            </h2>
            <p className="text-lg text-gray-300">
              Find your next career opportunity with us
            </p>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className={`bg-gray-900/60 border rounded-xl p-6 hover:border-blue-400 transition-all ${
                  job.featured ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-gray-700'
                }`}
              >
                {job.featured && (
                  <div className="mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED POSITION
                    </span>
                  </div>
                )}
                
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-bold mb-2 text-white">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center">
                        <i className="ri-building-line mr-1"></i>
                        {departments.find(d => d.id === job.department)?.name}
                      </span>
                      <span className="flex items-center">
                        <i className="ri-map-pin-line mr-1"></i>
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <i className="ri-time-line mr-1"></i>
                        {job.type}
                      </span>
                      <span className="flex items-center">
                        <i className="ri-user-line mr-1"></i>
                        {job.experience}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    <div className="text-lg font-semibold text-green-400 mb-4">
                      {job.salary}
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-between">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Requirements:</h4>
                        <ul className="text-xs text-gray-300 space-y-1">
                          {job.requirements.slice(0, 3).map((req, idx) => (
                            <li key={idx} className="flex items-start">
                              <i className="ri-checkbox-circle-line text-green-400 mr-1 mt-0.5 flex-shrink-0"></i>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                        <ul className="text-xs text-gray-300 space-y-1">
                          {job.benefits.slice(0, 3).map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <i className="ri-star-line text-yellow-400 mr-1 mt-0.5 flex-shrink-0"></i>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 space-y-3">
                      <a
                        href={`mailto:careers@coveralarm.com?subject=Application for ${job.title}&body=Dear CoverAlarm Team,%0D%0A%0D%0AI am interested in applying for the ${job.title} position. Please find my resume attached.%0D%0A%0D%0ABest regards`}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center block"
                      >
                        Apply Now
                      </a>
                      <button 
                        onClick={() => handleViewDetails(job)}
                        className="w-full border border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer"
                      >
                        View Full Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-blue-400">Culture</span> &amp; <span className="text-green-400">Values</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We're building more than just security systems - we're building a team that protects Nigeria's future.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gray-900/60 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">Innovation First</h3>
                <p className="text-gray-300">
                  We embrace cutting-edge technology and encourage creative problem-solving to stay ahead of security threats.
                </p>
              </div>
              
              <div className="bg-gray-900/60 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-green-400">Mission-Driven</h3>
                <p className="text-gray-300">
                  Every team member contributes to protecting Nigerian communities and businesses from security threats.
                </p>
              </div>
              
              <div className="bg-gray-900/60 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-purple-400">Growth Mindset</h3>
                <p className="text-gray-300">
                  We invest in our people's development and provide clear paths for career advancement.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Diverse%20African%20Nigerian%20team%20working%20together%20in%20modern%20tech%20office%2C%20Black%20African%20professionals%20collaborating%20on%20security%20technology%2C%20Nigerian%20workplace%20culture%2C%20teamwork%20and%20innovation%2C%20professional%20African%20tech%20workers%2C%20modern%20office%20environment%20with%20security%20equipment&width=500&height=400&seq=team-culture-african&orientation=landscape"
                alt="Our Team Culture"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Application <span className="text-blue-400">Process</span>
            </h2>
            <p className="text-lg text-gray-300">
              Simple, transparent, and designed to find the best fit for both you and our team.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-full mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Apply Online</h3>
              <p className="text-gray-300 text-sm">
                Submit your resume and cover letter for the position you're interested in.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-green-600 rounded-full mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Initial Review</h3>
              <p className="text-gray-300 text-sm">
                Our HR team reviews your application and contacts qualified candidates within 48 hours.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-600 rounded-full mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Interview Process</h3>
              <p className="text-gray-300 text-sm">
                Technical and cultural fit interviews with team members and leadership.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-red-600 rounded-full mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Welcome Aboard</h3>
              <p className="text-gray-300 text-sm">
                Comprehensive onboarding and integration into your new team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to <span className="text-blue-400">Protect</span> Nigeria's Future?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Don't see the perfect role? Send us your resume anyway. We're always looking for exceptional talent.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="mailto:careers@coveralarm.com?subject=General Application&body=Dear CoverAlarm Team,%0D%0A%0D%0AI am interested in joining your team. Please find my resume attached.%0D%0A%0D%0ABest regards"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
            >
              📧 Send Your Resume
            </a>
            <a
              href="https://calendly.com/coveralarm/career-chat"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-600 text-green-400 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
            >
              📅 Schedule Career Chat
            </a>
          </div>
          <div className="text-center mt-6 text-sm text-gray-400">
            📧 careers@coveralarm.com • 📞 +234-814-554-0554
          </div>
        </div>
      </section>

      {/* Modals */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <JobDetailsModal 
        isOpen={isJobDetailsModalOpen} 
        onClose={() => setIsJobDetailsModalOpen(false)}
        job={selectedJob}
      />
    </div>
  );
}

