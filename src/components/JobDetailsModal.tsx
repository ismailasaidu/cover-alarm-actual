import { useState, useEffect } from 'react';

interface JobDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: {
    id: number;
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
    description: string;
    requirements: string[];
    benefits: string[];
    featured: boolean;
  } | null;
}

export default function JobDetailsModal({ isOpen, onClose, job }: JobDetailsModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen || !job) return null;

  const departments = [
    { id: 'engineering', name: 'Engineering' },
    { id: 'security', name: 'Security Operations' },
    { id: 'sales', name: 'Sales & Marketing' },
    { id: 'support', name: 'Customer Support' }
  ];

  const departmentName = departments.find(d => d.id === job.department)?.name || job.department;

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`bg-gray-900 border border-gray-700 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
          isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex justify-between items-start">
          <div className="flex-1">
            {job.featured && (
              <div className="mb-3">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  FEATURED POSITION
                </span>
              </div>
            )}
            <h2 className="text-2xl font-bold text-white mb-2">{job.title}</h2>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center">
                <i className="ri-building-line mr-1"></i>
                {departmentName}
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
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors cursor-pointer ml-4"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Job Description */}
          <div>
            <h3 className="text-lg font-bold text-blue-400 mb-3">Job Description</h3>
            <p className="text-gray-300 leading-relaxed">{job.description}</p>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="text-lg font-bold text-blue-400 mb-4">Requirements</h3>
            <ul className="space-y-3">
              {job.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <i className="ri-checkbox-circle-line text-green-400 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-lg font-bold text-green-400 mb-4">Benefits & Perks</h3>
            <ul className="space-y-3">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <i className="ri-star-line text-yellow-400 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Information */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-purple-400 mb-4">What You'll Be Doing</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-300">
              <div>
                <h4 className="font-semibold text-white mb-2">Daily Responsibilities:</h4>
                <ul className="space-y-1">
                  {job.department === 'engineering' && (
                    <>
                      <li>• Develop and maintain security software systems</li>
                      <li>• Collaborate with cross-functional teams</li>
                      <li>• Code review and technical documentation</li>
                      <li>• Participate in agile development processes</li>
                    </>
                  )}
                  {job.department === 'security' && (
                    <>
                      <li>• Monitor security systems and alerts</li>
                      <li>• Respond to security incidents</li>
                      <li>• Coordinate with emergency services</li>
                      <li>• Maintain security equipment</li>
                    </>
                  )}
                  {job.department === 'sales' && (
                    <>
                      <li>• Identify and pursue new business opportunities</li>
                      <li>• Present solutions to potential clients</li>
                      <li>• Manage customer relationships</li>
                      <li>• Achieve monthly and quarterly targets</li>
                    </>
                  )}
                  {job.department === 'support' && (
                    <>
                      <li>• Provide technical support to customers</li>
                      <li>• Resolve customer issues and complaints</li>
                      <li>• Maintain customer satisfaction metrics</li>
                      <li>• Document support interactions</li>
                    </>
                  )}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Growth Opportunities:</h4>
                <ul className="space-y-1">
                  <li>• Leadership development programs</li>
                  <li>• Technical certification support</li>
                  <li>• Cross-department collaboration</li>
                  <li>• Conference and training attendance</li>
                  <li>• Mentorship programs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Application Section */}
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-4">Ready to Apply?</h3>
            <p className="text-gray-300 mb-6">
              Join our mission to protect Nigeria's communities and businesses. Send us your resume and let's start the conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:careers@coveralarm.com?subject=Application for ${job.title}&body=Dear CoverAlarm Team,%0D%0A%0D%0AI am interested in applying for the ${job.title} position. Please find my resume attached.%0D%0A%0D%0AKey qualifications:%0D%0A- [Add your relevant experience]%0D%0A- [Add your skills]%0D%0A- [Add your achievements]%0D%0A%0D%0AI look forward to discussing how I can contribute to your team.%0D%0A%0D%0ABest regards`}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center whitespace-nowrap"
              >
                <i className="ri-mail-line mr-2"></i>
                Apply Now
              </a>
              <a
                href="https://calendly.com/coveralarm/career-chat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-green-600 text-green-400 hover:bg-green-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center whitespace-nowrap"
              >
                <i className="ri-calendar-line mr-2"></i>
                Schedule Chat
              </a>
            </div>
            <div className="text-center mt-4 text-sm text-gray-400">
              Questions? Email us at careers@coveralarm.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}