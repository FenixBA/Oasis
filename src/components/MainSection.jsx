import React from "react";
import { Box, Container } from "@chakra-ui/react";
import HeroSection from "./HeroSection";
import ProductGrid from "./ProductGrid";
import Footer from "./Footer";
import TitleGrid from "./TitleGrid";
const MainSection = () => {
  return (
    <Box as="main" minHeight="100vh" bg="black">
      <Container minWidth={"100%"} maxWidth={"100%"} padding={0}>
        <HeroSection />
        <TitleGrid />
        <ProductGrid />
        <Footer />
      </Container>
    </Box>
  )
}

export default MainSection

