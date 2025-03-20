import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter"; // Importa la fuente

const theme = extendTheme({
  fonts: {
    heading: "Oasis, sans-serif", // Para títulos
    body: "Oasis, sans-serif", // Para texto normal
  },
});

export default theme;
