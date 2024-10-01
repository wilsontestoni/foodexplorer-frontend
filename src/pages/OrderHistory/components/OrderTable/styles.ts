import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  color: ${(props) => props.theme.LIGHT_400};
  border-collapse: collapse;

  font-family: 'Roboto';
  font-size: 14px;

  thead {
    font-weight: bold;
  }

  tbody {
    font-weight: normal;
  }

  td, th {
    border: 2px solid ${(props) => props.theme.DARK_1000};
    text-align: left;
    padding: 18px 24px;
  }

  thead > tr th {
    padding: 28px 30px;
  }
  
`;






