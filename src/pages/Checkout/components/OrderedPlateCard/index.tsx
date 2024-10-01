import React from "react";
import { ContentContainer, Name, Price } from "./styles";
import { convertDotToComma } from "../../../../utils/format";
import { api } from "../../../../services/api";
import { useCart } from "../../../../hooks/useCart";

interface OrderedPlateCardProps {
  id: number;
  img: string;
  name: string;
  price: number;
  quantity: number;
}
export function OrderedPlateCard({
  id,
  img,
  name,
  price,
  quantity
}: OrderedPlateCardProps) {
  const { deletePlate } = useCart();

  function handleRemovePlate() {
    deletePlate(id);
  }

  return (
    <ContentContainer>
      <img src={`${api.defaults.baseURL}/files/${img}`} alt={name} />
      <div>
        <Name to={`/plate/65`}>
          {quantity} x {name} <Price>R$ {convertDotToComma(price)}</Price>
        </Name>
        <button onClick={handleRemovePlate}>Excluir</button>
      </div>
    </ContentContainer>
  );
}
