import { tasks } from '../data.js';

let taskStorage = [...tasks];

export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { method } = req;

  try {
    switch (method) {
      case 'GET': {
        return res.status(200).json(taskStorage);
      }

      case 'POST': {
        const newTask = {
          id: Math.max(...taskStorage.map(t => t.id), 0) + 1,
          ...req.body,
          createdAt: req.body.createdAt || new Date().toISOString().split('T')[0]
        };
        taskStorage.push(newTask);
        return res.status(201).json(newTask);
      }

      default:
        return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
