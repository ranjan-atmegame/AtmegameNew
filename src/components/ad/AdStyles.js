import styled from "styled-components";

export const AdLarge = styled.section`
  width: 100%;
  box-shadow: 0 10px 15px #d3d8eb;
  border-top: solid #e3e9ff 6px;
  border-radius: 8px;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;

  border-color: #e3e9ff;
  margin-bottom: 16px;
  padding-left: 8px;
  padding-right: 8px;
  position: relative;
`;

export const AdContainer = styled.div`
  max-width: 100%;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-right: 8px;
  padding-left: 8px;
`;

export const AdWrapper = styled.div`
  min-height: 300px;
`;

export const AdText = styled.div`
  width: 100%;
  color: #95a5a6;
  font-size: 12px;

  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
`;

export const AdCode = styled.div`
  width: 100%;
  -ms-flex-pack: center;
  -webkit-flex-pack: center;
  -webkit-box-pack: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
`;
