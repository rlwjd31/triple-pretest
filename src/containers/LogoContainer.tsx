import { useEffect, useState } from "react";
import styled from "styled-components";

import LogoImage from "../assets/images/triple2x.png";
import Text from "../components/logo/Text";

interface VisibleTrigger {
  isActive: boolean;
}

const Container = styled.div<VisibleTrigger>`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-image: url(${LogoImage});
  background-repeat: no-repeat;
  background-size: 400px 338px;
  padding-top: 280px;
  text-align: center;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transform: translateY(${(props) => (props.isActive ? "0px" : "10px")});
  transition: all 700ms ease-in-out 0ms;
`;

function LogoContainer() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, [isActive]);

  return (
    <Container isActive={isActive}>
      <Text>2019년 2월 기준</Text>
    </Container>
  );
}

export default LogoContainer;
