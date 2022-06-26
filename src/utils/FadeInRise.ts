import styled from "styled-components";

import FadeInRiseProps from "../interfaces/FadeInRiseProps";

const FadeInRise = styled.div<FadeInRiseProps>`
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transform: translateY(
    ${(props) => (props.isActive ? `${props.offsetY}px` : "0px")}
  );
  transition: all ${(props) => props.duration}ms ease-in-out
    ${(props) => props.delay}ms;
`;

export default FadeInRise;
