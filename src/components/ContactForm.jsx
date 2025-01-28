import { Box, Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";

const ContactForm = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xvgzaoao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Mensaje enviado.",
          description: "Gracias por contactarnos, te responderemos lo más pronto posible.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setFormData({ name: "", email: "", message: "" }); // Limpia el formulario
      } else {
        toast({
          title: "Error al enviar el mensaje.",
          description: "Por favor intenta de nuevo más tarde.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error al enviar el mensaje.",
        description: "Hubo un problema al conectarse con el servidor.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      maxW="500px"
      mx="auto"
      boxShadow="lg"
      p="6"
      rounded="md"
      bg="white"
    >
      <FormControl id="name" isRequired mb="4">
        <FormLabel>Nombre</FormLabel>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ingresa tu nombre"
        />
      </FormControl>
      <FormControl id="email" isRequired mb="4">
        <FormLabel>Correo Electrónico</FormLabel>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Ingresa tu correo electrónico"
        />
      </FormControl>
      <FormControl id="message" isRequired mb="4">
        <FormLabel>Mensaje</FormLabel>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Escribí tu mensaje acá..."
          rows="4"
        />
      </FormControl>
      <Button type="submit" colorScheme="blue" size="md" w="full">
        Enviar
      </Button>
    </Box>
  );
};

export default ContactForm;
