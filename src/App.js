import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/index";
import Main from "./pages/Main/index";
import MyPage from "./pages/MyPage/index";
import Login from "./components/Login/index";
import Password from "./components/Password/index";
import MainT from "./teacher/Main/index";
import List from "./teacher/List/index";
import Over from "./teacher/Over/index";
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
          <Route path="/password" element={<Password />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/teacher" element={<MainT />}></Route>
          <Route path="/list" element={<List />}></Route>
          <Route path="/over" element={<Over />}></Route>
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

