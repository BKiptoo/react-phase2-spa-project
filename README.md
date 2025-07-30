# TaskMate

A simple task management app built with React.

## Features

- Add new tasks
- Mark tasks as complete/incomplete
- Delete tasks
- View all tasks

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the JSON server (backend):
   ```bash
   npm run server
   ```

3. In a new terminal, start the React app:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app.

## Tech Stack

- React
- React Router
- JSON Server (for backend API)
- CSS for styling

## API Endpoints

- `GET /tasks` - Get all tasks
- `POST /tasks` - Create a new task
- `PATCH /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task
