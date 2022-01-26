import styled from "styled-components";

export const FormWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  font-size: 1.4rem;
  max-width: ${({ width }) => width || "880px"};
`;
