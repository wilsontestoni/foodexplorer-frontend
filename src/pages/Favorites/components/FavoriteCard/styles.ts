import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.li`
  display: flex;
  align-items: center;
  gap: 13px;

  img {
    width: 72px;
  }

  div {
    display: flex;
    flex-direction: column;

    button {
      width: 123px;
      border: none;
      background: transparent;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 160%;

      cursor: pointer;
      color: ${(props) => props.theme.TOMATO_400};
      transition: color 0.1s;

      &:hover {
        color: ${(props) => props.theme.TOMATO_300};
      }
    }
  }
`;

export const PlateName = styled(Link)`
  display: flex; 
  align-items: center;

  text-decoration: none;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 160%;
  color: ${(props) => props.theme.LIGHT_300};
  transition: color 0.1s;

  &:hover {
    color: ${(props) => props.theme.LIGHT_100};
  }
`;
