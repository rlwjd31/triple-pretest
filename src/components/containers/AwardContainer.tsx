import styled from "styled-components";

import useFadeInRise from "../../hooks/useFadeInRise";
import FadeInRise from "../../utils/FadeInRise";
import AppStore from "../award/AppStore";
import PlayStore from "../award/PlayStore";

const Container = styled(FadeInRise)`
  width: 417px;
  height: 64px;
  margin: 50px 0px 140px 623px;
  white-space: nowrap;
`;

const AwardContainer = () => {
  const trigger = useFadeInRise();

  return (
    <Container isActive={trigger} duration={700} delay={200} offsetY={-10}>
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
};

export default AwardContainer;
