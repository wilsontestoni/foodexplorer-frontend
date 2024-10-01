import React, { TextareaHTMLAttributes } from "react";
import { Container } from "./styles";

export function Textarea({
  value,
  ...rest
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <Container value={value} {...rest}></Container>;
}
