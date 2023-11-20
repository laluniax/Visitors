import React, { useState, useEffect } from "react";
import "./App.css";
import MainImg from "./components/MainImg";
import GlobalStyle from "./components/GlobalStyle";
import MemberClick from "./components/MemberClick";
import FanLetterBox from "./components/FanLetterBox";
import Sample from "./components/Sample";
import SampleFanLetter from "/Users/a1234/Desktop/visitors/visitors/src/db/fakeData.json";

function App() {
  const [SampleFl, setSampleFl] = useState(SampleFanLetter);
  return (
    <container id="container">
      <GlobalStyle />
      <MainImg />
      {/* 멤버 클릭하면 그 멤버에 맞는 창 나오게 */}
      <MemberClick SampleFl={SampleFl} />

      {/* 방명록 박스*/}
      <FanLetterBox SampleFl={SampleFl} setSampleFl={setSampleFl} />
      {/* 방명록 댓글 */}
      <Sample SampleFl={SampleFl} />
    </container>
  );
}

export default App;
