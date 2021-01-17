import "../App.css";

export default function Transactions() {
  return (
    <div className="App-header">
      <h1 className="insightsTitle">Insights</h1>
      <div className="cards">
        <div className="card1">
          <h1>Income</h1>
          <table>
            <tr>
              <th>Category</th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>Housing</td>
              <td>$1</td>
            </tr>
            <tr>
              <td>Food</td>
              <td>$2</td>
            </tr>
            <tr>
              <td>Clothing</td>
              <td>$3</td>
            </tr>
            <tr>
              <td>Business</td>
              <td>$4</td>
            </tr>
          </table>
        </div>
        <div className="card2">
          <h1>Expenses</h1>
          <table>
            <tr>
              <th>Category</th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>Investment</td>
              <td>$1</td>
            </tr>
            <tr>
              <td>Salary</td>
              <td>$2</td>
            </tr>
            <tr>
              <td>Deposit</td>
              <td>$3</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
