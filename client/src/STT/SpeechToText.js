import React, { useState, useEffect } from "react";
import "../css/SpeechToText.css";
import { useDispatch } from "react-redux";
import StopIcon from "@material-ui/icons/Stop";
import CheckIcon from "@material-ui/icons/Check";
import UndoIcon from "@material-ui/icons/Undo";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { createTransaction } from "../actions/transactions";
import { Tooltip } from "@material-ui/core";
import { PrimaryButton } from "../pages/Landing";
import speechToText from "../assets/speechToText.svg";

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

  const parseExpense = (words) => {
    // array of words
    // length 4 means it was negative
    // length 3 means is was positive
    // Ex: "$30 expense food"
    // Ex: "- $30 expense food"
    if (words.length === 4) {
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

  const handleUndo = async (e) => {
    e.preventDefault();
    setNote("");
  };

  const renderHeader = () => {
    return (
      <>
        <h1>Record</h1>
        <p>
          <Tooltip
            title="For example, you can say '$100 income business'."
            placement="left"
          >
            <a>Begin recording your income or expenses.</a>
          </Tooltip>{" "}
          Once you're done, press stop followed by the checkmark button.
        </p>
      </>
    );
  };

  const renderRecordBox = () => (
    <div className="box2">
      <button onClick={() => setIsListening((isListening) => true)}>
        <FiberManualRecordIcon fontSize="medium" color="secondary" />
      </button>
      <button onClick={() => setIsListening((isListening) => false)}>
        <StopIcon />
      </button>
      <button onClick={handleSaveNote} disabled={!note}>
        <CheckIcon />
      </button>
      <button onClick={handleUndo}>
        Undo <UndoIcon />
      </button>
      <p>{note}</p>
    </div>
  );

  const renderForm = () => (
    <form>
      You said...
      <div>
        {savedNotes.map((n) => (
          <p key={n}>{n}</p>
        ))}
      </div>
      <div className="curr-amount">Amount: ${amount}</div>
      <div className="curr-type">Type: {type}</div>
      <div className="curr-cat">Category: {category}</div>
      <div className="submitButton">
        <PrimaryButton value="Submit" onClick={handleSubmit}>
          Submit
        </PrimaryButton>
      </div>
    </form>
  );

  let volumePic = <i class="fas fa-volume-mute"></i>;
  if (isListening) {
    volumePic = <i class="fas fa-volume-up"></i>;
  } else {
    volumePic = <i class="fas fa-volume-mute"></i>;
  }

  return (
    <div className="container">
      <div className="flex-left">
        {renderHeader()}
        {renderRecordBox()}
        {renderForm()}
        <img alt="transfer money" className="icon" src={speechToText} />
      </div>
    </div>
  );
}

export default SpeechToText;
