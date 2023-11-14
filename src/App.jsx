import "./App.css";
import styled from "styled-components";
import MainImg from "./components/MainImg";
import GlobalStyle from "./components/GlobalStyle";
import MemberClick from "./components/MemberClick";
import FanLetterBox from "./components/FanLetterBox";

function App() {
  return (
    <container id="container">
      <GlobalStyle />
      <MainImg />
      {/* 멤버 클릭하면 그 멤버에 맞는 창 나오게 */}
      <MemberClick />
      {/* 방명록 박스*/}
      <FanLetterBox />
    </container>
  );
}

export default App;
