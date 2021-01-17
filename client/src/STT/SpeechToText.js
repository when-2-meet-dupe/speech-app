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
    setSavedNotes([...savedNotes, note]);
    setNote("");
  };

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
      </div>
    </>
  );
}

export default SpeechToText;
