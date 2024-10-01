import React from "react";
import { Container, PlateName } from "./styles";
import { api } from "../../../../services/api";
import { FavoritePlate } from "../..";

interface FavoriteCard extends FavoritePlate {
  onUpdateFavorites: (plate_id: number) => void;
}
export function FavoriteCard({
  plate_id,
  img,
  name,
  onUpdateFavorites,
}: FavoriteCard) {
  async function handleUnfavoritePlate() {
    try {
      await api.delete(`/favorites/${plate_id}`, {
        withCredentials: true,
      });
      onUpdateFavorites(plate_id);
    } catch {
      alert("Não foi possível remover o favorito, tente novamente mais tarde");
    }
  }

  return (
    <Container>
      <img src={`${api.defaults.baseURL}/files/${img}`} alt={name} />
      <div>
        <PlateName to={`/plate/${plate_id}`}>{name}</PlateName>
        <button onClick={handleUnfavoritePlate}>Remover dos Favoritos</button>
      </div>
    </Container>
  );
}
