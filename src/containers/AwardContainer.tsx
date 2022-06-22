import styled from "styled-components";

import GoogleBadge from "../assets/images/play-store2x.png";
import AppleBadge from "../assets/images/badge-apple4x.png";
import Badge from "../components/award/Badge";
import useRiseFadeIn from "../hooks/useRiseFadeIn";
import RiseFadeIn from "../utils/RiseFadeIn";

const Container = styled(RiseFadeIn)`
  width: 417px;
  height: 64px;
  margin: 50px 0px 140px 623px;
  white-space: nowrap;
`;

const PlayStore = styled(Badge)`
  margin-right: 39px;
  background-image: url(${GoogleBadge});
`;

const AppStore = styled(Badge)`
  background-image: url(${AppleBadge});
  margin-right: 0px;
`;

function AwardContainer() {
  const trigger = useRiseFadeIn();

  return (
    <Container isActive={trigger} duration={700} delay={200} offsetY={10}>
      <PlayStore>
        2018 구글 플레이스토어
        <br />
        올해의 앱 최우수상 수상
      </PlayStore>
      <AppStore>
        2018 애플 앱스토어
        <br />
        오늘의 여행앱 선정
      </AppStore>
    </Container>
  );
}

export default AwardContainer;
