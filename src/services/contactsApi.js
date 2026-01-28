// ✅ Environment-based backend URL (ONLY ADDITION)
const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://cgxp-pharma-api.onrender.com/api/contacts"
    : "http://localhost:5000/api/contacts";

/**
 * Fetch all contacts (client-side pagination)
 */
export async function fetchContacts() {
  const response = await fetch(API_URL);

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
 * Update single field or multiple fields (inline edit)
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
