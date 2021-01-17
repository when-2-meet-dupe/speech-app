import Nav from "./global/Nav";
import { Home, About, Landing, Contact, Transactions } from "./pages/index";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App-header">
      <Nav />
      <Switch>
        <Route exact component={Landing} path="/" />
        <Route exact component={Home} path="/home" />
        <Route exact component={About} path="/about" />
        <Route exact component={Contact} path="/contact" />
        <Route exact component={Transactions} path="/transactions" />
      </Switch>
    </div>
  );
}

export default App;
