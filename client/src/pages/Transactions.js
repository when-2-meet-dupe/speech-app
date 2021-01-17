import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteTransaction, getTransactions } from "../actions/transactions";
import DeleteIcon from "@material-ui/icons/Delete";

function Transactions() {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(getTransactions());
  }, []);

  return (
    <div className="App-header">
      <div className="cards">
        <div className="card1">
          <h1>Transactions</h1>
          <table>
            <tr>
              <th>Category</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Delete?</th>
            </tr>
            {transactions.map((trans) => (
              <tr>
                <td>{trans.category}</td>
                <td>{trans.amount}</td>
                <td>{trans.type}</td>
                <td>
                  <DeleteIcon
                    onClick={() => dispatch(deleteTransaction(trans._id))}
                  />
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
