import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import { api } from '@/services/api';
import { SubscriptionFormData } from '@/configs';

export function useSubscriptionCreation() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const createSubscription = async (data: SubscriptionFormData) => {
    try {
      setLoading(true);
      
      await api.createParticipant(data);
      
      toast.success('Inscrição realizada com sucesso!');
      
      router.push('/');
    } catch (error) {
      console.error('Erro ao criar inscrição:', error);
      
      toast.error('Erro ao realizar inscrição. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return {
    createSubscription,
    loading
  };
}