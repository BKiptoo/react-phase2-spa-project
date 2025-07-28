import { tasks, users } from './data.js';

let taskStorage = [...tasks];

export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { method, url } = req;
  // Remove /api prefix and parse the path
  const path = url.replace('/api', '') || url;
  const urlParts = path.split('/').filter(part => part !== '');
  const resource = urlParts[0]; // 'tasks' or 'users'
  const id = urlParts[1] ? parseInt(urlParts[1]) : null;

  try {
    if (resource === 'tasks') {
      switch (method) {
        case 'GET': {
          if (id) {
            const task = taskStorage.find(t => t.id === id);
            if (!task) {
              return res.status(404).json({ error: 'Task not found' });
            }
            return res.status(200).json(task);
          }
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

        case 'PATCH': {
          if (!id) {
            return res.status(400).json({ error: 'Task ID required' });
          }
          const taskIndex = taskStorage.findIndex(t => t.id === id);
          if (taskIndex === -1) {
            return res.status(404).json({ error: 'Task not found' });
          }
          taskStorage[taskIndex] = { ...taskStorage[taskIndex], ...req.body };
          return res.status(200).json(taskStorage[taskIndex]);
        }

        case 'DELETE': {
          if (!id) {
            return res.status(400).json({ error: 'Task ID required' });
          }
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
    } else if (resource === 'users') {
      switch (method) {
        case 'GET': {
          if (id) {
            const user = users.find(u => u.id === id);
            if (!user) {
              return res.status(404).json({ error: 'User not found' });
            }
            return res.status(200).json(user);
          }
          return res.status(200).json(users);
        }

        default:
          return res.status(405).json({ error: 'Method not allowed for users' });
      }
    } else {
      return res.status(404).json({ error: 'Resource not found' });
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
