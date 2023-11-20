import React, { useState } from "react";
import styled from "styled-components";

const MemberBox = styled.div`
  margin: 0 auto;
  margin-top: 14px;
  text-align: center;
  width: 40rem;
  height: 10vh;
`;

const MemberName = styled.button`
  all: unset;
  font-size: 27px;
  padding: 10px 10px;
  margin-top: 20px;
  margin-left: 30px;
  border-radius: 15px;
  font-weight: lighter;

  &:hover {
    color: rgba(255, 253, 252, 100);
    background-color: ${function (props) {
      switch (props.idx) {
        case 0:
          return "#79cc39";
        case 1:
          return "#fc7351";
        case 2:
          return "#515ffc";
        case 3:
          return "#000000";
      }
    }};

    font-weight: 30;
    cursor: pointer;
  }
`;

function MemberClick() {
  const bigBangArr = ["태양", "G-DRAGON", "대성", "T.O.P"];
  const [mouseOver, setMouseOver] = useState();
  return (
    <MemberBox>
      {bigBangArr.map(function (member, idx) {
        return (
          <MemberName
            idx={mouseOver}
            onMouseOver={() => setMouseOver(idx)}
            onMouseOut={() => setMouseOver(null)}
          >
            {member}
          </MemberName>
        );
      })}

      {/* <MemberName BackgroundColor="#79cc39">태양</MemberName>
      <MemberName BackgroundColor="#fc7351">G-DRAGON</MemberName>
      <MemberName BackgroundColor="#515ffc">대성</MemberName>
      <MemberName BackgroundColor="#000000">T.O.P</MemberName> */}
    </MemberBox>
  );
}

export default MemberClick;
