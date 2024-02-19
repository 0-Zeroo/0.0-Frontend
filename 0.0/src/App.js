import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderT from "./components/HeaderT/index";
import Main from "./teacher/Main/index";
import List from "./teacher/List/index";
import Over from "./teacher/Over/index";
import Login from "./components/Login/index";
import { createGlobalStyle } from "styled-components";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <HeaderT />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/list" element={<List />}></Route>
          <Route path="/over" element={<Over />}></Route>
          <Route path="/login" element={<Login />}></Route>
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
    white-space: nowrap;
  }
  
`;
export default App;

/* 학생버전
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderS from "./components/HeaderS/index";
import Main from "./pages/Main/index";
import MyPage from "./pages/MyPage/index";
import { createGlobalStyle } from "styled-components";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <HeaderS />
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
    white-space: nowrap;
  }
  
`;
export default App;
*/
