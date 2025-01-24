import React from "react"
import { Box, VStack, Heading, Text, Input, Textarea, Button, useColorModeValue, Icon, HStack } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa"
import ContactInfoDesktop from "../components/ContactInfoDesktop"
import ContactInfoMobile from "../components/ContactInfoMobile"
import WhatsappBubble from "../components/WhatsappBubble"
import { useMediaQuery } from '@chakra-ui/react';
import Footer from "../components/Footer"
const MotionBox = motion(Box)

const ContactPage = () => {
  const bgColor = useColorModeValue("gray.100", "gray.900")
  const textColor = useColorModeValue("gray.800", "gray.100")
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)'); // Cambia el tamaño según tus necesidades
  return (
    <Box minHeight="100vh" bg={bgColor} color={textColor}  mt="120px">
      <VStack spacing={8} align="center">
        <MotionBox initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Heading as="h1" size="2xl" textAlign="center" mb={4}>
            Contacto
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={8}>
            ¿Tenes alguna pregunta? Estamos aca para ayudarte.
          </Text>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          width={["90%", "80%", "60%", "40%"]}
        >
          <VStack spacing={4} align="stretch">
            <Input placeholder="Nombre" size="lg" />
            <Input placeholder="Email" size="lg" type="email" />
            <Textarea placeholder="Mensaje" size="lg" rows={6} />
            <Button
              colorScheme="blue"
              size="lg"
              width="100%"
              _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
            >
              Enviar mensaje
            </Button>
          </VStack>
        </MotionBox>

        <MotionBox 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.4, duration: 0.5 }} 
                mt={12}
            >
                {isLargerThan768 ? <ContactInfoDesktop /> : <ContactInfoMobile />}
            </MotionBox>
            
      </VStack>
      <Footer />
      <WhatsappBubble/>
     
    </Box>
  )
}

export default ContactPage

