import * as yup from 'yup';

export const eventSchema = yup.object().shape({
  name: yup.string().required().min(3), 
  description: yup.string().required().min(1),
  date: yup.string().required().max(12),
});

export type EventFormData = yup.InferType<typeof eventSchema>;