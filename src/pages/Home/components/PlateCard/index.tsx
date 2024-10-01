import React, { useState } from "react";
import { HeartStraight, PencilSimple } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../../../hooks/useAuth";
import { USER_ROLE } from "../../../../utils/roles";

import {
  Container,
  PlateImg,
  Price,
  OrderContainer,
  IconButton,
} from "./styles";
import { Button } from "../../../../components/Button";
import { PlatesQuantityController } from "../../../../components/PlatesQuantityController";
import { api } from "../../../../services/api";
import { convertDotToComma } from "../../../../utils/format";
import { useCart } from "../../../../hooks/useCart";



interface PlateCardProps {
  id: number;
  favoriteUserId: null | number;
  img: string;
  name: string;
  description: string;
  price: number;
}
export function PlateCard({
  id,
  favoriteUserId,
  img,
  name,
  description,
  price,
}: PlateCardProps) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addPlate } = useCart()
  const alreadyFavorite = !!favoriteUserId;

  const [isFavorite, setIsFavorite] = useState(alreadyFavorite);
  const [numberOfPlates, setNumberOfPlates] = useState(1);

  const isAdmin = user?.role === USER_ROLE.ADMIN;
  const formatedPriced = price && convertDotToComma(price);

  function handlePlateDetails(plateId) {
    navigate(`/plate/${plateId}`);
  }

  async function handleFavoritePlate() {
    try {
      await api.post(
        "/favorites",
        { plate_id: id },
        {
          withCredentials: true,
        }
      );

      setIsFavorite(true);
    } catch {
      alert(
        "Não foi possível favoritar este prato, tente novamente mais tarde"
      );
    }
  }

  async function handleUnfavoritePlate() {
    try {
      await api.delete(`/favorites/${id}`, {
        withCredentials: true,
      });
      setIsFavorite(false);
    } catch {
      alert("Não foi possível remover o favorito, tente novamente mais tarde");
    }
  }

  function decrementPlateNumber() {
    if (numberOfPlates < 2) {
      return;
    }

    setNumberOfPlates((prevQuantity) => prevQuantity - 1);
  }

  function incrementPlateNumber() {
    setNumberOfPlates((prevQuantity) => prevQuantity + 1);
  }

  function handleAddPlate() {
    const plateData = {
      plate: {
        id,
        img,
        name,
        price,
      },
      quantityPurchased: numberOfPlates,
    }

    addPlate(plateData);
  }

  return (
    <Container $isadmin={isAdmin}>
      {isAdmin ? (
        <IconButton>
          <PencilSimple onClick={() => handlePlateDetails(id)} />
        </IconButton>
      ) : isFavorite ? (
        <IconButton $isfavorite onClick={handleUnfavoritePlate}>
          <HeartStraight weight="fill" />
        </IconButton>
      ) : (
        <IconButton onClick={handleFavoritePlate}>
          <HeartStraight />
        </IconButton>
      )}

      <PlateImg src={`${api.defaults.baseURL}/files/${img}`} alt={name} />
      <h3
        onClick={() => {
          handlePlateDetails(id);
        }}
      >
        {name} {">"}
      </h3>

      <p>{description}</p>

      <Price>R$ {formatedPriced}</Price>

      {!isAdmin && (
        <OrderContainer>
          <PlatesQuantityController
            platesQuantity={numberOfPlates}
            incrementNumber={incrementPlateNumber}
            decrementNumber={decrementPlateNumber}
          />
          <Button onClick={handleAddPlate} type="button">Incluir</Button>
        </OrderContainer>
      )}
    </Container>
  );
}
