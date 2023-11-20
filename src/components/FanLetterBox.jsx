import React, { useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";

// import SampleFanLetter from "/Users/a1234/Desktop/visitors/visitors/src/db/fakeData.json";
//팬레터 입력 박스
const LetterBox = styled.div`
  border: 2px solid #000;
  align-items: center;
  width: 30rem;
  height: 17rem;
  //가운데 정렬
  margin: 0 auto;
`;

// 인풋 박스
const InputBox = styled.div`
  margin-top: 20px;
`;

const LetterForm = styled.form`
  font-family: "Diphylleia", serif;
  text-align: center;
  font-size: 28px;
  margin-left: 20px;
  margin-top: 8px;
`;
// 인풋 스타일
const Input = styled.input`
  width: 14rem ${(props) => props.width};
  height: 40px;
  border-radius: 15px;
  margin-top: 6px;
  margin-right: 30px;
  font-size: 16px;
`;

// Select 스타일
const SelectBbName = styled.select`
  border-radius: 6px;
  width: 8rem;
  height: 2rem;
  margin-left: 1rem;
  margin-top: 1rem;
  color: ${(props) => props.Color};
`;

const Registration = styled.button`
  all: unset;
  font-family: "Diphylleia", serif;
  justify-content: center;
  display: flex;
  border-radius: 13px;
  border: 1px solid black;
  padding: 10px;
  font-size: 20px;
  margin-top: 2.6rem;
  margin-left: 19rem;

  &:hover {
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }
`;

function FanLetterBox({ SampleFl, setSampleFl, mappedSampleFL }) {
  // input 기능
  const [NickName, setNickName] = useState("");
  const [Comment, setComment] = useState("");
  const [date, setDate] = useState("");
  const [WriteTo, setWriteTo] = useState("");

  return (
    <container>
      <LetterBox>
        <div>
          <SelectBbName>
            <option Color="#79cc39">태양</option>
            <option value="" Color="#fc7351">
              G-DRAGON
            </option>
            <option value="" Color="#515ffc">
              대성
            </option>
            <option value="" Color="#000000">
              T.O.P
            </option>
          </SelectBbName>
        </div>
        <InputBox>
          <LetterForm
            onSubmit={(event) => {
              event.preventDefault();
              const newLetter = {
                id: uuid(),
                NickName: NickName,
                Date: date,
                WriteTo: WriteTo,
                Comment: Comment,
              };
              console.log(newLetter);
              setSampleFl([...SampleFl, newLetter]);
            }}
          >
            Nickname :
            <Input
              value={NickName}
              type=""
              width="13rem"
              placeholder=" 여기에 닉네임 입력"
              onChange={(event) => {
                setNickName(event.target.value);
              }}
            ></Input>
            Comment :
            <Input
              type=""
              value={Comment}
              onChange={(event) => {
                setComment(event.target.value);
              }}
              placeholder=" 여기에 코멘트 입력"
            ></Input>
            <Registration type="submit">Registration</Registration>
          </LetterForm>
        </InputBox>
      </LetterBox>
    </container>
  );
}

export default FanLetterBox;
