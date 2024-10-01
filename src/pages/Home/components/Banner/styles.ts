import media from "../../../../styles/media-query";
import styled from "styled-components";

export const BannerContainer = styled.div`
  min-width: 326px;
  height: 120px;
  margin: 44px 16px 62px 36px;

  display: grid;
  grid-template-columns: 1fr 170px;

  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
  border-radius: 3px;

  ${media.greaterThan("smMobile")`
    grid-template-columns: 1fr 215px; 
  `}

  ${media.between("mobile", "tablet")`
      grid-template-columns: 1fr 1fr; 
    `}

  ${media.greaterThan("tablet")`
    grid-template-columns: 430px 1fr; 
    justify-content: space-between;
    gap: 1rem;
    margin-top: 168px;
    margin-inline: 25px;
    height: 260px;
  `}

   
  ${media.greaterThan("smDesktop")`
    grid-template-columns: 1fr 1fr; 
    gap: 3.5rem;
  `}

  > div:first-child {
    position: relative;
  }
`;

export const ImgBanner = styled.img`
  position: absolute;
  bottom: 0px;
  left: -30px;

  ${media.between("mobile", "tablet")`
    bottom: 0;
    left: 60px;
  `}

  ${media.greaterThan("tablet")`
    left: -50px;
    width: 470px;
  `}

  ${media.greaterThan("smDesktop")`
    left: -50px;
    width: initial;
  `}
`;

export const TextContent = styled.div`
  max-width: 220px;
  align-self: center;
  padding-right: 10px;
  color: ${(props) => props.theme.LIGHT_300};

  h1 {
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 140%;
  }

  p {
    font-size: 0.75rem;
    line-height: 140%;
    font-weight: 400;
  }

  ${media.greaterThan("tablet")`
    max-width: 432px;

    h1 {
      font-size: 2.5rem;
      margin-bottom: .5rem;
    }

    p {
      font-size: 1rem;
    }
  `}
`;
