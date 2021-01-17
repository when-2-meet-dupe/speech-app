import { Fragment } from "react";
import Image from "material-ui-image";
import styled from "styled-components";
import landing from "../assets/landing.svg";
import { Button } from "@material-ui/core";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Column = styled.div`
  flex: 50%;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 80px;
`;

const PrimaryButton = styled(Button)`
  color: white !important;
  font-size: 25px !important;
  font-weight: 700 !important;
  text-tranform: none !important;
  background-color: #00bfa6 !important;
`;

const LandingPage = () => (
  <Container>
    <Column>
      <Title className="column">Say Your Price</Title>
      <PrimaryButton size="large">Get started</PrimaryButton>
    </Column>
    <Column>
      <Image src={landing} />
    </Column>
  </Container>
);
export default LandingPage;
