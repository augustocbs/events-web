'use client';

import { forwardRef, InputHTMLAttributes } from 'react';
import { useMask } from '@react-input/mask';
import { InputContainer, Label, StyledInput, ErrorMessage } from './styles';

interface PhoneInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  error?: string;
}

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ label, error, id, ...props }, ref) => {
    const inputRef = useMask({
      mask: '(__) _ ____-____',
      replacement: { _: /\d/ },
    });

    return (
      <InputContainer>
        <Label htmlFor={id}>{label}</Label>
        <StyledInput
          ref={(node) => {
            inputRef.current = node;
            if (typeof ref === 'function') {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          id={id}
          type="tel"
          {...props}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputContainer>
    );
  }
);

PhoneInput.displayName = 'PhoneInput';