
import { useState } from 'react';

interface SmartSolutionModalProps {
  isOpen: boolean;
  onClose: () => void;
  solution: {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    features: string[];
    benefits: string[];
    image: string;
  } | null;
}

export default function SmartSolutionModal({ isOpen, onClose, solution }: SmartSolutionModalProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isOpen || !solution) return null;

  const solutionDetails = {
    streetlights: {
      fullDescription: 'Our AI-integrated streetlight systems represent the future of urban lighting infrastructure. These intelligent systems automatically adjust brightness based on real-time activity, weather conditions, and energy optimization algorithms, creating safer streets while dramatically reducing municipal energy costs.',
      technicalSpecs: [
        'LED technology with 50,000+ hour lifespan',
        'IoT sensors for motion and ambient light detection',
        'Wireless mesh networking capabilities',
        'Weather-resistant IP65 rating',
        'Remote monitoring and control platform',
        'Energy consumption analytics dashboard'
      ],
      roi: '70% reduction in energy costs within first year',
      implementation: '2-4 weeks for full deployment'
    },
    biometric: {
      fullDescription: 'Advanced biometric access control systems designed specifically for government facilities and critical infrastructure. Our multi-factor authentication combines fingerprint scanning, facial recognition, and smart card technology to ensure the highest levels of security for sensitive areas.',
      technicalSpecs: [
        'Multi-modal biometric authentication',
        'Live finger detection technology',
        'Facial recognition with mask detection',
        'Integration with existing security systems',
        'Real-time access logging and alerts',
        'Backup power systems for 24/7 operation'
      ],
      roi: '99.9% security accuracy with zero false positives',
      implementation: '1-2 weeks per facility'
    },
    traffic: {
      fullDescription: 'Comprehensive traffic and surveillance analytics platform that uses AI to monitor traffic flow, detect incidents, and optimize urban mobility. Our system provides real-time insights that help city planners make data-driven decisions to improve traffic efficiency and public safety.',
      technicalSpecs: [
        'AI-powered video analytics',
        'License plate recognition (LPR)',
        'Traffic flow optimization algorithms',
        'Incident detection and classification',
        'Integration with traffic management systems',
        'Predictive analytics for congestion management'
      ],
      roi: '45% reduction in traffic delays and 30% improvement in emergency response',
      implementation: '4-6 weeks for city-wide deployment'
    },
    emergency: {
      fullDescription: 'Integrated emergency response system that connects panic buttons, automated alerts, and command center coordination to provide rapid response to emergencies. Our platform ensures that help arrives faster when every second counts.',
      technicalSpecs: [
        'Panic button network with GPS tracking',
        'Automated emergency service notification',
        'Multi-agency communication platform',
        'Real-time incident mapping',
        'Mobile response team coordination',
        'Integration with existing emergency systems'
      ],
      roi: '80% faster emergency response times with improved coordination',
      implementation: '3-5 weeks for full system integration'
    }
  };

  const currentDetails = solutionDetails[solution.id as keyof typeof solutionDetails];

  const handleDownloadBrochure = async () => {
    setIsDownloading(true);
    try {
      // Simulate download process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create download link
      const link = document.createElement('a');
      link.href = `https://readdy.ai/api/generate-pdf?service=${solution.id}&company=coveralarm&type=smart-city`;
      link.download = `CoverAlarm-${solution.title.replace(/\s+/g, '-')}-Brochure.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (error) {
      console.error('Failed to download brochure:', error);
      alert('Download will be available soon. Please contact our team for immediate access.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center">
              <div className={`w-16 h-16 flex items-center justify-center bg-${solution.color}-600/20 border border-${solution.color}-500/30 rounded-xl mr-6`}>
                <i className={`${solution.icon} text-3xl text-${solution.color}-400`}></i>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">{solution.title}</h2>
                <p className="text-gray-400 text-lg">{solution.description}</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Image and Overview */}
            <div className="space-y-6">
              <div className="relative">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-xl"></div>
                
                {/* Floating Stats */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className={`text-2xl font-bold text-${solution.color}-400`}>
                          {solution.id === 'streetlights' ? '70%' : 
                           solution.id === 'biometric' ? '99.9%' :
                           solution.id === 'traffic' ? '45%' : '80%'}
                        </div>
                        <div className="text-gray-300 text-xs">
                          {solution.id === 'streetlights' ? 'Energy Savings' : 
                           solution.id === 'biometric' ? 'Accuracy Rate' :
                           solution.id === 'traffic' ? 'Traffic Improvement' : 'Faster Response'}
                        </div>
                      </div>
                      <div>
                        <div className={`text-2xl font-bold text-${solution.color}-400`}>
                          {solution.id === 'streetlights' ? '24/7' : 
                           solution.id === 'biometric' ? '&lt;1s' :
                           solution.id === 'traffic' ? '50+' : '&lt;2min'}
                        </div>
                        <div className="text-gray-300 text-xs">
                          {solution.id === 'streetlights' ? 'Monitoring' : 
                           solution.id === 'biometric' ? 'Access Time' :
                           solution.id === 'traffic' ? 'Intersections' : 'Response Time'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Solution Overview</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {currentDetails.fullDescription}
                </p>
              </div>

              {/* ROI Highlight */}
              <div className={`bg-gradient-to-r from-${solution.color}-900/20 to-${solution.color}-800/20 border border-${solution.color}-500/30 rounded-lg p-6`}>
                <div className="flex items-center mb-3">
                  <i className="ri-line-chart-line text-2xl text-green-400 mr-3"></i>
                  <h4 className="text-xl font-bold text-white">Return on Investment</h4>
                </div>
                <p className="text-green-400 font-semibold text-lg">{currentDetails.roi}</p>
                <p className="text-gray-400 text-sm mt-2">Implementation Time: {currentDetails.implementation}</p>
              </div>
            </div>

            {/* Right Column - Features and Technical Specs */}
            <div className="space-y-6">
              {/* Key Features */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <i className="ri-star-line text-yellow-400 mr-3"></i>
                  Key Features
                </h3>
                <div className="space-y-3">
                  {solution.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`w-6 h-6 flex items-center justify-center bg-${solution.color}-600/20 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
                        <i className="ri-check-line text-white text-sm"></i>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <i className="ri-settings-3-line text-blue-400 mr-3"></i>
                  Technical Specifications
                </h3>
                <div className="space-y-3">
                  {currentDetails.technicalSpecs.map((spec, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 flex items-center justify-center bg-blue-600/20 rounded-full mr-3 mt-0.5 flex-shrink-0">
                        <i className="ri-cpu-line text-blue-400 text-sm"></i>
                      </div>
                      <span className="text-gray-300">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <i className="ri-trophy-line text-green-400 mr-3"></i>
                  Key Benefits
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {solution.benefits.map((benefit, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-3">
                      <div className="flex items-center">
                        <div className="w-5 h-5 flex items-center justify-center bg-green-600/20 rounded-full mr-2">
                          <i className="ri-arrow-up-line text-green-400 text-xs"></i>
                        </div>
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Download Brochure */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Technical Brochure</h4>
                    <p className="text-gray-400 text-sm">Detailed specifications and implementation guide</p>
                  </div>
                  <button
                    onClick={handleDownloadBrochure}
                    disabled={isDownloading}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      isDownloading 
                        ? 'bg-gray-600 text-gray-400' 
                        : `bg-${solution.color}-600 hover:bg-${solution.color}-700 text-white hover:scale-105`
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

              {/* Contact for Demo */}
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Schedule Demo</h4>
                    <p className="text-gray-400 text-sm">See this solution in action with our experts</p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 cursor-pointer whitespace-nowrap">
                    <div className="flex items-center">
                      <i className="ri-calendar-line mr-2"></i>
                      Book Demo
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-blue-400">24/7</div>
                <div className="text-gray-300 text-sm">Technical Support</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-green-400">2-6wks</div>
                <div className="text-gray-300 text-sm">Implementation Time</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-yellow-400">99.8%</div>
                <div className="text-gray-300 text-sm">System Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
