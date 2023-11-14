import React from "react";
import styled from "styled-components";

const LetterBox = styled.div`
  border: 2px solid #000;
  align-items: center;
  width: 30rem;
  height: 20rem;
  //가운데 정렬
  margin: 0 auto;
`;

const MemberBox = styled.div`
  border: 2px solid red;
  text-align: center;
`;

const MemberName = styled.span`
  margin-left: 3rem;
`;

const LetterTxt = styled.div`
  display: flex;
  margin-left: 20px;
  margin-top: 20px;
`;

const SelectBbName = styled.select`
  width: 10rem;
  height: 2rem;
  color: red;
`;

function FanLetterBox() {
  return (
    <container>
      <LetterBox>
        <div>
          <SelectBbName>
            <option value="">태양</option>
            <option value="">G-DRAGON</option>
            <option value="">대성</option>
            <option value="">T.O.P</option>
          </SelectBbName>
        </div>
        <LetterTxt>
          Nickname : <input type="" />
        </LetterTxt>
        <LetterTxt>
          Comment : <input type="" />
        </LetterTxt>
        <button>등록버튼</button>
      </LetterBox>
    </container>
  );
}

export default FanLetterBox;

// 11/14 화요일에 할 것
// 등록버튼 수정 및 나머지 Css 완성

// 11/ 13 어려웠던 점
//
