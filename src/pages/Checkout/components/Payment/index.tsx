import React, { useState } from "react";
import qrCode from "../../../../assets/qrcode.svg";
import { PixLogo, CreditCard } from "@phosphor-icons/react";
import {
  Container,
  PaymentBody,
  PaymentMethodBtn,
  PaymentMethodContainer,
  Qrcode,
} from "./styles";
import { Title } from "../../../Favorites/styles";
import { CreditCardForm } from "../CreditCardForm";
import { PaymentStatus } from "../PaymentStatus";
import { useCart } from "../../../../hooks/useCart";

type selectedMethodProps = "pix" | "creditCard";
export function Payment() {
  const { getPaymentStatusInformation } = useCart();
  const isPaid = getPaymentStatusInformation();
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<selectedMethodProps>("creditCard");
  
  const [createdOrderId, setCreatedOrderId] = useState(0);
  
  function handleOrderId(orderId: number) {
    setCreatedOrderId(orderId)
  }
  
  function handleSelectedPayment() {
    if (selectedPaymentMethod === "pix") {
      setSelectedPaymentMethod("creditCard");
      return;
    }

    setSelectedPaymentMethod("pix");
  }

  const pixSelected = selectedPaymentMethod === "pix";
  const creditSelected = selectedPaymentMethod === "creditCard";

  return (
    <Container>
      <Title>Pagamento</Title>

      <PaymentMethodContainer>
        <div>
          <PaymentMethodBtn
            onClick={handleSelectedPayment}
            $isactive={pixSelected}
            $methodType="pix"
          >
            <PixLogo />
            Pix
          </PaymentMethodBtn>
          <PaymentMethodBtn
            onClick={handleSelectedPayment}
            $isactive={creditSelected}
            $methodType="creditCard"
          >
            <CreditCard />
            Crédito
          </PaymentMethodBtn>
        </div>

        <PaymentBody $methodType={selectedPaymentMethod}>
          {isPaid ? (
            <PaymentStatus orderId={createdOrderId} />
          ) : selectedPaymentMethod === "pix" ? (
            <Qrcode src={qrCode} alt="Imagem de um QRcode" />
          ) : (
            <CreditCardForm onSelectOrderId={handleOrderId} />
          )}
        </PaymentBody>
      </PaymentMethodContainer>
    </Container>
  );
}
