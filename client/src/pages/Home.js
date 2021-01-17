import { Fragment } from "react";
import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";
import SpeechToText from "../STT/SpeechToText";

const fieldKeys = ["Type", "Category", "Amount"];
const LightTextField = styled(TextField)`
  > p {
    color: white;
    padding-bottom: 50px;
  }
`;

const Income = () => {
  return (
    <Fragment>
      <SpeechToText />
    </Fragment>
  );
};

export default Income;
