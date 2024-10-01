import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { OrderCard } from "../OrderCard";
import { api } from "../../../../services/api";

export interface Order {
  id: number;
  status: string;
  details: string;
  created_at: Date;
}
export function OrderList() {
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
      {orders.map((order) => (
        <OrderCard
          key={order.id}
          id={order.id}
          details={order.details}
          status={order.status}
          created_at={order.created_at}
        />
      ))}
    </Container>
  );
}
