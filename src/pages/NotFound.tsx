import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-text">
          Oops! The page you're looking for doesn’t exist or has been moved.
        </p>
        <Link to="/" className="notfound-btn">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

