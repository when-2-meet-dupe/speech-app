import React, { useState, useEffect } from "react";
import StopIcon from "@material-ui/icons/Stop";
import CheckIcon from "@material-ui/icons/Check";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { createTransaction } from "../actions/transactions";
import { useDispatch } from "react-redux";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

function SpeechToText() {
  const dispatch = useDispatch();

  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null);
  const [savedNotes, setSavedNotes] = useState([]);

  // TRACK TYPE, AMOUNT, CATEGORY OF TRANSACTION
  const [type, setType] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  useEffect(() => {
    handleListen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      setAmount(val);
      setType(words[1]);
      setCategory(words[2]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = { amount: amount, type: type, category: category };
    dispatch(createTransaction(data));
  };

  // const [volumePic, setVolumePic] = useState();
  let volumePic = <i class="fas fa-volume-mute"></i>;

  if (isListening) {
    // setVolumePic(<i class="fas fa-volume-up"></i>)
    // setVolumePic(<VolumeOffIcon />);
    volumePic = <i class="fas fa-volume-up"></i>;
  } else {
    // setVolumePic(<i class="fas fa-volume-mute"></i>)
    // setVolumePic(<VolumeOnIcon />);
    volumePic = <i class="fas fa-volume-mute"></i>;
  }
  const renderRecordBox = () => (
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
  );

  return (
    <>
      <div className="container">
        <h1>Record</h1>
        <h6>Begin recording </h6>
        {renderRecordBox()}
        <div className="box">
          {savedNotes.map((n) => (
            <p key={n}>{n}</p>
          ))}
        </div>
        <form className="stt-form">
          <div className="curr-amount">${amount}</div>
          <div className="curr-type">${type}</div>
          <div className="curr-cat">${category}</div>
          <div>
            <button // Input for the submit button
              type="submit"
              value="Submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SpeechToText;
