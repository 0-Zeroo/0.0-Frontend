import React from "react";
import Main from "./Main";
import State from "./State";
import * as S from "../../styles/theme";
import * as M from "./style";

const index = () => {
  const numbers = ["1", "2", "3", "4", "5", "6"];
  const numberList = numbers.map((number) => <Main number={number} />);
  return (
    <>
      <S.Background>
        <M.RemainText>남은 우산</M.RemainText>
        <M.Num>5</M.Num>
        <M.TitleCircle />
        <M.TitleText>
          <M.TitleUmbrellaNum>Number 우산 번호</M.TitleUmbrellaNum>
          <M.TitleState>State 상태</M.TitleState>
          <M.TitleSchedule>Schedule 반납 예정일</M.TitleSchedule>
        </M.TitleText>
        <M.Stroke />
        <M.CircleContainer>
          <M.Circle />
          <M.Circle />
          <M.Circle />
          <M.Circle />
          <M.Circle />
          <M.Circle />
        </M.CircleContainer>
        <M.Text>
          <M.UmbrellaNum>{numberList}</M.UmbrellaNum>
          <M.State>
            <M.StateCircle />
            <M.StateText>
              <State />
            </M.StateText>
          </M.State>
          <M.Schedule>
            <M.ScheduleStroke />
            <M.ScheduleStroke />
            <M.ScheduleStroke />
            <M.ScheduleStroke />
            <M.ScheduleStroke />
            <M.ScheduleStroke />
          </M.Schedule>
        </M.Text>
      </S.Background>
    </>
  );
};

export default index;
