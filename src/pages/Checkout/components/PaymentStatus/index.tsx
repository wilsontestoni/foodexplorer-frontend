import React, { useEffect, useRef, useState } from "react";
import { StatusContainer } from "./styles";
import {
  Clock,
  CheckCircle,
  CookingPot,
  ForkKnife,
} from "@phosphor-icons/react";
import { api } from "../../../../services/api";
import { useCart } from "../../../../hooks/useCart";
import { useNavigate } from "react-router-dom";

interface PaymentStatusProps {
  orderId: number;
}
export function PaymentStatus({ orderId }: PaymentStatusProps) {
  const navigate = useNavigate();
  const [statusStage, setStatusStage] = useState("Aguardando");
  const intervalId = useRef<ReturnType<typeof setInterval> | null>(null);
  const { cleanOrder } = useCart();

  const fetchOrderStatus = async () => {
    try {
      const response = await api.get(`/orders/${orderId}`, {
        withCredentials: true,
      });
      if (response.data.status === "Entregue") {
        setStatusStage(response.data.status);

        if (intervalId.current) {
          clearInterval(intervalId.current);
        }

        setTimeout(() => {
          cleanOrder();
          navigate("/");
        }, 5000);
      }
    } catch (error) {
      console.error("Erro ao buscar status do pedido", error);
    }
  };

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStatusStage("Aprovado");
    }, 5000);

    const timer2 = setTimeout(() => {
      setStatusStage("Preparando");
    }, 10000);

    // Fase 3: Verifica o status do pedido
    intervalId.current = setInterval(() => {
      fetchOrderStatus();
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, []);

  function renderStatusImage() {
    if (statusStage === "Aguardando") {
      return (
        <StatusContainer>
          <Clock />
          <p>Aguardando pagamento no caixa...</p>
        </StatusContainer>
      );
    }
    if (statusStage === "Aprovado") {
      return (
        <StatusContainer>
          <CheckCircle />
          <p>Pagamento aprovado!</p>
        </StatusContainer>
      );
    }
    if (statusStage === "Preparando") {
      return (
        <StatusContainer>
          <CookingPot />
          <p>Preparando pedido!</p>
        </StatusContainer>
      );
    }

    if (statusStage === "Entregue") {
      return (
        <StatusContainer>
          <ForkKnife />
          <p>Pedido entregue!</p>
        </StatusContainer>
      );
    }
    return null;
  }

  return <>{renderStatusImage()}</>;
}
