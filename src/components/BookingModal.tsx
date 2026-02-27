import { useState } from 'react';
import MeetingSuccessModal from './MeetingSuccessModal';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const services = [
    {
      id: 'security-consultation',
      name: 'Security Consultation',
      duration: '30 minutes',
      description: 'Discuss your security needs and get expert recommendations'
    },
    {
      id: 'live-demo',
      name: 'Live System Demo',
      duration: '45 minutes',
      description: 'See our AI-powered security systems in action'
    },
    {
      id: 'onsite-assessment',
      name: 'On-Site Assessment',
      duration: '60 minutes',
      description: 'Comprehensive evaluation of your current security setup'
    },
    {
      id: 'emergency-setup',
      name: 'Emergency Response Setup',
      duration: '20 minutes',
      description: 'Quick setup for urgent security requirements'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new URLSearchParams();
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('phone', formState.phone);
      formData.append('company', formState.company);
      formData.append('preferredDate', formState.preferredDate);
      formData.append('preferredTime', formState.preferredTime);
      formData.append('message', formState.message);

      const response = await fetch(submitAddr, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      if (response.ok) {
        // Track Google Ads conversion
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-17778703830/JLJlCOigzMsbENb7xZ1C',
            'value': 1.0,
            'currency': 'USD',
            'transaction_id': ''
          });
        }

        setSubmitStatus('success');
        setFormState({
          name: '',
          email: '',
          phone: '',
          company: '',
          preferredDate: '',
          preferredTime: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    setSubmitStatus('idle');
  };

  const openZohoMeeting = () => {
    window.open('https://meet.zoho.com/kzru-wvr-bxw', '_blank');
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Schedule a Meeting</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <i className="ri-error-warning-line text-red-600 text-xl mr-3"></i>
                  <div>
                    <h3 className="text-red-800 font-semibold">Submission Failed</h3>
                    <p className="text-red-700 text-sm mt-1">
                      There was an error submitting your request. Please try again or contact us directly.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} data-readdy-form id="meeting-booking">
              {/* Service Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Meeting Type *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedService === service.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <div className="flex items-center mb-2">
                        <input
                          type="radio"
                          name="service"
                          value={service.id}
                          checked={selectedService === service.id}
                          onChange={() => setSelectedService(service.id)}
                          className="mr-3"
                          required
                        />
                        <h3 className="font-semibold text-gray-900">{service.name}</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{service.description}</p>
                      <p className="text-sm text-blue-600 font-medium">{service.duration}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-900 bg-white"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-900 bg-white"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-900 bg-white"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-900 bg-white"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              {/* Scheduling Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-900 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <input
                    type="time"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-900 bg-white"
                  />
                </div>
              </div>

              {/* Additional Information */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  maxLength={500}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none text-gray-900 bg-white"
                  placeholder="Tell us about your security needs, current setup, or any specific questions you have..."
                />
                <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 characters</p>
              </div>

              {/* Meeting Information */}
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Meeting Details</h3>
                <div className="space-y-2 text-sm text-blue-800">
                  <p><i className="ri-video-line mr-2"></i>Meeting Platform: Zoho Meeting</p>
                  <p><i className="ri-time-line mr-2"></i>We'll confirm your preferred time within 24 hours</p>
                  <p><i className="ri-mail-line mr-2"></i>Meeting link will be sent via email</p>
                  <p><i className="ri-phone-line mr-2"></i>We may call to confirm details if needed</p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting || !selectedService}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <i className="ri-calendar-check-line mr-2"></i>
                      Schedule Meeting
                    </>
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={openZohoMeeting}
                  className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-video-line mr-2"></i>
                  Join Meeting Now
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Need immediate assistance? Click &quot;Join Meeting Now&quot; to connect directly, or schedule ahead for better preparation.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <MeetingSuccessModal
        isOpen={showSuccessModal}
        onClose={handleSuccessModalClose}
        meetingDetails={{
          service: services.find(s => s.id === selectedService)?.name || '',
          date: formData.preferredDate,
          time: formData.preferredTime,
          name: formData.name,
          email: formData.email
        }}
      />
    </>
  );
};

export default BookingModal;
