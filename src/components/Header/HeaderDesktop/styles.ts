import styled from "styled-components";
import { Logo } from "../HeaderMobile/styles";

import { ButtonContainer } from "../../Button/styles";
import { Link } from "react-router-dom";

import { IconButton } from "../../../pages/Home/components/PlateCard/styles";

export const Container = styled.nav`
  max-width: calc(1120px + 50px);
  padding: 28px 25px;
  margin: auto;

  display: flex;
  align-items: center;
  gap: 16px;
`;
export const DeskLogo = styled(Logo)`
  height: 39px;
  width: 197px;
`;

export const OrdersButton = styled(ButtonContainer).attrs({ as: Link })`
  font-family: "Poppins", sans-serif;
  font-size: 0.875rem;
  max-width: 176px;
  height: 56px;
  text-decoration: none;
`;

export const FavoritesButton = styled(Link)`
  min-width: 110px;
  text-decoration: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: ${(props) => props.theme.LIGHT_300};

  transition: color 0.1s;

  &:hover {
    color: ${(props) => props.theme.TOMATO_400};
  }
`;

export const HistoryButton = styled(FavoritesButton)`
  min-width: 147px;
`;

export const NewPlateButton = styled(Link)`
  max-width: 216px;
  width: 100%;
  height: 48px;
  padding: 0.75rem 2rem;

  font-family: "Poppins", sans-serif;
  font-size: 0.875rem;

  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: none;
  border-radius: 5px;

  cursor: pointer;

  background: ${(props) => props.theme.TOMATO_100};
  color: ${(props) => props.theme.LIGHT_100};

  transition: background-color 0.1s ease;

  &:hover {
    background: ${(props) => props.theme.TOMATO_200};
  }

  &:disabled {
    background: ${(props) => props.theme.TOMATO_400};
    cursor: not-allowed;
  }
`;

export const LogoutButton = styled(IconButton)`
  position: initial;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 36px;
    width: 36px;
    color: ${(props) => props.theme.LIGHT_100};
  }
`;
