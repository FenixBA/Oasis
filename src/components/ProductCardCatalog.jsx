import React from 'react';
import { Box, Image, Text, VStack } from '@chakra-ui/react';
import Masonry from './Masonry';
// Componente para cada tarjeta de producto


const ProductCardCatalog = ({ item_cod, item_desc, precio_vip, precio_efectivo, precio_cheque, precio_pvp, cat_desc, subcat_desc, imagen }) => {
    return (
        <Box borderRadius="lg" overflow="hidden" boxShadow="md" p={4} bg="white">
            <Image src={imagen} alt={item_desc} boxSize="150px" objectFit="cover" mx="auto" borderRadius="md"/>
            <VStack spacing={2} mt={4} align="start">
                <Text fontWeight="bold" fontSize="lg">{item_desc}</Text>
                <Text fontSize="sm" color="gray.600">Categoría: {cat_desc} - {subcat_desc}</Text>
                <Text fontSize="sm">Precio VIP: ${precio_vip}</Text>
                <Text fontSize="sm">Precio Efectivo: ${precio_efectivo}</Text>
                <Text fontSize="sm">Precio Cheque: ${precio_cheque}</Text>
                <Text fontSize="sm" fontWeight="bold">Precio PVP: ${precio_pvp}</Text>
            </VStack>
        </Box>
    );
};

export default ProductCardCatalog;
