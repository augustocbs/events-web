'use client';

import { useRouter } from 'next/navigation';

import { Button, PageHeader, SubscriptionForm } from '@/components';
import { useSubscription } from '@/hooks/useSubscription';

export default function SubscriptionPage() {
  const router = useRouter();

  const { createSubscription, loading } = useSubscription();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <PageHeader
          title="Inscrição no Evento"
          subtitle="Preencha os dados abaixo para se inscrever no evento"
        />

        <SubscriptionForm
          onSubmit={createSubscription}
          loading={loading}
          submitButtonText="Realizar Inscrição"
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