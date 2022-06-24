import styled from "styled-components";

import MetricItem from "../components/metric/MetricItem";
import MetricText from "../components/metric/MetricText";
import useRiseFadeIn from "../hooks/useRiseFadeIn";
import RiseFadeIn from "../utils/RiseFadeIn";
import useCountUp from "../hooks/useCountUp";

const Container = styled(RiseFadeIn)`
  margin-left: 623px;
  padding-top: 150px;
`;

function MetricContainer() {
  const trigger = useRiseFadeIn();
  const numOfTravelers = useCountUp(2000, 700);
  const numOfTravelRevies = useCountUp(2000, 100);
  const numOfTravelSchedules = useCountUp(2000, 470);

  return (
    <Container isActive={trigger} duration={700} delay={100} offsetY={10}>
      <MetricItem>
        <MetricText
          strongText={`${numOfTravelers}만 명`}
          normalText="의 여행자"
        />
      </MetricItem>
      <MetricItem>
        <MetricText
          strongText={`${numOfTravelRevies}만 개`}
          normalText="의 여행 리뷰"
        />
      </MetricItem>
      <MetricItem>
        <MetricText
          strongText={`${numOfTravelSchedules}만 개`}
          normalText="의 여행 일정"
        />
      </MetricItem>
    </Container>
  );
}

export default MetricContainer;
