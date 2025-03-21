import { VStack, HStack, Text, Icon, Link, Box } from '@chakra-ui/react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function ContactInfoMobile() {
    return (
        <VStack spacing={6} align="start" p={4}>
            <HStack spacing={3}>
                <Icon as={FaEnvelope} boxSize={5} color="blue.500" />
                <Link 
                    href="mailto:ventas@fenixba.com" 
                    fontSize="md" 
                    color="blue.500" 
                    _hover={{ textDecoration: 'none', color: 'blue.700' }}
                >
                    ventas@fenixba.com
                </Link>
            </HStack>
            <HStack spacing={3}>
                <Icon as={FaPhone} boxSize={5} color="blue.500" />
                <VStack spacing={1} align="start">
                    <Link 
                        href="tel:+541142405853" 
                        fontSize="md" 
                        color="blue.500" 
                        _hover={{ textDecoration: 'none', color: 'blue.700' }}
                    >
                        Tel: 42405853
                    </Link>
                    <Link 
                        href="tel:+541140364647" 
                        fontSize="md" 
                        color="blue.500" 
                        _hover={{ textDecoration: 'none', color: 'blue.700' }}
                    >
                        1140364647
                    </Link>
                </VStack>
            </HStack>
            <HStack spacing={3}>
                <Icon as={FaMapMarkerAlt} boxSize={5} color="blue.500" />
                <Link 
                    href="https://www.google.com/maps/place/FENIX+BA/@-34.6984667,-58.3995653,17z/data=!4m15!1m8!3m7!1s0x95bccce15ce25f0d:0x659332ebe23ed2b1!2sGdor.+Udaondo+2002,+B1826+Lan%C3%BAs,+Provincia+de+Buenos+Aires!3b1!8m2!3d-34.6984667!4d-58.3995653!16s%2Fg%2F11gfk195t5!3m5!1s0x95bccce15cdd7555:0x6251601d530b8b54!8m2!3d-34.6984667!4d-58.3995653!16s%2Fg%2F11c0_2_jjn?entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D" 
                    fontSize="md" 
                    color="blue.500" 
                    isExternal 
                    _hover={{ textDecoration: 'none', color: 'blue.700' }}
                >
                    Udaondo 2002, Lanús Oeste, Buenos Aires
                </Link>
            </HStack>
        </VStack>
    );
}

export default ContactInfoMobile;
