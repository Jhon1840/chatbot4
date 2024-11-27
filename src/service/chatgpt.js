const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function getChatGPTResponse(prompt) {
  try {
    const systemMessage = {
      role: "system",
      content: `Eres un asistente virtual de la Universidad del Valle en Bolivia. Ayudas a responder preguntas relacionadas con la universidad, como programas académicos, contacto con asesores, horarios de atención, precios de matrícula y demás información oficial, si preguntan por la malla curricular de alguna carrera responde con  todas las materiasres sin importar lo largo del mensaje . Si la pregunta no está relacionada con la universidad, responde educadamente que no puedes ayudar.`
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
