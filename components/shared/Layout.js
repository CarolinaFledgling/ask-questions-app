import React from "react";
import Box from "@mui/material/Box";
import { Footer } from "../Footer/Footer";
import { Container } from "@mui/material";
import { NavBar } from "../NavBar/NavBar";

export const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavBar />
      <Container
        component="main"
        sx={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
        }}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
};
