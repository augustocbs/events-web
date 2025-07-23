import * as yup from 'yup';

export const eventSchema = yup.object({
  name: yup
    .string()
    .required('Nome é obrigatório')
    .min(3, 'Nome deve ter pelo menos 3 caracteres'),
  description: yup
    .string()
    .required('Descrição é obrigatória')
    .min(10, 'Descrição deve ter pelo menos 10 caracteres'),
  date: yup
    .string()
    .required('Data é obrigatória')
    .test('datetime-format', 'Data deve ter o formato DD/MM/AAAA HH:MM', (value) => {
      if (!value) return false;
      
      const datetimeRegex = /^(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2})$/;
      const match = value.match(datetimeRegex);
      
      if (!match) return false;
      
      const [, day, month, year, hour, minute] = match;
      
      const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute));
      
      const isValidDate = date.getDate() == parseInt(day) && 
                         date.getMonth() == parseInt(month) - 1 && 
                         date.getFullYear() == parseInt(year);
      
      const isValidTime = parseInt(hour) >= 0 && parseInt(hour) <= 23 &&
                         parseInt(minute) >= 0 && parseInt(minute) <= 59;
      
      return isValidDate && isValidTime;
    }),
});

export type EventFormData = yup.InferType<typeof eventSchema>;