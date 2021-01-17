import "./App.css";
import Nav from "./global/Nav";
import SpeechToText from "./STT/SpeechToText";
import { Landing, Transactions, Insights } from "./pages/index";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App-header">
      <Nav />
      <Switch>
        <Route exact component={Landing} path="/" />
        <Route exact component={SpeechToText} path="/record" />
        <Route exact component={Transactions} path="/transactions" />
        <Route exact component={Insights} path="/insights" />
      </Switch>
    </div>
  );
}

export default App;
