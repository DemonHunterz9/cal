const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// API Endpoints
app.post('/add', (req, res) => {
    const { a, b } = req.body;
    res.json({ result: a + b, operation: 'add' });
});

app.post('/subtract', (req, res) => {
    const { a, b } = req.body;
    res.json({ result: a - b, operation: 'subtract' });
});

app.post('/multiply', (req, res) => {
    const { a, b } = req.body;
    res.json({ result: a * b, operation: 'multiply' });
});

app.post('/divide', (req, res) => {
    const { a, b } = req.body;
    if (b === 0) {
        return res.status(400).json({ error: 'Cannot divide by zero' });
    }
    res.json({ result: a / b, operation: 'divide' });
});

// Frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
});

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'Server running', port: PORT });
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
    console.log(`🌐 Client available at http://localhost:${PORT}`);
    console.log(`📌 Endpoints: POST /add, /subtract, /multiply, /divide`);
});
