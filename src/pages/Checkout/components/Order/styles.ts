import styled from "styled-components";
import { Title } from "../../../Favorites/styles";

export const Container = styled.section`
  ul {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`;

export const TotalPrice = styled(Title)`
  font-size: 20px;
`;
