import React, { useState } from "react";
import { Container, InputsContainer, InputWithLabel } from "./styles";
import { Button } from "../../../../components/Button";
import { Receipt } from "@phosphor-icons/react";
import { useTablet } from "../../../../hooks/useTablet";
import { useCart } from "../../../../hooks/useCart";
import { api } from "../../../../services/api";
import { useAuth } from "../../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


interface CreditCardFormProps {
  onSelectOrderId: (orderId: number) => void;
}
export function CreditCardForm({ onSelectOrderId }: CreditCardFormProps) {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const isTablet = useTablet();
  const { setPaymentStatusInformation, cart } = useCart();
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const order = {
      order: cart
    }

    setSubmitting(true);
    try {
  
      const response = await api.post("/orders", order, {
        withCredentials: true,
      });
      const { order_id } = response.data; 
      onSelectOrderId(order_id)
      setSubmitting(false);
      setPaymentStatusInformation(true);
    } catch (error) {
      setSubmitting(false);
      if (error.response.status === 401) {
        alert("Sessão encerrada, faça o login novamente");
        signOut();
        navigate("/");
        return;
      }
      if (error.response?.data?.message) {
        alert(error.response.data.message);
        return;
      }
      alert("Não foi possível criar um novo prato, tente novamente mais tarde");
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <InputWithLabel
        labelText="Número do Cartão"
        id="card-number"
        type="number"
        required
      />
      <InputsContainer>
        <InputWithLabel
          labelText="Validade"
          id="card-validity"
          type="text"
          required
        />
        <InputWithLabel labelText="CVC" id="card-cvc" required type="number" />
      </InputsContainer>

      <Button disabled={submitting} type="submit">
        {!isTablet && <Receipt size={32} />}
        Finalizar Pagamento
      </Button>
    </Container>
  );
}
