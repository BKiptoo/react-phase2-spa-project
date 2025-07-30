import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <h1>TaskMate</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/add">Add Task</Link>
            </div>
        </nav>
    );
}

export default Navbar;
