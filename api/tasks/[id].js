import { tasks } from '../data.js';

let taskStorage = [...tasks];

export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { method, query } = req;
  const id = parseInt(query.id);

  if (!id) {
    return res.status(400).json({ error: 'Task ID required' });
  }

  try {
    switch (method) {
      case 'GET': {
        const task = taskStorage.find(t => t.id === id);
        if (!task) {
          return res.status(404).json({ error: 'Task not found' });
        }
        return res.status(200).json(task);
      }

      case 'PATCH': {
        const taskIndex = taskStorage.findIndex(t => t.id === id);
        if (taskIndex === -1) {
          return res.status(404).json({ error: 'Task not found' });
        }
        taskStorage[taskIndex] = { ...taskStorage[taskIndex], ...req.body };
        return res.status(200).json(taskStorage[taskIndex]);
      }

      case 'DELETE': {
        const deleteIndex = taskStorage.findIndex(t => t.id === id);
        if (deleteIndex === -1) {
          return res.status(404).json({ error: 'Task not found' });
        }
        const deletedTask = taskStorage.splice(deleteIndex, 1)[0];
        return res.status(200).json(deletedTask);
      }

      default:
        return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
