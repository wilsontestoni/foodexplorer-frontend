import media from "../../../../styles/media-query";
import styled from "styled-components";

interface ContainerProps {
  $isadmin: boolean;
}
export const Container = styled.div<ContainerProps>`
  height: 292px;
  width: 210px;
  padding: 24px 24px;

  background-color: ${(props) => props.theme.DARK_300};
  border: 1px solid ${(props) => props.theme.DARK_200};
  border-radius: 8px;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => props.$isadmin ? 'center' : 'initial'};;
  gap: 0.75rem;

  h3 {
    color: ${(props) => props.theme.LIGHT_300};
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 24px;
    cursor: pointer;
  }

  p {
    display: none;
  }

  ${media.greaterThan("tablet")`
    height: 462px;
    width: 304px;
    gap: .9375rem;

    h3 {
      font-size: 1.5rem;
      line-height: 140%;
    }

    p {
      display: block;
      text-align: center;
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;    
      color: ${(props) => props.theme.LIGHT_400};

      overflow: hidden;

      display: -webkit-box; 
      -webkit-line-clamp: 2; 
      -webkit-box-orient: vertical; 
    }
  `}
`;

interface IconButtonProps {
  $isfavorite?: boolean
}
export const IconButton = styled.button<IconButtonProps>`
  border: none;
  background: transparent;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;

  > svg {
    height: 30px;
    width: 30px;
    color: ${(props) => props.$isfavorite ? props.theme.TOMATO_300 : props.theme.LIGHT_300};
    transition: color 0.1s;

    &:hover {
      color: ${(props) => props.theme.TOMATO_400};;
    }
  }

  ${media.greaterThan("tablet")`
    > svg {
      height: 28px;
      width: 28px;    
    }
  `}
`;

export const PlateImg = styled.img`
  width: 88px;

  ${media.greaterThan("tablet")`
    width: 176px;
  `}
`;

export const Price = styled.div`
  color: white;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 100%;

  color: ${(props) => props.theme.CAKE_200};

  ${media.greaterThan("tablet")`
    font-size: 2rem;
    line-height: 160%;
    text-align: center;
  `}
`;

export const OrderContainer = styled.div`
  width: 162px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  > button {
    height: 32px;
  }

  ${media.greaterThan("tablet")`
    flex-direction: row;
    justify-content: center;
    > button {
    height: initial;
  }
  `}
`;
