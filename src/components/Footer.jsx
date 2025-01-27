import React from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  VStack,
  Text,
  Link,
  HStack,
  Icon,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import logo from "../assets/oasislogo.webp";

const Footer = () => {
  const bgColor = "black"; // Fondo oscuro
  const textColor = "white";

  return (
    <Box bg={bgColor} color={textColor} py={8}>
      <Container maxW="7xl">
        <Grid
          templateColumns={{
            base: "1fr", // Una sola columna en dispositivos móviles
            md: "repeat(2, 1fr)", // Dos columnas en tablets
            lg: "repeat(3, 1fr)", // Tres columnas en pantallas grandes
          }}
          gap={8}
        >
          {/* Logo y Mensaje */}
          <GridItem>
            <VStack align="flex-start" spacing={4}>
              <Image
                src={logo}
                alt="Fenixba Logo"
                h="40px"
                objectFit="contain"
              />
              <Text fontSize="sm">
                Ofrecemos los mejores productos para mejorar tu experiencia.
              </Text>
            </VStack>
          </GridItem>

          {/* Categorías */}
          <GridItem>
            <VStack align="flex-start" spacing={4}>
              <Text fontSize="xl" fontWeight="bold">
                Categorías
              </Text>
              <Link href="https://fenixba.mercadoshops.com.ar/listado/computacion/" _hover={{ color: "gray.300" }} target="_blank">
                Computación
              </Link>
              <Link href="https://fenixba.mercadoshops.com.ar/listado/hogar-muebles-jardin/" _hover={{ color: "gray.300" }} target="_blank">
                Hogar, Muebles y Jardín
              </Link>
              <Link href="https://fenixba.mercadoshops.com.ar/listado/electrodomesticos-aires-ac/" _hover={{ color: "gray.300" }} target="_blank">
                Electrodomésticos y Aires Ac.
              </Link>
              <Link href="https://fenixba.mercadoshops.com.ar/listado/electronica-audio-video/" _hover={{ color: "gray.300" }} target="_blank">
                Electrónica, Audio y Video
              </Link>
              <Link href="https://fenixba.mercadoshops.com.ar/listado/herramientas/" _hover={{ color: "gray.300" }} target="_blank">
                Herramientas
              </Link>
            </VStack>
          </GridItem>

          {/* Contacto */}
          <GridItem>
            <VStack align="flex-start" spacing={4}>
              <Text fontSize="xl" fontWeight="bold">
                Contáctanos
              </Text>
              {/* Detalles de Contacto */}
              
              <HStack spacing={4}>
              <Text fontSize="lg">Teléfonos:</Text>
              <Link 
                    href="tel:+541142405853" 
                    fontSize="lg" 
                    color="gray.100" 
                    _hover={{ textDecoration: 'none', color: "gray.300" }}
                >
                    42405853 
                </Link>
              <Link 
                    href="tel:+541140364647" 
                    fontSize="lg" 
                    color="gray.100" 
                    _hover={{ textDecoration: 'none', color: "gray.300" }}
                >
                1140364647
                </Link>
                
                </HStack>
              <Link href="mailto:ventas@fenixba.com" _hover={{ color: "gray.300" }}>
                ventas@fenixba.com
              </Link>
              <Link 
                    href="https://www.google.com/maps/place/FENIX+BA/@-34.6984667,-58.3995653,17z/data=!4m15!1m8!3m7!1s0x95bccce15ce25f0d:0x659332ebe23ed2b1!2sGdor.+Udaondo+2002,+B1826+Lan%C3%BAs,+Provincia+de+Buenos+Aires!3b1!8m2!3d-34.6984667!4d-58.3995653!16s%2Fg%2F11gfk195t5!3m5!1s0x95bccce15cdd7555:0x6251601d530b8b54!8m2!3d-34.6984667!4d-58.3995653!16s%2Fg%2F11c0_2_jjn?entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D"  
                    fontSize="lg" 
                    color="gray.100" 
                    _hover={{ textDecoration: 'none', color: "gray.300" }}
                >
                Udaondo 2002, Lanús Oeste, Buenos Aires
              </Link>

              {/* Íconos sociales */}
              <HStack spacing={4} mt={4}>
                <Link href="https://www.facebook.com/fenixbuenosaires" isExternal>
                  <Icon as={FaFacebookF} w={6} h={6} />
                </Link>
                <Link href="https://www.instagram.com/fenixba.arg" isExternal>
                  <Icon as={FaInstagram} w={6} h={6} />
                </Link>
                <Link href="mailto:ventas@fenixba.com">
                  <Icon as={FaEnvelope} w={6} h={6} />
                </Link>
              </HStack>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
