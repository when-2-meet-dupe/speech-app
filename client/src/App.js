import "./App.css";
import Nav from "./global/Nav";
import SpeechToText from "./STT/SpeechToText";
import { About, Landing, Contact, Transactions } from "./pages/index";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App-header">
      <Nav />
      <Switch>
        <Route exact component={Landing} path="/" />
        <Route exact component={SpeechToText} path="/home" />
        <Route exact component={About} path="/about" />
        <Route exact component={Contact} path="/contact" />
        <Route exact component={Transactions} path="/transactions" />
      </Switch>
    </div>
  );
}

export default App;
