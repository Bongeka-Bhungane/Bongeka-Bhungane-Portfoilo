import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className='nav'>
        <h2 className='nav-logo'>Bongeka Bhungane</h2>
      <Link to="/" className="">
        Home
      </Link>
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
