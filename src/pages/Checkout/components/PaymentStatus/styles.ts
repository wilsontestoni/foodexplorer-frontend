import styled from "styled-components";

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  color: ${(props) => props.theme.LIGHT_700};

  p {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;
  }

   svg {
    width: 120px;
    height: 120px;
    
  }
`

