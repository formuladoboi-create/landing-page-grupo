
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiConsultantResponse = async (userMessage: string) => {
  if (!API_KEY) return "Serviço indisponível no momento.";
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: userMessage,
    config: {
      systemInstruction: `Você é um consultor especializado da "Fórmula do Boi", um ecossistema de elite para pecuaristas de Nelore PO no Brasil. 
      Seu tom deve ser profissional, direto, sofisticado e confiável. 
      Responda dúvidas sobre genética de alta performance, o mercado de Nelore e como a plataforma ajuda a destravar vendas e garantir segurança. 
      Lembre-se: o público são grandes fazendeiros e investidores do agronegócio.`,
      temperature: 0.7,
    },
  });

  return response.text || "Desculpe, não consegui processar sua solicitação.";
};
