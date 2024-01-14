import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./component/Main/index";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
}
`;

export default App;
