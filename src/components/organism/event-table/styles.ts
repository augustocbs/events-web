'use client'

import styled from 'styled-components';

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  min-width: 100%;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`;

export const TableHead = styled.thead`
  background-color: #f9fafb;
`;

export const TableHeader = styled.th`
  padding: 12px 24px;
  text-align: left;
  font-size: 12px;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const TableBody = styled.tbody`
  background-color: white;
  
  tr {
    border-top: 1px solid #e5e7eb;
    
    &:hover {
      background-color: #f9fafb;
    }
  }
`;

export const TableCell = styled.td`
  padding: 16px 24px;
  white-space: nowrap;
`;

export const CellContent = styled.div<{ $truncate?: boolean }>`
  font-size: 14px;
  color: #111827;
  font-weight: ${props => props.$truncate ? 'normal' : '500'};
  color: ${props => props.$truncate ? '#6b7280' : '#111827'};
  
  ${props => props.$truncate && `
    max-width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;

export const ActionLink = styled.a`
  color: #2563eb;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  
  &:hover {
    color: #1d4ed8;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 32px 0;
  color: #6b7280;
  font-size: 16px;
`;