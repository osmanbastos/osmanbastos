// api/chat.js

export default async function handler(req, res) {
  // Habilita CORS se necessário
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido. Use POST." });
  }

  try {
    const { messages } = req.body;

    if (!messages) {
      return res.status(400).json({ error: "O campo 'messages' é obrigatório." });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      console.error("GROQ_API_KEY não está definida nas variáveis de ambiente do Vercel.");
      return res.status(500).json({ error: "Erro de configuração no servidor." });
    }

    // Requisição segura do lado do servidor para o Groq
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: messages,
        max_tokens: 512,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Erro da API Groq:", errorData);
      return res.status(response.status).json({ error: "Erro ao consultar a IA." });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Erro no handler do chat:", error);
    return res.status(500).json({ error: "Erro interno no servidor." });
  }
}
