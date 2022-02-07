import styled, { css } from "styled-components";

export const StyledInput = styled.input`
  display: block;
  height: 28px;
  border: 1px solid ${({ theme }) => theme.colorGreyLight};
  background-color: ${({ theme }) => theme.colorWhite};
  border-radius: 2px;
  font-size: 16px;
  padding: 0 10px;

  width: ${({ width }) => width || "100%"};

  &:focus,
  &:active {
    box-shadow: rgb(210, 213, 217) 0 0 1px 1px, rgb(227, 230, 232) 0 0 0 2px;
    border: 1px solid ${({ theme }) => theme.colorGreyLight};
    outline: none;
  }

  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid ${({ theme }) => theme.colorGreen};
      &:focus,
      &:active {
        border: 1px solid ${({ theme }) => theme.colorGreen};
        box-shadow: ${({ theme }) => theme.colorGreen} 0 0 2px 1px,
          rgb(177, 247, 160) 0 0 0 2px;
        outline: none;
      }
    `}

  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${({ theme }) => theme.colorError};
      outline: none;

      &:focus,
      &:active {
        box-shadow: rgb(244, 129, 116) 0 0 2px 1px, rgb(251, 178, 174) 0 0 0 3px;
        outline: none;
      }
    `}
`;
