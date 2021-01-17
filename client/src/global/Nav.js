import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="sticky">
      <div className="navBar">
        <Link className="navItem" to="/home">
          Home
        </Link>
        <Link className="navItem" to="/about">
          About
        </Link>
        <Link className="navItem" to="/contact">
          Contact
        </Link>
        <Link className="navItem" to="/transactions">
          Transactions
        </Link>
      </div>
    </div>
  );
}

export default Nav;
