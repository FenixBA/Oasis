import React from "react";
import { Box, SimpleGrid, Image, Text, Heading, VStack, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import All from "../assets/22.jpg";
import Celeron from "../assets/34.png";
import Gabinete from "../assets/17.jpg";


const products = [
  { id: 1, name: "Notebook i7 Oasis", description:"Rendimiento máximo, sin límites", image: Gabinete },
  { id: 2, name: "SSD 1TB Oasis", description:"Velocidad y capacidad, todo en 1TB.", image: Celeron },
  { id: 3, name: "Gabinete Gamer Oasis", description:"Estilo y potencia en cada partida.", image: All},
];

const MotionBox = motion(Box);

const ProductGrid = () => {
  return (
    <VStack spacing={12} width="100%" padding={8}>
      {products.slice(0, 4).map((product, index) => (
        <ProductItem key={product.id} product={product} reverse={index % 2 === 1} />
      ))}
    </VStack>
  );
};

const ProductItem = ({ product, reverse }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <HStack
      ref={ref}
      width="100%"
      spacing={0}
      flexDirection={reverse ? "row-reverse" : "row"}
      align="center"
      justify="space-between"
    >
      {/* Texto del producto */}
      <Box width="50%" padding={8}>
        <Heading color="white" as="h3" size="lg" mb={4}>
          {product.name}
        </Heading>
        <Text fontSize="xl" color="gray.400">
          {product.description}
        </Text>
      </Box>

      {/* Imagen del producto con animación */}
      <MotionBox
        width="50%"
        padding={8}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={product.image}
          alt={product.name}
          objectFit="cover"
          borderRadius="xl"
          width="100%"
          height="auto"
        />
      </MotionBox>
    </HStack>
  );
};

export default ProductGrid;


