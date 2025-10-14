import { Link } from "react-router-dom";

export default function List() {
  return (
    <div className="list">
      <Link to="/projects" className="">
        Projects
      </Link>
      <Link to="/cv" className="">
        Cv
      </Link>
      <Link to="/contactus" className="">
        Contact us
      </Link>
      <Link to="/privacy" className="">
        Privacy
      </Link>
    </div>
  );
}
