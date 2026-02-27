
import { useState } from 'react';

interface PilotProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PilotProjectModal({ isOpen, onClose }: PilotProjectModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    agency: '',
    position: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    timeline: '',
    budget: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const projectTypes = [
    'Smart Streetlight Systems',
    'Biometric Access Control',
    'Traffic & Surveillance Analytics',
    'Emergency Response Integration',
    'Complete Smart City Package',
    'Custom Solution'
  ];

  const budgetRanges = [
    '₦10M - ₦50M',
    '₦50M - ₦100M',
    '₦100M - ₦500M',
    '₦500M - ₦1B',
    '₦1B+',
    'To be determined'
  ];

  const timelineOptions = [
    '1-3 months',
    '3-6 months',
    '6-12 months',
    '1-2 years',
    'Flexible'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Pilot project request:', formData);
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Failed to submit pilot project request:', error);
      alert('Failed to submit request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-md w-full p-8 text-center">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-check-line text-4xl text-green-400"></i>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-4">Request Submitted Successfully!</h2>
          
          <p className="text-gray-300 mb-6">
            Thank you for your interest in our smart city solutions. Our government solutions team will contact you within 24 hours to discuss your pilot project requirements.
          </p>
          
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-6">
            <div className="text-blue-400 font-semibold mb-2">What happens next?</div>
            <ul className="text-gray-300 text-sm space-y-1 text-left">
              <li>• Initial consultation call within 24 hours</li>
              <li>• Site assessment and requirements analysis</li>
              <li>• Custom pilot project proposal</li>
              <li>• Implementation timeline and budget</li>
            </ul>
          </div>
          
          <button 
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Request a Pilot Project</h2>
              <p className="text-gray-400">
                Start your smart city transformation with a customized pilot implementation
              </p>
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <i className="ri-user-line text-blue-400 mr-3"></i>
                  Contact Information
                </h3>
                
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Government Agency/Organization *
                  </label>
                  <input
                    type="text"
                    name="agency"
                    value={formData.agency}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                    placeholder="e.g., Lagos State Government, FCT Administration"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Position/Title *
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                    placeholder="Your position in the organization"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                    placeholder="your.email@agency.gov.ng"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <i className="ri-building-line text-yellow-400 mr-3"></i>
                  Project Details
                </h3>

                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Project Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                    placeholder="City, State, or specific area"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Timeline *
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select timeline</option>
                    {timelineOptions.map((timeline) => (
                      <option key={timeline} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((budget) => (
                      <option key={budget} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                Project Description & Requirements
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                maxLength={500}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none resize-none"
                placeholder="Describe your smart city goals, specific requirements, challenges you're facing, and what you hope to achieve with this pilot project..."
              />
              <div className="text-gray-400 text-sm mt-1">
                {formData.description.length}/500 characters
              </div>
            </div>

            {/* Benefits Highlight */}
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                <i className="ri-gift-line text-yellow-400 mr-3"></i>
                What You Get with Our Pilot Program
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center text-gray-300">
                    <i className="ri-check-line text-green-400 mr-2"></i>
                    Free initial consultation & site assessment
                  </div>
                  <div className="flex items-center text-gray-300">
                    <i className="ri-check-line text-green-400 mr-2"></i>
                    Custom solution design & proposal
                  </div>
                  <div className="flex items-center text-gray-300">
                    <i className="ri-check-line text-green-400 mr-2"></i>
                    Pilot implementation with full support
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-300">
                    <i className="ri-check-line text-green-400 mr-2"></i>
                    Performance monitoring & optimization
                  </div>
                  <div className="flex items-center text-gray-300">
                    <i className="ri-check-line text-green-400 mr-2"></i>
                    Training for your technical team
                  </div>
                  <div className="flex items-center text-gray-300">
                    <i className="ri-check-line text-green-400 mr-2"></i>
                    Scalability roadmap for full deployment
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 py-4 rounded-lg font-bold text-lg transition-all cursor-pointer ${
                  isSubmitting
                    ? 'bg-gray-600 text-gray-400'
                    : 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Submitting Request...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <i className="ri-send-plane-line mr-2"></i>
                    Submit Pilot Project Request
                  </div>
                )}
              </button>
              
              <button
                type="button"
                onClick={onClose}
                className="px-8 py-4 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 rounded-lg font-bold text-lg transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
