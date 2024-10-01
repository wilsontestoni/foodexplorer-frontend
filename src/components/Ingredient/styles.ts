import styled from "styled-components";

interface ContainerProps {
  $isnew: boolean;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 8px 16px;
  height: 36px;

  width: ${({ $isnew }) => ($isnew ? "122px" : "auto")};

  background: ${({ theme, $isnew }) =>
    $isnew ? "transparent" : theme.LIGHT_600};

  border: ${({ theme, $isnew }) =>
    $isnew ? `1px dashed ${theme.LIGHT_500}` : "none"};
  border-radius: 8px;

  > button {
    border: none;
    background: none;
    cursor: pointer;
    line-height: 0;

    > svg {
      color: ${({ $isnew, theme }) =>
        $isnew ? theme.LIGHT_500 : theme.LIGHT_100};
    }
  }

  > input {
    width: 100%;
  }

  > span,
  input {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;

    color: ${({ theme }) => theme.LIGHT_100};
    background: transparent;

    border: none;
    outline: none;

    &::placeholder {
      color: ${({ $isnew, theme }) =>
        $isnew ? theme.LIGHT_500 : theme.LIGHT_100};
    }
  }
`;
