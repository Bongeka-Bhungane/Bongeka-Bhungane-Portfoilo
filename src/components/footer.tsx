import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <p className="footer-text">@copy right 2025</p>
      </div>
      <div className="footer-right">
        <Link to="/projects" className="">
          Projects
        </Link>
        <Link to="/cv" className="">
          About
        </Link>
        <Link to="/contactus" className="">
          Contact us
        </Link>
        <Link to="/privacy" className="">
          Privacy
        </Link>
      </div>
    </div>
  );
}
