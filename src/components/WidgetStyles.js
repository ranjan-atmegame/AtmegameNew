import { Link } from "react-router-dom";
import styled from "styled-components";

export const NewGames = styled.div`
  margin-bottom: 16px;
  padding-left: 8px;
  padding-right: 8px;
  position: relative;
  width: 100%;
  margin-left: 0;

  box-shadow: 0 10px 15px #d3d8eb;
  border-top: solid #e3e9ff 6px;
  border-radius: 8px;
  -webkit-box-align: start;
  align-items: flex-start;

  border-color: #3791fa;
  background: transparent -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#a6cdfd),
      color-stop(10%, #fbfdff),
      to(#ffffff)
    ) 0% 0% no-repeat padding-box;
  background: transparent
    linear-gradient(180deg, #a6cdfd 0%, #fbfdff 10%, #ffffff 100%) 0% 0%
    no-repeat padding-box;
`;

export const GameCard = styled.div`
  width: 100%;
  line-height: 22px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const GameLink = styled(Link)`
  color: #152236;
  text-decoration: none;
  background-color: transparent;
`;

export const GameCategory = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const GameImage = styled.img`
  vertical-align: middle;
  border-style: none;
`;

export const MoreSmall = styled(Link)`
  height: 28px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 8px;
  background: #fff;
  color: #0277ff;
  font-size: 12px;
  -webkit-box-shadow: 0 3px 6px #00000012;
  box-shadow: 0 3px 6px #00000012;
  border: 1px solid #7cb9ff;
  line-height: 20px;
`;

export const Name = styled.h2`
  font-size: 18px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`;
