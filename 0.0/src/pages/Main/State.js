import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "./firebase";

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
    <Box>
      {seats.map((seat) => (
        <StateBox key={seat.label}>
          <Circle color={seat.color} />
          {seat.label}: {seat.status}
        </StateBox>
      ))}
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const StateBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Circle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export default State;
