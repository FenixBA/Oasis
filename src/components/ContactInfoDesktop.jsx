import { HStack, Text, Icon, Link } from '@chakra-ui/react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function ContactInfoDesktop() {
    return (
        <HStack spacing={6} mb={10}>
            <HStack spacing={4}>
                <Icon as={FaEnvelope} boxSize={6} />
                <Link 
                    href="mailto:earanda@fenixba.com" 
                    fontSize="lg" 
                    color="blue.500" 
                    _hover={{ textDecoration: 'none', color: 'blue.700' }}
                >
                    earanda@fenixba.com
                </Link>
            </HStack>
            <HStack spacing={4}>
                <Icon as={FaPhone} boxSize={6} />
                <Link 
                    href="tel:+541160083070" 
                    fontSize="lg" 
                    color="blue.500" 
                    _hover={{ textDecoration: 'none', color: 'blue.700' }}
                >
                    Tel: 1160083070
                </Link>
                <Link 
                    href="tel:+541163504662" 
                    fontSize="lg" 
                    color="blue.500" 
                    _hover={{ textDecoration: 'none', color: 'blue.700' }}
                >
                    1163504662
                </Link>
            </HStack>
            <HStack spacing={4} >
                <Icon as={FaMapMarkerAlt} boxSize={6} />
                <Link 
                    href="https://www.google.com/maps/place/FENIX+BA/@-34.6984667,-58.3995653,17z/data=!4m15!1m8!3m7!1s0x95bccce15ce25f0d:0x659332ebe23ed2b1!2sGdor.+Udaondo+2002,+B1826+Lan%C3%BAs,+Provincia+de+Buenos+Aires!3b1!8m2!3d-34.6984667!4d-58.3995653!16s%2Fg%2F11gfk195t5!3m5!1s0x95bccce15cdd7555:0x6251601d530b8b54!8m2!3d-34.6984667!4d-58.3995653!16s%2Fg%2F11c0_2_jjn?entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D" 
                    fontSize="lg" 
                    color="blue.500" 
                    isExternal 
                    _hover={{ textDecoration: 'none', color: 'blue.700' }}
                >
                    Udaondo 2002, Lanús Oeste, Buenos Aires
                </Link>
            </HStack>
            
        </HStack>
    );
}

export default ContactInfoDesktop;
