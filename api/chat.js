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
    // Diagnostic query to discover supported models for this project/key
    const listRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    const listData = await listRes.json();
    return new Response(JSON.stringify({ content: JSON.stringify(listData) }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Serverless Mentor AI error:', error);
    return new Response(
      JSON.stringify({
        content: 'Error: ' + error.message,
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
