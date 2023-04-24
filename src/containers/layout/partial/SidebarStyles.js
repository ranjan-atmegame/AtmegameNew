import styled from "styled-components";
import { Link } from "react-router-dom";

export const MobileMenu = styled.section`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  width: 90%;
  height: 100vh;
`;

export const ItemContainer = styled.div`
  width: 85%;
  height: 100%;
  background: #fff;
  overflow-y: scroll;
`;

export const ProfileBox = styled.div`
  background: #0277ff;
  padding: 16px;
  text-align: center;
  color: #cae0fa;
`;

export const BtnClose = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const Logo = styled.img`
  width: 32px;
  height: 32px;
  display: flex;
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 0;
`;

export const ProfileContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f7f9ff;
  border: solid 1px #e2f0ff;
  box-shadow: 0 1px 8px #1075ea;
  position: relative;
`;

export const ProfileOnline = styled.div`
  background: #17d617;
  border: solid 1px #e2f0ff;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  position: absolute;
  right: -2px;
  bottom: 10px;
`;

export const ProfileImage = styled.img`
  width: 58px;
  height: 58px;
  border-radius: 100%;
`;

export const H4 = styled.h4`
  background: #f6f8ff;
  color: #9598a2;
  font-weight: 500;
  font-size: 12px;
  padding: 4px 16px;
  text-transform: uppercase;
`;

export const MenuItem = styled(Link)`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: solid 1px #e6ecff;
  padding: 10px 16px;
  position: relative;
`;

export const SocialMenu = styled.div`
  width: 100%;
`;

export const List = styled.li`
display: flex;
    width: 100%;
}
`;
