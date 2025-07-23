import { forwardRef, InputHTMLAttributes } from 'react';
import { InputContainer, Label, StyledInput, ErrorMessage } from './styles';

interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  error?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, id, ...props }, ref) => {
    return (
      <InputContainer>
        <Label htmlFor={id}>{label}</Label>
        <StyledInput
          ref={ref}
          id={id}
          type="text"
          {...props}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputContainer>
    );
  }
);

TextInput.displayName = 'TextInput';