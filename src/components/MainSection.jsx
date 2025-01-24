import React from "react";
import { Box, Container } from "@chakra-ui/react";
import HeroSection from "./HeroSection";
import ProductGrid from "./ProductGrid";

const MainSection = () => {
  return (
    <Box as="main" minHeight="100vh" bg="black">
      <Container minWidth={"100%"} maxWidth={"100%"} padding={0}>
        <HeroSection />
        <ProductGrid />
      </Container>
    </Box>
  )
}

export default MainSection

