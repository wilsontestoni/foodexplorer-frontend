import React from "react";
import { HeaderContainer } from "./styles";
import logo from "../../assets/logo-explorer.svg";
import logoAdmin from "../../assets/logo-admin-desktop.svg";
import logoAdminMobile from "../../assets/logo-admin-mobile.svg";

import { useAuth } from "../../hooks/useAuth";
import { USER_ROLE } from "../../utils/roles";

import { useTablet } from "../../hooks/useTablet";
import { HeaderMobile } from "./HeaderMobile";
import { HeaderDesktop } from "./HeaderDesktop";

interface HeaderProps {
  onSearch?: (e) => void;
}
export function Header({ onSearch }: HeaderProps) {
  const { user } = useAuth();
  const isTablet = useTablet();

  function handleLogo() {
    if (user?.role === USER_ROLE.ADMIN) {
      return isTablet ? logoAdminMobile : logoAdmin;
    }
    return logo;
  }

  return (
    <HeaderContainer>
      {isTablet ? (
        <HeaderMobile onSearch={onSearch} logo={handleLogo()} />
      ) : (
        <HeaderDesktop onSearch={onSearch} logo={handleLogo()} />
      )}
    </HeaderContainer>
  );
}
