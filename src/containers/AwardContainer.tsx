import { useEffect, useState } from "react";
import styled from "styled-components";

import GoogleBadge from "../assets/images/play-store2x.png";
import AppleBadge from "../assets/images/badge-apple4x.png";

interface VisibleTrigger {
  isActive: boolean;
}

const Container = styled.div<VisibleTrigger>`
  width: 417px;
  height: 64px;
  margin: 50px 0px 140px 623px;
  white-space: nowrap;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transform: translateY(${(props) => (props.isActive ? "0px" : "10px")});
  transition: all 700ms ease-in-out 200ms;
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
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, [isActive]);

  return (
    <Container isActive={isActive}>
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
