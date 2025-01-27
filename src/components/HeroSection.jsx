import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  useColorModeValue,
  Image,
  Icon,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import bgImage from "../assets/oasislogo.webp";
import { ChevronRightIcon } from "@chakra-ui/icons";

const HeroSection = () => {
  const bgColor = "black"; // Color base
  const textColor = useColorModeValue("white", "gray.800");

  // MotionButton es el componente animado
  const MotionButton = motion(Button);
  const MotionBox = motion(Box);
  const MotionImage = motion(Image); // Hacemos que la imagen sea animada

  // Responsive values
  const imageMaxWidth = useBreakpointValue({ base: "350px", md: "800px" });
  const imageMaxHeight = useBreakpointValue({ base: "300px", md: "500px" });
  const buttonPaddingX = useBreakpointValue({ base: "6", md: "8" });
  const buttonPaddingY = useBreakpointValue({ base: "4", md: "6" });
  const fontSize = useBreakpointValue({ base: "md", md: "lg" });
  const buttonFontSize = useBreakpointValue({ base: "sm", md: "lg" });

  return (
    <header>
    <Box
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      bg={bgColor}
      color={textColor}
      width="100%"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="contain"
      position="relative"
      marginBottom={16}
    >
      {/* Imagen de fondo animada */}
      <MotionImage
        src={bgImage}
        alt="Logotipo de Oasis, productos tecnológicos."
        position="absolute"
        transform="translate(-50%, -50%)"
        maxWidth={imageMaxWidth}
        maxHeight={imageMaxHeight}
        opacity={1}
        initial={{ opacity: 0, scale: 0.8 }} // Comienza con opacidad 0 y tamaño más pequeño
        animate={{ opacity: 1, scale: 1 }} // Se hace completamente visible y en su tamaño original
        transition={{ duration: 2 }} // Duración de la animación de 2 segundos
      />
      
      {/* Botón animado */}
      
      <MotionButton
  as="a" // Convierte todo el botón en un enlace
  href="https://fenixba.mercadoshops.com.ar/"
  target="_blank"
  rel="noopener noreferrer"
  size="lg"
  colorScheme="white"
  bg="white"
  color="black"
  px={buttonPaddingX}
  py={buttonPaddingY}
  display="flex"
  alignItems="center"
  overflow="hidden"
  position="absolute"
  bottom="4%" // Distancia desde abajo
  _hover={{
    bg: "gray.200", // Cambia a gris claro al pasar el mouse
  }}
  whileHover={{
    scale: 1.05, // Aumenta ligeramente de tamaño
  }}
  whileTap={{
    scale: 0.95, // Se reduce un poco al hacer clic
  }}
>
  
  <Text fontWeight="bold" fontSize={buttonFontSize} mr={4}>
    Explorar Productos
  </Text>
  
  <MotionBox
    as={Icon}
    initial={{ x: 0 }}
    whileHover={{ x: 8 }} // La flecha se mueve a la derecha al pasar el mouse
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    
    <ChevronRightIcon boxSize={6} />
  </MotionBox>
  </MotionButton>
  
    </Box>
    
    </header>
  );
};

export default HeroSection;
