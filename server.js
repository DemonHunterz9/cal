// filepath: server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

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

// Health check
app.get('/', (req, res) => {
    res.json({ status: 'Server running', port: PORT });
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
    console.log(`📌 Endpoints: POST /add, /subtract, /multiply, /divide`);
});