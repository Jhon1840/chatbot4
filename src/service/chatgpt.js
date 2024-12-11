const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function getChatGPTResponse(prompt) {
  try {
    const systemMessage = {
      role: "system",
      content: `Eres un asistente virtual de la Universidad del Valle en Bolivia. Ayudas a responder preguntas relacionadas con la universidad, como programas académicos, contacto con asesores, horarios de atención, pueden preguntar sobre áreas y deberás responder las carreras que pertenezcan a dicha área como 'área de la salud' = 'medicina, biomédica, etc.', precios de matrícula y demás información oficial. Si preguntan por la malla curricular de alguna carrera, responde con todas las materias sin importar lo largo del mensaje. La pregunta debe de estar estrictamente relacionada con univalle, de no ser asi responde educadamente que no puedes ayudar. si pide cualquier cosa que involucre dinero comunicalo con el asesor univalle: '+591'`
    };

    const userMessage = { role: "user", content: prompt };

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [systemMessage, userMessage],
      temperature: 0.7,
      
    });

    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error al obtener respuesta de ChatGPT:', error);
    throw error;
  }
}

module.exports = { getChatGPTResponse };
