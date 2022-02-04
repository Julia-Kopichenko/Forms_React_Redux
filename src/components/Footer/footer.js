import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { ContentWrapper } from "../../styles-general/ContentWrapper";
import { Flex } from "../Flex";

const Footer = () => {
  return (
    <StyledFooter>
      <ContentWrapper padding="30px 20px">
        <Flex justify="space-between">
          <p>&copy; 2016 Городской сайт</p>
          <StyledNav>
            <ul>
              <li>
                <NavLink to="#">Пользовательское соглашение</NavLink>
              </li>
              <li>
                <NavLink to="#">Инструкции</NavLink>
              </li>
              <li>
                <NavLink to="#">Рекламодателям</NavLink>
              </li>
            </ul>
          </StyledNav>
          <p>Сделано в Беларуси</p>
        </Flex>
      </ContentWrapper>
    </StyledFooter>
  );
};
export default Footer;

const StyledFooter = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colorGrey};
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colorGrey};
  & nav {
    width: 70%;
    padding-left: 30px;
  }
`;

const StyledNav = styled.nav`
  & ul {
    display: flex;
    align-items: center;
  }

  & li a {
    color: ${({ theme }) => theme.colorGrey};
    padding-right: 35px;
    &:hover {
      color: ${({ theme }) => theme.colorGreen};
    }
    &.active {
    }
  }
`;
