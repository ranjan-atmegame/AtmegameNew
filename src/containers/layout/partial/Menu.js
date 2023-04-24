import { useState, useEffect, useCallback } from "react";
import _ from "lodash";
import { MenuLink, Img, MenuWrapper } from "./HeaderStyles";
import { Container } from "../../home/section/HomeStyles";

import axios from "../../../config/axios";
import { API_URL } from "../../../config";

const MobileMenu = () => {
  const [menus, setMenus] = useState([]);

  const getMainMenu = useCallback(() => {
    return axios
      .get(`${API_URL}/category/menu`)
      .then(({ data: result }) => {
        const menus = result.result;
        return menus.splice(0, 5);
        // return menus;
      })
      .catch((error) => {
        console.log("Error occurred");
      });
  }, []);

  useEffect(() => {
    getMainMenu().then((menus) => setMenus(menus));
  }, [getMainMenu]);

  //   const handleSubMenu = (e) => {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     const { showSubMenu } = this.state;

  //     this.setState({ showSubMenu: !showSubMenu });
  //   };

  //   const hideSubMenu = (e) => {
  //     e.preventDefault();
  //     this.setState({ showSubMenu: false });
  //   };

  const buildMenu = (menu) => {
    return (
      <MenuLink
        key={menu.name}
        className="menu"
        to={`/online-${menu.slug}-games`}
        title={`Online ${_.startCase(menu.name)} Games List`}
      >
        <Img
          src={`/img/icons/${menu.slug}.svg`}
          alt={`Online ${_.startCase(menu.name)} Games List`}
          title={`Online ${_.startCase(menu.name)} Games List`}
        />
        <span style={{ textTransform: "capitalize" }}>{menu.name}</span>
      </MenuLink>
    );
  };

  const buildMenus = () => {
    return menus.map((menu) => buildMenu(menu));
  };

  return (
    <MenuWrapper>
      <Container>{buildMenus()}</Container>
    </MenuWrapper>
  );
};

export default MobileMenu;
