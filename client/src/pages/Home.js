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
      <h2> Income</h2>
      {fieldKeys.map((key) => {
        return <LightTextField helperText={key} />;
      })}
      <Button variant="contained" color="primary">
        Submit
      </Button>
      <SpeechToText />
    </Fragment>
  );
};

export default Income;
