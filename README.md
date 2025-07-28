# Task Manager Pro - React Phase 2 SPA Project

A modern, responsive single-page application (SPA) built with React for managing tasks efficiently. This project demonstrates the use of React components, RESTful API integration, and custom CSS styling.

## 🎯 Project Requirements Met

✅ **Single Page Application (SPA)** - Built with React using only one `index.html` file  
✅ **5 React Components** - Header, TaskList, TaskItem, TaskForm, and Footer  
✅ **RESTful API** - Uses json-server with GET and POST operations  
✅ **Custom CSS Styling** - Beautiful, responsive design with custom CSS  

## 🚀 Features

- **Task Management**: Create, view, update, and delete tasks
- **Priority System**: Set task priorities (High, Medium, Low) with visual indicators
- **Task Status**: Mark tasks as complete/incomplete
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **RESTful API**: Full CRUD operations with json-server
- **Modern UI**: Clean, professional design with smooth animations

## 🛠 Technologies Used

- **React 19** - Frontend framework
- **Vite** - Build tool and dev server
- **JSON Server** - Mock REST API
- **Custom CSS** - Styling with modern CSS features
- **ES6+ JavaScript** - Modern JavaScript features

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd react-phase2-spa-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the JSON Server (Backend API)**
   ```bash
   npm run server
   ```
   This will start the API server on `http://localhost:3001`

4. **Start the React Development Server**
   ```bash
   npm run dev
   ```
   This will start the React app on `http://localhost:5173`

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run server` - Start the JSON server API
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality

## 📱 Components Overview

### 1. Header Component
- Navigation bar with app title and navigation links
- Sticky positioning with gradient background
- Responsive design

### 2. TaskList Component
- Displays all tasks in a responsive grid layout
- Handles GET requests to fetch tasks from API
- Manages task updates (complete/incomplete) and deletions
- Loading and error states

### 3. TaskItem Component
- Individual task card with priority indicators
- Task details including title, description, priority, and date
- Action buttons for marking complete and deleting
- Visual feedback for completed tasks

### 4. TaskForm Component
- Form for creating new tasks
- POST requests to add tasks to the API
- Form validation and error handling
- Input fields for title, description, and priority

### 5. Footer Component
- App information and feature highlights
- Technology stack details
- Responsive multi-column layout

## 🎨 Styling Features

- **Gradient Backgrounds** - Modern gradient designs throughout
- **Box Shadows** - Subtle shadows for depth and visual hierarchy
- **Hover Effects** - Interactive animations on buttons and cards
- **Responsive Grid** - Flexible layouts that adapt to screen size
- **Custom Scrollbars** - Styled scrollbars matching the theme
- **Typography** - Carefully chosen fonts and sizing
- **Color Scheme** - Consistent color palette across components

## 🌐 API Endpoints

The JSON server provides the following endpoints:

- `GET /tasks` - Fetch all tasks
- `POST /tasks` - Create a new task
- `PATCH /tasks/:id` - Update a specific task
- `DELETE /tasks/:id` - Delete a specific task
- `GET /users` - Fetch all users (demo data)

## 📊 Data Structure

### Task Object
```json
{
  "id": 1,
  "title": "Task Title",
  "description": "Task description",
  "completed": false,
  "priority": "high",
  "createdAt": "2025-01-15"
}
```

## 🔄 Development Workflow

1. Start both servers (React dev server and JSON server)
2. The React app will communicate with the JSON server API
3. All task data is stored in `db.json`
4. Changes to React components will hot-reload automatically
5. API changes require JSON server restart

## 📝 Usage Instructions

1. **View Tasks**: All tasks are displayed on the main page
2. **Add New Task**: Use the form at the top to create new tasks
3. **Mark Complete**: Click the circle button to toggle task completion
4. **Delete Task**: Click the X button to remove a task
5. **Priority Levels**: Tasks show colored indicators based on priority

## 🎯 Learning Objectives Achieved

- ✅ Created a single-page application using React
- ✅ Implemented 5 distinct React components with proper separation of concerns
- ✅ Integrated RESTful API using json-server for data persistence
- ✅ Applied custom CSS styling with modern design principles
- ✅ Used React hooks (useState, useEffect) for state management
- ✅ Implemented form handling and validation
- ✅ Created responsive design for multiple screen sizes

## 🚀 Future Enhancements

- User authentication and authorization
- Task filtering and sorting options
- Due dates and reminders
- Task categories or projects
- Drag and drop functionality
- Dark mode toggle
- Data export functionality

## 👨‍💻 Author

Built as part of Moringa School Phase 2 React project requirements.

---

**Note**: Make sure to run both the React development server and JSON server simultaneously for full functionality.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
