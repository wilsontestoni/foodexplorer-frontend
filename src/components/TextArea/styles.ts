import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 10.75rem;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 100%;
  color: ${(props) => props.theme.LIGHT_400};

  resize: none;

  background-color: ${(props) => props.theme.DARK_800};
  color: ${(props) => props.theme.LIGHT_00};

  padding: 14px;

  outline: none;
  border: 0;
  border-radius: 1rem;

  &::-webkit-scrollbar {
    width: 22px;
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 10px 10px ${(props) => props.theme.LIGHT_400};

    border: solid 7px transparent;
    border-radius: 20px;
  }
`;
