import { useState } from 'react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    propertyType: '',
    propertySize: '',
    services: [] as string[],
    budget: '',
    timeline: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const serviceOptions = [
    'AI Video Monitoring',
    'GPS Fleet Tracking',
    'Fire Detection',
    'Fuel Monitoring',
    'Drone Surveillance',
    'Armed Response',
    'Government Solutions',
    'Government Solutions'
  ];

  const services = [
    'AI Video Analytics',
    'GPS Fleet Tracking', 
    'Fire Detection',
    'Fuel Monitoring',
    'Vehicle AI CCTV',
    'AI Video Monitoring',
    'Drone Surveillance',
    'Government Solutions',
    'Government Solutions',
    'BNPL Solutions'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('company', formData.company);
      formDataToSend.append('propertyType', formData.propertyType);
      formDataToSend.append('propertySize', formData.propertySize);
      formDataToSend.append('services', formData.services.join(', '));
      formDataToSend.append('budget', formData.budget);
      formDataToSend.append('timeline', formData.timeline);
      formDataToSend.append('additionalInfo', formData.additionalInfo);

      const response = await fetch('https://readdy.ai/api/form/d34ipeir9t98gmi325c0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend.toString()
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
        setFormData({
          name: '', email: '', phone: '', company: '', propertyType: '',
          propertySize: '', services: [], budget: '', timeline: '', additionalInfo: ''
        });
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

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Request Quote</h2>
            <button 
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>

          {submitStatus === 'success' && (
            <div className="bg-green-900/20 border border-green-500 rounded-lg p-4 mb-6">
              <div className="flex items-center text-green-400">
                <i className="ri-checkbox-circle-line mr-2"></i>
                Quote request submitted! Our team will contact you within 2 hours.
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-900/20 border border-red-500 rounded-lg p-4 mb-6">
              <div className="flex items-center text-red-400">
                <i className="ri-error-warning-line mr-2"></i>
                Failed to submit quote request. Please try again.
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} data-readdy-form id="quote">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus-border-blue-500 focus:outline-none text-sm"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus-border-blue-500 focus:outline-none text-sm"
                  placeholder="your.email@company.com"
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
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus-border-blue-500 focus:outline-none text-sm"
                  placeholder="+234 800 000 0000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus-border-blue-500 focus:outline-none text-sm"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Property Type *
                </label>
                <div className="relative">
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focusborder-blue-500 focus:outline-none text-sm appearance-none pr-8 cursor-pointer"
                  >
                    <option value="">Select property type</option>
                    <option value="residential">Residential Home</option>
                    <option value="commercial">Commercial Building</option>
                    <option value="industrial">Industrial Facility</option>
                    <option value="government">Government Building</option>
                    <option value="hospital">Hospital/Healthcare</option>
                    <option value="school">School/Educational</option>
                    <option value="warehouse">Warehouse/Storage</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Property Size *
                </label>
                <div className="relative">
                  <select
                    name="propertySize"
                    value={formData.propertySize}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focusborder-blue-500 focus:outline-none text-sm appearance-none pr-8 cursor-pointer"
                  >
                    <option value="">Select property size</option>
                    <option value="small">Small (&lt; 1,000 sqm)</option>
                    <option value="medium">Medium (1,000 - 5,000 sqm)</option>
                    <option value="large">Large (5,000 - 20,000 sqm)</option>
                    <option value="enterprise">Enterprise (&gt; 20,000 sqm)</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Services Needed *
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {serviceOptions.map((service) => (
                  <label key={service} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 flex items-center justify-center border-2 rounded mr-3 transition-colors ${
                      formData.services.includes(service)
                        ? 'bg-blue-600 border-blue-600'
                        : 'border-gray-600 hover:border-blue-500'
                    }`}>
                      {formData.services.includes(service) && (
                        <i className="ri-check-line text-white text-sm"></i>
                      )}
                    </div>
                    <span className="text-gray-300 text-sm">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Budget Range
                </label>
                <div className="relative">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focusborder-blue-500 focus:outline-none text-sm appearance-none pr-8 cursor-pointer"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-100k">Under ₦100,000</option>
                    <option value="100k-500k">₦100,000 - ₦500,000</option>
                    <option value="500k-1m">₦500,000 - ₦1,000,000</option>
                    <option value="1m-5m">₦1,000,000 - ₦5,000,000</option>
                    <option value="over-5m">Over ₦5,000,000</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Timeline
                </label>
                <div className="relative">
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focusborder-blue-500 focus:outline-none text-sm appearance-none pr-8 cursor-pointer"
                  >
                    <option value="">Select timeline</option>
                    <option value="urgent">Urgent (Within 1 week)</option>
                    <option value="asap">ASAP (Within 1 month)</option>
                    <option value="planned">Planned (1-3 months)</option>
                    <option value="future">Future consideration</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Additional Information
              </label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                maxLength={500}
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focusborder-blue-500 focus:outline-none text-sm resize-none"
                placeholder="Any specific requirements or questions..."
              />
              <div className="text-xs text-gray-500 mt-1">
                {formData.additionalInfo.length}/500 characters
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || formData.services.length === 0}
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <i className="ri-loader-4-line animate-spin mr-2"></i>
                  Submitting Request...
                </div>
              ) : (
                'Get My Quote'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
