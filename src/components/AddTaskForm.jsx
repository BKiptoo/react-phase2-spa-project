import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTaskForm() {
    const [title, setTitle] = useState("");
    const navigate = useNavigate();

    const doSubmit = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:3001/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, completed: false }),
        });
        navigate("/");
    };

    return (
        <form className="form" onSubmit={doSubmit}>
            <input
                type="text"
                value={title}
                placeholder="Task title"
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTaskForm;
