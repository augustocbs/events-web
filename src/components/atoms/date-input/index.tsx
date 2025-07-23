'use client';

import { forwardRef, InputHTMLAttributes } from 'react';
import { useMask } from '@react-input/mask';
import { InputContainer, Label, StyledInput, ErrorMessage } from './styles';

interface DateInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  error?: string;
}

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  ({ label, error, id, ...props }, ref) => {
    const inputRef = useMask({
      mask: '__/__/____ __:__',
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
          type="text"
          placeholder="DD/MM/AAAA HH:MM"
          {...props}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputContainer>
    );
  }
);

DateInput.displayName = 'DateInput';