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
            path: "/v21.0/462549556950259/messages",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "EAAkbIXWO5YYBOyPgeBdbAX5132Iz2Ct3CyBuhTebKzRFFRqTreiEJJuE1Q6OzdQVBKGsRJCowOLeJNwpE79J905TimokC79og48PoumALbWpe4hW6j6h2DWfDBSHgXhNxt1EftOdeYDhbsxdhGzyj5PNkZCfAnn7hcj977Ejr0k6qeEerGukMkfRtZBIjOYQZC6yHuJYXYEt89ZAaeOXIvqImEfDuW4ZBSfgZD"
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
