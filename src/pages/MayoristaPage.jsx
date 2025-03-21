import { Box , Button, Heading, Text,Icon} from "@chakra-ui/react";
import Particles from "../blocks/Backgrounds/Particles.jsx";
import { ChevronRightIcon } from "@chakra-ui/icons";

const MayoristaPage = () => {
  const bgColor = "black";

  return (
    <Box bgColor={bgColor} w="100%" h="100vh" position="relative" display="flex" alignItems="center" justifyContent="center">
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
      <Box textAlign="center" color="white" position="absolute" zIndex={1}>
        <Heading
          as="h1"
          size="lg"
          color="white"
          fontWeight="bold"
          mb={4}
          fontSize={["xl","2xl", "3xl", "4xl"]}
          fontFamily="Jost"
        >
          ¿Sos revendedor y te interesan nuestros productos?
        </Heading>
        <Text fontFamily="Jost" fontSize={["sm","md", "lg", "xl"]} maxW="2xl" mx="auto" mb={8}>
          Hablá con un representante y conocé nuestros precios mayoristas.
        </Text>
        <Button
          as={"a"}
          href="https://wa.me/5491163504662"
          target="_blank"
          colorScheme="white"
          variant="outline"
          size="lg"
          mt={12}
          fontSize={["sm", "md", "lg"]}
          rightIcon={<Icon as={ChevronRightIcon} />}
          fontFamily="Jost"
        >
          Contactanos
        </Button>
      </Box>
    </Box>
  );
}

export default MayoristaPage;
