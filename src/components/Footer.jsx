import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="about">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Task Manager Pro</h3>
            <p className="footer-description">
              A powerful and intuitive task management application built with React. 
              Organize your tasks, set priorities, and boost your productivity.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Features</h4>
            <ul className="footer-list">
              <li>Create and manage tasks</li>
              <li>Set task priorities</li>
              <li>Mark tasks as complete</li>
              <li>RESTful API integration</li>
              <li>Responsive design</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Technologies</h4>
            <ul className="footer-list">
              <li>React 19</li>
              <li>Vite</li>
              <li>JSON Server</li>
              <li>Custom CSS</li>
              <li>ES6+ JavaScript</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Task Manager.
          </p>
          <div className="footer-stats">
            <span className="stat-item">5 React Components</span>
            <span className="stat-item">RESTful API</span>
            <span className="stat-item">Custom Styling</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
