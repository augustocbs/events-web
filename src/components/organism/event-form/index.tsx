import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { eventSchema, EventFormData } from '@/configs/yup';
import { TextInput, DateInput, Textarea, Button } from '@/components';

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
  // Formatação simples para input type="date" (apenas YYYY-MM-DD)
  const formatInitialDate = (date: any) => {
    if (!date) return '';
    
    try {
      const dateObj = new Date(date);
      if (isNaN(dateObj.getTime())) return '';
      
      return dateObj.toISOString().split('T')[0]; // Pega apenas YYYY-MM-DD
    } catch {
      return '';
    }
  };

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<EventFormData>({
    resolver: yupResolver(eventSchema),
    defaultValues: {
      ...initialData,
      date: initialData?.date ? formatInitialDate(initialData.date) : '',
    },
  });

  const isLoading = loading || isSubmitting;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 max-w-md">
      <TextInput
        label="Nome"
        id="name"
        error={errors.name?.message}
        {...register('name')}
      />

      <Textarea
        label="Descrição"
        id="description"
        error={errors.description?.message}
        {...register('description')}
      />

      <DateInput
        label="Data"
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