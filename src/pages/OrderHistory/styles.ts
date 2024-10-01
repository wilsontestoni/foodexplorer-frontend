import media from "../../styles/media-query";
import styled from "styled-components";
import { ContentsWrapper } from "../Home/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentContainer = styled(ContentsWrapper)`
  width: 100%;
  flex: 1;
  padding-inline: 25px;

  ${media.greaterThan("tablet")`
    margin: auto;
    padding-inline: 30px;
  `}
`;



