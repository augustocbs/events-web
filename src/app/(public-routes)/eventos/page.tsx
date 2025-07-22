'use client';

import { useEffect, useState } from 'react';
import { api, Event } from '@/services/api';
import Link from 'next/link';

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    api.getEvents().then(setEvents);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Eventos</h1>
      <Link href="/eventos/novo" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">
        Novo Evento
      </Link>
      <div className="grid gap-4">
        {events.map((event) => (
          <div key={event.id} className="border p-4 rounded">
            <h2 className="text-xl">{event.name}</h2>
            <p>{event.description}</p>
            <p>Data: {new Date(event.date).toLocaleDateString()}</p>
            <Link href={`/eventos/${event.id}`} className="text-blue-500">
              Ver detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
