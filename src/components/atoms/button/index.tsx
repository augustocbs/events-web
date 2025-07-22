import { ButtonHTMLAttributes, ReactNode } from 'react';
import { StyledButton, LoadingSpinner } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  loading = false,
  disabled,
  ...props 
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $loading={loading}
      disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <LoadingSpinner>
          Carregando...
        </LoadingSpinner>
      ) : (
        children
      )}
    </StyledButton>
  );
}