// src/app/(public-routes)/eventos/novo/page.tsx
'use client';

import { useRouter } from 'next/navigation';

import { PageHeader, EventForm, Button } from '@/components';
import { useEventCreation } from '@/hooks/useEventCreation';

export default function NewEventPage() {
  const router = useRouter();
  
  const { createEvent, loading } = useEventCreation();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <PageHeader 
          title="Novo Evento"
          subtitle="Preencha os dados abaixo para criar um novo evento"
          centered
        />
        
        <EventForm 
          onSubmit={createEvent}
          loading={loading}
          submitButtonText="Criar Evento"
        />
        
        <div className="mt-4">
          <Button 
            type="button"
            variant="secondary"
            onClick={handleGoBack}
            className="w-full"
          >
            Voltar
          </Button>
        </div>
      </div>
    </div>
  );
}