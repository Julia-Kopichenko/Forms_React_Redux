import styled from "styled-components";

export const ContentWrapper = styled.section`
  width: 1200px;
  max-width: 100%;
  padding: ${({ padding }) => padding || "0 20px"};
  margin: 0 auto;
`;
export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  min-height: 100vh;
  margin: 0 auto;

  & footer {
    margin-top: auto;
  }
`;