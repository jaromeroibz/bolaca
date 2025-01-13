import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the React build directory
app.use(express.static(path.join(process.cwd(), 'build')));

// Serve the index.html file for any unknown routes
app.get('*', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

