import React, { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Order } from "./components/Order";
import { ContentContainer, ContinueButton } from "./styles";
import { Payment } from "./components/Payment";
import { useTablet } from "../../hooks/useTablet";
import { Container } from "../OrderHistory/styles";

export function Checkout() {
  const isTablet = useTablet();

  const [paymentActive, setPaymentActive] = useState(false);

  function handleOrderToPayment() {
    setPaymentActive((prevState) => !prevState);
  }

  return (
    <Container>
      <Header />

      <ContentContainer>
        {paymentActive && isTablet && <Payment />}

        {!paymentActive && isTablet && (
          <>
            <Order />
            <ContinueButton onClick={handleOrderToPayment}>
              Avançar
            </ContinueButton>
          </>
        )}

        {!isTablet && (
          <>
            <Order />
            <Payment />
          </>
        )}
      </ContentContainer>

      <Footer />
    </Container>
  );
}
