import React from "react";
import styled from "styled-components";
import Img from "/Users/a1234/Desktop/visitors/visitors/src/assets/BigBang.jpg";

const Imgtxt = styled.h1`
  position: absolute;
  font-family: "Diphylleia", serif;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10rem;
  color: #fff;
  margin-top: -4rem;
`;

const ImgDetail = styled.h1`
  position: absolute;
  font-family: "Diphylleia", serif;
  font-size: 2rem;
  top: 50%;
  left: 50%;
  line-height: 1;
  color: #fff;
  left: 62%;
`;

const Bbimg = styled.img`
  position: relative;
  background-size: cover;
  width: 100%;
  height: 80vh;
  transition: 2;
  filter: brightness(50%);
  &:hover {
    filter: brightness(100%);
    transition: all 0.5s;
    ~ h1 {
      color: #000;
    }
  }
`;

function MainImg() {
  return (
    <div>
      <div>
        <Bbimg src={Img}></Bbimg>
        <Imgtxt>BIGBANG</Imgtxt>
        <ImgDetail>Fan letter</ImgDetail>
      </div>
    </div>
  );
}

export default MainImg;
