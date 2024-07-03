//import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  browserRouter,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import styled from "styled-components";

// Pages
import MainPage from './component/Page/MainPage';
import PostWritePage from './component/Page/PostWritePage';
import PostViewPage from './component/Page/PageViewPage';

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App(props) {
    return (
      <BrowserRouter>
        <mainTitleText>Woo Hyuk's mini blog</mainTitleText>
        <Routes>
            <Route index element={<MainPage />} />
            <Route path="post-write" element={<PostWritePage />} />
            <Route path="post/:postId" element={<PostViewPage />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
