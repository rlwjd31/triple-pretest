import styled from "styled-components";

import LogoContainer from "./containers/LogoContainer";
import MetricContainer from "./containers/MetricContainer";
import AwardContainer from "./containers/AwardContainer";
import GlobalStyle from "./styles/GlobalStyle";

const AppContainer = styled.div`
  display: flex;
  width: 100vw;
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
      <AppContainer>
        <ContentCotainer>
          <LogoContainer />
          <MetricContainer />
          <AwardContainer />
        </ContentCotainer>
      </AppContainer>
    </>
  );
}

export default App;
