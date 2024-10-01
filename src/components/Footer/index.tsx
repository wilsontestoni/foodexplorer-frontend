import React from "react"
import logoFooter from "../../assets/logo-footer.svg"
import { Container, Wrapper } from "./styles"

export function Footer() {
  return (
    <Container>
      <Wrapper>
        <img src={logoFooter} alt="" />
        <span>© 2023 - Todos os direitos reservados.</span>
      </Wrapper>
    </Container>
  )
}