import styled from "styled-components";

import LogoImage from "../assets/images/triple2x.png";
import Text from "../components/logo/Text";
import useRiseFadeIn from "../hooks/useRiseFadeIn";
import RiseFadeIn from "../utils/RiseFadeIn";

const Container = styled(RiseFadeIn)`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-image: url(${LogoImage});
  background-repeat: no-repeat;
  background-size: 400px 338px;
  padding-top: 280px;
  text-align: center;
`;

function LogoContainer() {
  const trigger = useRiseFadeIn();

  return (
    <Container isActive={trigger} duration={700} delay={0} offsetY={10}>
      <Text>2019년 2월 기준</Text>
    </Container>
  );
}

export default LogoContainer;
