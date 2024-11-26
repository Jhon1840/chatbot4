const https = require("https");
const { getChatGPTResponse } = require('./chatgpt');

async function EnviarMensajeWhastpapp(texto, number) {
    try {
        if (!texto || !number) {
            throw new Error("Texto o número de destinatario inválido");
        }

        console.log("Texto recibido:", texto);
        console.log("Número recibido:", number);

        let responseBody;

        try {
            if (texto.length > 1000) {
                responseBody = "Lo siento, el mensaje es demasiado largo. Por favor, envía un mensaje más corto.";
            } else {
                const chatGPTResponse = await getChatGPTResponse(texto);
                
                if (!chatGPTResponse) {
                    throw new Error("Respuesta de ChatGPT vacía");
                }

                responseBody = chatGPTResponse;
            }
        } catch (chatGPTError) {
            console.error('Error de ChatGPT:', chatGPTError);
            
            if (chatGPTError.message.includes("API key")) {
                responseBody = "Disculpa, hay un problema con la configuración del servicio. Estamos trabajando para solucionarlo.";
            } else if (chatGPTError.message.includes("connection")) {
                responseBody = "Tengo problemas de conexión en este momento. Intenta de nuevo más tarde.";
            } else {
                responseBody = "Lo siento, hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo.";
            }
        }

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

        const options = {
            host: "graph.facebook.com",
            path: "/v21.0/462549556950259/messages",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization :"Bearer EAAkbIXWO5YYBO5ZA21Fp4sdJyCiIY7M9os64wDFJy41RmkZBbv1ghYg5dmCDsd7MIjb8bF6m5BU7SFWJD2yXBXjRoGIxVPUgfcpJfmMZA4bMPBKODtG7gEOnjYwS55NdACyzeYwGI1XIqvwBUe7kJmDapHUaPg3rvoqTPQxINXgQ74zUJuVdEmv5VAuPzq17AZDZD"
            }
        };

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
        console.error("Error global en EnviarMensajeWhastpapp:", globalError);

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
                    Authorization :"Bearer EAAkbIXWO5YYBOx4TJZCkAppNCrOzBjVzBCIwYyxplrRcpAjuXhUlZCDUaJ5zTeZBKjOGWRAuDgPGj0vVKIBsF0yZBZCiaY7eAR1teqnswM9PkRJT0lCP5VS8x113HT0nFEkKZAtHfA83UqVm6LdXuuFmkwfDaU14KeAIBsZAfwTJN1SbfRChbNmbZCZBUZACCF1QeirVOEyhlzCwIslZBZCV7kX4X7AXGzy14nHN2rYZD"
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