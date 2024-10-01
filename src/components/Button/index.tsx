import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconSize?: number;
  icon?: React.ComponentType<{ size: number }>;

  children: ReactNode;
}
export function Button({
  iconSize,
  icon: Icon,
  children,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer {...rest}>
      {Icon && <Icon size={iconSize} />}
      {children}
    </ButtonContainer>
  );
}
