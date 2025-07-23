import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 16px;
`;

export const EventHeader = styled.div`
  margin-bottom: 32px;
  padding: 24px;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`;

export const EventTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #111827;
  margin-bottom: 16px;
`;

export const EventDescription = styled.p`
  font-size: 16px;
  color: #6b7280;
  margin-bottom: 12px;
  line-height: 1.6;
`;

export const EventDate = styled.p`
  font-size: 16px;
  color: #374151;
  font-weight: 500;
`;

export const ParticipantsSection = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 24px;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: between;
  align-items: center;
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

export const ParticipantsGrid = styled.div`
  display: grid;
  gap: 12px;
  margin-top: 12px;
`;

export const ParticipantCard = styled.div`
  border: 1px solid #e5e7eb;
  padding: 16px;
  border-radius: 6px;
  background-color: #f9fafb;
`;

export const ParticipantName = styled.p`
  font-weight: 500;
  color: #111827;
  margin: 0 0 4px 0;
`;

export const ParticipantEmail = styled.p`
  color: #6b7280;
  font-size: 14px;
  margin: 0 0 4px 0;
`;

export const ParticipantPhone = styled.p`
  color: #6b7280;
  font-size: 14px;
  margin: 0;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 32px 0;
  color: #6b7280;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
`;

export const LoadingText = styled.div`
  color: #6b7280;
  font-size: 16px;
`;