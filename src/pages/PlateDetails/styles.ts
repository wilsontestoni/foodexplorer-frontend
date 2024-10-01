import styled from "styled-components";
import { ContentsWrapper } from "../Home/styles";
import media from "../../styles/media-query";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

export const ContentWrapper = styled(ContentsWrapper)`
  flex: 1;
  width: 316px;
  margin-inline: auto;
  margin-top: 16px;
  margin-bottom: 33px;

  padding-top: 20px;
  padding-inline: 25px;

  ${media.greaterThan("tablet")`
    width: 100%;
  `}
`;

export const PlateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  ${media.greaterThan("tablet")`
    flex-direction: row;
    gap: 47px;
    align-items: center;
    margin-bottom: 107px;
  `}

  img {
    width: 264px;

    ${media.greaterThan("tablet")`
      width: 390px;
    `}
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 24px;
    color: ${(props) => props.theme.LIGHT_300};
    text-align: center;

    ${media.greaterThan("tablet")`
      text-align: left;
    `}

    h1 {
      font-size: 1.6877rem;
      font-weight: 500;
      line-height: 140%;

      ${media.greaterThan("tablet")`
        font-size: 2.5rem;
      `}
    }

    p {
      font-family: "Poppins", sans-serif;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      padding-inline: 6px;

      ${media.greaterThan("tablet")`
        font-size: 1.5rem;
        padding-inline: 0;
      `}
    }
  }
`;

export const BackButton = styled(Link)`
  width: 102px;

  text-decoration: none;

  margin-bottom: 16px;

  display: flex;
  align-items: center;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;

  ${media.greaterThan("tablet")`
    margin-bottom: 42px;
  `}

  background-color: transparent;
  color: ${(props) => props.theme.LIGHT_300};
  border: none;
  transition: color 0.2s ease;

  :hover {
    color: ${(props) => props.theme.LIGHT_100};
  }

  > svg {
    color: ${(props) => props.theme.LIGHT_100};
  }
`;

export const Ingredients = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 24px;

  span {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 24px;
    background-color: ${(props) => props.theme.DARK_1000};
    padding: 4px 8px;
    border-radius: 5px;
  }

  ${media.greaterThan("tablet")`
    padding-inline: 0;
  `}
`;

export const EditPlateButton = styled(Button)`
  ${media.greaterThan("tablet")`
    width: 141px;
    height: 48px;
  `}
`;

export const OrderContainer = styled.div`
  display: flex;
  height: 38px;

  gap: 16px;
  margin-bottom: 20px;

  span {
    font-size: 22px;
  }

  > button {
    font-size: 0.5875rem;
    > svg {
      display: none;
    }
  }

  ${media.greaterThan("tablet")`
    max-width: 299px;
    height: 48px;

    > button {
      font-size: 0.875rem;
      line-height: 24px;
      font-weight: 500;
    }
  `}
`;
