import React from "react";
import { Box, Heading, Text, Container } from "@chakra-ui/react";

const TitleGrid = () => {
  return (
    <Container maxW="container.xl" centerContent p={4}>
      <Box textAlign="center" mb={6}>
        <Heading
          as="h1"
          size="lg"
          color="white" // Cambia el color a uno más atractivo
          fontWeight="bold"
          mb={4}
          fontSize={["xl","2xl", "3xl", "4xl"]} // Tamaño de fuente responsivo: móvil, tablet, desktop
        >
          Oasis y FénixBA: Electrodomésticos, Tecnología y Artículos para el Hogar
        </Heading>
        <Text
          fontSize={["sm","md", "lg", "xl"]} // Tamaño responsivo para el texto
          color="gray.200"
          maxW="2xl"
          mx="auto"
          mb={8}
        >
          Encontrá los productos más innovadores y de calidad en tecnología, notebooks, computadoras y electrodomésticos para tu hogar.
        </Text>
      </Box>
    </Container>
  );
};

export default TitleGrid;
