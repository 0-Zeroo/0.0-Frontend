import React, {useEffect, useState} from "react";
import Main from "./Main";
import State from "./State/index";
import * as S from "./style";
import {doc, getDoc} from "firebase/firestore";
import {firestore} from "../../firebase";

const Index = () => {
    const numbers = ["1", "2", "3", "4", "5", "6"];
    const [m, setM] = useState(0);

    const numberList = numbers.map((number) => <Main number={number}/>);

    useEffect(() => {
        const fetchData = async () => {
            let count = 0;
            for (let i = 1; i <= 6; i++) {
                const umbrellaRef = doc(firestore, "Umbrella", `Umbrella${i}`);
                const umbrellaDoc = await getDoc(umbrellaRef);
                const seatData = umbrellaDoc.data()?.Seat;
                if (seatData === true) {
                    count++;
                }
            }
            setM(count);
        };

        fetchData();
    }, []);


    return (
        <>
            <S.Background>
                <S.RemainText>남은 우산</S.RemainText>
                <S.Num>{m}</S.Num>
                <S.TitleCircle/>
                <S.TitleText>
                    <S.TitleUmbrellaNum>Number 우산 번호</S.TitleUmbrellaNum>
                    <S.TitleState>State 상태</S.TitleState>
                    <S.TitleSchedule>Schedule 반납 예정일</S.TitleSchedule>
                </S.TitleText>
                <S.Stroke/>
                <S.CircleContainer>
                    <S.Circle/>
                    <S.Circle/>
                    <S.Circle/>
                    <S.Circle/>
                    <S.Circle/>
                    <S.Circle/>
                </S.CircleContainer>
                <S.Text>
                    <S.UmbrellaNum>{numberList}</S.UmbrellaNum>
                    <S.State>
                        <S.StateText>
                            <State/>
                        </S.StateText>
                    </S.State>
                    <S.Schedule>
                        {[...Array(6)].map((_, index) => (
                            <S.ScheduleStroke key={index}/>
                        ))}
                    </S.Schedule>
                </S.Text>
            </S.Background>
        </>
    );
};

export default Index;
