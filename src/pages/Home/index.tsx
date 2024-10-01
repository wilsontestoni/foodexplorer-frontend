import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Banner } from "./components/Banner";
import { Footer } from "../../components/Footer";
import { PlateCard } from "./components/PlateCard";
import { CardsCarousel } from "./components/CardsCarousel";
import { Section, ContentsWrapper, ErroMsg } from "./styles";
import { api } from "../../services/api";
import { Container } from "../OrderHistory/styles";

interface Plate {
  id: number;
  favorite_userid: null | number;
  name: string;
  img: string;
  category: string;
  price: number;
  description: string;
}
export function Home() {
  const [search, setSearch] = useState("");
  const [plates, setPlates] = useState<Plate[]>([]);

  function handleInputSearch(e) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    async function searchPlates() {
      const response = await api.get(`/plates?queryData=${search}`, {
        withCredentials: true,
      });
      const platesSearched = response.data;
      console.log(platesSearched)
      setPlates(platesSearched);
    }

    searchPlates();
  }, [search]);

  const hasNoPlates = plates.length < 1;
  const categories = [...new Set(plates.map((plate) => plate.category))];

  return (
    <Container>
      <Header onSearch={handleInputSearch} />
      <ContentsWrapper>
        <Banner />
        {hasNoPlates && (
          <Section>
            <ErroMsg>Não há prato ou ingrediente com esse nome!</ErroMsg>
          </Section>
        )}
        {categories.map((category) => (
          <Section key={category}>
            <h2>{category}</h2>
            <CardsCarousel key={category}>
              {plates
                .filter((plate) => plate.category === category)
                .map((plate) => (
                  <PlateCard
                    id={plate.id}
                    key={plate.id}
                    img={plate.img}
                    name={plate.name}
                    description={plate.description}
                    price={plate.price}
                    favoriteUserId={plate.favorite_userid}
                  />
                ))}
            </CardsCarousel>
          </Section>
        ))}
      </ContentsWrapper>
      <Footer />
    </Container>
  );
}
