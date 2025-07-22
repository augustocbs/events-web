'use client';

import { PageHeader, EventForm } from '@/components';
import { useEventCreation } from '@/hooks/useEventCreation';

export default function NewEventPage() {
  const { createEvent, loading } = useEventCreation();

  return (
    <div className="p-4">
      <PageHeader 
        title="Novo Evento"
        subtitle="Preencha os dados abaixo para criar um novo evento"
      />
      
      <EventForm 
        onSubmit={createEvent}
        loading={loading}
        submitButtonText="Criar Evento"
      />
    </div>
  );
}