import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Routes } from "./routes/index.tsx";
import { theme } from "./styles/theme.ts";
import GlobalStyles from "./styles/global.ts";
import { AuthProvider } from "./hooks/useAuth.tsx";
import { CartProvider } from "./hooks/useCart.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CartProvider>
          <GlobalStyles />
          <Routes />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
