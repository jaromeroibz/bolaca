import express from "express";
import cors from "cors";

// SDK de Mercado Pago
import mercadopago from 'mercadopago'
import { MercadoPagoConfig, Preference } from 'mercadopago';
// Agrega credenciales
const client = new MercadoPagoConfig({
     accessToken: 'APP_USR-5613440642779718-101819-5bc290bc9c5d7d6ce529065a079e0d3d-2043548435'
     });

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.use(cors({
    origin: 'https://effective-palm-tree-5ww6qprg57rfwv7-3000.app.github.dev', // Permitir tu frontend
    methods: ['GET', 'POST', 'OPTIONS'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
}));


app.get("/", (req, res) => {
    res.send("Soy el server");
});

app.post("/create_preference", async (req, res) => {
    try {
        const body = {
            items: [
                {
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: "CLP"
                },
            ],
            back_urls: {
                success: "https://effective-palm-tree-5ww6qprg57rfwv7-3000.app.github.dev/success",
                failure: "https://effective-palm-tree-5ww6qprg57rfwv7-3000.app.github.dev/failure",
                pending: "https://effective-palm-tree-5ww6qprg57rfwv7-3000.app.github.dev/pending",
            },
            auto_return: "approved",
        };

        const preference = new Preference(client);
        const result = await preference.create({ body });
        res.json({
            id: result.id,
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al crear la preferencia",
        });
    }
});

app.listen(port, ()=> {
    console.log(`el servidor esta en el puerto ${port}`);
});
