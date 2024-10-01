import React, { useState } from "react";
import { CaretDown, CaretUp } from "@phosphor-icons/react";

import {
  Container,
  DropdownButton,
  DropdownContent,
  DropdownItem,
  StatusColor,
  StatusOrderContainer,
} from "./styles";

interface DropdownProps {
  selectedOption: string;
  onSelectedOption: (item: string) => void;
  hasStatusOrder?: boolean;
  items: string[];
}
export function Dropdown({
  selectedOption,
  onSelectedOption,
  hasStatusOrder,
  items,
}: DropdownProps) {
  const [open, setOpen] = useState(false);

  function handleOpenContent() {
    if (open) {
      setOpen(false);
      return;
    }
    setOpen(true);
  }

  return (
    <Container>
      <DropdownButton type="button">
        {hasStatusOrder ? (
          <StatusOrderContainer>
            <StatusColor $status={selectedOption} />
            {selectedOption}
          </StatusOrderContainer>
        ) : (
          <span>{selectedOption}</span>
        )}

        {open ? (
          <CaretUp size={24} onClick={handleOpenContent} />
        ) : (
          <CaretDown size={24} onClick={handleOpenContent} />
        )}
      </DropdownButton>

      <DropdownContent $isopen={open}>
        {items.map((item) => (
          <DropdownItem
            $selected={item === selectedOption}
            key={item}
            onClick={() => {
              onSelectedOption(item);
              handleOpenContent();
            }}
          >
            {hasStatusOrder && <StatusColor $status={item} />}
            {item}
          </DropdownItem>
        ))}
      </DropdownContent>
    </Container>
  );
}
