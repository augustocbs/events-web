'use client'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { subscriptionSchema, SubscriptionFormData } from '@/configs';
import { TextInput, Button, PhoneInput } from '@/components';

interface SubscriptionFormProps {
  onSubmit: (data: SubscriptionFormData) => Promise<void>;
  loading?: boolean;
  initialData?: Partial<SubscriptionFormData>;
  submitButtonText?: string;
}

export function SubscriptionForm({ 
  onSubmit, 
  loading = false, 
  initialData,
  submitButtonText = 'Inscrever-se'
}: SubscriptionFormProps) {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<SubscriptionFormData>({
    resolver: yupResolver(subscriptionSchema),
    defaultValues: {
      ...initialData,
    },
  });

  const isLoading = loading || isSubmitting;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 max-w-md">
      <TextInput
        label="Nome"
        id="name"
        error={errors.name?.message}
        disabled={isLoading}
        {...register('name')}
      />

      <TextInput
        label="Email"
        id="email"
        error={errors.email?.message}
        disabled={isLoading}
        {...register('email')}
      />

      <PhoneInput
        label="Telefone"
        id="phone"
        error={errors.phone?.message}
        disabled={isLoading}
        {...register('phone')}
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