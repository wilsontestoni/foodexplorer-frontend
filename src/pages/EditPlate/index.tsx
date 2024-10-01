import React, { useEffect, useState } from "react";

import { UploadSimple } from "@phosphor-icons/react";
import { useParams } from "react-router-dom";
import { ButtonsContainer, DeleteButton } from "./styles";
import {
  BaseLabel,
  Container,
  Form,
  Ingredients,
  NavBackButoon,
  SubmitButton,
  Title,
  UploadContainer,
} from "../NewPlate/styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Dropdown } from "../../components/Dropdown";
import { Input } from "../../components/Input";
import { CaretLeft } from "@phosphor-icons/react";
import { Ingredient } from "../../components/Ingredient";
import { Textarea } from "../../components/TextArea";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export interface Plate {
  name: string;
  category: string;
  price: string;
  description: string;
  ingredients: string[];
}
export function EditPlate() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();

  const [img, setImg] = useState<File | null>(null);
  const [prevImg, setPrevImg] = useState("");
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

  useEffect(() => {
    async function fetchPlateData() {
      try {
        const response = await api.get(`/plates/${id}`, {
          withCredentials: true,
        });
        const plateData = response.data;
        const plateIngredients = plateData.ingredients;

        const ingredientsName = plateIngredients.map(
          (ingredient) => ingredient.name
        );

        setName(plateData.name);
        setCategory(plateData.category);
        setPrice(plateData.price);
        setDescription(plateData.description);
        setPrevImg(plateData.img);
        setIngredients(ingredientsName);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
          return;
        }
        alert(
          "Não foi possível carregar os dados do filme, tente novamete mais tarde"
        );
      }
    }

    fetchPlateData();
  }, [id]);

  function createFormData(plate: Plate, img: File) {
    const formData = new FormData();
    formData.append("img", img);
    Object.keys(plate).forEach((key) => {
      formData.append(
        key,
        key === "ingredients" ? JSON.stringify(plate[key]) : plate[key]
      );
    });
    return formData;
  }

  async function handleUpdatePlate(e) {
    e.preventDefault();
    setSubmitting(true);

    if (ingredients.length < 1) {
      alert("É necessário ter pelo menos um ingrediente");
      setSubmitting(false);
      return;
    }

    const plate = {
      name,
      category,
      price,
      description,
      ingredients,
    };

    const plateData = img ? createFormData(plate, img) : plate;

    try {
      await api.put(`/plates/${id}`, plateData, {
        withCredentials: true,
        headers: {
          "Content-Type": `${img ? "multipart/form-data" : "application/json"}`,
        },
      });
      alert("Prato atualizado!");
      navigate("/");
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
      alert("Não foi possível atualizar o prato, tente novamente mais tarde");
    }
  }

  async function handleDeletePlate() {
    setSubmitting(true);

    try {
      await api.delete(`/plates/${id}`, {
        withCredentials: true,
      });
      alert("Prato deletado com sucesso!");
      setSubmitting(false);
      navigate("/");
    } catch (error) {
      setSubmitting(false);
      if (error.response?.data?.message) {
        alert(error.response.data.message);
        return;
      }
      alert("Não foi possível deletar o prato, tente novamente mais tarde");
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

        <Title>Editar prato</Title>

        <Form onSubmit={handleUpdatePlate}>
          <div>
            <UploadContainer>
              Imagem do prato
              <div>
                <UploadSimple size={32} />
                <span>{img ? img.name : prevImg}</span>
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
              value={name}
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
              type="string"
              id="price"
              labelText="Preço"
              placeholder="R$ 00,00"
              spaceBetweenTxtInput="16px"
              bgColor="#0D161B"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
          </div>
          <BaseLabel>
            Descrição
            <Textarea
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              value={description}
            />
          </BaseLabel>
          <ButtonsContainer>
            <DeleteButton type="button" onClick={handleDeletePlate}>
              Excluir prato
            </DeleteButton>
            <SubmitButton disabled={submitting} type="submit">
              Salvar Alterações
            </SubmitButton>
          </ButtonsContainer>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
