import Income from "./Income/Income";
import SpeechToText from "./STT/SpeechToText";
import Nav from "./global/Nav";
import "./App.css";

function App() {
  return (
    <div className="App-header">
      <Nav />
      <Income />
      <SpeechToText />
    </div>
  );
}

export default App;
