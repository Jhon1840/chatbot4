const https = require("https");
const { getChatGPTResponse } = require('./chatgpt');

async function EnviarMensajeWhastpapp(texto, number) {
    try {
        console.log("Texto recibido:", texto);
        console.log("Número recibido:", number);

        // Obtener respuesta de ChatGPT para cualquier mensaje
        try {
            const chatGPTResponse = await getChatGPTResponse(texto);
            
            const data = JSON.stringify({
                "messaging_product": "whatsapp",
                "recipient_type": "individual",
                "to": number,
                "type": "text",
                "text": {
                    "preview_url": false,
                    "body": chatGPTResponse
                }
            });

            console.log("Respuesta de ChatGPT:", chatGPTResponse);

            const options = {
                host: "graph.facebook.com",
                path: "/v21.0/462549556950259/messages",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer EAAkbIXWO5YYBO4ks1jWmaZBP5YpqUIMBB9uIZCAWsnV4rOiuQIZCL2m18YwVZAQP2vE3DOZCNoJCzvgoYTLhcGR1dRS97nND4VyQGyP1LLhHnbNUHIbuAIYEyloXZAa8ZAAxPKbngcRToe5GMcSXnyzYxZB5q5oSxS1x073hd5LZBEAr9VNmPM1XcXegPhLwSMHgI4XO3avaO1ZCNU8Uc743YISJiy09ZApDbwDq7IZD"
                }
            };

            const req = https.request(options, res => {
                console.log("Estado de la respuesta:", res.statusCode);

                res.on("data", d => {
                    console.log("Datos de respuesta:", d.toString());
                });

                res.on("end", () => {
                    console.log("Respuesta completada.");
                });
            });

            req.on("error", error => {
                console.error("Error al enviar la solicitud HTTPS:", error);
            });

            req.write(data);
            console.log("Datos enviados:", data);
            req.end();

        } catch (error) {
            console.error('Error al obtener la respuesta de ChatGPT:', error);
            
            const errorData = JSON.stringify({
                "messaging_product": "whatsapp",
                "recipient_type": "individual",
                "to": number,
                "type": "text",
                "text": {
                    "preview_url": false,
                    "body": "Lo siento, hubo un error al procesar tu solicitud."
                }
            });

            // Enviar mensaje de error
            const options = {
                host: "graph.facebook.com",
                path: "/v21.0/462549556950259/messages",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer EAAkbIXWO5YYBOyPgeBdbAX5132Iz2Ct3CyBuhTebKzRFFRqTreiEJJuE1Q6OzdQVBKGsRJCowOLeJNwpE79J905TimokC79og48PoumALbWpe4hW6j6h2DWfDBSHgXhNxt1EftOdeYDhbsxdhGzyj5PNkZCfAnn7hcj977Ejr0k6qeEerGukMkfRtZBIjOYQZC6yHuJYXYEt89ZAaeOXIvqImEfDuW4ZBSfgZD"
                }
            };

            const req = https.request(options);
            req.write(errorData);
            req.end();
        }

    } catch (error) {
        console.error("Error en EnviarMensajeWhastpapp:", error);
    }
}

module.exports = {
    EnviarMensajeWhastpapp
};