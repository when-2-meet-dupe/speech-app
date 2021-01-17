import "./App.css";
import Nav from "./global/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Landing from "./FTU/Landing";
import Contact from "./pages/Contact";
import Transactions from "./pages/Transactions";
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
