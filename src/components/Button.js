import styled from "styled-components";

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

export default Button;
