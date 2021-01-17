import Nav from "./global/Nav";
import "./App.css";
import Landing from "./FTU/Landing";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App-header">
        <Landing />
        <Nav />
      </div>
    </Router>
  );
}

export default App;
