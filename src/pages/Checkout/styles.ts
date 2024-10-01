import styled from "styled-components";
import media from "../../styles/media-query";
import { ContentsWrapper } from "../Home/styles";
import { Button } from "../../components/Button"


export const ContentContainer = styled(ContentsWrapper)`
  width: 100%;
  flex: 1;
  padding-inline: 25px;

  ${media.greaterThan("tablet")`
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
  `}
`

export const ContinueButton = styled(Button)`
  width: 216px;
  margin-left: auto;
`