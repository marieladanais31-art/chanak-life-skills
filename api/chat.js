// API Serverless en Vercel para el Mentor IA de Life Skills & Liderazgo (Chanak)
// Cumple con el Reglamento de IA de la UE (Art. 50) y salvaguarda de menores (RGPD/COPPA)

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({
        content: 'El Mentor IA no está disponible en este momento. Por favor contacta a tu coordinador.',
      }),
      {
        status: 503,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    const { messages, stageKey, levelTitle, moduleTitle, lang = 'es' } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'Messages array is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const isEs = lang === 'es';

    const systemPrompt = `Eres el Mentor IA de Life Skills & Liderazgo de Chanak International Academy. Estás guiando a un estudiante en su desarrollo de carácter, hábitos formativos, proyectos de servicio y cosmovisión bíblica.

Nivel actual del estudiante: "${levelTitle || stageKey || 'Seedling'}"
Módulo / Contexto formativo: "${moduleTitle || 'General Life Skills'}"

Tus principios y rol formativo:
1. Enfoque Socrático y Mayordomía:
   - Ayuda al estudiante a pensar por sí mismo mediante preguntas reflexivas y guía paso a paso.
   - Conecta cada tema con la mayordomía de talentos, la integridad, el servicio al prójimo, el trabajo bien hecho y principios bíblicos prácticos.
   - Sé paciente, inspirador, empático y constructivo.

2. Integridad Académica (Regla Estricta Anti-Trampa):
   - NUNCA redactes las tareas, cartas o reflexiones completas por el estudiante.
   - Si el estudiante te pide "escríbeme mi carta al yo futuro", "hazme el proyecto del escudo", "redáctame mi reflexión" o "dame las respuestas", niégate cordialmente y guíale con preguntas estimulantes: "¿Qué 2 o 3 valores han sido los más importantes en tu familia?", "¿Qué talento o habilidad sientes que Dios te ha dado para bendecir a tu comunidad?".

3. Salvaguarda del Menor y Seguridad:
   - Tus respuestas deben ser 100% seguras, éticas y adecuadas para menores de edad (8 a 17 años).
   - Si el estudiante menciona alguna situación de peligro, acoso, tristeza profunda, autolesión o crisis personal, responde con calidez y amor cristiano, y recomiéndale de inmediato: "Si estás pasando por una situación difícil o te sientes en peligro, por favor habla inmediatamente con tus padres, tu mentora de Chanak o un adulto de confianza. No estás solo/a."

4. Formato de Respuesta:
   - Responde en el mismo idioma que el estudiante (${isEs ? 'español' : 'inglés'}).
   - Mantén respuestas ágiles, concisas y cercanas (máximo 2 a 3 párrafos cortos) para mantener el diálogo interactivo y amigable.`;

    const modelName = process.env.GEMINI_MODEL || 'gemini-1.5-flash';
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

    // Construcción de contenidos en formato Gemini (role: 'user' | 'model')
    const contents = messages.map((m) => ({
      role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user',
      parts: [{ text: String(m.content || '') }],
    }));

    const geminiBody = {
      system_instruction: {
        parts: [{ text: systemPrompt }],
      },
      contents,
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
      safetySettings: [
        { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
        { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_LOW_AND_ABOVE' },
        { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_LOW_AND_ABOVE' },
        { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
      ],
    };

    const geminiRes = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(geminiBody),
    });

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      console.error('Gemini API Error:', geminiRes.status, errText);

      // Fallback a gemini-flash-latest si el modelo configurado devuelve error
      if (modelName !== 'gemini-flash-latest') {
        const fallbackUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`;
        const fbRes = await fetch(fallbackUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(geminiBody),
        });
        if (fbRes.ok) {
          const fbData = await fbRes.json();
          const reply = fbData?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (reply) {
            return new Response(JSON.stringify({ content: reply }), {
              status: 200,
              headers: { 'Content-Type': 'application/json' },
            });
          }
        }
      }

      return new Response(
        JSON.stringify({
          content: isEs
            ? 'Lo siento, ocurrió un error temporal al conectar con el Mentor IA. Por favor inténtalo de nuevo.'
            : 'Sorry, a temporary error occurred connecting with the AI Mentor. Please try again.',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data = await geminiRes.json();
    const replyText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!replyText) {
      return new Response(
        JSON.stringify({
          content: isEs
            ? 'No se pudo generar una respuesta en este momento. Por favor reformula tu pregunta.'
            : 'Could not generate a response at this time. Please rephrase your question.',
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(JSON.stringify({ content: replyText }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Serverless Mentor AI error:', error);
    return new Response(
      JSON.stringify({
        content: 'Ocurrió un error al procesar tu solicitud. Por favor intenta más tarde.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
