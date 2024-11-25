
require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function getCompletionFromOpenAI(prompt) {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt,
      temperature: 0.5,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    return response.data.choices[0].text;
  } catch (error) {
    console.error("Error al obtener la respuesta de OpenAI:", error);
    throw error;
  }
}

module.exports = { getCompletionFromOpenAI };