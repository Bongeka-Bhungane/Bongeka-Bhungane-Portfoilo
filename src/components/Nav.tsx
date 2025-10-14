import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <h2 className="nav-logo">Bongeka Bhungane</h2>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <a
          href="https://github.com/Bongeka-Bhungane?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          Projects
        </a>
        <Link to="/cv" className="nav-link">
          CV
        </Link>
        <Link to="/contactus" className="nav-link">
          Contact us
        </Link>
        <Link to="/privacy" className="nav-link">
          Privacy
        </Link>
      </div>
    </nav>
  );
}
