import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "../src/components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  background-color: ${({ theme }) => theme.bg};
  display: flex;
`;

const Wrapper = styled.div`
  flex: 7;
  padding: 22px;
`;

function App() {
  const [lightMode, setLightMode] = useState(true);
  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <Container>
        <Router>
          <Navbar />
          <Main>
            <Menu lightMode={lightMode} setLightMode={setLightMode} />

            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />

                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
