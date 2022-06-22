import styled, { keyframes } from "styled-components";

import GoogleBadge from "../assets/images/play-store2x.png";
import AppleBadge from "../assets/images/badge-apple4x.png";

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
  width: 417px;
  height: 64px;
  margin: 50px 0px 140px 623px;
  white-space: nowrap;
  animation: ${FadeIn} 700ms ease-out 200ms;
`;

const Badge = styled.div`
  font-size: 14px;
  height: 54px;
  line-height: 22px;
  padding: 5px 0px 5px 62px;
  display: inline-block;
  margin-right: 39px;
  background-position: left top;
  background-repeat: no-repeat;
  background-size: 54px 54px;
  font-weight: bold;
  color: rgba(58, 58, 58, 0.8);
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
  return (
    <Container>
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
