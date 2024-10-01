import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { Dropdown } from "../../../../components/Dropdown";
import { Order } from "../OrderList";
import { formatCodeForEight, formatDate } from "../../../../utils/format";
import { api } from "../../../../services/api";
import { USER_ROLE } from "../../../../utils/roles";
import { useAuth } from "../../../../hooks/useAuth";
import { StatusColor, StatusOrderContainer } from "../../../../components/Dropdown/styles";

export function OrderTableTr({ id, details, status, created_at }: Order) {
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
      <td>
        {isAdmin ? (
          <Dropdown
            hasStatusOrder
            selectedOption={orderStatus}
            onSelectedOption={setOrderStatus}
            items={["Pendente", "Preparando", "Entregue"]}
          />
        ) : (
          <StatusOrderContainer>
            <StatusColor $status={orderStatus} />
            {orderStatus}
          </StatusOrderContainer>
        )}
      </td>
      <td>{formatCodeForEight(id)}</td>
      <td>{details}</td>
      <td>{formatDate(created_at)}</td>
    </Container>
  );
}
