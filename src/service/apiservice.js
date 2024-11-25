const https = require("https");

function EnviarMensajeWhastpapp(texto, number) {
    try {
        console.log(texto, number);

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
            console.log("Entro al 'hola': " + data);
        } else if (texto === "1") {
            data = JSON.stringify({
                "messaging_product": "whatsapp",
                "recipient_type": "individual",
                "to": number,
                "type": "text",
                "text": {
                    "preview_url": false,
                    "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
                }
            });
        } else if (texto === "2") {
            data = JSON.stringify({
                "messaging_product": "whatsapp",
                "to": number,
                "type": "location",
                "location": {
                    "latitude": "-12.067158831865067",
                    "longitude": "-77.03377940839486",
                    "name": "Estadio Nacional del Perú",
                    "address": "Cercado de Lima"
                }
            });
        } else if (texto === "3") {
            data = JSON.stringify({
                "messaging_product": "whatsapp",
                "recipient_type": "individual",
                "to": number,
                "type": "document",
                "document": {
                    "link": "http://jornadasciberseguridad.riasc.unileon.es/archivos/ejemplo_esp.pdf",
                    "caption": "Temario del Curso #001"
                }
            });
        } else {
            data = JSON.stringify({
                "messaging_product": "whatsapp",
                "recipient_type": "individual",
                "to": number,
                "type": "text",
                "text": {
                    "preview_url": false,
                    "body": "🚀 Hola, visita mi web para más información."
                }
            });
        }

        const options = {
            host: "graph.facebook.com",
            path: "/v15.0/113319844996763/messages",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer EAAkbIXWO5YYBOyPgeBdbAX5132Iz2Ct3CyBuhTebKzRFFRqTreiEJJuE1Q6OzdQVBKGsRJCowOLeJNwpE79J905TimokC79og48PoumALbWpe4hW6j6h2DWfDBSHgXhNxt1EftOdeYDhbsxdhGzyj5PNkZCfAnn7hcj977Ejr0k6qeEerGukMkfRtZBIjOYQZC6yHuJYXYEt89ZAaeOXIvqImEfDuW4ZBSfgZD"
            }
        };

        // Envolver el envío de la solicitud en un try-catch
        const req = https.request(options, res => {
            res.on("data", d => {
                process.stdout.write(d);
            });
        });

        req.on("error", error => {
            console.error("Error al enviar el mensaje:", error);
        });

        req.write(data);
        req.end();

    } catch (error) {
        console.error("Error en EnviarMensajeWhastpapp:", error);
    }
}

module.exports = {
    EnviarMensajeWhastpapp
};
