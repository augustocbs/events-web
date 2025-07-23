import { HeaderContainer, Title } from './styles';

interface EventsHeaderProps {
  title: string;
  onNewEvent?: () => void;
}

export function EventsHeader({ title }: EventsHeaderProps) {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
    </HeaderContainer>
  );
}