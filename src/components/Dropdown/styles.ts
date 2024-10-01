import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  height: 48px;
  width: 100%;

  padding: 12px 16px;
  border-radius: 8px;
  border: none;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;

  background-color: ${(props) => props.theme.DARK_900};
  color: ${(props) => props.theme.LIGHT_400};
`;

export const DropdownButton = styled.button`
  font-size: 0.875rem;
  color: ${(props) => props.theme.LIGHT_400};
  width: 100%;

  background: transparent;
  border: none;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > svg {
    font-weight: bold;
  }
`;

interface DropdownContentProps {
  $isopen: boolean;
}
export const DropdownContent = styled.ul<DropdownContentProps>`
  max-height: ${(props) => (props.$isopen ? "200px" : "0")};
  opacity: ${(props) => (props.$isopen ? "1" : "0")};
  transform: ${(props) =>
    props.$isopen ? "translateY(0)" : "translateY(-10px)"};
  transition: max-height 0.1s, opacity 0.1s, transform 0.1s;
  overflow: hidden;

  position: relative;
  bottom: -6px;
  left: -16px;
  z-index: 999;
  width: calc(100% + 32px);
  background-color: ${(props) => props.theme.DARK_900};
  list-style: none;
  padding-inline: 16px;
  padding-bottom: 16px;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

interface DropdownItemProps {
  $selected: boolean;
}
export const DropdownItem = styled.li<DropdownItemProps>`
  padding: 12px 0;
  border-bottom: 1px solid ${(props) => props.theme.LIGHT_100};

  display: flex;
  align-items: center;
  gap: 8px;

  background-color: ${(props) =>
    props.$selected ? props.theme.DARK_700 : props.theme.DARK_900};
`;


export const StatusOrderContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

interface StatusColorProps {
  $status: string;
}
export const StatusColor = styled.span<StatusColorProps>`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 100%;

  background-color: ${(props) =>
    props.$status === "Pendente" ? props.theme.TOMATO_300 : props.$status === "Preparando" ? props.theme.CARROT_100 : props.theme.MINT_100 };
`;



