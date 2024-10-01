import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;

  border: 2px solid ${(props) => props.theme.DARK_1000};
  border-radius: 8px;
  padding: 24px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 160%;
  color: ${(props) => props.theme.LIGHT_400};
`;


interface HeaderProps {
  $isadmin: boolean
}
export const Header = styled.div<HeaderProps>`
  display: flex;
  align-items: center;
  gap: ${(props) => props.$isadmin ? "10px" : "21px"};
`
