import styled from "styled-components";

export const Text = styled.p`
  font-size: ${(props) => props.fontSize || "14px"};
  color: ${(props) => props.color || "#616362"};
  margin: ${({ margin }) => margin || "0"};
`;
export const FormTitle = styled.h2`
  font-size: ${(props) => props.fontSize || "40px"};
  font-weight: 100;
  color: ${(props) => props.color || "#616362"};
`;

/* color: ${(props) => props.color || ({ theme }) => theme.colorWhite} */
