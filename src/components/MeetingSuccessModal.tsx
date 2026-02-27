
import { useState } from 'react';

interface MeetingSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  meetingDetails: {
    service: string;
    date: string;
    time: string;
    name: string;
    email: string;
  };
}

const MeetingSuccessModal = ({ isOpen, onClose, meetingDetails }: MeetingSuccessModalProps) => {
  const [copied, setCopied] = useState(false);
  const meetingLink = 'https://meet.zoho.com/kzru-wvr-bxw';

  const copyMeetingLink = async () => {
    try {
      await navigator.clipboard.writeText(meetingLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const openMeeting = () => {
    window.open(meetingLink, '_blank');
  };

  const addToCalendar = () => {
    const startDate = new Date(`${meetingDetails.date}T${meetingDetails.time}`);
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // 1 hour later
    
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`CoverAlarm Security Meeting - ${meetingDetails.service}`)}&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${encodeURIComponent(`Meeting with CoverAlarm Security for ${meetingDetails.service}.\n\nMeeting Link: ${meetingLink}\n\nContact: ${meetingDetails.name} (${meetingDetails.email})`)}&location=${encodeURIComponent(meetingLink)}`;
    
    window.open(calendarUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-lg w-full">
        <div className="p-6">
          {/* Success Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-check-line text-3xl text-green-600"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Meeting Successfully Scheduled!</h2>
            <p className="text-gray-600">Your security consultation has been booked. We'll contact you shortly to confirm.</p>
          </div>

          {/* Meeting Details */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-900 mb-3">Meeting Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-blue-800">
                <i className="ri-service-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                <span className="font-medium">Service:</span>
                <span className="ml-2">{meetingDetails.service}</span>
              </div>
              <div className="flex items-center text-blue-800">
                <i className="ri-calendar-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                <span className="font-medium">Date:</span>
                <span className="ml-2">{new Date(meetingDetails.date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center text-blue-800">
                <i className="ri-time-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                <span className="font-medium">Time:</span>
                <span className="ml-2">{new Date(`2000-01-01T${meetingDetails.time}`).toLocaleTimeString('en-US', { 
                  hour: 'numeric', 
                  minute: '2-digit', 
                  hour12: true 
                })}</span>
              </div>
              <div className="flex items-center text-blue-800">
                <i className="ri-user-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                <span className="font-medium">Contact:</span>
                <span className="ml-2">{meetingDetails.name}</span>
              </div>
            </div>
          </div>

          {/* Meeting Link */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Meeting Link</h3>
            <div className="flex items-center justify-between bg-white border rounded-lg p-3">
              <span className="text-sm text-gray-600 truncate mr-3">{meetingLink}</span>
              <button
                onClick={copyMeetingLink}
                className="flex items-center px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className={`${copied ? 'ri-check-line text-green-600' : 'ri-file-copy-line text-gray-600'} mr-1`}></i>
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-yellow-900 mb-3">What Happens Next?</h3>
            <div className="space-y-2 text-sm text-yellow-800">
              <div className="flex items-start">
                <i className="ri-number-1 mr-3 mt-0.5 w-4 h-4 flex items-center justify-center"></i>
                <span>We'll send a confirmation email with meeting details within 15 minutes</span>
              </div>
              <div className="flex items-start">
                <i className="ri-number-2 mr-3 mt-0.5 w-4 h-4 flex items-center justify-center"></i>
                <span>Our security expert will call you 24 hours before the meeting to confirm</span>
              </div>
              <div className="flex items-start">
                <i className="ri-number-3 mr-3 mt-0.5 w-4 h-4 flex items-center justify-center"></i>
                <span>Join the meeting using the link above at your scheduled time</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={openMeeting}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap cursor-pointer"
            >
              <i className="ri-video-line mr-2"></i>
              Join Meeting Room Now
            </button>
            
            <button
              onClick={addToCalendar}
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium whitespace-nowrap cursor-pointer"
            >
              <i className="ri-calendar-add-line mr-2"></i>
              Add to Google Calendar
            </button>

            <button
              onClick={onClose}
              className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors font-medium whitespace-nowrap cursor-pointer"
            >
              Close
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-6 pt-4 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600 mb-2">Need to reschedule or have questions?</p>
            <div className="flex justify-center space-x-4 text-sm">
              <a href="tel:+2348123456789" className="text-blue-600 hover:text-blue-700 cursor-pointer">
                <i className="ri-phone-line mr-1"></i>
                Call Us
              </a>
              <a href="mailto:info@coveralarm.com" className="text-blue-600 hover:text-blue-700 cursor-pointer">
                <i className="ri-mail-line mr-1"></i>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingSuccessModal;
