import styled from "styled-components";
import media from "../../../../styles/media-query";
import { Container } from "../../../Favorites/components/FavoriteCard/styles";
import { PlateName } from "../../../Favorites/components/FavoriteCard/styles";

export const ContentContainer = styled(Container)`
  div {
    button {
      width: 40px;
    }
  }
`;

export const Price = styled.span`
  display: none;

  ${media.greaterThan("tablet")`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    padding-top: 0.2rem;
    color: ${(props) => props.theme.LIGHT_400};
    display: initial;
  `}
`;

export const Name = styled(PlateName)`
  gap: 10px;
`