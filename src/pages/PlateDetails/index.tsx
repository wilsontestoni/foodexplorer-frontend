import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CaretLeft, Receipt } from "@phosphor-icons/react";
import { PlatesQuantityController } from "../../components/PlatesQuantityController";
import {
  BackButton,
  ContentWrapper,
  Ingredients,
  OrderContainer,
  PlateContainer,
  EditPlateButton,
} from "./styles";
import { Container } from "../OrderHistory/styles"
import { Button } from "../../components/Button";
import { api } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { USER_ROLE } from "../../utils/roles";
import { convertDotToComma } from "../../utils/format";
import { useCart } from "../../hooks/useCart";

type ingredient = { name: string };
interface Plate {
  id: number;
  img: string;
  name: string;
  price: number;
  description: string;
  ingredients: ingredient[];
}

export function PlateDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addPlate } = useCart();
  const isAdmin = user?.role === USER_ROLE.ADMIN;

  const [plate, setPlate] = useState<Plate | null>(null);
  const [numberOfPlates, setNumberOfPlates] = useState(1);

  function handlePlateDetails(plateId) {
    navigate(`/editplate/${plateId}`);
  }

  useEffect(() => {
    async function getPlate() {
      try {
        const response = await api.get(`/plates/${id}`, {
          withCredentials: true,
        });
        const plateInfo = response.data;
        setPlate(plateInfo);
      } catch {
        alert(
          "Não foi possível acessar as informações do prato neste momento, tente novamente mais tarde"
        );
      }
    }

    getPlate();
  }, [id]);

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
    if (!plate) {
      alert(
        "Não foi possível pegar os dados do prato. Por favor, tente novamente em alguns instantes."
      );
      return;
    }

    const plateData = {
      plate: {
        id: plate.id,
        img: plate.img,
        name: plate.name,
        price: plate.price,
      },
      quantityPurchased: numberOfPlates,
    };

    addPlate(plateData);
  }

  const formatedPriced = plate?.price && convertDotToComma(plate.price);

  return (
    <Container>
      <Header />

      <ContentWrapper>
        <BackButton to="/">
          <CaretLeft size={32} />
          <span>voltar</span>
        </BackButton>
        {plate && (
          <PlateContainer>
            <img
              src={`${api.defaults.baseURL}/files/${plate.img}`}
              alt={plate.name}
            />
            <div>
              <h1>{plate.name}</h1>
              <p>{plate.description}</p>
              <Ingredients>
                {plate.ingredients.map((ingredient) => (
                  <span key={ingredient.name}>{ingredient.name}</span>
                ))}
              </Ingredients>

              {isAdmin ? (
                <EditPlateButton onClick={() => handlePlateDetails(id)}>
                  Editar Prato
                </EditPlateButton>
              ) : (
                <OrderContainer>
                  <PlatesQuantityController
                    platesQuantity={numberOfPlates}
                    incrementNumber={incrementPlateNumber}
                    decrementNumber={decrementPlateNumber}
                  />
                  <Button onClick={handleAddPlate}>
                    <Receipt size={22} />
                    incluir ∙ R$ {formatedPriced}
                  </Button>
                </OrderContainer>
              )}
            </div>
          </PlateContainer>
        )}
      </ContentWrapper>

      <Footer />
    </Container>
  );
}
