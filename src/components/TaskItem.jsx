import './TaskItem.css';

function TaskItem({ task, onToggle, onDelete }) {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      case 'low': return 'priority-low';
      default: return 'priority-medium';
    }
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className={`priority-indicator ${getPriorityClass(task.priority)}`}></div>
      
      <div className="task-content">
        <h3 className="task-title">{task.title}</h3>
        <p className="task-description">{task.description}</p>
        <div className="task-meta">
          <span className={`priority-badge ${getPriorityClass(task.priority)}`}>
            {task.priority}
          </span>
          <span className="task-date">{task.createdAt}</span>
        </div>
      </div>
      
      <div className="task-actions">
        <button 
          className={`toggle-btn ${task.completed ? 'completed' : 'pending'}`}
          onClick={() => onToggle(task.id, task.completed)}
        >
          {task.completed ? '✓' : '○'}
        </button>
        <button 
          className="delete-btn"
          onClick={() => onDelete(task.id)}
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
