import React, { useState, useEffect } from "react";
import * as S from "./style";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase";

const State = () => {
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newSeats = [];
      for (let i = 1; i <= 6; i++) {
        const umbrellaRef = doc(firestore, "Umbrella", `Umbrella${i}`);
        const umbrellaDoc = await getDoc(umbrellaRef);
        const seatData = umbrellaDoc.data()?.Seat;
        const status = seatData ? "대여가능" : "대여불가";
        const color = seatData ? "#19E76C" : "#F86464";
        newSeats.push({ label: String.fromCharCode(64 + i), status, color });
      }
      setSeats(newSeats);
    };
    fetchData();
  }, []);

  return (
    <S.Box>
      {seats.map((seat) => (
        <S.StateBox key={seat.label}>
          <S.Circle color={seat.color} />
          {seat.label}: {seat.status}
        </S.StateBox>
      ))}
    </S.Box>
  );
};

export default State;
