import media from "../../styles/media-query";
import styled from "styled-components";

import { ContentsWrapper } from "../Home/styles";
import { Button } from "../../components/Button";
import { BackButton } from "../PlateDetails/styles";

export const Container = styled(ContentsWrapper)`
  padding-inline: 25px;
`;

export const NavBackButoon = styled(BackButton)`
  font-size: 1rem;
  margin-top: 11px;

  ${media.greaterThan("tablet")`
    font-size: 1.5rem;
    margin-top: 40px;
    margin-bottom: 24px;
    
    svg {
      font-size: 2rem;
    }
  `}
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  line-height: 140%;

  margin-bottom: 24px;

  color: ${(props) => props.theme.LIGHT_300};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 24px;

    ${media.greaterThan("tablet")`
      flex-direction: row;
      gap: 32px;
    `}
  }
`;

export const UploadContainer = styled.label`
  color: ${(props) => props.theme.LIGHT_300};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    height: 3rem;
    cursor: pointer;
    font-size: 1rem;
    color: ${(props) => props.theme.LIGHT_100};

    padding: 0.75rem 30px;
    border-radius: 8px;
    border: none;
    background-color: ${(props) => props.theme.DARK_900};

    ${media.greaterThan("tablet")`
      width: 229px;
    `}

    > span {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      font-family: "Poppins", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 24px;
    }
  }

  > input[type="file"] {
    display: none;
  }
`;

export const BaseLabel = styled.label`
  color: ${(props) => props.theme.LIGHT_400};
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;
`;

export const Ingredients = styled.div`
  flex: 2;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 100%;
  color: ${(props) => props.theme.LIGHT_400};
  display: flex;
  flex-direction: column;
  gap: 16px;

  > div {
    min-height: 48px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex: 1;
    gap: 16px;
    padding: 8px;
    border-radius: 8px;

    background-color: ${(props) => props.theme.DARK_800};
  }
`;

export const SubmitButton = styled(Button)`
  background-color: ${(props) => props.theme.TOMATO_400};
  padding: 12px 24px;

  ${media.greaterThan("tablet")`
    width: 175px;
    padding: 12px 24px;
    align-self: end;
  `}

  &:disabled {
    background-color: ${(props) => props.theme.LIGHT_500};
  }
`;
