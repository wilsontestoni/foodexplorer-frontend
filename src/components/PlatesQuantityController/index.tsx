import React from "react";
import { Minus, Plus } from "@phosphor-icons/react";
import { ControlsContainer, Remove, Add } from "./styles";
import { addLeadingZero } from "../../utils/format"

interface PlatesQuantityControllerProps {
  platesQuantity: number;
  incrementNumber: () => void;
  decrementNumber: () => void;
}
export function PlatesQuantityController({
  platesQuantity,
  decrementNumber,
  incrementNumber,
}: PlatesQuantityControllerProps) {
  function handleRemoveCoffee() {
    decrementNumber();
  }

  function handleAddCoffee() {
    incrementNumber();
  }

  return (
    <ControlsContainer>
      <Remove type="button" onClick={handleRemoveCoffee}>
        <Minus size={24} weight="bold" />
      </Remove>
      <span>{addLeadingZero(platesQuantity)}</span>
      <Add type="button" onClick={handleAddCoffee}>
        <Plus size={24} weight="bold" />
      </Add>
    </ControlsContainer>
  );
}
