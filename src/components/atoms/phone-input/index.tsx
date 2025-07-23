import { forwardRef, InputHTMLAttributes } from 'react';
import { InputContainer, Label, StyledInput, ErrorMessage } from './styles';

interface PhoneInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  error?: string;
}

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ label, error, id, ...props }, ref) => {
    const formatPhone = (value: string) => {
      const numbers = value.replace(/\D/g, '');
      
      if (numbers.length <= 2) {
        return numbers;
      } else if (numbers.length <= 3) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
      } else if (numbers.length <= 7) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 3)} ${numbers.slice(3)}`;
      } else {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 3)} ${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const formatted = formatPhone(e.target.value);
      e.target.value = formatted;
      props.onChange?.(e);
    };

    return (
      <InputContainer>
        <Label htmlFor={id}>{label}</Label>
        <StyledInput
          ref={ref}
          id={id}
          type="tel"
          onChange={handleChange}
          maxLength={16}
          {...props}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputContainer>
    );
  }
);

PhoneInput.displayName = 'PhoneInput';