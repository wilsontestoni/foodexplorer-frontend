import React, { useEffect, useState } from "react";
import { ContentContainer, Title } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { FavoriteCard } from "./components/FavoriteCard";
import { api } from "../../services/api";
import { ErroMsg } from "../Home/styles";
import { Container } from "../OrderHistory/styles";

export interface FavoritePlate {
  plate_id: number;
  img: string;
  name: string;
}
export function Favorites() {
  const [favorites, setFavorites] = useState<FavoritePlate[]>([]);

  function handleUpdateFavorites(plate_id) {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.plate_id !== plate_id
    );

    setFavorites(updatedFavorites);
  }

  useEffect(() => {
    async function getUserFavorites() {
      try {
        const response = await api.get(`/favorites`, {
          withCredentials: true,
        });
        const userFavoritesPlates = response.data;
        setFavorites(userFavoritesPlates);
      } catch {
        alert(
          "Não foi possível carregar os favoritos agora, tente novamente mais tarde"
        );
      }
    }

    getUserFavorites();
  }, []);

  const hasNoFavorites = favorites.length < 1;

  return (
    <Container>
      <Header />

      <ContentContainer>
        <Title>Meus favoritos</Title>

        {hasNoFavorites ? (
          <ErroMsg>Você ainda não tem favoritos!</ErroMsg>
        ) : (
          <ul>
            {favorites.map((favoritePlate) => (
              <FavoriteCard
                key={favoritePlate.plate_id}
                plate_id={favoritePlate.plate_id}
                img={favoritePlate.img}
                name={favoritePlate.name}
                onUpdateFavorites={handleUpdateFavorites}
              />
            ))}
          </ul>
        )}
      </ContentContainer>

      <Footer />
    </Container>
  );
}
