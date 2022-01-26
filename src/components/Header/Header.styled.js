import styled from "styled-components";

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 30px;
  font-weight: 700;
`;

export const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${({ theme }) => theme.colors.green};
  &::after {
    position: absolute;
    right: -5rem;
    content: "";
    display: inline-block;
    border-style: solid;
    border-width: 8rem 5rem 0 0;
    border-color: ${({ theme }) => theme.colors.green} transparent transparent
      transparent;
  }
  ${Title} {
    padding-right: 10px;
  }
  
`;

export const StyledHeader = styled.header`
  min-height: 8rem;
  background: ${({ theme }) => theme.colors.body};
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.colors.green};
  display: flex;

  ${TitleWrapper} {
    width: 31%;
  }
`;