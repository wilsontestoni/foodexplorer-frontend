import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../../../services/api";
import { Order } from "../OrderList";
import { OrderTableTr } from "../OrderTableTr";

export function OrderTable() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    async function getOrders() {
      const response = await api.get(`/orders`, {
        withCredentials: true,
      });
      const ordersData = response.data;
      setOrders(ordersData);
    }

    getOrders();
  }, []);

  return (
    <Container>
      <thead>
        <tr>
          <th>Status</th>
          <th>Código</th>
          <th>Detalhamento</th>
          <th>Data e hora</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <OrderTableTr
            key={order.id}
            id={order.id}
            details={order.details}
            status={order.status}
            created_at={order.created_at}
          />
        ))}
      </tbody>
    </Container>
  );
}
