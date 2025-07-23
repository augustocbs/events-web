'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { subscriptionSchema, SubscriptionFormData } from '@/configs';
import { TextInput, Button, PhoneInput } from '@/components';
import { FormContainer, FormTitle } from './styles';

interface AddParticipantFormProps {
  onSubmit: (data: SubscriptionFormData) => Promise<void>;
  loading?: boolean;
}

export function AddParticipantForm({ onSubmit, loading = false }: AddParticipantFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset
  } = useForm<SubscriptionFormData>({
    resolver: yupResolver(subscriptionSchema),
  });

  const isLoading = loading || isSubmitting;

  const handleFormSubmit = async (data: SubscriptionFormData) => {
    await onSubmit(data);
    reset();
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <Button onClick={() => setIsOpen(true)}>
        Adicionar Participante
      </Button>
    );
  }

  return (
    <FormContainer>
      <FormTitle>Adicionar Novo Participante</FormTitle>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="grid gap-4">
        <TextInput
          label="Nome"
          id="name"
          error={errors.name?.message}
          {...register('name')}
        />

        <TextInput
          label="Email"
          id="email"
          error={errors.email?.message}
          {...register('email')}
        />

        <PhoneInput
          label="Telefone"
          id="phone"
          error={errors.phone?.message}
          {...register('phone')}
        />

        <div className="flex gap-2">
          <Button type="submit" loading={isLoading}>
            Adicionar
          </Button>
          <Button 
            type="button" 
            onClick={() => setIsOpen(false)}
            variant="secondary"
          >
            Cancelar
          </Button>
        </div>
      </form>
    </FormContainer>
  );
}