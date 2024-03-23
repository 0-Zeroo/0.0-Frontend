import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import * as S from "./style";

const auth = getAuth();
const db = getFirestore();

const Index = () => {
    const [userName, setUserName] = useState("");
    const [userBorrow, setUserBorrow] = useState(0);
    const [userSeat, setUserSeat] = useState("");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const userRef = doc(db, "People", user.email);
                getDoc(userRef).then((docSnap) => {
                    if (docSnap.exists()) {
                        setUserName(docSnap.data()?.Name || "");
                        setUserBorrow(docSnap.data()?.Borrow || 0);
                        setUserSeat(docSnap.data()?.Seat || "");
                    } else {
                        setUserName("이름 없음");
                    }
                }).catch(error => {
                    console.error("Error fetching user data:", error);
                });
            } else {
                setUserName("");
                setUserBorrow(0);
                setUserSeat("");
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
