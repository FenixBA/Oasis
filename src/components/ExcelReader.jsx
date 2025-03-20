import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

const ExcelReader = ({ filePath, onDataLoad }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const leerExcel = async () => {
            try {
                const response = await fetch(filePath);
                const arrayBuffer = await response.arrayBuffer();
                const workbook = XLSX.read(arrayBuffer, { type: 'array' });
                const sheet = workbook.Sheets[workbook.SheetNames[0]];
                const data = XLSX.utils.sheet_to_json(sheet);

                // Procesa los datos (puedes hacer la lógica que necesites aquí, por ejemplo, añadir imágenes)
                const productosConImagenes = data.map((producto) => ({
                    ...producto,
                    imagen: `/assets/images/${producto.item_code}.png`, // Ajusta según sea necesario
                }));

                // Pasar los datos al componente padre
                onDataLoad(productosConImagenes);
            } catch (err) {
                setError('Error al leer el archivo');
            } finally {
                setLoading(false);
            }
        };

        leerExcel();
    }, [filePath, onDataLoad]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return null;
};

export default ExcelReader;
