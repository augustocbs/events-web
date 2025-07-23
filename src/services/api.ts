const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface Event {
  id?: number;
  name: string;
  description: string;
  date: string;
  message?: string;
}

export interface Participant {
  id?: number;
  name: string;
  email: string;
  phone: string;
}

export const api = {
  createEvent: async (event: Event) => {
    const response = await fetch(`${API_URL}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    });
    return response.json();
  },

  createParticipant: async (participant: Participant) => {
    const response = await fetch(`${API_URL}/participants`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(participant),
    });
    return response.json();
  },

  subscribeToEvent: async (eventId: number, participantId: number) => {
    const response = await fetch(`${API_URL}/events/${eventId}/participants`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ participantId }),
    });
    return response.json();
  },

  getEventParticipants: async (eventId: number) => {
    const response = await fetch(`${API_URL}/events/${eventId}/participants`);
    return response.json();
  },

  getEvents: async () => {
    const response = await fetch(`${API_URL}/events`);
    return response.json();
  },

  getEvent: async (id: number) => {
    const response = await fetch(`${API_URL}/events/${id}`);
    return response.json();
  }
};
