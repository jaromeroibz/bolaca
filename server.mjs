import express from 'express';
import path from 'path';
import fs from 'fs';
import process from 'process'; // Polyfill process

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the React build directory
app.use(express.static(path.join(process.cwd(), 'build')));

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
