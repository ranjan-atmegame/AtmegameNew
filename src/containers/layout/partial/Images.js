import { memo } from "react";
import { Link } from "react-router-dom";
import { Logo, HamburgerIcon } from "./HeaderStyles";

import logoPath from "../../../assets/img/logo.png";
import HamburgerPath from "../../../assets/img/menu-icon.svg";

export const AppLogo = memo(() => (
  <Link to="/">
    <Logo
      src={logoPath}
      alt="Play Online Free Games - AtmeGame"
      title="Play Online Free Games - AtmeGame"
    />
  </Link>
));

export const Hamburger = ({ toggleSidebar }) => (
  <HamburgerIcon onClick={toggleSidebar} src={HamburgerPath} alt="Hamburger" />
);
