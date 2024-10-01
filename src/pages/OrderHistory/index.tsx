import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Title } from "../Favorites/styles";
import { ContentContainer, Container } from "./styles";
import { OrderList } from "./components/OrderList";
import { useTablet } from "../../hooks/useTablet";
import { OrderTable } from "./components/OrderTable";
import { useAuth } from "../../hooks/useAuth";
import { USER_ROLE } from "../../utils/roles";

export function OrderHistory() {
  const { user } = useAuth() 
  const isTablet = useTablet();

  const isAdmin = user?.role === USER_ROLE.ADMIN;

  return (
    <Container>
      <Header />

      <ContentContainer>
        <Title>{isAdmin ? "Pedidos" : "Histórico de pedidos"}</Title>

        {isTablet ? <OrderList /> : <OrderTable />}
      </ContentContainer>

      <Footer />
    </Container>
  );
}
