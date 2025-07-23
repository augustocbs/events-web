'use client';

import { useEffect, useState } from 'react';
import { api, Event } from '@/services/api';
import { EventsTable, EventsHeader } from '@/components';
import { PageContainer, LoadingContainer, LoadingText } from './styles';

export function EventHome() {
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
    </PageContainer>
  );
}