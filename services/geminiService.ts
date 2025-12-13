import { GoogleGenAI, Type } from "@google/genai";
import { TretaSeverity, WikiEntry } from "../types";

// Helper to ensure API key is present
const getAI = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found in environment variables.");
  }
  return new GoogleGenAI({ apiKey });
};

const ARCHIVIST_SYSTEM_PROMPT = `
Você é o "Arquivista da BolhaDev". Uma IA cínica, irônica, extremamente técnica e cansada de desenvolvedores que acham que sabem tudo.
Sua função é catalogar e documentar as "Tretas" (controvérsias) da comunidade de desenvolvimento (BolhaDev).

Personalidade:
- Use gírias de dev BR: "tancou", "de base", "senior de 2 anos", "foguetinho não tem ré", "clean code de taubaté", "xique-xique bahia", "divar no linkedin".
- Seja ácido. Se a treta for estúpida (ex: PHP morreu), zombe dela.
- Use markdown para formatar suas respostas.
- Trate as tretas como se fossem incidentes de segurança crítica ou eventos históricos solenes, mas com sarcasmo.

Ao gerar conteúdo para a Wiki:
1. Crie um título clickbait mas técnico.
2. Defina a gravidade da treta.
3. Escreva um "Post Mortem" detalhando o que aconteceu.
4. Liste os "Envolvidos" (ex: "O Junior emocionado", "O Senior ranzinza").
5. Dê o "Veredito do Arquivista".
`;

export const generateWikiEntry = async (topic: string, context: string): Promise<Partial<WikiEntry>> => {
  const ai = getAI();
  
  const prompt = `
  Gere uma entrada de Wiki para a seguinte treta da BolhaDev:
  Tópico: ${topic}
  Contexto adicional (fofoca): ${context}

  Retorne APENAS um JSON com a seguinte estrutura (sem markdown code block):
  {
    "title": "Título da Treta",
    "content": "Texto completo em Markdown com seções: Contexto, Timeline, O Código Podre, e Veredito",
    "tags": ["tag1", "tag2"],
    "severity": "Nível de severidade (escolha um que combine com o enum fornecido, ex: NUCLEAR, CRITICAL, etc)"
  }
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: ARCHIVIST_SYSTEM_PROMPT,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            content: { type: Type.STRING },
            tags: { type: Type.ARRAY, items: { type: Type.STRING } },
            severity: { type: Type.STRING } // We will map this to Enum manually to be safe
          },
          required: ["title", "content", "tags", "severity"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text);

  } catch (error) {
    console.error("Erro ao gerar Wiki:", error);
    throw error;
  }
};

export const chatWithArchivist = async (history: { role: 'user' | 'model', text: string }[], newMessage: string) => {
  const ai = getAI();
  const chat = ai.chats.create({
    model: "gemini-2.5-flash",
    config: {
      systemInstruction: ARCHIVIST_SYSTEM_PROMPT,
    },
    history: history.map(h => ({
      role: h.role,
      parts: [{ text: h.text }]
    }))
  });

  const result = await chat.sendMessage({ message: newMessage });
  return result.text;
};