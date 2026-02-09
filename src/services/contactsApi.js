const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://cgxp-pharma-api.onrender.com/api/contacts"
    : "http://localhost:5000/api/contacts";

/**
 * Fetch contacts (SERVER-SIDE pagination)
 */
export async function fetchContacts({ page = 1, limit = 50 }) {
  const response = await fetch(
    `${API_URL}?page=${page}&limit=${limit}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch contacts");
  }

  const result = await response.json();

  return {
    data: result.data || [],
    total: result.total || 0,
  };
}

/**
 * Inline edit update
 */
export async function updateContact(contactId, field, value) {
  const response = await fetch(`${API_URL}/${contactId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      [field]: value,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to update contact");
  }

  return response.json();
}
