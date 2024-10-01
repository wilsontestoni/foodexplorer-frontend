import styled from "styled-components";

interface InputContainerProps {
  $spacegap?: string;
}
export const InputContainer = styled.div<InputContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${(props) => (props.$spacegap ? props.$spacegap : "8px")};
`;

export const Label = styled.label`
  font-size: 1rem;
  color: ${(props) => props.theme.LIGHT_400};
`;

interface TheInputProps {
  $bgcolor?: string;
}
export const TheInput = styled.input<TheInputProps>`
  width: 100%;
  height: 3rem;

  font-size: 1rem;
  color: ${(props) => props.theme.LIGHT_300};

  padding: 0.75rem 0.875rem;
  border-radius: 8px;
  border: none;

  background-color: ${(props) => (props.$bgcolor ? props.$bgcolor : "#0D1D25")};

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${(props) => props.theme.LIGHT_500};
  }
`;
