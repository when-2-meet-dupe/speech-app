import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTransactions } from "../actions/transactions";

function Nav() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getTransactions());
  };

  return (
    <div className="sticky">
      <div className="navBar">
        <Link className="navItem" to="/record" onClick={handleClick}>
          Record
        </Link>
        <Link className="navItem" to="/transactions" onClick={handleClick}>
          Transactions
        </Link>
        <Link className="navItem" to="/insights" onClick={handleClick}>
          Insights
        </Link>
        <a className="githubLogo" href="https://github.com/when-2-meet-dupe/speech-app"><i class="fab fa-github"></i></a>
      </div>
    </div>
  );
}

export default Nav;
