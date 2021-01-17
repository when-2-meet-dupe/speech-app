// import Income from "./Income/Income";
import Nav from "./global/Nav";
import "./App.css";
import { /*Route,*/ BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App-header">
        <Nav />
        {/* <Income /> */}
      </div>
    </Router>
  );
}

export default App;
