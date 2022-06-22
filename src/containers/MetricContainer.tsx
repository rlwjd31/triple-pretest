import styled from "styled-components";
import { useEffect, useState } from "react";

import MetricItem from "../components/metric/MetricItem";
import MetricText from "../components/metric/MetricText";

interface VisibleTrigger {
  isActive: boolean;
}

const Container = styled.div<VisibleTrigger>`
  margin-left: 623px;
  padding-top: 150px;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transform: translateY(${(props) => (props.isActive ? "0px" : "10px")});
  transition: all 700ms ease-in-out 100ms;
`;

function MetricContainer() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, [isActive]);

  console.log("Metric rendered!!");

  return (
    <Container isActive={isActive}>
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
