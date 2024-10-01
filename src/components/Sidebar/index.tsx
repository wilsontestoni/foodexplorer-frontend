import React from "react";
import { X } from "@phosphor-icons/react";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarBody,
  NewPlate,
  LogoutButton,
  Favorites,
  OrderHistory,
} from "./styles";
import { Searchbar } from "../Searchbar";
import { useAuth } from "../../hooks/useAuth";
import { USER_ROLE } from "../../utils/roles";
import { useNavigate } from "react-router-dom";


interface SidebarProps {
  onSearch?: (e) => void;
  handleOpenSideBar: () => void;
}
export function Sidebar({ handleOpenSideBar, onSearch }: SidebarProps) {
  const { signOut, user } = useAuth();
  const navigate = useNavigate()

  const isAdmin = user?.role === USER_ROLE.ADMIN;

  function handleSignout() {
    signOut()
    navigate("/")
  }

  return (
    <SidebarContainer>
      <SidebarHeader>
        <X size={26} onClick={handleOpenSideBar} />
        <h1>Menu</h1>
      </SidebarHeader>
      <SidebarBody>
        <Searchbar onSearch={onSearch} />
        <div>
          {isAdmin ? (
            <NewPlate to="/newplate">Novo Prato</NewPlate>
          ) : (
            <Favorites to="/favorites">Meus Favoritos</Favorites>
          )}
            <OrderHistory to="/order-history">Histórico</OrderHistory>
          <LogoutButton onClick={handleSignout}>Sair</LogoutButton>
        </div>
      </SidebarBody>
    </SidebarContainer>
  );
}
