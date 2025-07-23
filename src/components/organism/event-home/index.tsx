'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { api, Event } from '@/services/api';
import { EventsTable, EventsHeader, Button } from '@/components';

import { PageContainer, LoadingContainer, LoadingText } from './styles';

export function EventHome() {
  const router = useRouter();

  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const eventsData = await api.getEvents();
        setEvents(eventsData);
      } catch (error) {
        console.error('Erro ao carregar eventos:', error);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  const handleGoBack = () => {
    router.back();
  };

  const handleGoNewEvent = () => {
    router.push('/eventos/novo');
  };

  if (loading) {
    return (
      <PageContainer>
        <LoadingContainer>
          <LoadingText>Carregando eventos...</LoadingText>
        </LoadingContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <EventsHeader title="Eventos" />
      <EventsTable events={events} />

      <div className="mt-4 flex justify-end gap-4">
        <Button
          type="button"
          variant="primary"
          onClick={handleGoNewEvent}
          className="w-1/6"
        >
          Novo Evento
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={handleGoBack}
          className="w-1/6"
        >
          Voltar
        </Button>
      </div>
    </PageContainer>
  );
}