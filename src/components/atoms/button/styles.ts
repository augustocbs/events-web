import styled, { css } from 'styled-components';

interface StyledButtonProps {
  $variant: 'primary' | 'secondary' | 'danger';
  $size: 'sm' | 'md' | 'lg';
  $loading: boolean;
}

const variantStyles = {
  primary: css`
    background-color: #3b82f6;
    color: white;
    
    &:hover:not(:disabled) {
      background-color: #2563eb;
    }
    
    &:focus {
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
    }
  `,
  secondary: css`
    background-color: #6b7280;
    color: white;
    
    &:hover:not(:disabled) {
      background-color: #4b5563;
    }
    
    &:focus {
      box-shadow: 0 0 0 2px rgba(107, 114, 128, 0.5);
    }
  `,
  danger: css`
    background-color: #ef4444;
    color: white;
    
    &:hover:not(:disabled) {
      background-color: #dc2626;
    }
    
    &:focus {
      box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.5);
    }
  `,
};

const sizeStyles = {
  sm: css`
    padding: 6px 12px;
    font-size: 14px;
  `,
  md: css`
    padding: 8px 16px;
    font-size: 16px;
  `,
  lg: css`
    padding: 12px 24px;
    font-size: 18px;
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  font-weight: 500;
  border-radius: 6px;
  border: none;
  outline: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:focus {
    outline: none;
  }
  
  ${({ $variant }) => variantStyles[$variant]}
  ${({ $size }) => sizeStyles[$size]}
`;

export const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    width: 16px;
    height: 16px;
    border: 2px solid transparent;
    border-top: 2px solid currentColor;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-right: 8px;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;