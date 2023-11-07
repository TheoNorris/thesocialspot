import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

export function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="nav-container">
        <LogoDiv image={logo} />
        <form action="">
          <input type="search" />
          <button>GO</button>
        </form>
      </div>
    </nav>
  );
}

function LogoDiv(props) {
  return (
    <div>
      <Link to="/">
        <img id="logo-image" src={props.image} alt="Gassed logo" />
      </Link>
    </div>
  );
}
