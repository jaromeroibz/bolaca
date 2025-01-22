import express from 'express';
import path from 'path';
import fs from 'fs';
import process from 'process'; // Polyfill process
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
    origin: [
        'https://effective-palm-tree-5ww6qprg57rfwv7-3000.app.github.dev',
        'http://localhost:3000'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://effective-palm-tree-5ww6qprg57rfwv7-3000.app.github.dev');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    next();
});

// Serve static files from the React build directory
app.use(express.static(path.join(process.cwd(), 'build')));
app.use(express.json());

// Serve the index.html file for any unknown routes
app.get('*', (req, res) => {
    const indexPath = path.join(process.cwd(), 'build', 'index.html');

    // Check if the file exists before sending it
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.status(404).send('Index.html not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
