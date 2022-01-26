import styled from "styled-components";

const Button = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.green};
  min-width: 50px;
  font-size: 20px;
  padding: 10px 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
  background: ${({ theme }) => theme.colors.buttonHover};
  }
  &:active {
  background: ${({ theme }) => theme.colors.buttonHover};
  }
`;

export default Button;