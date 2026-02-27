
import { useState } from 'react';

interface LiveChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LiveChatModal({ isOpen, onClose }: LiveChatModalProps) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'agent',
      message: 'Hello! I\'m Habeebah from CoverAlarm Support. How can I help you today?',
      time: '9:45 AM'
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  if (!isOpen) return null;

  const quickReplies = [
    'I need an emergency response',
    'Request a security quote',
    'Technical support needed',
    'BNPL payment options',
    'System installation help'
  ];

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      message: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate agent response
    setTimeout(() => {
      let agentResponse = '';
      const lowerMessage = message.toLowerCase();

      if (lowerMessage.includes('emergency') || lowerMessage.includes('urgent')) {
        agentResponse = 'I understand this is urgent! For immediate emergencies, please call our hotline at +234-814-554-0554. I can also connect you with our emergency response team right now. Would you like me to initiate an emergency response?';
      } else if (lowerMessage.includes('quote') || lowerMessage.includes('price')) {
        agentResponse = 'I\'d be happy to help you get a custom quote! Our security solutions start from ₦45,000 with flexible payment options. Let me connect you with our sales team for a detailed assessment. What type of property do you need to secure?';
      } else if (lowerMessage.includes('technical') || lowerMessage.includes('support')) {
        agentResponse = 'Our technical team is standing by to help! Are you experiencing issues with an existing system, or do you need help with installation? I can escalate this to our Level 2 support immediately.';
      } else if (lowerMessage.includes('payment') || lowerMessage.includes('bnpl')) {
        agentResponse = 'Great question! We offer 0% interest BNPL plans. You can get full protection today and pay over 6 months. No hidden fees, instant approval. Would you like me to check your eligibility right now?';
      } else {
        agentResponse = 'Thank you for contacting CoverAlarm! I\'m here to help with any questions about our AI security systems, emergency response, or technical support. What specific area can I assist you with today?';
      }

      const agentMessage = {
        id: messages.length + 2,
        type: 'agent',
        message: agentResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-md w-full h-[600px] flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-700 flex justify-between items-center bg-gradient-to-r from-blue-900/30 to-gray-900 rounded-t-2xl">
          <div className="flex items-center">
            <div className="relative">
              <img 
                src="https://static.readdy.ai/image/f38dbee0b97d493b71475a98132a7b29/108a29a221043fcc36afec445428c8d4.png"
                alt="Support Agent"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900"></div>
            </div>
            <div className="ml-3">
              <h3 className="text-white font-semibold">Habeebah - Support Agent</h3>
              <div className="text-xs text-green-400 flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></div>
                Online now
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] ${
                msg.type === 'user' 
                  ? 'bg-blue-600 text-white rounded-l-lg rounded-tr-lg' 
                  : 'bg-gray-800 text-gray-300 rounded-r-lg rounded-tl-lg'
              } p-3`}>
                <p className="text-sm">{msg.message}</p>
                <div className={`text-xs mt-1 ${
                  msg.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {msg.time}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-800 text-gray-300 rounded-r-lg rounded-tl-lg p-3 max-w-[80%]">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Replies */}
        <div className="p-3 border-t border-gray-700">
          <div className="text-xs text-gray-400 mb-2">Quick replies:</div>
          <div className="flex flex-wrap gap-2">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                onClick={() => handleQuickReply(reply)}
                className="text-xs bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white px-3 py-1 rounded-full transition-colors cursor-pointer"
              >
                {reply}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(newMessage)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none text-sm"
            />
            <button
              onClick={() => handleSendMessage(newMessage)}
              disabled={!newMessage.trim()}
              className="w-10 h-10 flex items-center justify-center bg-blue-600 hover:bg-blue-7
                 0 disabled:bg-gray-600 text-white rounded-lg transition-colors cursor-pointer"
            >
              <i className="ri-send-plane-line"></i>
            </button>
          </div>
          <div className="text-xs text-gray-500 mt-2 text-center">
            🔒 End-to-end encrypted • Response time: &lt;2 minutes
          </div>
        </div>
      </div>
    </div>
  );
}
