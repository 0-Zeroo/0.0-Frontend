import React, { useState, useEffect } from "react";
import Box from "./box";
import Over from "./over";
import styled from "styled-components";

const State = () => {
  const [n, setN] = useState(<Text>현재 대여한 우산이 없습니다.</Text>);

  useEffect(() => {
    window.changeN = changeN;
  }, []);
  const changeN = (i) => {
    if (i === 0) setN(<Text>현재 대여한 우산이 없습니다.</Text>);
    else if (i === 1) setN(<Box />);
    else if (i > 0) setN(<Over />);
  };
  return (
    <>
      <div>{n}</div>
    </>
  );
};

const Text = styled.div`
  font-size: 26;
  font-weight: 400;
  color: #393939;
`;
export default State;
