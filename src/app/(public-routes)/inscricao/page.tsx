'use client';

import { PageHeader, SubscriptionForm } from '@/components';
import { useSubscription } from '@/hooks/useSubscription';

export default function SubscriptionPage() {
  const { createSubscription, loading } = useSubscription();

  return (
    <div className="p-4">
      <PageHeader 
        title="Inscrição no Evento"
        subtitle="Preencha os dados abaixo para se inscrever no evento"
      />
      
      <SubscriptionForm
        onSubmit={createSubscription}
        loading={loading}
        submitButtonText="Realizar Inscrição"
      />
    </div>
  );
}