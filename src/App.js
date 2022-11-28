import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "../src/components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  background-color: ${({ theme }) => theme.bg};
  display: flex;
`;

const Content = styled.div`
  flex: 7;
`;

function App() {
  const [lightMode, setLightMode] = useState(true);
  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <Container>
        <Navbar />
        <Main>
          <Menu lightMode={lightMode} setLightMode={setLightMode} />

          <Content>test</Content>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
