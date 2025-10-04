// Minimal test server for debugging
import express from 'express';

const app = express();
const PORT = 4001; // Different port to avoid conflicts

app.get('/ping', (req, res) => {
  res.json({ message: 'pong', time: new Date().toISOString() });
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Test server running on http://127.0.0.1:${PORT}/ping`);
});