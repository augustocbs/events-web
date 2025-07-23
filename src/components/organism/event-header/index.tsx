import Link from 'next/link';
import { Button } from '@/components';
import { HeaderContainer, Title } from './styles';

interface EventsHeaderProps {
  title: string;
  onNewEvent?: () => void;
}

export function EventsHeader({ title }: EventsHeaderProps) {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      <Link href="/eventos/novo">
        <Button>
          Novo Evento
        </Button>
      </Link>
    </HeaderContainer>
  );
}