import express from "express";
import cors from "cors";

// SDK de Mercado Pago
import mercadopago from 'mercadopago'
import { MercadoPagoConfig, Preference } from 'mercadopago';
// Agrega credenciales
const client = new MercadoPagoConfig({
     accessToken: 'APP_USR-2737784651979747-092814-d7c525f85100ce091e87227a8129d124-2009384627'
     });

const app = express();
const port = 4000;

// const corsOptions = {
//     origin: 'https://effective-palm-tree-5ww6qprg57rfwv7-3000.app.github.dev', // Ensure this matches your frontend URL
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
//     allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
//   };

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://effective-palm-tree-5ww6qprg57rfwv7-3000.app.github.dev'); // Specific origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allowed methods
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed headers
    next();

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
});

// app.use(cors(corsOptions)); 
// app.use(express.json());
// app.options('*', cors());

app.get("/", (req, res) => {
    res.send("Soy el server")
});

app.post("/create_preference", async (req, res) => {
    try{
        const body = {
            items: [
                {
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: "CLP",
                }
            ],
            back_urls: {
                success: "https://www.google.com",
                failure: "https://www.google.com",
                pending: "https://www.google.com",
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
})
