const https = require("https");

function EnviarMensajeWhastpapp(texto, number) {
    try {
        console.log("Texto recibido:", texto);
        console.log("Número recibido:", number);

        texto = texto.toLowerCase();
        let data;

        if (texto.includes("hola")) {
            data = JSON.stringify({
                "messaging_product": "whatsapp",
                "recipient_type": "individual",
                "to": number,
                "type": "text",
                "text": {
                    "preview_url": false,
                    "body": "🚀 Hola, Como estas, Bienvenido."
                }
            });
            console.log("Entro al 'hola':", data);
        } else {
            data = JSON.stringify({
                "messaging_product": "whatsapp",
                "recipient_type": "individual",
                "to": number,
                "type": "text",
                "text": {
                    "preview_url": false,
                    "body": "🚀 Hola, ingresa un número válido para más información."
                }
            });
            console.log("Mensaje predeterminado:", data);
        }

        const options = {
            host: "graph.facebook.com",
            path: "/v15.0/113319844996763/messages",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer EAAkbIXWO5YYBOyPgeBdbAX5132Iz2Ct3Cy..."
            }
        };

        console.log("Opciones de solicitud:", options);

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
        console.error("Error en EnviarMensajeWhastpapp:", error);
    }
}

module.exports = {
    EnviarMensajeWhastpapp
};
