import styled from "styled-components";

import FadeInRiseProps from "../interfaces/FadeInRiseProps";

const RiseFadeIn = styled.div<FadeInRiseProps>`
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transform: translateY(
    ${(props) => (props.isActive ? "0px" : `${props.offsetY}px`)}
  );
  transition: all ${(props) => props.duration}ms ease-in-out
    ${(props) => props.delay}ms;
`;

export default RiseFadeIn;
