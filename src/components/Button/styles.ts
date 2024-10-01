import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  padding: 0.75rem 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: none;
  border-radius: 5px;

  cursor: pointer;
  
  background: ${(props) => props.theme.TOMATO_100};
  color: ${(props) => props.theme.LIGHT_100};

  transition: background-color 0.1s ease;

  &:hover {
    background: ${(props) => props.theme.TOMATO_200};
  }

  &:disabled {
    background: ${(props) => props.theme.TOMATO_400};
    cursor: not-allowed;
  }
`
