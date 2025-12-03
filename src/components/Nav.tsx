import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="nav">
      <h2 className="nav-logo">Bongeka Bhungane</h2>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>

      {/* Links */}
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <a
          href="https://github.com/Bongeka-Bhungane?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </a>
        <Link to="/cv" className="nav-link" onClick={() => setIsOpen(false)}>
          CV
        </Link>
        <a
          href="/contactus"
          className="nav-link"
        >
          Contact
        </a>
        <Link
          to="/privacy"
          className="nav-link"
          onClick={() => setIsOpen(false)}
        >
          Privacy
        </Link>
      </div>
    </nav>
  );
}
