import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import ProductCardCatalog from '../components/ProductCardCatalog';
import ExcelReader from '../components/ExcelReader';
import Masonry from '../components/Masonry';

const CatalogoPage = () => {
    const [productos, setProductos] = useState([]);
    const heights = [200, 300, 400, 500, 600];
    //tomo un valor aleatorio de la lista de alturas
    
    // Función para manejar los datos cargados desde Excel
    const handleDataLoad = (data) => {
        // Adaptar los datos para que coincidan con los parámetros de Masonry
        const adaptedData = data.map((producto) => ({
            id: producto.item_code,  // `item_code` como `id`
            image: `/assets/images/${producto.item_code}.png`, // `imagen` como `image`
            height: 500,             // Establecer un tamaño fijo para todos
        }));

        setProductos(adaptedData);
    };

    return (
        <Box p={8} bg="white" minH="100vh">
            {/* Cargar el archivo Excel y pasar los datos a onDataLoad */}
            <ExcelReader filePath="/assets/files/datos.xlsx" onDataLoad={handleDataLoad} />       

            {/* Usar react-masonry-css */}
            <Masonry data={productos}/>
               
        </Box>
    );
};

export default CatalogoPage;
