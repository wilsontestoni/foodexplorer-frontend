import { styled } from "styled-components";

export const ControlsContainer = styled.div`
  width: 100px;

  display: flex;
  align-items: center;
  gap: 0.875rem;
  justify-content: center;

  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.theme.LIGHT_300};
    text-align: center;
  }
`;

export const BaseButton = styled.button`
  border: none;
  background: transparent;

  display: flex;
  color: ${(props) => props.theme.LIGHT_100};

  cursor: pointer;

  transition: color 0.1s;
`;

export const Remove = styled(BaseButton)`
  &:hover {
    color: ${(props) => props.theme.LIGHT_400};
  }
`;

export const Add = styled(BaseButton)`
  &:hover {
    color: ${(props) => props.theme.LIGHT_400};
  }
`;
