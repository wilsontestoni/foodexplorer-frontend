import styled from "styled-components";
import media from "../../../../styles/media-query";

export const Container = styled.section`
  ${media.greaterThan("tablet")`
    width: 500px;
    margin-right: 35px;
  `}
`;

export const PaymentMethodContainer = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme.LIGHT_600};

  border-radius: 8px;

  > div:first-child {
    display: flex;
  }
`;

interface PaymentMethodProps {
  $methodType: "pix" | "creditCard";
  $isactive?: boolean;
}
export const PaymentMethodBtn = styled.button<PaymentMethodProps>`
  font-size: 16px;
  color: ${(props) => props.theme.LIGHT_100};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  flex: 1;

  border: none;
  border-bottom: 1px solid ${(props) => props.theme.LIGHT_600};

  ${(props) =>
    props.$methodType === "creditCard" &&
    `border-left: 1px solid ${props.theme.LIGHT_600};`};
  ${(props) =>
    props.$methodType === "pix"
      ? "border-top-left-radius: 8px;"
      : "border-top-right-radius: 8px;"};

  padding: 28px 12px;
  background-color: ${(props) =>
    props.$isactive ? props.theme.DARK_600 : props.theme.DARK_400};

  transition: all 0.1s;

  &:hover {
    background-color: ${(props) => props.theme.DARK_1000}
  }

  > svg {
    width: 24px;
    height: 24px;
  }

`;
export const PaymentBody = styled.div<PaymentMethodProps>`
  width: 100%;
  height: ${(props) => (props.$methodType === "pix" ? "242px" : "380px")};
  display: flex;

  align-items: center;
  justify-content: center;

  ${media.greaterThan("tablet")`
    height: 364px;
  `}
`;

export const Qrcode = styled.img`
  ${media.greaterThan("tablet")`
    width: 270px;
  `}
`