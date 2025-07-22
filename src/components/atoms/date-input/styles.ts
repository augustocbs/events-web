import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
`;

export const StyledDateInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background-color: white;
  color: black;
  font-size: 16px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  transition: all 0.2s ease-in-out;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }
  
  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    transition: background-color 0.2s;
    
    &:hover {
      background-color: rgba(59, 130, 246, 0.1);
    }
  }
  
  &::-webkit-datetime-edit {
    padding: 0;
    font-family: inherit;
  }
  
  &::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  
  &::-webkit-datetime-edit-text {
    color: #6b7280;
    padding: 0 2px;
  }
  
  &::-webkit-datetime-edit-month-field,
  &::-webkit-datetime-edit-day-field,
  &::-webkit-datetime-edit-year-field,
  &::-webkit-datetime-edit-hour-field,
  &::-webkit-datetime-edit-minute-field {
    padding: 0 2px;
    color: black;
    font-weight: 500;
  }
  
  &::-webkit-datetime-edit-month-field:focus,
  &::-webkit-datetime-edit-day-field:focus,
  &::-webkit-datetime-edit-year-field:focus,
  &::-webkit-datetime-edit-hour-field:focus,
  &::-webkit-datetime-edit-minute-field:focus {
    background-color: rgba(59, 130, 246, 0.1);
    outline: none;
  }
  
  &[type="datetime-local"] {
    -moz-appearance: none;
  }
`;

export const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 14px;
  margin-top: 4px;
`;