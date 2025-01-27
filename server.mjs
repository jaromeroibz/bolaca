import express from 'express';
import path from 'path';
import fs from 'fs';
import process from 'process'; // Polyfill process
import cors from 'cors';

const app = express();
const PORT = 3001;

// CORS middleware with specific allowed origins
app.use(cors({
    origin: function (origin, callback) {
        const allowedOrigins = [
            'https://effective-palm-tree-5ww6qprg57rfwv7-3000.app.github.dev'];
        
        // Allow if the origin is in the allowed list or there's no origin (e.g., Postman or direct API calls)
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true); // Allow the request
        } else {
            callback(new Error('Not allowed by CORS')); // Reject the request
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Allow credentials
}));

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
    console.log(`Backend server is running on port ${PORT}`);
});
