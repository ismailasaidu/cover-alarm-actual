
import { useState } from 'react';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmergencyModal({ isOpen, onClose }: EmergencyModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    emergencyType: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('location', formData.location);
      formDataToSend.append('emergencyType', formData.emergencyType);
      formDataToSend.append('description', formData.description);

      const response = await fetch('https://readdy.ai/api/form/d34ipeir9t98gmi325c8', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', location: '', emergencyType: '', description: '' });
        
        // Send WhatsApp message to company
        const whatsappMessage = `🚨 EMERGENCY ALERT 🚨%0A%0A` +
          `Name: ${formData.name}%0A` +
          `Phone: ${formData.phone}%0A` +
          `Location: ${formData.location}%0A` +
          `Emergency Type: ${formData.emergencyType}%0A` +
          `Description: ${formData.description}%0A%0A` +
          `⚠️ IMMEDIATE RESPONSE REQUIRED`;
        
        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/2348145540554?text=${whatsappMessage}`, '_blank');
        
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleEmergencyCall = () => {
    // Track Google Ads conversion for emergency calls
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17778703830/JLJlCOigzMsbENb7xZ1C',
        'value': 1.0,
        'currency': 'USD',
        'transaction_id': ''
      });
    }

    window.location.href = 'tel:+2348145540554';
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-red-500 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-red-500/20">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-red-600 rounded-full mr-4 animate-pulse">
                <i className="ri-alarm-warning-line text-2xl text-white"></i>
              </div>
              <h2 className="text-2xl font-bold text-red-400">Emergency Response</h2>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>

          <div className="bg-red-900/20 border border-red-500 rounded-lg p-4 mb-6">
            <div className="flex items-start text-red-400">
              <i className="ri-error-warning-line mr-3 mt-1 text-xl"></i>
              <div>
                <div className="font-semibold mb-2">🚨 IMMEDIATE ASSISTANCE AVAILABLE</div>
                <div className="text-sm text-red-300">
                  For life-threatening emergencies, call <strong>199</strong> first, then submit this form for our rapid response team.
                </div>
              </div>
            </div>
          </div>

          {submitStatus === 'success' && (
            <div className="bg-green-900/20 border border-green-500 rounded-lg p-4 mb-6">
              <div className="flex items-center text-green-400">
                <i className="ri-checkbox-circle-line mr-2"></i>
                Emergency request submitted! Our response team will contact you within 2 minutes.
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-900/20 border border-red-500 rounded-lg p-4 mb-6">
              <div className="flex items-center text-red-400">
                <i className="ri-error-warning-line mr-2"></i>
                Failed to submit emergency request. Please call 08145540554 immediately.
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} data-readdy-form id="emergency">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-red-5 0 focus:outline-none text-sm"
                  placeholder="Full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-red-5 0 focus:outline-none text-sm"
                  placeholder="+234 800 000 0000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Current Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-red-5 0 focus:outline-none text-sm"
                  placeholder="Address or landmark"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Emergency Type *
                </label>
                <div className="relative">
                  <select
                    name="emergencyType"
                    value={formData.emergencyType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-red-5 0 focus:outline-none text-sm appearance-none pr-8 cursor-pointer"
                  >
                    <option value="">Select emergency type</option>
                    <option value="break-in">Break-in/Burglary in Progress</option>
                    <option value="fire">Fire Emergency</option>
                    <option value="medical">Medical Emergency</option>
                    <option value="vehicle-theft">Vehicle Theft</option>
                    <option value="suspicious">Suspicious Activity</option>
                    <option value="system-alert">Security System Alert</option>
                    <option value="other">Other Emergency</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Emergency Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-red-5 0 focus:outline-none text-sm resize-none"
                  placeholder="Describe the emergency situation in detail..."
                />
                <div className="text-xs text-gray-500 mt-1">
                  {formData.description.length}/500 characters
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-red-600 hover:bg-red-7

                0 disabled:bg-gray-600 text-white py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Sending Emergency Alert...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <i className="ri-alarm-warning-line mr-2"></i>
                    Send Emergency Alert
                  </div>
                )}
              </button>
              
              <a
                href="tel:+2348145540554"
                className="flex-shrink-0 bg-green-600 hover:bg-green-7

                0 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer text-center"
              >
                <i className="ri-phone-line mr-2"></i>
                Call Now
              </a>
            </div>

            <div className="mt-4 text-center text-xs text-gray-400">
              Emergency hotline: 08145540554 | Available 24/7
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
