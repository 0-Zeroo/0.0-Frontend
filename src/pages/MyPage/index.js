import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {getFirestore, doc, getDoc} from "firebase/firestore";
import * as S from "./style";

const auth = getAuth();
const db = getFirestore();

const Index = () => {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const userRef = doc(db, "People", user.email);
                getDoc(userRef).then((docSnap) => {
                    if (docSnap.exists()) {
                        setUserName(docSnap.data().NAME);
                    } else {
                        setUserName("이름 없음");
                    }
                }).catch(error => {
                    console.error("Error fetching user data:", error);
                });
            } else {
                setUserName("");
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <>
            <S.Background>
                {/*<S.Stroke />*/}
                <S.Info>{userName ? userName : "로그인 하세요"}</S.Info>
                <Link to="/password">
                    <S.Password>비밀번호 바꾸기</S.Password>
                </Link>
                <S.Times>
                    우산 대여 횟수
                    <S.Num>5</S.Num>
                </S.Times>
                <S.State>
                    현재 우산 대여
                    <S.Circle/>
                </S.State>
            </S.Background>
        </>
    );
};

export default Index;
