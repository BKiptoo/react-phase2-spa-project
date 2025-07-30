function TaskItem({ task, onDelete, onToggle }) {
  return (
    <div 
      className={`task-item ${task.completed ? 'completed' : ''}`}
    >
      <span>
        {task.title}
      </span>
      <div>
        <button 
          onClick={() => onToggle(task.id, task.completed)}
          className={`complete-btn ${task.completed ? 'completed' : ''}`}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button 
          onClick={() => onDelete(task.id)}
          className="delete-btn"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
