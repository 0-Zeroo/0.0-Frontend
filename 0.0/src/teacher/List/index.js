import React from "react";
import Main from "../Main/Main";
import * as S from "./style";

const index = () => {
  const numbers = ["1", "2", "3", "4", "5", "6"];
  const numberList = numbers.map((number) => <Main number={number} />);
  return (
    <>
      <S.Background>
        <S.MainText>우산 대여자 목록</S.MainText>
        <S.TitleCircle />
        <S.TitleText>
          <S.TitleUmbrellaNum>Number 우산 번호</S.TitleUmbrellaNum>
          <S.TitleStudent>Student 대여 학생</S.TitleStudent>
        </S.TitleText>
        <S.Stroke />
        <S.CircleContainer>
          <S.Circle />
          <S.Circle />
          <S.Circle />
          <S.Circle />
          <S.Circle />
        </S.CircleContainer>
        <S.Text>
          <S.UmbrellaNum>{numberList}</S.UmbrellaNum>
          <S.StudentContainer>
            <S.Student>1학년 2반 12번 신희성</S.Student>
            <S.Student>1학년 2반 12번 신희성</S.Student>
            <S.Student>1학년 2반 12번 신희성</S.Student>
            <S.Student>1학년 2반 12번 신희성</S.Student>
            <S.Student>1학년 2반 12번 신희성</S.Student>
            <S.Student>1학년 2반 12번 신희성</S.Student>
          </S.StudentContainer>
        </S.Text>
      </S.Background>
    </>
  );
};

export default index;
