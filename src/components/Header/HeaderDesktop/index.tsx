import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  LogoutButton,
  DeskLogo,
  OrdersButton,
  NewPlateButton,
  FavoritesButton,
  HistoryButton,
} from "./styles";

import { Receipt, SignOut } from "@phosphor-icons/react";
import { useAuth } from "../../../hooks/useAuth";
import { useCart } from "../../../hooks/useCart";
import { USER_ROLE } from "../../../utils/roles";

import { Searchbar } from "../../Searchbar";
import { Link } from "react-router-dom";

interface HeaderDesktopProps {
  onSearch?: (e) => void;
  logo: string;
}
export function HeaderDesktop({ logo, onSearch }: HeaderDesktopProps) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { getTotalPlatesInCart } = useCart();
  const { signOut } = useAuth();

  const isAdmin = user?.role === USER_ROLE.ADMIN;

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  function RoleButtons() {
    if (isAdmin) {
      return (
        <>
          <HistoryButton to="/order-history">Histórico de pedidos</HistoryButton>
          <NewPlateButton to="/newplate">Novo Prato</NewPlateButton>
        </>
      );
    }
    return (
      <>
        <FavoritesButton to="/favorites">Meus Favoritos</FavoritesButton>
        <HistoryButton to="/order-history">Histórico de pedidos</HistoryButton>
        <OrdersButton to="/checkout">
          <Receipt size={26} />
          Pedidos({getTotalPlatesInCart()})
        </OrdersButton>
      </>
    );
  }

  return (
    <Container>
      <Link to="/">
        <DeskLogo src={logo} alt="Logo" />
      </Link>

      <Searchbar onSearch={onSearch} />

      <RoleButtons />

      <LogoutButton onClick={handleSignOut}>
        <SignOut size={32} />
      </LogoutButton>
    </Container>
  );
}
