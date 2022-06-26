import styled from "styled-components";

import LogoContainer from "./components/containers/LogoContainer";
import MetricContainer from "./components/containers/MetricContainer";
import AwardContainer from "./components/containers/AwardContainer";
import GlobalStyle from "./styles/GlobalStyle";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 552px;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  border: 0px;

  @media (max-width: 1200px) {
    min-width: 1200px;
  }
`;

const ContentCotainer = styled.div`
  position: relative;
  margin: 0px auto;
  width: 1040px;
  height: 412px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <ContentCotainer>
          <LogoContainer />
          <MetricContainer />
          <AwardContainer />
        </ContentCotainer>
      </Container>
    </>
  );
}

export default App;
