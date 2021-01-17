import React, { useState, useEffect } from "react";
import { TextField, Button, Card, IconButton } from "@material-ui/core";
import StopIcon from "@material-ui/icons/Stop";
import CheckIcon from "@material-ui/icons/Check";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

function SpeechToText() {
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null);
  const [savedNotes, setSavedNotes] = useState([]);

  // TRACK TYPE, AMOUNT, CATEGORY OF TRANSACTION
  const [type, setType] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log("continue..");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("Stopped Mic on Click");
      };
    }
    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      // GOT TRANSCRIPT HERE
      console.log(transcript);
      setNote(transcript);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  const handleSaveNote = () => {
    // PASS NOTE TO SOME OTHER FUNCTION HERE?
    parseExpense(note.split(" "));
    setSavedNotes([...savedNotes, note]);
    setNote("");
  };

  // array of words
  // length 4 means it was negative
  // length 3 means is was positive
  // Ex: "$30 expense food"
  // Ex: "- $30 expense food"
  const parseExpense = (words) => {
    if (words.length == 4) {
      let temp = "-" + words[1].substring(1, words[1].length); // -30
      let val = Number(temp);
      setAmount(val);
      setType(words[2]);
      setCategory(words[3]);
    } else {
      let temp = words[0].substring(1, words[0].length); // 30
      let val = Number(temp);
      setAmount(temp);
      setType(words[1]);
      setCategory(words[2]);
    }
  };

  submitHandler = (e) => {
    alert(`Recording Transaction: ${category}`)
    axios.post('http://localhost:5000/something', ) 
    .then(() => {
      alert('POSTING COMPLETE'); 
    })
    .catch(() => {
      alert('ERROR POSTING');
    })

  return (
    <>
      <div className="container">
        <div className="box">
          <button onClick={() => setIsListening((isListening) => true)}>
            <FiberManualRecordIcon fontSize="medium" color="secondary" />
          </button>
          <button onClick={() => setIsListening((isListening) => false)}>
            <StopIcon />
          </button>
          <button onClick={handleSaveNote} disabled={!note}>
            <CheckIcon />
          </button>
          <p>{note}</p>
        </div>
        <div className="box">
          <h2>Recordings:</h2>
          {savedNotes.map((n) => (
            <p key={n}>{n}</p>
          ))}
        </div>
        <form className="stt-form" form onSubmit={this.submitHandler}>
          <div className="curr-amount">${amount}</div>
          <div className="curr-type">${type}</div>
          <div className="curr-cat">${category}</div>
          <div>
            <button // Input for the submit button
            type="submit" 
            value="Submit"
            >Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SpeechToText;
