import React, { useState } from "react";
import styled from "styled-components";
import avatar from "/Users/a1234/Desktop/visitors/visitors/src/assets/avatar.png";

const LetterBox = styled.div`
  position: relative;
  color: #000;
  border: 1px solid #000;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  width: 50rem;
  height: 10vh;
  padding: 7rem;
`;
const LetterCover = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 10%;
  left: 5%;

  padding-right: 40rem;
  padding-bottom: 3rem;
`;
const NickName = styled.h2`
  font-size: 1.6rem;
`;
const LetterImg = styled.img`
  margin-left: -0.5rem;
  width: 4.2rem;
`;

const Date = styled.p`
  width: 20rem;
`;
const StContent = styled.div`
  margin-top: 10px;
  background-color: black;
  padding: 15px;
  color: white;
  border-radius: 20px;
  width: 44rem;
`;

function Sample({ SampleFl }) {
  return (
    <div>
      {SampleFl.map((mappedSampleFL) => {
        return (
          <LetterBox>
            <LetterCover>
              <LetterImg src={avatar}></LetterImg>

              <NickName>{mappedSampleFL.NickName}</NickName>
              <Date>{mappedSampleFL.CreateDate}</Date>
              <p>To : {mappedSampleFL.WriteTo}</p>
              <StContent>
                <p>{mappedSampleFL.Comment}</p>
              </StContent>
            </LetterCover>
          </LetterBox>
        );
      })}
    </div>
  );
}

export default Sample;
