import React from "react";
import { Container, TotalPrice } from "./styles";
import { Title } from "../../../Favorites/styles";
import { OrderedPlateCard } from "../OrderedPlateCard";
import { convertDotToComma } from "../../../../utils/format";
import { useCart } from "../../../../hooks/useCart";
import { ErroMsg } from "../../../Home/styles";

export function Order() {
  const { cart, getTotalPrice, getTotalPlatesInCart } = useCart();
  const hasNoPlates = getTotalPlatesInCart() <= 0;

  const orderTotalPrice = getTotalPrice().toFixed(2);

  return (
    <Container>
      <Title>Meu pedido</Title>

      {hasNoPlates ? (
        <ErroMsg>Você ainda não tem nenhum pedido</ErroMsg>
      ) : (
        <ul>
          {cart.map((item) => (
            <OrderedPlateCard
              key={item.plate.id}
              id={item.plate.id}
              img={item.plate.img}
              name={item.plate.name}
              price={item.plate.price}
              quantity={item.quantityPurchased}
            />
          ))}
        </ul>
      )}

      <TotalPrice>Total: R$ {convertDotToComma(orderTotalPrice)}</TotalPrice>
    </Container>
  );
}
