import styled, { css } from "styled-components";

export const ErrorText = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colorError};
  position: absolute;
  top: -15px;
`;