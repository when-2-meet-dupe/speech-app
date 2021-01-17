// import Income from "./Income/Income";
// import Income from "./Income/Income";
import SpeechToText from "./STT/SpeechToText";
import Nav from "./global/Nav";
import "./App.css";
import { /*Route,*/ BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App-header">
        <Nav />
        {/* <Income /> */}
        {/* <SpeechToText /> */}
      </div>
    </Router>
    // <div className="App-header">
    //   <Nav />
    //   <Income />
    //   <SpeechToText />
    // </div>
  );
}

export default App;
