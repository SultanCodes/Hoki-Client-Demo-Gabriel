
import React from 'react';
import { Mail, MessageSquare, Phone, Linkedin } from 'lucide-react';

interface TimelineEventProps {
  type: 'email' | 'linkedin' | 'sms' | 'calls';
  message: string;
  time: string;
  status?: 'success' | 'error' | 'warning';
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ type, message, time, status }) => {
  const getIcon = () => {
    const iconProps = { size: 16 };
    
    switch (type) {
      case 'email':
        return <Mail {...iconProps} className="text-channel-email" />;
      case 'linkedin':
        return <Linkedin {...iconProps} className="text-channel-linkedin" />;
      case 'sms':
        return <MessageSquare {...iconProps} className="text-channel-sms" />;
      case 'calls':
        return <Phone {...iconProps} className="text-channel-calls" />;
      default:
        return null;
    }
  };

  const getStatusClass = () => {
    switch (status) {
      case 'success':
        return 'border-success';
      case 'error':
        return 'border-error';
      case 'warning':
        return 'border-warning';
      default:
        return 'border-gray-200';
    }
  };

  return (
    <div className={`flex py-3 border-l-2 pl-4 ${getStatusClass()}`}>
      <div className="mr-3">
        {getIcon()}
      </div>
      <div>
        <p className="text-sm text-neutral-dark">{message}</p>
        <p className="text-xs text-neutral-dark/60">{time}</p>
      </div>
    </div>
  );
};

export default TimelineEvent;
