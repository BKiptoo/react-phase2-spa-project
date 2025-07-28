// Simple tasks data
const tasks = [
  {
    "id": 1,
    "title": "Learn React Hooks",
    "description": "Study useState, useEffect, and other React hooks",
    "completed": false,
    "priority": "high",
    "createdAt": "2025-01-15"
  },
  {
    "id": 2,
    "title": "Build REST API",
    "description": "Create a RESTful API using json-server",
    "completed": true,
    "priority": "medium",
    "createdAt": "2025-01-16"
  },
  {
    "id": 3,
    "title": "Style Components",
    "description": "Add custom CSS styling to all components",
    "completed": false,
    "priority": "low",
    "createdAt": "2025-01-17"
  }
];

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
