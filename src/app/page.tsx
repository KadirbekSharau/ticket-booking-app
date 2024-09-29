"use client"; 

import { useEffect } from 'react';
import { useUnit } from 'effector-react';
import { $events, fetchEvents } from '../features/event/store';

export default function Home() {
  const events = useUnit($events);

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Events</h1>
      {events.map(event => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}
