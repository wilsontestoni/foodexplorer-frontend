import React, { useState } from "react";

import { UploadSimple } from "@phosphor-icons/react";

import {
  BaseLabel,
  Container,
  Form,
  Ingredients,
  NavBackButoon,
  SubmitButton,
  Title,
  UploadContainer,
} from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Dropdown } from "../../components/Dropdown";
import { Input } from "../../components/Input";
import { CaretLeft } from "@phosphor-icons/react";
import { Ingredient } from "../../components/Ingredient";
import { Textarea } from "../../components/TextArea";
import { api } from "../../services/api";
import { getNumberWithComma } from "../../utils/format";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
export function NewPlate() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [img, setImg] = useState<File | undefined>(undefined);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Refeições");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);

  const [submitting, setSubmitting] = useState(false);

  function handlePlateImg(e) {
    const file = e.target.files[0];
    setImg(file);
  }

  function handleNewIngredient() {
    const hasIngredient = ingredients.some(
      (ingredient) => ingredient === newIngredient
    );

    if (hasIngredient) {
      alert("Não pode haver ingredientes repetidos");
      return;
    }

    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleDeleteIngredient(deletedIngredient: string) {
    const filteredIngredientes = ingredients.filter(
      (ingredient) => ingredient !== deletedIngredient
    );
    setIngredients(filteredIngredientes);
  }

  async function createPlate(e) {
    e.preventDefault();
    setSubmitting(true);

    if (!img) {
      alert("Por favor, selecione uma imagem.");
      setSubmitting(false);
      return;
    }

    if (ingredients.length < 1) {
      alert("É necessário ter pelo menos um ingrediente");
      setSubmitting(false);
      return;
    }

    const validNumber = getNumberWithComma(price);
    if (!validNumber) {
      alert("Preço inválido!");
      setSubmitting(false);
      return;
    }

    const plateData = new FormData();
    plateData.append("img", img);
    plateData.append("name", name);
    plateData.append("category", category);
    plateData.append("price", price);
    plateData.append("description", description);
    plateData.append("ingredients", JSON.stringify(ingredients));

    try {
      await api.post("/plates", plateData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Prato criado com sucesso!");
      navigate("/")
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
      if (error.response.status === 401) {
        alert("Sessão encerrada, faça o login novamente");
        signOut();
        navigate("/");
        return;
      }
      if (error.response?.data?.message) {
        alert(error.response.data.message);
        return;
      }
      alert("Não foi possível criar um novo prato, tente novamente mais tarde");
    }
  }

  return (
    <>
      <Header />
      <Container>
        <NavBackButoon to="/">
          <CaretLeft />
          <span>voltar</span>
        </NavBackButoon>

        <Title>Novo prato</Title>

        <Form onSubmit={createPlate}>
          <div>
            <UploadContainer>
              Imagem do prato
              <div>
                <UploadSimple size={32} />
                <span>{img ? `${img.name}` : "Selecione imagem"}</span>
              </div>
              <input
                onChange={(e) => {
                  handlePlateImg(e);
                }}
                id="file"
                type="file"
              />
            </UploadContainer>

            <Input
              type="text"
              id="name"
              labelText="Nome"
              placeholder="Ex: Salada Cesar"
              spaceBetweenTxtInput="16px"
              bgColor="#0D161B"
              onChange={(e) => setName(e.target.value)}
              required
            />

            <BaseLabel>
              Categorias
              <Dropdown
                selectedOption={category}
                onSelectedOption={setCategory}
                items={["Refeições", "Sobremesas", "Bebidas"]}
              />
            </BaseLabel>
          </div>

          <div>
            <Ingredients>
              <p>Ingredientes</p>
              <div>
                {ingredients.map((plateIngredient) => (
                  <Ingredient
                    isNew={false}
                    key={plateIngredient}
                    onClick={() => handleDeleteIngredient(plateIngredient)}
                    value={plateIngredient}
                  />
                ))}

                <Ingredient
                  onChange={(e) => setNewIngredient(e.target.value)}
                  onClick={handleNewIngredient}
                  value={newIngredient}
                  isNew
                  placeholder="Adicionar"
                />
              </div>
            </Ingredients>
            <Input
              type="text"
              id="price"
              labelText="Preço"
              placeholder="R$ 00,00"
              spaceBetweenTxtInput="16px"
              bgColor="#0D161B"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <BaseLabel>
            Descrição
            <Textarea
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            />
          </BaseLabel>
          <SubmitButton disabled={submitting} type="submit">
            Salvar Alterações
          </SubmitButton>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
