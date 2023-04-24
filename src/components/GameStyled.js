import { Link } from "react-router-dom";
import styled from "styled-components";

export const GameWrapper = styled.div`
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
`;

export const GameCard = styled.div`
  width: 30%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  height: auto;
  position: relative;
  margin-bottom: 16px;
  background: #fff;
  text-align: left;
  border-radius: 5px;
  overflow: hidden;
  -webkit-box-shadow: 0 4px 10px #a0b6ffad;
  box-shadow: 0 4px 10px #a0b6ffad;
  -webkit-transition: 0.6s;
  transition: 0.6s;
  cursor: pointer;
`;

export const Arrow = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
`;

export const GameLink = styled(Link)`
  width: 100%;
  color: #152236;
  text-decoration: none;
  background-color: transparent;
`;

export const GameThumb = styled.div`
  width: 100%;
  max-width: 100%;
  height: 90px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

export const GameImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

export const GameDetail = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  line-height: 12px;
`;

export const GameName = styled.div`
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 90%;
`;

export const GamePlayed = styled.div`
  color: #5e889d;
  font-size: 8px;
  line-height: normal;
  width: 100%;
  text-align: left;
`;
