import React from "react";
import { Box, Image, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ProductCard = ({ name, price, imageUrl }) => {
  const bgColor = useColorModeValue("white", "gray.700")
  const textColor = useColorModeValue("gray.800", "white")

  return (
    <Box
      as={motion.div}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <VStack bg={bgColor} p={4} borderRadius="lg" boxShadow="md" spacing={3} align="stretch">
        <Image
          src={imageUrl || "https://via.placeholder.com/300"}
          alt={name}
          borderRadius="md"
          objectFit="cover"
          height="200px"
        />
        <Text fontWeight="bold" fontSize="lg" color={textColor}>
          {name}
        </Text>
        <Text color="teal.500" fontSize="md">
          ${price}
        </Text>
      </VStack>
    </Box>
  )
}

export default ProductCard

