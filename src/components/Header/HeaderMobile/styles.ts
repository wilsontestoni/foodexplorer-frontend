import { Link } from "react-router-dom";
import styled from "styled-components";


interface ContainerProps{
  $iscustomer: boolean
}
export const Container = styled.nav<ContainerProps>`
  width: 100%;

  padding: 56px 28px 24px;

  display: flex;
  justify-content: ${(props) => props.$iscustomer ? 'space-between' : 'initial'};
  align-items: center;

  svg {
    color: ${(props) => props.theme.LIGHT_100};
  }

  > button {
    height: 24px;
    border: none;
    background: transparent;
  }
`;

interface LinkHomeProps {
  $isuser: boolean
}
export const LinkHome = styled(Link)<LinkHomeProps>`
  margin: ${(props) => props.$isuser ?  'initial' : 'auto'};
`
export const Logo = styled.img`
  display: flex;
  height: 25px;
  cursor: pointer;
`;

export const ReceiptContainer = styled(Link)`
  position: relative;
  display: flex;

  span {
    font-family: "Poppins", sans-serif;
    font-size: 0.875rem;
    color: ${(props) => props.theme.LIGHT_100};

    position: absolute;

    bottom: 15px;
    left: 16px;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 19px;
    height: 19px;
    line-height: 0;
    border-radius: 999px;
    background: ${(props) => props.theme.TOMATO_100};
  }
`;
