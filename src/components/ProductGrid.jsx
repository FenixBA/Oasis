import React from "react";
import { Box, SimpleGrid, Image, Text, Heading, VStack, HStack, useBreakpointValue, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GabOasis from "../assets/22.webp";
import SSD from "../assets/34.webp";
import Notebook from "../assets/17.webp";



const products = [
  { 
    id: 1, 
    name: "Notebook i7 Oasis", 
    description: "Rendimiento máximo, sin límites", 
    image: Notebook, 
    alt: "Notebook i7 de la marca Oasis, ideal para alto rendimiento.", 
    link: "https://www.fenixba.com/notebook-oasis-technology-intel-i7-1165g7-11th-ram-16gb-ddr4-158-pulgadas/p/MLA41536700?pdp_filters=seller_id%3A63214057#polycard_client=search-nordic-mshops&position=1&search_layout=stack&type=item&tracking_id=4758109c-a5e2-4e9c-8916-d1acfe595f27&wid=MLA1460836717&sid=search" 
  },
  { 
    id: 2, 
    name: "SSD 1TB Oasis", 
    description: "Velocidad y capacidad, todo en 1TB.", 
    image: SSD, 
    alt: "SSD 1TB Oasis, almacenamiento rápido y confiable.", 
    link: "https://www.fenixba.com/Disco%20solido%20oasis" 
  },
  { 
    id: 3, 
    name: "Gabinete Gamer Oasis", 
    description: "Estilo y potencia en cada partida.", 
    image: GabOasis, 
    alt: "Gabinete Gamer Oasis, diseño elegante y funcionalidad.", 
    link: "https://www.fenixba.com/gabinete-gamer-vidrio-templado-6-cooler-rgb-atx-sin-fuente-oasis-technology/p/MLA45125700?pdp_filters=seller_id%3A63214057#polycard_client=search-nordic-mshops&position=1&search_layout=stack&type=item&tracking_id=4daa509a-e50d-4ce6-89bf-91c9486d34c4&wid=MLA1470334047&sid=search" 
  },
];

const MotionBox = motion(Box);

const ProductGrid = () => {
  return (
    <VStack spacing={12} width="100%" padding={8}>
      {products.map((product, index) => (
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

  // Responsivo: cuando la pantalla es pequeña, cambia el ancho del texto e imagen
  const imageSize = useBreakpointValue({ base: "100%", md: "50%" });
  const textSize = useBreakpointValue({ base: "100%", md: "50%" });
  const headingSize = useBreakpointValue({ base: "md", md: "lg" });
  const textColor = useBreakpointValue({ base: "gray.300", md: "gray.300" , lg: "gray.300", sm: "gray.300", xl: "gray.300" });

  return (
    <HStack
      ref={ref}
      width="100%"
      spacing={0}
      flexDirection={reverse ? "row-reverse" : "row"}
      align="center"
      justify="space-between"
      flexWrap="wrap" // Permite que los elementos se apilen en pantallas pequeñas
    >

      {/* Texto del producto */}
      <Box width={textSize} padding={4}>
        <Link href={product.link} target="_blank" rel="noopener noreferrer">
          <Heading color="white" as="h3" size={headingSize} mb={4} fontSize={["xl","2xl", "3xl", "4xl"]}>
            {product.name}
          </Heading>
          <Text fontSize={["sm","md", "lg", "xl"]} color={textColor}>
            {product.description}
          </Text>
        </Link>
      </Box>

      {/* Imagen del producto con animación */}
      <MotionBox
        width={imageSize}
        padding={4}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.8 }}
      >
        <Link href={product.link} target="_blank" rel="noopener noreferrer">
          <Image
            src={product.image}
            alt={product.alt}
            objectFit="cover"
            borderRadius="xl"
            width="100%"
            height="auto"
          />
        </Link>
      </MotionBox>
    </HStack>
  );
};

export default ProductGrid;
