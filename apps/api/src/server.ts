import express from 'express';
import healthRouter from './modules/health/health.js';

const app = express();
const PORT = 3000;

// Middleware for processing JSON
app.use(express.json());

// 
app.use('/api', healthRouter);

// Launch
app.listen(PORT, () => {
  console.log(`Server launched and operates at: http://localhost:${PORT}`);
});