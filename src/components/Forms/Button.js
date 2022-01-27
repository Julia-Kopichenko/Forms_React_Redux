import styled from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.colorWhite};
  background: ${({ theme }) => theme.colorGreen};
  min-width: 50px;
  font-size: 20px;
  padding: 10px 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colorButtonHover};
  }
  &:active {
    background: ${({ theme }) => theme.colorButtonHover};
  }
`;
