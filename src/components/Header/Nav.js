import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PATH_NAME } from "../../constants/pathNames";

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <NavLink to={PATH_NAME.point1}>Пункт 1</NavLink>
        </li>
        <li>
          <NavLink to={PATH_NAME.point2}>Пункт 2</NavLink>
        </li>
        <li>
          <NavLink to={PATH_NAME.point3}>Пункт 3</NavLink>
        </li>
        <li>
          <NavLink to={PATH_NAME.point4}>Пункт 4</NavLink>
        </li>
        <li>
          <NavLink to={PATH_NAME.point5}>Пункт 5</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};
export default Nav;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  padding-left: 5rem;

  & ul {
    display: flex;
    align-items: center;
  }

  & li a {
    color: ${({ theme }) => theme.colorGrey};
    font-size: 1.8rem;
    padding: 8px 20px;

    &:hover {
      color: ${({ theme }) => theme.colorGreen};
    }
    &.active {
      color: ${({ theme }) => theme.colorWhite};
      position: relative;
      overflow: hidden;
      z-index: 10;
      &::before {
        content: "";
        position: absolute;
        top: 2px;
        left: 0;
        z-index: -1;
        width: 85px;
        height: 35px;
        background-color: ${({ theme }) => theme.colorGreen};
        transform: skew(-30deg);
        padding: 0 10px;
      }
    }
  }
`;
