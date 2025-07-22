import { forwardRef, TextareaHTMLAttributes } from 'react';
import { TextareaContainer, Label, StyledTextarea, ErrorMessage } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, id, ...props }, ref) => {
    return (
      <TextareaContainer>
        <Label htmlFor={id}>{label}</Label>
        <StyledTextarea
          ref={ref}
          id={id}
          {...props}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </TextareaContainer>
    );
  }
);

Textarea.displayName = 'Textarea';