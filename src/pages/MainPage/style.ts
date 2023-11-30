import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  .content{
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
