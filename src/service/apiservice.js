const https = require("https");
const { getChatGPTResponse } = require('./chatgpt');

async function EnviarMensajeWhastpapp(texto, number) {
    try {
        // Validaciones iniciales
        if (!texto || !number) {
            throw new Error("Texto o número de destinatario inválido");
        }

        console.log("Texto recibido:", texto);
        console.log("Número recibido:", number);

        let responseBody;

        try {
            // Validar longitud del mensaje
            if (texto.length > 1000) {
                responseBody = "Lo siento, el mensaje es demasiado largo. Por favor, envía un mensaje más corto.";
            } else {
                // Obtener respuesta de ChatGPT
                const chatGPTResponse = await getChatGPTResponse(texto);
                
                // Validar respuesta de ChatGPT
                if (!chatGPTResponse) {
                    throw new Error("Respuesta de ChatGPT vacía");
                }

                responseBody = chatGPTResponse;
            }
        } catch (chatGPTError) {
            // Manejo de errores específicos de ChatGPT
            console.error('Error de ChatGPT:', chatGPTError);
            
            // Diferentes mensajes según el tipo de error
            if (chatGPTError.message.includes("API key")) {
                responseBody = "Disculpa, hay un problema con la configuración del servicio. Estamos trabajando para solucionarlo.";
            } else if (chatGPTError.message.includes("connection")) {
                responseBody = "Tengo problemas de conexión en este momento. Intenta de nuevo más tarde.";
            } else {
                responseBody = "Lo siento, hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo.";
            }
        }

        // Preparar datos para enviar a WhatsApp
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "text",
            "text": {
                "preview_url": false,
                "body": responseBody
            }
        });

        // Configurar opciones de solicitud
        const options = {
            host: "graph.facebook.com",
            path: "/v21.0/462549556950259/messages",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}` // Usar variable de entorno
            }
        };

        // Enviar solicitud a WhatsApp
        await new Promise((resolve, reject) => {
            const req = https.request(options, res => {
                let responseData = '';

                res.on("data", chunk => {
                    responseData += chunk;
                });

                res.on("end", () => {
                    console.log("Respuesta de WhatsApp:", responseData);
                    
                    // Verificar código de estado
                    if (res.statusCode >= 200 && res.statusCode < 300) {
                        resolve();
                    } else {
                        reject(new Error(`Error de WhatsApp: ${res.statusCode} - ${responseData}`));
                    }
                });
            });

            req.on("error", error => {
                console.error("Error de red al enviar a WhatsApp:", error);
                reject(error);
            });

            req.write(data);
            req.end();
        });

        console.log("Mensaje enviado exitosamente");

    } catch (globalError) {
        // Manejo de errores globales
        console.error("Error global en EnviarMensajeWhastpapp:", globalError);

        // Opcional: Enviar mensaje de error al usuario
        try {
            const errorData = JSON.stringify({
                "messaging_product": "whatsapp",
                "recipient_type": "individual",
                "to": number,
                "type": "text",
                "text": {
                    "preview_url": false,
                    "body": "Disculpa, estamos experimentando problemas técnicos. Intenta nuevamente más tarde."
                }
            });

            const errorOptions = {
                host: "graph.facebook.com",
                path: "/v21.0/462549556950259/messages",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization :"Bearer EAAkbIXWO5YYBO4ks1jWmaZBP5YpqUIMBB9uIZCAWsnV4rOiuQIZCL2m18YwVZAQP2vE3DOZCNoJCzvgoYTLhcGR1dRS97nND4VyQGyP1LLhHnbNUHIbuAIYEyloXZAa8ZAAxPKbngcRToe5GMcSXnyzYxZB5q5oSxS1x073hd5LZBEAr9VNmPM1XcXegPhLwSMHgI4XO3avaO1ZCNU8Uc743YISJiy09ZApDbwDq7IZD"
                }
            };

            const errorReq = https.request(errorOptions);
            errorReq.write(errorData);
            errorReq.end();
        } catch (notificationError) {
            console.error("Error al enviar notificación de error:", notificationError);
        }
    }
}

module.exports = {
    EnviarMensajeWhastpapp
};