import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 60px;
  border-bottom: 1px solid #393939;
  background: #0a0a0a;
`;
export const TextBox = styled.div`
  padding-right: 60px;
`;
export const Box = styled.div`
  display: flex;
  width: 82px;
  height: 31px;
  padding: 5px 10px 5px 10px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
`;
export const Text = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const ImgBox = styled.div`
  justify-content: center;
  padding-left: 150px;
  margin: 0 auto;
`;
export const Logo = styled.img`
  padding: 0 10px;
`;
export const List = styled.img`
  position: relative;
  bottom: 3px;
  padding: 0 10px;
`;

export const Over = styled.img`
  position: relative;
  bottom: 4px;
  padding: 0 10px;
`;
