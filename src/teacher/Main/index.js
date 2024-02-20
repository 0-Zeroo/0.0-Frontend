import React from "react";
import Main from "./Main";
import State from "./State/index";
import * as S from "./style";

const index = () => {
  const numbers = ["1", "2", "3", "4", "5", "6"];
  const numberList = numbers.map((number) => <Main number={number} />);
  return (
    <>
      <S.Background>
        <S.RemainText>남은 우산</S.RemainText>
        <S.Num>5</S.Num>
        <S.TitleCircle />
        <S.TitleText>
          <S.TitleUmbrellaNum>Number 우산 번호</S.TitleUmbrellaNum>
          <S.TitleState>State 상태</S.TitleState>
          <S.TitleStudent>Student 대여 학생</S.TitleStudent>
        </S.TitleText>
        <S.Stroke />
        <S.CircleContainer>
          <S.Circle />
          <S.Circle />
          <S.Circle />
          <S.Circle />
          <S.Circle />
          <S.Circle />
        </S.CircleContainer>
        <S.Text>
          <S.UmbrellaNum>{numberList}</S.UmbrellaNum>
          <S.State>
            <S.StateText>
              <State />
            </S.StateText>
          </S.State>
          <S.Student>
            <S.StudentStroke />
            <S.StudentStroke />
            <S.StudentStroke />
            <S.StudentStroke />
            <S.StudentStroke />
            <S.StudentStroke />
          </S.Student>
        </S.Text>
      </S.Background>
    </>
  );
};

export default index;
