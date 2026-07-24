const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

async function handleResponse(res) {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.msg || "Request failed");
  }
  return data;
}

export async function getPolls() {
  const res = await fetch(`${API_URL}/polls`);
  return handleResponse(res);
}

export async function getPoll(id) {
  const res = await fetch(`${API_URL}/polls/${id}`);
  return handleResponse(res);
}

export async function createPoll({ title, description, options }) {
  const res = await fetch(`${API_URL}/polls`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      description,
      options: options.map((text) => text.trim()).filter((text) => text !== ""),
    }),
  });
  return handleResponse(res);
}

export async function submitVote(pollId, optionId) {
  const res = await fetch(`${API_URL}/polls/${pollId}/vote`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ optionId }),
  });
  return handleResponse(res);
}
