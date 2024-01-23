import { createGlobalStyle } from "styled-components";
import Main from "./pages/Main/index";
import Header from "./components/Header/index";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main />
    </>
  );
}

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0; 
  }
`;

export default App;
