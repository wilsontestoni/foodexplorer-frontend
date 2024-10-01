import media from "../../../../styles/media-query";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;

  > div {
    overflow: hidden;
    ${media.greaterThan("tablet")`
      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 2; 
        pointer-events: none;
      } 
  
      &::before {
        left: 0;
        width: 250px;
        background: linear-gradient(-90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
      }
  
      &::after { 
        right: 0;
        width: 200px;
        background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
      }
    `}
  }
`;

export const NavigationButton = styled.button`
  display: none;

  ${media.greaterThan("tablet")`
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 9999;
    // Next
    &:first-of-type {
      left: 10px;
    }
  
    // Prev
    &:last-of-type {
      right: 10px;
    }
    
    svg {
      fill: ${(props) => props.theme.LIGHT_100};
      z-index: 9999;
    }
   
  `}
`;
