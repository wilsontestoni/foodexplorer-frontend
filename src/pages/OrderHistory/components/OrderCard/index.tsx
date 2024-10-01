import React, { useEffect, useState } from "react";
import { Container, Header } from "./styles";
import { Dropdown } from "../../../../components/Dropdown";
import { Order } from "../OrderList/index";
import { formatCodeForSix, formatDate } from "../../../../utils/format";
import { api } from "../../../../services/api";
import { useAuth } from "../../../../hooks/useAuth";
import { USER_ROLE } from "../../../../utils/roles";
import {
  StatusOrderContainer,
  StatusColor,
} from "../../../../components/Dropdown/styles";

export function OrderCard({ id, status, details, created_at }: Order) {
  const { user } = useAuth();
  const isAdmin = user?.role === USER_ROLE.ADMIN;
  const [orderStatus, setOrderStatus] = useState(status);

  useEffect(() => {
    async function changeStatus() {
      try {
        await api.patch(
          `/orders/${id}`,
          { status: orderStatus },
          {
            withCredentials: true,
          }
        );
      } catch {
        alert(
          "Não foi possível alterar o status desse prato, tente novamente mais tarde"
        );
        setOrderStatus(status);
      }
    }

    if (orderStatus !== status) {
      changeStatus();
    }
  }, [id, orderStatus, status]);

  return (
    <Container>
      <Header $isadmin={isAdmin}>
        <span>{formatCodeForSix(id)}</span>
        {!isAdmin && (
          <StatusOrderContainer>
            <StatusColor $status={orderStatus} />
            {orderStatus}
          </StatusOrderContainer>
        )}
        <span>{formatDate(created_at)}</span>
      </Header>
      <p>{details}</p>
      {isAdmin && (
        <Dropdown
          hasStatusOrder
          selectedOption={orderStatus}
          onSelectedOption={setOrderStatus}
          items={["Pendente", "Preparando", "Entregue"]}
        />
      )}
    </Container>
  );
}
