import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  color: ${(props) => props.theme.LIGHT_100};

  background: ${(props) => props.theme.DARK_400};

  z-index: 999;
`;

export const SidebarHeader = styled.div`
  width: 100%;

  padding: 56px 28px 24px;

  background: ${(props) => props.theme.DARK_700};
  display: flex;

  justify-content: initial;
  align-items: center;
  gap: 1rem;

  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 1.32rem;
    font-weight: normal;
    color: ${(props) => props.theme.LIGHT_100};
  }
`;

export const SidebarBody = styled.nav`
  margin: 2.25rem 1.75rem 0.812rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const buttonStyles = css`
  display: flex;
  align-items: center;
  height: 54px;
  width: 100%;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-size: 1.5rem;
  font-weight: 300;
  padding: 10px;
  border: none;
  text-align: left;
  background: transparent;
  color: ${(props) => props.theme.LIGHT_300};
  border-bottom: 1px solid ${(props) => props.theme.DARK_1000};
  cursor: pointer;
`;

export const LogoutButton = styled.button`
  ${buttonStyles}
`;

export const NewPlate = styled(Link)`
  ${buttonStyles}
  text-decoration: none;
`;

export const Favorites = styled(Link)`
  ${buttonStyles}
  text-decoration: none;
`;

export const OrderHistory = styled(Link)`
  ${buttonStyles}
  text-decoration: none;
`;
