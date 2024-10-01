import media from "../../styles/media-query";
import styled from "styled-components";
import { ContentsWrapper } from "../Home/styles";

export const ContentContainer = styled(ContentsWrapper)`
  width: 100%;
  flex: 1;
  padding-inline: 25px;

  ${media.greaterThan("tablet")`
    margin: auto;
  `}

  ul {
    display: flex;
    flex-direction: column;
    gap: 25px;

    ${media.greaterThan("tablet")`
      flex-direction: row;
      flex-wrap: wrap;
      gap: 48px;
    `}
  }
`;

export const Title = styled.h1`
  margin-top: 56px;
  margin-bottom: 27px;
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 140%;

  color: ${(props) => props.theme.LIGHT_300};
`;
