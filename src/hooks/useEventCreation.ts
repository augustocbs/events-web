import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/services/api';
import { EventFormData } from '@/configs/yup';

export function useEventCreation() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const createEvent = async (data: EventFormData) => {
    setLoading(true);
    setError(null);
    
    try {
      await api.createEvent({
        ...data,
        date: new Date(data.date).toISOString(),
      });
      
      router.push('/eventos');
    } catch (err) {
      const errorMessage = 'Erro ao criar evento. Tente novamente.';
      setError(errorMessage);
      console.error('Erro ao criar evento:', err);
      
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    createEvent,
    loading,
    error,
  };
}