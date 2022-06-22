import styled, { keyframes } from "styled-components";

import LogoImage from "../assets/images/triple2x.png";
import Text from "../components/logo/Text";

const FadeIn = keyframes`
  from{
    opacity: 0;
    transform: translateY(10px);
  }
  to{
    opacity: 1;
    transform: none;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-image: url(${LogoImage});
  background-repeat: no-repeat;
  background-size: 400px 338px;
  padding-top: 280px;
  text-align: center;
  animation: ${FadeIn} 700ms ease-out 0ms;
`;

function LogoContainer() {
  return (
    <Container>
      <Text>2019년 2월 기준</Text>
    </Container>
  );
}

export default LogoContainer;
