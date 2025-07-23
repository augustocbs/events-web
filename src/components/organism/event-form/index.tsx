'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { eventSchema, EventFormData } from '@/configs';
import { TextInput, Button, DateInput } from '@/components';

interface EventFormProps {
  onSubmit: (data: EventFormData) => Promise<void>;
  loading?: boolean;
  initialData?: Partial<EventFormData>;
  submitButtonText?: string;
}

export function EventForm({ 
  onSubmit, 
  loading = false, 
  initialData,
  submitButtonText = 'Criar Evento'
}: EventFormProps) {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<EventFormData>({
    resolver: yupResolver(eventSchema),
    defaultValues: {
      ...initialData,
    },
  });

  const isLoading = loading || isSubmitting;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 max-w-md">
      <TextInput
        label="Nome do Evento"
        id="name"
        error={errors.name?.message}
        {...register('name')}
      />

      <TextInput
        label="Descrição"
        id="description"
        error={errors.description?.message}
        {...register('description')}
      />

      <DateInput
        label="Data e Hora do Evento"
        id="date"
        error={errors.date?.message}
        {...register('date')}
      />

      <Button 
        type="submit" 
        loading={isLoading}
      >
        {submitButtonText}
      </Button>
    </form>
  );
}