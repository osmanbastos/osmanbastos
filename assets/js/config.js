// AI provider configuration
// Get a free API key at: https://console.groq.com
export const AI_CONFIG = {
  apiKey: import.meta.env.VITE_ENCRIPTION_KEY,
  endpoint: "https://api.groq.com/openai/v1/chat/completions",
  model: "llama-3.1-8b-instant",
  maxTokens: 512,
  temperature: 0.7,
};
