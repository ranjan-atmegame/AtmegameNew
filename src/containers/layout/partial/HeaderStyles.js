import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: transparent -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#1cc7fb),
      to(#0277ff)
    ) 0% 0% no-repeat padding-box;
  padding: 1rem;
`;

export const Div = styled.div``;

export const HamburgerIcon = styled.img`
  border-style: none;

  @media only screen and (max-width: 768px) {
    margin-bottom: 4px;
  }
`;

export const Logo = styled.img`
  height: 2rem;
  margin-left: 1rem;

  @media only screen and (max-width: 768px) {
    margin-top: 2px;
    height: 21px;
  }
`;

export const SearchIcon = styled.img`
  height: 2rem;
  margin-left: 1rem;

  @media only screen and (max-width: 768px) {
    margin-top: 2px;
    height: 17px;
  }
`;

export const MainMenu = styled.nav`
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: bold;
  margin-right: 1rem;
  cursor: pointer;
`;

export const MenuLink = styled(Link)`
font-size: 12px;
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    border-radius: 10px;
    padding-top: 8px;
    padding-bottom: 8px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    background: #ffffff 0% 0% no-repeat padding-box;
    -webkit-box-shadow: 0px 5px 20px #2e8bfa2f;
    box-shadow: 0px 5px 20px #2e8bfa2f;
    -webkit-transition: 0.6s;
    transition: 0.6s;
    float: left;
    width: 18%;
    height: 79px;
    margin-right: 2%;
}`;

export const Img = styled.img`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18px;
`;

export const Span = styled.span`
  display: inline;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const MenuWrapper = styled.div`
  height: 74px;
  margin-bottom: 40px;
  background: transparent -webkit-gradient(
      linear,
      left bottom,
      left top,
      from(#1cc7fb),
      to(#0277ff)
    ) 0% 0% no-repeat padding-box;
  background: transparent linear-gradient(360deg, #1cc7fb 0%, #0277ff 100%) 0%
    0% no-repeat padding-box;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  border-radius: 0% 0% 900% 900%;
`;
