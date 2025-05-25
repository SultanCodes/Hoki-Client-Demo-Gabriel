
import React, { useEffect, useState } from 'react';
import TimelineEvent from './TimelineEvent';
import Spinner from '../common/Spinner';

interface Event {
  id: string;
  type: 'email' | 'linkedin' | 'sms' | 'calls';
  message: string;
  time: string;
  status?: 'success' | 'error' | 'warning';
}

const Timeline: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock data for initial display
  const mockEvents: Event[] = [
    { id: '1', type: 'email', message: 'Follow-up email sent to John Smith', time: '5 mins ago', status: 'success' },
    { id: '2', type: 'linkedin', message: 'Connection request sent to Sarah Davis', time: '10 mins ago' },
    { id: '3', type: 'calls', message: 'Call scheduled with Mike Johnson', time: '30 mins ago', status: 'warning' },
    { id: '4', type: 'sms', message: 'SMS reminder sent to David Wilson', time: '1 hour ago', status: 'success' },
    { id: '5', type: 'email', message: 'Email bounced: invalid address for tech@example.com', time: '2 hours ago', status: 'error' },
    { id: '6', type: 'linkedin', message: 'Profile viewed by Jane Anderson', time: '3 hours ago' },
    { id: '7', type: 'sms', message: 'SMS delivery failed to +1234567890', time: '4 hours ago', status: 'error' },
    { id: '8', type: 'email', message: 'Email opened by robert@example.com', time: '5 hours ago', status: 'success' },
  ];

  useEffect(() => {
    // Simulate WebSocket connection
    setTimeout(() => {
      setEvents(mockEvents);
      setLoading(false);
    }, 1000);

    // Websocket would be implemented here in production
    // const socket = new WebSocket('ws://example.com/events');
    // socket.onmessage = (event) => {
    //   const newEvent = JSON.parse(event.data);
    //   setEvents(prev => [newEvent, ...prev]);
    // }
    // return () => socket.close();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm h-[calc(100vh-13rem)] overflow-y-auto">
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-semibold text-neutral-dark">Global Timeline</h2>
        <p className="text-sm text-neutral-dark/70">Real-time activity across all channels</p>
      </div>
      <div className="p-4">
        {events.map((event) => (
          <TimelineEvent 
            key={event.id}
            type={event.type}
            message={event.message}
            time={event.time}
            status={event.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
