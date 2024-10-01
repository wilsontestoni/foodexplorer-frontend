import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Routes } from "./routes/index";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/global";
import { AuthProvider } from "./hooks/useAuth";
import { CartProvider } from "./hooks/useCart";

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
