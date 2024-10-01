import React from "react";
import { useEffect, useState } from "react";
import { Container, ReceiptContainer, Logo, LinkHome } from "./styles";
import { Sidebar } from "../../Sidebar";
import { List, Receipt } from "@phosphor-icons/react";

import { useAuth } from "../../../hooks/useAuth";
import { USER_ROLE } from "../../../utils/roles";
import { useCart } from "../../../hooks/useCart";


interface HeaderMobileProps {
  onSearch?: (e) => void;
  logo: string;
}
export function HeaderMobile({ onSearch, logo }: HeaderMobileProps) {
  const { user } = useAuth();
  const { getTotalPlatesInCart } = useCart()

  const isCustomer = user?.role === USER_ROLE.CUSTOMER;

  const [sideBarActived, setSideBarActived] = useState(false);

  function handleOpenSideBar() {
    if (sideBarActived) {
      setSideBarActived(false);
      return;
    }

    setSideBarActived(true);
  }

  useEffect(() => {
    document.body.style.overflow = sideBarActived ? "hidden" : "";
  }, [sideBarActived]);

  return (
    <Container $iscustomer={isCustomer}>
      {sideBarActived ? (
        <Sidebar handleOpenSideBar={handleOpenSideBar} onSearch={onSearch} />
      ) : (
        <>
          <button onClick={handleOpenSideBar}>
            <List size={30} />
          </button>
          <LinkHome $isuser={isCustomer} to="/">
            <Logo src={logo} alt="Logo" />
          </LinkHome>

          {isCustomer && (
            <ReceiptContainer to="/checkout">
              <Receipt size={30} />
              <span>{getTotalPlatesInCart()}</span>
            </ReceiptContainer>
          )}
        </>
      )}
    </Container>
  );
}
