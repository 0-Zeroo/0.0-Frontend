import React, { useState, useEffect } from "react";
import styled from "styled-components";

const State = () => {
  const [at, setAT] = useState("대여가능");
  const [ac, setAC] = useState("#19E76C");
  const [bt, setBT] = useState("대여가능");
  const [bc, setBC] = useState("#19E76C");
  const [ct, setCT] = useState("대여가능");
  const [cc, setCC] = useState("#19E76C");
  const [dt, setDT] = useState("대여가능");
  const [dc, setDC] = useState("#19E76C");
  const [et, setET] = useState("대여가능");
  const [ec, setEC] = useState("#19E76C");
  const [ft, setFT] = useState("대여가능");
  const [fc, setFC] = useState("#19E76C");

  useEffect(() => {
    window.changeA = changeA;
    window.changeB = changeB;
    window.changeC = changeC;
    window.changeD = changeD;
    window.changeE = changeE;
    window.changeF = changeF;
  }, []);

  const changeA = (i) => {
    if (i === 0) {
      setAT("대여가능");
      setAC("#19E76C");
    } else if (i > 0) {
      setAT("대여불가");
      setAC("#F86464");
    }
  };

  const changeB = (i) => {
    if (i === 0) {
      setBT("대여가능");
      setBC("#19E76C");
    } else if (i > 0) {
      setBT("대여불가");
      setBC("#F86464");
    }
  };

  const changeC = (i) => {
    if (i === 0) {
      setCT("대여가능");
      setCC("#19E76C");
    } else if (i > 0) {
      setCT("대여불가");
      setCC("#F86464");
    }
  };

  const changeD = (i) => {
    if (i === 0) {
      setDT("대여가능");
      setDC("#19E76C");
    } else if (i > 0) {
      setDT("대여불가");
      setDC("#F86464");
    }
  };

  const changeE = (i) => {
    if (i === 0) {
      setET("대여가능");
      setEC("#19E76C");
    } else if (i > 0) {
      setET("대여불가");
      setEC("#F86464");
    }
  };

  const changeF = (i) => {
    if (i === 0) {
      setFT("대여가능");
      setFC("#19E76C");
    } else if (i > 0) {
      setFT("대여불가");
      setFC("#F86464");
    }
  };
  return (
    <>
      <StateBox>
        <div>
          <Circle color={ac} />
          {at}
        </div>
        <div>
          <Circle color={bc} />
          {bt}
        </div>
        <div>
          <Circle color={cc} />
          {ct}
        </div>
        <div>
          <Circle color={dc} />
          {dt}
        </div>
        <div>
          <Circle color={ec} />
          {et}
        </div>
        <div>
          <Circle color={fc} />
          {ft}
        </div>
      </StateBox>
    </>
  );
};

const StateBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const Circle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export default State;
