import { Box, Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado. Gracias por contactarnos.");
  };

  return (
    <Box as="form" onSubmit={handleSubmit} maxW="500px" mx="auto" boxShadow="lg" p="6" rounded="md" bg="white">
      <FormControl id="name" isRequired mb="4">
        <FormLabel>Nombre</FormLabel>
        <Input type="text" placeholder="Ingresa tu nombre completo" />
      </FormControl>
      <FormControl id="email" isRequired mb="4">
        <FormLabel>Correo Electrónico</FormLabel>
        <Input type="email" placeholder="Ingresa tu correo electrónico" />
      </FormControl>
      <FormControl id="message" isRequired mb="4">
        <FormLabel>Mensaje</FormLabel>
        <Textarea placeholder="Escribe tu mensaje aquí..." rows="4" />
      </FormControl>
      <Button type="submit" colorScheme="teal" size="md" w="full">
        Enviar
      </Button>
    </Box>
  );
};

export default ContactForm;
