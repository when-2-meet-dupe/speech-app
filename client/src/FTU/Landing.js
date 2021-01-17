import styled from "styled-components";
import landing from "../assets/landing.svg";
import { Button } from "@material-ui/core";

const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: url(${landing});
  background-repeat: no-repeat;
  background-position: bottom right;
  bottom: 20px;
  right: 100px;
`;

const Container = styled.div`
  margin-left: 8em;
`;

const Title = styled.h1`
  font-size: 3.5em;
  margin-top: 2em;
  margin-bottom: 10px;
`;

const PrimaryButton = styled(Button)`
  color: white !important;
  font-size: 1.2em !important;
  font-weight: 700 !important;
  background-color: #00bfa6 !important;

  .MuiButton-label {
    text-tranform: none;
  }
`;

const Landing = () => {
  return (
    <BackgroundImage>
      <Container>
        <Title>Say Your Price</Title>
        <PrimaryButton size="large" href="/home">
          Get started
        </PrimaryButton>
      </Container>
    </BackgroundImage>
  );
};

export default Landing;
