import Link from 'next/link';
import { Event } from '@/services/api';
import { 
  TableContainer, 
  Table, 
  TableHead, 
  TableHeader, 
  TableBody, 
  TableCell, 
  CellContent, 
  ActionLink,
  EmptyState 
} from './styles';

interface EventsTableProps {
  events: Event[];
}

export function EventsTable({ events }: EventsTableProps) {
  if (events.length === 0 || events?.message) {
    return (
      <EmptyState>
        Nenhum evento encontrado
      </EmptyState>
    );
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <tr>
            <TableHeader>Nome</TableHeader>
            <TableHeader>Descrição</TableHeader>
            <TableHeader>Data</TableHeader>
            <TableHeader>Ações</TableHeader>
          </tr>
        </TableHead>
        <TableBody>
          {events?.map((event) => (
            <tr key={event.id}>
              <TableCell>
                <CellContent>{event.name}</CellContent>
              </TableCell>
              <TableCell>
                <CellContent $truncate>{event.description}</CellContent>
              </TableCell>
              <TableCell>
                <CellContent>
                  {new Date(event.date).toLocaleDateString('pt-BR')} {new Date(event.date).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                </CellContent>
              </TableCell>
              <TableCell>
                <Link href={`/eventos/${event.id}`} passHref legacyBehavior>
                  <ActionLink>Ver detalhes</ActionLink>
                </Link>
              </TableCell>
            </tr>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}