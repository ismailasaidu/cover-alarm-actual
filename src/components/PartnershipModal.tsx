import { useState } from 'react';

interface PartnershipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PartnershipModal({ isOpen, onClose }: PartnershipModalProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    businessType: '',
    experience: '',
    partnershipType: '',
    territory: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Validate required fields
      const requiredFields = ['companyName', 'contactName', 'email', 'phone', 'businessType', 'experience', 'partnershipType', 'territory', 'description'];
      const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
      
      if (missingFields.length > 0) {
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      // Validate description length
      if (formData.description.length > 500) {
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      const formDataToSend = new FormData();
      formDataToSend.append('companyName', formData.companyName);
      formDataToSend.append('contactName', formData.contactName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('website', formData.website);
      formDataToSend.append('businessType', formData.businessType);
      formDataToSend.append('experience', formData.experience);
      formDataToSend.append('partnershipType', formData.partnershipType);
      formDataToSend.append('territory', formData.territory);
      formDataToSend.append('description', formData.description);

      const response = await fetch('https://readdy.ai/api/form/d40cpj6qo7rdq5n89t40', {
        method: 'POST',
        body: formDataToSend
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
        // Reset form after successful submission
        setFormData({
          companyName: '',
          contactName: '',
          email: '',
          phone: '',
          website: '',
          businessType: '',
          experience: '',
          partnershipType: '',
          territory: '',
          description: ''
        });
        
        // Auto-close modal after 3 seconds
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting partnership form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Partnership Application
              </h2>
              <p className="text-gray-400 mt-2">Join Nigeria's leading security technology network</p>
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
          </div>

          {submitStatus === 'success' && (
            <div className="bg-green-900/20 border border-green-500 rounded-lg p-4 mb-6">
              <div className="flex items-center text-green-400">
                <i className="ri-checkbox-circle-line mr-3 text-xl"></i>
                <div>
                  <div className="font-semibold">Partnership Application Submitted Successfully!</div>
                  <div className="text-sm text-green-300 mt-1">
                    Thank you for your interest! Our partnership team will review your application and contact you within 48 hours.
                  </div>
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-900/20 border border-red-500 rounded-lg p-4 mb-6">
              <div className="flex items-center text-red-400">
                <i className="ri-error-warning-line mr-3 text-xl"></i>
                <div>
                  <div className="font-semibold">Submission Error</div>
                  <div className="text-sm text-red-300 mt-1">
                    Please check all required fields are filled correctly and try again. If the problem persists, contact us directly.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Partnership Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-4 text-center">
              <i className="ri-money-dollar-circle-line text-3xl text-blue-400 mb-2"></i>
              <h3 className="font-semibold text-white mb-1">High Commissions</h3>
              <p className="text-sm text-blue-300">Up to 25% on all sales</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-lg p-4 text-center">
              <i className="ri-graduation-cap-line text-3xl text-purple-400 mb-2"></i>
              <h3 className="font-semibold text-white mb-1">Training & Support</h3>
              <p className="text-sm text-purple-300">Comprehensive programs</p>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-lg p-4 text-center">
              <i className="ri-map-pin-line text-3xl text-green-400 mb-2"></i>
              <h3 className="font-semibold text-white mb-1">Exclusive Territory</h3>
              <p className="text-sm text-green-300">Protected territory rights</p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-500/30 rounded-lg p-4 text-center">
              <i className="ri-presentation-line text-3xl text-orange-400 mb-2"></i>
              <h3 className="font-semibold text-white mb-1">Marketing Materials</h3>
              <p className="text-sm text-orange-300">Professional sales tools</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} data-readdy-form id="partnership-application">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">
                  Company Information
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none text-sm"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none text-sm"
                    placeholder="Full name of contact person"
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
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none text-sm"
                    placeholder="business@company.com"
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
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none text-sm"
                    placeholder="+234 800 000 0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company Website
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none text-sm"
                    placeholder="https://www.yourcompany.com"
                  />
                </div>
              </div>

              {/* Business Details */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">
                  Business Details
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Business Type *
                  </label>
                  <div className="relative">
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none text-sm appearance-none pr-8 cursor-pointer"
                    >
                      <option value="">Select business type</option>
                      <option value="security-company">Security Company</option>
                      <option value="technology-integrator">Technology Integrator</option>
                      <option value="electrical-contractor">Electrical Contractor</option>
                      <option value="retail-business">Retail Business</option>
                      <option value="consulting-firm">Consulting Firm</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-gray-400"></i>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Years of Experience *
                  </label>
                  <div className="relative">
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none text-sm appearance-none pr-8 cursor-pointer"
                    >
                      <option value="">Select experience level</option>
                      <option value="0-2-years">0-2 years</option>
                      <option value="3-5-years">3-5 years</option>
                      <option value="6-10-years">6-10 years</option>
                      <option value="10-plus-years">10+ years</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-gray-400"></i>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Partnership Type *
                  </label>
                  <div className="relative">
                    <select
                      name="partnershipType"
                      value={formData.partnershipType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none text-sm appearance-none pr-8 cursor-pointer"
                    >
                      <option value="">Select partnership type</option>
                      <option value="authorized-dealer">Authorized Dealer</option>
                      <option value="system-integrator">System Integrator</option>
                      <option value="reseller">Reseller</option>
                      <option value="distributor">Distributor</option>
                      <option value="installation-partner">Installation Partner</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-gray-400"></i>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Territory *
                  </label>
                  <input
                    type="text"
                    name="territory"
                    value={formData.territory}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none text-sm"
                    placeholder="e.g., Lagos State, Abuja, Port Harcourt"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Business Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    maxLength={500}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none text-sm resize-none"
                    placeholder="Tell us about your business, current clients, and why you want to partner with CoverAlarm..."
                  />
                  <div className="text-xs text-gray-500 mt-1">
                    {formData.description.length}/500 characters
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 text-white py-4 rounded-lg font-semibold transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <i className="ri-loader-4-line animate-spin mr-3"></i>
                    Submitting Partnership Application...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <i className="ri-handshake-line mr-3"></i>
                    Submit Partnership Application
                  </div>
                )}
              </button>
              
              <p className="text-xs text-gray-400 mt-4 text-center">
                By submitting this application, you agree to our partnership terms and conditions. 
                Our team will review your application and contact you within 48 hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
