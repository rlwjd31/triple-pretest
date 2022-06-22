import styled, { keyframes } from "styled-components";

import MetricItem from "../components/metric/MetricItem";
import MetricText from "../components/metric/MetricText";

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
  margin-left: 623px;
  padding-top: 150px;
  animation: ${FadeIn} 700ms ease-out 100ms;
`;

function MetricContainer() {
  return (
    <Container>
      <MetricItem>
        <MetricText strongText="700만 명" normalText="의 여행자" />
      </MetricItem>
      <MetricItem>
        <MetricText strongText="100만 개" normalText="의 여행 리뷰" />
      </MetricItem>
      <MetricItem>
        <MetricText strongText="470만 개" normalText="의 여행 일정" />
      </MetricItem>
    </Container>
  );
}

export default MetricContainer;
