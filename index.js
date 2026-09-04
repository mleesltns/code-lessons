import express from 'express';
import { readFile } from 'fs/promises';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from your first server!');
});

app.get('/customers', async (req, res) => {
  const data = await readFile('./customers.json', 'utf-8');
  const customers = JSON.parse(data);
  res.json(customers);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});