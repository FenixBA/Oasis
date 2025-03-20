import { Box, Icon, Link } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsappBubble() {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone=541163504662" // Reemplaza este número por el de tu empresa
      isExternal
    >
      <Box
        position="fixed"
        bottom="40px"
        right="80px"
        bg="green.500"
        color="white"
        borderRadius="full"
        boxShadow="lg"
        p="12px"
        cursor="pointer"
        _hover={{ bg: "green.600" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon as={FaWhatsapp} boxSize="24px" />
      </Box>
    </Link>
  );
}

export default WhatsappBubble;
