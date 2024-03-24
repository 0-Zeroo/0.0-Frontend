import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {doc, getDoc} from "firebase/firestore";
import {firestore} from "../../firebase";
import * as S from "./style";

const auth = getAuth();

const Index = () => {
    const [userName, setUserName] = useState("");
    const [userBorrow, setUserBorrow] = useState(0);
    const [userSeat, setUserSeat] = useState("");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const userRef = doc(firestore, "People", user.email);
                const userDoc = await getDoc(userRef);
                const studentRef = doc(firestore, "Student", userDoc.data()?.Num);
                const studentDoc = await getDoc(studentRef);
                setUserName(studentDoc.data()?.Name);
                setUserBorrow(studentDoc.data()?.Borrow);
                setUserSeat(studentDoc.data()?.Seat);
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <>
            <S.Background>
                <S.Info>{userName ? userName : "로그인 하세요"}</S.Info>
                <Link to="/password">
                    <S.Password>비밀번호 바꾸기</S.Password>
                </Link>
                <S.Times>
                    우산 대여 횟수
                    <S.Num>{userBorrow}</S.Num>
                </S.Times>
                <S.State>
                    현재 우산 대여
                    <S.Num>{userSeat === true ? 1 : 0}</S.Num>
                </S.State>
            </S.Background>
        </>
    );
};

export default Index;
