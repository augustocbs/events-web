import * as yup from 'yup';

export const subscriptionSchema = yup.object({
  name: yup
    .string()
    .required('Nome é obrigatório')
    .min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: yup
    .string()
    .required('Email é obrigatório')
    .email('Email deve ter um formato válido'),
  phone: yup
    .string()
    .required('Telefone é obrigatório')
    .test('phone-format', 'Telefone deve ter o formato (99) 9 9999-9999', (value) => {
      if (!value) return false;
      const numbers = value.replace(/\D/g, '');
      return numbers.length === 11;
    }),
});

export type SubscriptionFormData = yup.InferType<typeof subscriptionSchema>;