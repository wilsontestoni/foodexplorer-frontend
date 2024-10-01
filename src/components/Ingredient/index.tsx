import React from "react";
import { X, Plus } from "@phosphor-icons/react";
import { Container } from "./styles";

interface IngredientProps {
  value: string;
  isNew: boolean;
  onClick: () => void;
  onChange?: (e) => void;
  placeholder?: string;
}
export function Ingredient({
  value,
  isNew,
  onClick,
  ...rest
}: IngredientProps) {
  return (
    <Container $isnew={isNew}>
      {isNew ? (
        <input type="text" value={value} {...rest} />
      ) : (
        <span>{value}</span>
      )}

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        {isNew ? <Plus size={12} /> : <X size={12} />}
      </button>
    </Container>
  );
}
