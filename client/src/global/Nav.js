import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="sticky">
      <div className="navBarContainer">
        <div className="navBar">
          <ul>
            <div className="left">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/transactions">Transactions</Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
