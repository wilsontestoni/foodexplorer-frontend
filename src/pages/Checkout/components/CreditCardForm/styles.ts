import styled from "styled-components";
import { Input } from "../../../../components/Input";

export const Container = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const InputWithLabel = styled(Input)`
  border: 1px solid ${(props) => props.theme.LIGHT_100};
`;

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 17px;
`;
