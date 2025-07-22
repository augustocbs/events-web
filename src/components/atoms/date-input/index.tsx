import { forwardRef, InputHTMLAttributes } from 'react';
import { InputContainer, Label, StyledDateInput, ErrorMessage } from './styles';

interface DateInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  error?: string;
}

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  ({ label, error, id, ...props }, ref) => {
    return (
      <InputContainer>
        <Label htmlFor={id}>{label}</Label>
        <StyledDateInput
          ref={ref}
          id={id}
          type="date"
          {...props}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputContainer>
    );
  }
);

DateInput.displayName = 'DateInput';