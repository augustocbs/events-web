import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/services/api';
import { SubscriptionFormData } from '@/configs';

export function useSubscription() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const createSubscription = async (data: SubscriptionFormData) => {
    try {
      setLoading(true);
      
      const participant = await api.createParticipant(data);
      
      await api.subscribeToEvent(1, participant.id);
      
      router.push('/eventos/1');
    } catch (error) {
      console.error('Erro ao criar inscrição:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    createSubscription,
    loading
  };
}