import media from "../../styles/media-query";
import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background: ${(props) => props.theme.DARK_600};

  margin-top: 25px;

  ${media.greaterThan("tablet")`
    margin-top: 48px;
  `}
`;

export const Wrapper = styled.div`
  max-width: calc(1120px + 50px);
  padding: 1.875rem 25px;
  margin: auto;


  font-family: "Poppins", sans-serif;
  font-size: 0.75rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: ${(props) => props.theme.LIGHT_200};
    text-align: left;
  }

  ${media.greaterThan("tablet")`
    font-size: .875rem;

    img {
      width: 186px;
      height: 30px;
    }

  `}
`;
