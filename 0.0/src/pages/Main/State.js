import React, { useState, useEffect } from "react";

const State = () => {
  const [n, setN] = useState("대여가능");

  useEffect(() => {
    window.changeN = changeN;
  }, []);
  const changeN = (i) => {
    if (i === 0) setN("대여가능");
    else if (i > 0) setN("대여불가");
  };
  return (
    <>
      <div>{n}</div>
    </>
  );
};

export default State;
