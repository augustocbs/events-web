import { EventDetails } from '@/components';

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  return <EventDetails eventId={id} />;
}