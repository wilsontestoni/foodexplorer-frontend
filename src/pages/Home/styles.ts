import media from "../../styles/media-query";
import styled from "styled-components";

export const ContentsWrapper = styled.div`
  width: 100%;
  flex: 1;
  max-width: calc(1120px + 50px);
  margin: auto;
`;

export const Section = styled.section`
  margin-left: 25px;
  margin-bottom: 24px;

  h2 {
    font-weight: 500;
    font-size: 18px;
    line-height: 140%;
    color: ${(props) => props.theme.LIGHT_300};
    margin-bottom: 25px;
  }

  ${media.greaterThan("tablet")`
    margin-bottom: 45px; 

    h2 {
      font-size: 2rem;
    }
  `}
`;

export const ErroMsg = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color: ${(props) => props.theme.LIGHT_500};
  padding: 30px 0;
`
