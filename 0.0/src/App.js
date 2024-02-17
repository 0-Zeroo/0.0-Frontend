import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/index";
import Main from "./pages/Main/index";
import MyPage from "./pages/MyPage/index";
import { createGlobalStyle } from "styled-components";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: pretendard;
    line-height: normal;
    font-style: normal;
    background: #0a0a0a;
  }
  
`;
export default App;
