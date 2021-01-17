import { Fragment } from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";

const fieldKeys = ["Type", "Category", "Amount"];
const LightTextField = styled(TextField)`
  > p {
    color: white;
  }
`;

const Income = () => {
  return (
    <Fragment>
      <h2> Income</h2>
      {fieldKeys.map((key) => {
        return <LightTextField helperText={key} />;
      })}
    </Fragment>
  );
};

export default Income;
