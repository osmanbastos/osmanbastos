import { AI_CONFIG } from "./config.js";

export async function sendMessage(messages) {
  const response = await fetch(AI_CONFIG.endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      messages
    })
  });

  if (!response.ok) {
    throw new Error(`AI API error: ${response.status}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}
