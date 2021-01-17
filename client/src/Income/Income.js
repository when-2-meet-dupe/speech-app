import { Fragment } from "react";
import styled from "styled-components";
import { TextField, Button, Card, IconButton } from "@material-ui/core";
import StopIcon from "@material-ui/icons/Stop";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const fieldKeys = ["Type", "Category", "Amount"];
const LightTextField = styled(TextField)`
  > p {
    color: white;
    padding-bottom: 50px;
  }
`;
const RecordCard = styled(Card)`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const Income = () => {
  const renderFields = () =>
    fieldKeys.map((key) => {
      return <LightTextField helperText={key} />;
    });

  // const renderRecordCard = () => (
  //   <RecordCard>
  //     <IconButton>
  //       <FiberManualRecordIcon fontSize="medium" color="secondary" />
  //     </IconButton>
  //     <IconButton>
  //       <StopIcon />
  //     </IconButton>
  //     <TextField
  //       id="outlined-basic"
  //       placeholder="You said..."
  //       variant="outlined"
  //     />
  //   </RecordCard>
  // );

  return (
    <Fragment>
      <h2> Income</h2>
      {renderFields()}
      {/* {renderRecordCard()} */}
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </Fragment>
  );
};

export default Income;
