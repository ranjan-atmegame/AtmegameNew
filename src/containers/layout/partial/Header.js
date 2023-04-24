import React from "react";
import { HeaderContainer, Div, SearchIcon } from "./HeaderStyles";

import { AppLogo, Hamburger } from "./Images";
import SearchIconPath from "../../../assets/img/search-icon-white.svg";

const Header = ({ toggleSidebar }) => {
  return (
    <HeaderContainer>
      <Div>
        <Hamburger toggleSidebar={toggleSidebar} />
        <AppLogo />
      </Div>
      <Div>
        <SearchIcon src={SearchIconPath} />
      </Div>
    </HeaderContainer>
  );
};

export default Header;
