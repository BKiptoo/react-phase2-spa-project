import { useState } from 'react'
import Header from './components/Header'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [refreshTasks, setRefreshTasks] = useState(0);

  const handleTaskAdded = () => {
    // Trigger a re-render of TaskList by changing state
    setRefreshTasks(prev => prev + 1);
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <TaskForm onTaskAdded={handleTaskAdded} />
        <TaskList key={refreshTasks} />
      </main>
      <Footer />
    </div>
  )
}

export default App
