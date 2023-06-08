import { useReactiveVar } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { darkModeVar, isLoggedInVar } from "./apollo";
import Home from "./screen/Home";
import Login from "./screen/Login";
import NotFound from "./screen/NotFound";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "./style";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Login />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
