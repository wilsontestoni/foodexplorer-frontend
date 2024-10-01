import React from "react";
import imgBannerMobile from "../../../../assets/banner-mobile.svg";
import imgBannerDesktop from "../../../../assets/banner-desktop.svg";

import { BannerContainer, ImgBanner, TextContent } from "./styles";

import { useTablet } from "../../../../hooks/useTablet";

export function Banner() {
  const isTablet = useTablet();
  const bannerImg = isTablet ? imgBannerMobile : imgBannerDesktop;

  return (
    <BannerContainer>
      <div>
        <ImgBanner src={bannerImg} />
      </div>

      <TextContent>
        <h1>Sabores inigualáveis</h1>
        <p>
          Sinta o cuidado do preparo com ingredientes selecionados.
        </p>
      </TextContent>
    </BannerContainer>
  );
}
