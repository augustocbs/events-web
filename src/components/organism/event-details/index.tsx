'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import { api, Event, Participant } from '@/services/api';
import { SubscriptionFormData } from '@/configs';
import { AddParticipantForm, Button } from '@/components';
import {
  PageContainer,
  EventHeader,
  EventTitle,
  EventDescription,
  EventDate,
  ParticipantsSection,
  SectionHeader,
  SectionTitle,
  ParticipantsGrid,
  ParticipantCard,
  ParticipantName,
  ParticipantEmail,
  ParticipantPhone,
  EmptyState,
  LoadingContainer,
  LoadingText
} from './styles';

interface EventDetailsProps {
  eventId: string;
}

export function EventDetails({ eventId }: EventDetailsProps) {
  const router = useRouter();

  const [event, setEvent] = useState<Event | null>(null);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [loading, setLoading] = useState(true);
  const [addingParticipant, setAddingParticipant] = useState(false);

  const loadEventData = async () => {
    try {
      const eventIdNum = parseInt(eventId);
      const [eventData, participantsData] = await Promise.all([
        api.getEvent(eventIdNum),
        api.getEventParticipants(eventIdNum)
      ]);

      setEvent(eventData);
      setParticipants(participantsData);
    } catch (error) {
      console.error('Erro ao carregar dados do evento:', error);
      
      toast.error('Erro ao carregar dados do evento.');
    } finally {
      setLoading(false);
    }
  };

  
  const handleAddParticipant = async (data: SubscriptionFormData) => {
    try {
      setAddingParticipant(true);

      const participant = await api.createParticipant(data);

      await api.subscribeToEvent(parseInt(eventId), participant.id);

      const updatedParticipants = await api.getEventParticipants(parseInt(eventId));
      setParticipants(updatedParticipants);

      toast.success('Participante adicionado com sucesso!');

    } catch (error) {
      console.error('Erro ao adicionar participante:', error);
      
      toast.error('Erro ao adicionar participante. Tente novamente.');
    } finally {
      setAddingParticipant(false);
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  useEffect(() => {
    loadEventData();
  }, [eventId]);

  if (loading) {
    return (
      <PageContainer>
        <LoadingContainer>
          <LoadingText>Carregando evento...</LoadingText>
        </LoadingContainer>
      </PageContainer>
    );
  }

  if (!event) {
    return (
      <PageContainer>
        <EmptyState>Evento não encontrado</EmptyState>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <EventHeader>
        <EventTitle>{event.name}</EventTitle>
        <EventDescription>{event.description}</EventDescription>
        <EventDate>
          Data: {new Date(event.date).toLocaleDateString('pt-BR')} {new Date(event.date).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
        </EventDate>
      </EventHeader>

      <ParticipantsSection>
        <SectionHeader>
          <SectionTitle>Participantes ({participants.length})</SectionTitle>
        </SectionHeader>

        <AddParticipantForm
          onSubmit={handleAddParticipant}
          loading={addingParticipant}
        />

        {participants.length === 0 ? (
          <EmptyState>Nenhum participante inscrito ainda</EmptyState>
        ) : (
          <ParticipantsGrid>
            {participants.map((participant) => (
              <ParticipantCard key={participant.id}>
                <ParticipantName>{participant.name}</ParticipantName>
                <ParticipantEmail>{participant.email}</ParticipantEmail>
                <ParticipantPhone>{participant.phone}</ParticipantPhone>
              </ParticipantCard>
            ))}
          </ParticipantsGrid>
        )}
      </ParticipantsSection>

      <div className="mt-4 flex justify-end">
        <Button
          type="button"
          variant="secondary"
          onClick={handleGoBack}
          className="w-1/4"
        >
          Voltar
        </Button>
      </div>
    </PageContainer>
  );
}