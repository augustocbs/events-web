'use client';

import { useEffect, useState } from 'react';
import { api, Event, Participant } from '@/services/api';

export default function EventPage({ params }: { params: { id: string } }) {
  const [event, setEvent] = useState<Event | null>(null);
  const [participants, setParticipants] = useState<Participant[]>([]);

  useEffect(() => {
    const eventId = parseInt(params.id);
    api.getEvent(eventId).then(setEvent);
    api.getEventParticipants(eventId).then(setParticipants);
  }, [params.id]);

  if (!event) return <div>Carregando...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">{event.name}</h1>
      <p className="mb-4">{event.description}</p>
      <p className="mb-4">Data: {new Date(event.date).toLocaleDateString()}</p>

      <h2 className="text-xl mb-2">Participantes</h2>
      <div className="grid gap-2">
        {participants.map((participant) => (
          <div key={participant.id} className="border p-2 rounded">
            <p>{participant.name}</p>
            <p>{participant.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
