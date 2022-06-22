import styled from "styled-components";

import MetricItem from "../components/metric/MetricItem";
import MetricText from "../components/metric/MetricText";
import useRiseFadeIn from "../hooks/useRiseFadeIn";
import RiseFadeIn from "../utils/RiseFadeIn";

const Container = styled(RiseFadeIn)`
  margin-left: 623px;
  padding-top: 150px;
`;

function MetricContainer() {
  const trigger = useRiseFadeIn();

  return (
    <Container isActive={trigger} duration={700} delay={100} offsetY={10}>
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
