import styled from "styled-components";
import media from "../../styles/media-query";
import { Link } from "react-router-dom";

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  width: 19.75rem;
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  margin: 0 1rem;
  padding-inline: 10px;

  ${media.greaterThan("mobile")`
    width: 500px;
    align-items: center;
  `}

  ${media.greaterThan("tablet")`
    width: 1106px;
    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  ${media.greaterThan("mobile")`
    background-color: ${(props) => props.theme.DARK_700};
    border-radius: 16px;
    padding: 32px;
    width: 450px;
  `}

  ${media.greaterThan("tablet")`
    background-color: ${(props) => props.theme.DARK_700};
    width: 476px;
    padding: 64px;
  `}
`;

export const Title = styled.h1`
  display: none;
  font-size: 2rem;
  line-height: 140%;
  color: ${(props) => props.theme.LIGHT_100};

  ${media.greaterThan("tablet")`
    display: block;
  `}
`;

export const Anchor = styled(Link)`
  font-size: 0.875rem;
  font-weight: 500;

  text-decoration: none;

  color: ${(props) => props.theme.LIGHT_100};

  transition: color 0.1s ease;

  &:hover {
    color: ${(props) => props.theme.LIGHT_400};
  }
`;
