import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Task Manager Pro</h1>
        <nav className="header-nav">
          <ul className="nav-list">
            <li><a href="#tasks" className="nav-link">Tasks</a></li>
            <li><a href="#users" className="nav-link">Users</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
