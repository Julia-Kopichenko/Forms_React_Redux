import React from "react";
import { Flex } from "../Flex";
import { ContentWrapper } from "../../styles-general/ContentWrapper";
import { StyledHeader, TitleWrapper, Title } from "./Header.styled";
import Nav from "./Nav";

const Header = () => {
  return (
    <StyledHeader>
      {/* <ContentWrapper> */}
        {/* <Flex justify="flex-end" align="center"> */}
          <TitleWrapper>
            <Title>Городской сайт</Title>
          </TitleWrapper>
          <Nav />
        {/* </Flex> */}
      {/* </ContentWrapper> */}
    </StyledHeader>
  );
};
export default Header;
