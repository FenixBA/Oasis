import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter"; // Importa la fuente

const theme = extendTheme({
  fonts: {
    heading: "Jost, sans-serif", // Para títulos
    body: "Jost, sans-serif", // Para texto normal
  },
});

export default theme;
