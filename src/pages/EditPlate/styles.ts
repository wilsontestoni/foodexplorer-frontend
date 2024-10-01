import { Button } from "../../components/Button";
import styled from "styled-components";
import media from "../../styles/media-query";

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 32px;
  width: 100%;
`;

export const DeleteButton = styled(Button)`
  background-color: ${(props) => props.theme.DARK_800};

  ${media.greaterThan("tablet")`
    width: 175px;
    padding: 12px 24px;
    align-self: end;
  `}

  &:disabled {
    background-color: ${(props) => props.theme.LIGHT_500};
  }
`;
