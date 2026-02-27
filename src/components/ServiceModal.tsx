
import { useState } from 'react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    icon: string;
    title: string;
    description: string;
    color: string;
    image: string;
  } | null;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isOpen || !service) return null;

  const serviceDetails = {
    'AI Video Monitoring': {
      fullDescription: 'Our AI-powered video monitoring system uses advanced machine learning algorithms to detect threats in real-time. With facial recognition, behavior analysis, and automatic alert systems, our cameras never sleep and never miss suspicious activities.',
      features: [
        'Real-time threat detection in 0.3 seconds',
        'Facial recognition and blacklist alerts',
        'Behavior analysis and anomaly detection',
        'Night vision and thermal imaging',
        '24/7 professional monitoring center',
        'Mobile app with instant notifications',
        'Cloud storage with 30-day retention',
        'Integration with alarm systems'
      ],
      benefits: [
        'Prevent crimes before they happen',
        'Reduce security personnel costs by 60%',
        'Instant alerts to your phone',
        'Evidence collection for investigations',
        'Remote monitoring from anywhere'
      ],
      brochureUrl: 'https://readdy.ai/api/generate-pdf?service=ai-video-monitoring&company=coveralarm'
    },
    'GPS Fleet Tracking': {
      fullDescription: 'Advanced GPS tracking system that monitors your vehicles, assets, and personnel in real-time. Track routes, monitor fuel consumption, prevent theft, and optimize operations with our comprehensive fleet management solution.',
      features: [
        'Real-time location tracking',
        'Route optimization and planning',
        'Fuel consumption monitoring',
        'Driver behavior analysis',
        'Geofencing and alerts',
        'Maintenance scheduling',
        'Detailed reporting and analytics',
        'Mobile and web dashboard'
      ],
      benefits: [
        'Reduce fuel costs by up to 25%',
        'Improve driver safety and behavior',
        'Prevent vehicle theft and misuse',
        'Optimize routes and reduce travel time',
        'Lower insurance premiums'
      ],
      brochureUrl: 'https://readdy.ai/api/generate-pdf?service=gps-fleet-tracking&company=coveralarm'
    },
    'Fire Detection': {
      fullDescription: 'State-of-the-art fire detection and suppression systems that provide early warning and automatic response. Our systems detect smoke, heat, and flames instantly, alerting emergency services and activating suppression systems.',
      features: [
        'Multi-sensor fire detection',
        'Smoke and heat sensors',
        'Automatic sprinkler activation',
        'Emergency services notification',
        'Voice evacuation systems',
        'Fire panel monitoring',
        'Regular maintenance and testing',
        'Compliance with Nigerian fire codes'
      ],
      benefits: [
        'Save lives with early detection',
        'Protect property from fire damage',
        'Reduce insurance premiums',
        'Comply with safety regulations',
        'Minimize business downtime'
      ],
      brochureUrl: 'https://readdy.ai/api/generate-pdf?service=fire-detection&company=coveralarm'
    },
    'Fuel Monitoring': {
      fullDescription: 'Advanced fuel monitoring system that tracks fuel levels, consumption, and prevents theft. Real-time monitoring with sensors and analytics to optimize fuel usage and eliminate wastage.',
      features: [
        'Real-time fuel level monitoring',
        'Theft detection and alerts',
        'Consumption analytics',
        'Fuel efficiency reporting',
        'Tank level sensors',
        'Automated fuel ordering',
        'Driver fuel card integration',
        'Mobile monitoring dashboard'
      ],
      benefits: [
        'Eliminate fuel theft completely',
        'Reduce fuel costs by 30%',
        'Optimize fuel purchasing',
        'Improve operational efficiency',
        'Real-time theft alerts'
      ],
      brochureUrl: 'https://readdy.ai/api/generate-pdf?service=fuel-monitoring&company=coveralarm'
    },
    'Drone Surveillance': {
      fullDescription: 'Cutting-edge drone surveillance system providing aerial monitoring and rapid response capabilities. Our drones patrol large areas, track suspects, and provide real-time intelligence to security teams.',
      features: [
        'Autonomous patrol flights',
        'High-definition cameras',
        'Thermal imaging capabilities',
        'Real-time video streaming',
        'GPS tracking and mapping',
        'Night vision technology',
        'Weather-resistant design',
        'Remote pilot operation'
      ],
      benefits: [
        'Cover large areas efficiently',
        'Rapid response to incidents',
        'Reduce security personnel needs',
        'Gather evidence from above',
        'Monitor hard-to-reach areas'
      ],
      brochureUrl: 'https://readdy.ai/api/generate-pdf?service=drone-surveillance&company=coveralarm'
    },
    'Armed Response': {
      fullDescription: 'Professional armed response team with rapid deployment capabilities. Our trained security personnel respond to alarms and emergencies within minutes, providing immediate protection and threat neutralization.',
      features: [
        'Sub-5 minute response time',
        'Trained security professionals',
        'Armed and equipped teams',
        '24/7 availability',
        'Direct police coordination',
        'Emergency medical support',
        'Incident reporting',
        'Follow-up investigations'
      ],
      benefits: [
        'Immediate threat response',
        'Professional security expertise',
        'Coordination with law enforcement',
        'Peace of mind protection',
        'Rapid emergency assistance'
      ],
      brochureUrl: 'https://readdy.ai/api/generate-pdf?service=armed-response&company=coveralarm'
    },
    'Government Solutions': {
      fullDescription: 'Comprehensive security solutions tailored for government agencies and public sector organizations. Our specialized team provides advanced security infrastructure, threat assessment, and protection services designed to meet the unique requirements of government operations.',
      features: [
        'Government-grade security protocols',
        'Classified information protection',
        'Multi-level access control systems',
        'Emergency response coordination',
        'Threat intelligence analysis',
        'Secure communication networks',
        'Personnel security clearance',
        'Critical infrastructure protection'
      ],
      benefits: [
        'Enhanced national security',
        'Regulatory compliance assurance',
        'Reduced security vulnerabilities',
        'Improved emergency response times',
        'Cost-effective security solutions',
        'Professional security expertise'
      ]
    },
    'Buy Now Pay Later': {
      fullDescription: 'Flexible financing options that make enterprise-grade security affordable for everyone. Get protected immediately and pay over time with our convenient payment plans.',
      features: [
        'No upfront payment required',
        'Flexible payment terms',
        'Quick approval process',
        'No credit check needed',
        'Multiple payment options',
        'Early payment discounts',
        'Transparent pricing',
        'Customer support'
      ],
      benefits: [
        'Immediate security protection',
        'Affordable monthly payments',
        'No financial strain',
        'Quick setup process',
        'Flexible terms'
      ],
      brochureUrl: 'https://readdy.ai/api/generate-pdf?service=bnpl-plans&company=coveralarm'
    }
  };

  const currentService = serviceDetails[service.title as keyof typeof serviceDetails];

  const handleDownloadBrochure = async () => {
    setIsDownloading(true);
    try {
      // Use the updated Canva link
      const link = document.createElement('a');
      link.href = 'https://www.canva.com/design/DAG1AE9k-tQ/N9tt6XKyXX9T8MKN6ZFN4w/view?utm_content=DAG1AE9k-tQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha9e5a4fd5e';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show a helpful message
      setTimeout(() => {
        alert('Brochure opened in new tab. To download: Click the download button (↓) in the top-right corner of the Canva page.');
      }, 1000);
      
    } catch (error) {
      console.error('Failed to open brochure:', error);
      alert('Unable to open brochure. Please try again or contact support.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center">
              <div className={`w-12 h-12 flex items-center justify-center bg-${service.color}-600 rounded-lg mr-4`}>
                <i className={`${service.icon} text-xl text-white`}></i>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Image and Description */}
            <div className="space-y-6">
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-lg"></div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">Service Overview</h3>
                <p className="text-gray-300 leading-relaxed">
                  {currentService.fullDescription}
                </p>
              </div>

              {/* Download Brochure Button */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Download Brochure</h4>
                    <p className="text-gray-400 text-sm">Get detailed information and pricing</p>
                  </div>
                  <button
                    onClick={handleDownloadBrochure}
                    disabled={isDownloading}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      isDownloading 
                        ? 'bg-gray-600 text-gray-4' 
                        : `bg-${service.color}-600 hover:bg-${service.color}-700 text-white hover:scale-105`
                    }`}
                  >
                    {isDownloading ? (
                      <div className="flex items-center">
                        <i className="ri-loader-4-line animate-spin mr-2"></i>
                        Generating...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <i className="ri-download-line mr-2"></i>
                        Download PDF
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Features and Benefits */}
            <div className="space-y-6">
              {/* Features */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                <div className="space-y-3">
                  {currentService.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`w-5 h-5 flex items-center justify-center bg-${service.color}-600 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                        <i className="ri-check-line text-white text-xs"></i>
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
                <div className="space-y-3">
                  {currentService.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-5 h-5 flex items-center justify-center bg-green-600 rounded-full mr-3 mt-0.5 flex-shrink-0">
                        <i className="ri-star-fill text-white text-xs"></i>
                      </div>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-lg p-6">
                <h4 className="text-lg font-bold text-white mb-3">Ready to Get Protected?</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Get a free consultation and custom quote for your security needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer text-sm">
                    Get Free Quote
                  </button>
                  <button className="border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer text-sm">
                    Schedule Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-blue-400">24/7</div>
                <div className="text-gray-300 text-sm">Support Available</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-green-400">48hrs</div>
                <div className="text-gray-300 text-sm">Installation Time</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-purple-400">99.9%</div>
                <div className="text-gray-300 text-sm">System Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
