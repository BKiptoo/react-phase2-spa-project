// This file serves as our database for the Vercel deployment
export const tasks = [
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

export const users = [
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "developer"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com",
    "role": "designer"
  }
];

// In-memory storage for new tasks (in production, you'd use a real database)
let taskStorage = [...tasks];
