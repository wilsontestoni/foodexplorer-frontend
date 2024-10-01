import React, { useRef } from "react";
import { Container, NavigationButton } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useTablet } from "../../../../hooks/useTablet";

import { CaretLeft, CaretRight } from "@phosphor-icons/react";

export function CardsCarousel({ children }) {
  const isTablet = useTablet();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Container>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        slidesPerView={"auto"}
        loop={true}
        spaceBetween={isTablet ? 16 : 27}
      >
        <NavigationButton ref={prevRef}>
          <CaretLeft size={35} />
        </NavigationButton>

        {children.map((card) => (
          <SwiperSlide key={card.props.name}>{card}</SwiperSlide>
        ))}

        <NavigationButton ref={nextRef}>
          <CaretRight size={35} />
        </NavigationButton>
      </Swiper>
    </Container>
  );
}
