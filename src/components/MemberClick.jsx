import React from "react";
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
    background-color: ${(props) => props.BackgroundColor};
    font-weight: 30;
  }
`;

function MemberClick() {
  return (
    <MemberBox>
      {/* 멤버들 버튼 클릭하면 그에 맞는 댓글 나오게 */}
      <MemberName BackgroundColor="#79cc39">태양</MemberName>
      <MemberName BackgroundColor="#fc7351">G-DRAGON</MemberName>
      <MemberName BackgroundColor="#515ffc">대성</MemberName>
      <MemberName BackgroundColor="#000000">T.O.P</MemberName>
    </MemberBox>
  );
}

export default MemberClick;
