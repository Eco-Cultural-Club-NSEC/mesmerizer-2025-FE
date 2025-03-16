const API_URL = import.meta.env.VITE_API_URL;

interface RegistrationData {
  eventTitle: string;
  eventCode: string;
  eventDay: string;
  eventTime: string;
  eventLocation: string;
  teamSize: number;
  teamLeadName: { name: string };
  participantNames: { name: string }[];
  email: string;
  whatsappNumber: string;
  alternatePhone: string;
  college: string;
  upiTransectionId: string;
  paySS: string;
}

export async function registerParticipant(data: RegistrationData) {
  const response = await fetch(`${API_URL}/participant/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      // Ensure the field name matches exactly what backend expects
      upiTransactionId: data.upiTransectionId, // Fix typo in field name
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Registration failed");
  }

  return response.json();
}
