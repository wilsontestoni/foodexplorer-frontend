import { styled } from "styled-components";
import { TheInput } from "../Input/styles";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 3rem;

  color: ${(props) => props.theme.LIGHT_300};

  padding: 0.75rem 0.875rem;
  border-radius: 8px;
  border: none;

  background-color: ${(props) => props.theme.DARK_900};
`;

export const SearchBar = styled(TheInput)`
  font-family: "Roboto", sans-serif;
`;
