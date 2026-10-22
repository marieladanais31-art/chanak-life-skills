// API Serverless en Vercel para el Mentor IA de Life Skills & Liderazgo (Chanak)
// Cumple con el Reglamento de IA de la UE (Art. 50) y salvaguarda de menores (RGPD/COPPA)

export const config = {
  runtime: 'edge',
};


// Mentor IA para Juniors (4.º a 7.º): solo habla de los temas que se están trabajando en Life Skills & Character.
// La lista vive en el servidor: el navegador solo puede añadir el reto que tiene abierto (se limpia y se acota).
const JUNIOR_TOPICS = {
  es: [
    'Mayordomía en el supermercado (etiquetas, ingredientes, comparar precios)', 'Comida saludable y grupos alimenticios', 'Internet responsable',
    'Empatía', 'Alto al bullying', 'El valor del dinero y por qué ahorrar', 'Mis proyectos', 'Hábitos saludables',
    'Artes manuales y su importancia', 'Curiosidades del mundo: comidas típicas y continentes', 'Manejo de las emociones',
    'Naturaleza y paciencia', 'Servicio y gratitud', 'Cocina y costos', 'Ahorro y metas', 'Autonomía y orden', 'Ciencia y fe',
    'El rasgo de carácter de la semana (esperanza, propósito, integridad, iniciativa, compasión, justicia, generosidad, paciencia, honestidad, responsabilidad, diligencia, fidelidad y similares)',
  ],
  en: [
    'Stewardship at the supermarket (labels, ingredients, comparing prices)', 'Healthy food and food groups', 'Responsible internet use',
    'Empathy', 'Stop bullying', 'The value of money and why we save', 'My projects', 'Healthy habits',
    'Handcrafts and why they matter', 'World curiosities: traditional foods and continents', 'Managing emotions',
    'Nature and patience', 'Service and gratitude', 'Cooking and costs', 'Savings and goals', 'Autonomy and order', 'Science and faith',
    'The character trait of the week (hope, purpose, integrity, initiative, compassion, justice, generosity, patience, honesty, responsibility, diligence, faithfulness and similar)',
  ],
};
const cleanTopic = (v) => String(v || '').replace(/[\u0000-\u001f<>`{}]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 100);

function buildJuniorPrompt({ isEs, topic }) {
  const list = (isEs ? JUNIOR_TOPICS.es : JUNIOR_TOPICS.en).map((t) => `- ${t}`).join('\n');
  const extra = topic ? (isEs ? `\nReto abierto ahora mismo: "${topic}".` : `\nChallenge open right now: "${topic}".`) : '';
  return isEs
    ? `Eres el Mentor IA de Life Skills & Character de Chanak International Academy y hablas con un niño o niña de 9 a 13 años de una escuela cristiana. Usa palabras sencillas, tono cálido, animado y respetuoso.

SOLO puedes conversar sobre estos temas, que son los que está trabajando ahora:
${list}${extra}

Reglas estrictas:
1. Si te preguntan algo fuera de esos temas (tareas de otras materias, respuestas de exámenes, videojuegos, famosos, noticias, relaciones personales, o cualquier otra cosa), NO lo respondas. Di con cariño: "Eso no lo estamos viendo ahora en Life Skills" y propón 2 temas de la lista para continuar. Si lo que pide es una tarea escolar, sugiérele que consulte a su mentor o a su familia.
2. Enfoque socrático: guía con preguntas; NUNCA hagas por él o ella la actividad, el escrito, la reflexión ni el entregable. Ofrece ideas y pasos, no el trabajo terminado.
3. Conecta con principios bíblicos prácticos (mayordomía, amor al prójimo, honestidad, gratitud), sin predicar de más ni citar largos textos.
4. Seguridad: nunca pidas ni aceptes datos personales (apellido, dirección, escuela, teléfono, fotos). Si cuenta algo grave (maltrato, acoso, autolesión, miedo profundo, peligro), responde con mucho cariño y dile que hable HOY con un adulto de confianza (su familia o su mentor) y, en una emergencia, que llame al número de emergencias de su país.
5. Formato: responde en español, 40 a 70 palabras, 1 o 2 párrafos cortos, y termina con UNA sola pregunta para seguir conversando.`
    : `You are the Life Skills & Character AI Mentor of Chanak International Academy, talking with a child aged 9 to 13 at a Christian school. Use simple words and a warm, upbeat, respectful tone.

You may ONLY talk about these topics, which are what the student is working on right now:
${list}${extra}

Strict rules:
1. If asked about anything outside these topics (homework for other subjects, exam answers, video games, celebrities, news, personal relationships, or anything else), do NOT answer it. Say kindly: "We are not covering that right now in Life Skills" and offer 2 topics from the list to continue. If it is schoolwork, suggest asking their mentor or family.
2. Socratic approach: guide with questions; NEVER do the activity, writing, reflection or deliverable for them. Offer ideas and steps, not the finished work.
3. Connect with practical biblical principles (stewardship, loving your neighbor, honesty, gratitude), without over-preaching or quoting long passages.
4. Safety: never ask for or accept personal data (surname, address, school, phone, photos). If they share something serious (abuse, bullying, self-harm, deep fear, danger), respond very warmly and tell them to talk TODAY with a trusted adult (their family or mentor) and, in an emergency, to call their country's emergency number.
5. Format: reply in English, 40 to 70 words, 1 or 2 short paragraphs, and end with ONE question to keep the conversation going.`;
}

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
    const { messages, stageKey, levelTitle, moduleTitle, lang = 'es', audience, topic } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'Messages array is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const isEs = lang === 'es';

    const isJunior = audience === 'junior';
    const systemPrompt = isJunior ? buildJuniorPrompt({ isEs, topic: cleanTopic(topic) }) : `Eres el Mentor IA de Life Skills & Liderazgo de Chanak International Academy. Estás guiando a un estudiante en su desarrollo de carácter, hábitos formativos, proyectos de servicio y cosmovisión bíblica.

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
   - Sé conciso, dinámico y directo: máximo 1 a 2 párrafos cortos (entre 60 y 90 palabras).
   - Termina siempre con 1 sola pregunta socrática estimulante para mantener el diálogo ágil.
   - Evita preámbulos o rodeos extensos.`;

    // Construcción de contenidos en formato Gemini (role: 'user' | 'model')
    const history = isJunior ? messages.slice(-8) : messages;
    const contents = history.map((m) => ({
      role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user',
      parts: [{ text: String(m.content || '') }],
    }));

    const geminiBody = {
      system_instruction: {
        parts: [{ text: systemPrompt }],
      },
      contents,
      generationConfig: {
        maxOutputTokens: isJunior ? 180 : 220,
        temperature: isJunior ? 0.5 : 0.7,
      },
      safetySettings: [
        { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
        { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_LOW_AND_ABOVE' },
        { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_LOW_AND_ABOVE' },
        { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
      ],
    };

    const candidateModels = [
      process.env.GEMINI_MODEL || 'gemini-3.5-flash',
      'gemini-3.1-flash-lite',
      'gemini-3.5-flash-lite',
      'gemini-3.6-flash',
    ].filter(Boolean);

    let geminiRes = null;
    let usedModel = null;
    for (const mName of candidateModels) {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${mName}:generateContent?key=${apiKey}`;
      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(geminiBody),
        });
        geminiRes = res;
        if (res.ok) {
          usedModel = mName;
          break; // modelo exitoso
        } else {
          console.warn(`Model ${mName} returned ${res.status}, trying next fallback...`);
        }
      } catch (err) {
        console.warn(`Model ${mName} fetch failed:`, err);
      }
    }

    if (!geminiRes || !geminiRes.ok) {
      const errText = geminiRes ? await geminiRes.text() : 'No response from models';
      console.error('Gemini API Error:', geminiRes?.status, errText);
      return new Response(
        JSON.stringify({
          content: isEs
            ? 'Lo siento, el Mentor IA está experimentando alta demanda en este momento. Por favor inténtalo de nuevo en unos segundos.'
            : 'Sorry, the AI Mentor is experiencing high demand right now. Please try again in a few seconds.',
        }),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
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
        { status: 200, headers: { 'Content-Type': 'application/json', 'x-gemini-model': usedModel || 'unknown' } }
      );
    }

    return new Response(JSON.stringify({ content: replyText }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'x-gemini-model': usedModel || 'unknown' },
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
