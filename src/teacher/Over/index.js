import React from "react";
import Main from "../Main/Main";
import Date from "./Date";
import * as S from "./style";

const index = () => {
  const numbers = ["2", "3", "1", "4"];
  const numberList = numbers.map((number) => <Main number={number} />);
  const dates = ["8", "3", "5", "4"];
  const dateList = dates.map((date) => <Date date={date} />);
  return (
    <>
      <S.Background>
        <S.MainText>우산 미반납자 목록</S.MainText>
        <S.TitleText>
          <S.TitleUmbrellaNum>Number 우산 번호</S.TitleUmbrellaNum>
          <S.TitleStudent>Student 대여 학생</S.TitleStudent>
          <S.TitleDate>Schedule 연체 기간 </S.TitleDate>
        </S.TitleText>
        <S.Text>
          <S.UmbrellaNum>{numberList}</S.UmbrellaNum>
          <S.StudentContainer>
            <S.Student>1학년 2반 12번 신희성</S.Student>
            <S.Student>1학년 2반 12번 신희성</S.Student>
            <S.Student>1학년 2반 12번 신희성</S.Student>
            <S.Student>1학년 2반 12번 신희성</S.Student>
          </S.StudentContainer>
          <S.StateContainer>{dateList}</S.StateContainer>
        </S.Text>
      </S.Background>
    </>
  );
};

export default index;
