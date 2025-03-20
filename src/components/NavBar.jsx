import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Image,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,

  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon,ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import logo from "../assets/oasislogo.webp";
import { useLocation } from "react-router-dom";
import {AiFillHome } from "react-icons/ai";
import { FaLaptop, FaTv, FaBlender } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
const [navBg, setNavBg] = useState("rgba(0, 0, 0, 0)"); // Inicialmente transparente

useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const opacity = Math.min(scrollY / 200, 1); // Ajusta el divisor para controlar la velocidad del cambio
    setNavBg(`rgba(0, 0, 0, ${opacity})`);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <Box w="100%">
      <Flex
        fontFamily="Jost"
        letterSpacing={"widest"}
        as="header"
        position="fixed" // Fijar el Navbar
        top="0" // Mantenerlo en la parte superior
        left="0"
        right="0"
        bg={navBg}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        transition="background-color 0.3s ease-in-out"
        align={"center"}
        zIndex="1000" // Asegura que el Navbar esté sobre otros elementos
        paddingTop={6}
      >
        {/* Logo */}
        <Flex align={"center"} as="a" href="/" _hover={{ textDecoration: "none" }}>
          <Image src={logo} alt="Logo Oasis" h="40px" />
        </Flex>

        {/* Links para pantallas grandes */}
        <Flex flex="1" justify="center" display={{ base: "none", md: "none", lg: "flex" }} ml="auto">
          <DesktopNav />
        </Flex>   
        {/* Menú hamburguesa para pantallas pequeñas */}
        <Flex ml="auto" display={{ base: "none", md: "none", lg: "flex" }}>
  <RouterLink 
    to={"/mayoristas"}
    style={{
      padding: "8px",
      fontSize: "18px",
      color: "white",
    }}
  >
    Área mayoristas
  </RouterLink>
</Flex>
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Abrir menú"
          onClick={onToggle}
          display={{ lg: "none" }} // Solo se muestra en pantallas móviles
          colorScheme="white"
          ml="auto"
        />
      </Flex>

      {/* Menú móvil desplegable */}
      <Collapse in={isOpen} animateOpacity>
  <Box mt="60px"> {/* Asegúrate que el menú se posicione abajo del Navbar */}
    <MobileNav />
  </Box>
</Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("white", "gray.200");
  const linkHoverColor = useColorModeValue("gray.500", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const location = useLocation();
  return (
    <Stack direction={"row"} spacing={4} display={"flex"} justifyContent={"end"}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
            <RouterLink
  to={navItem.href ?? "#"}
  style={{
    padding: "8px",
    fontSize: "18px",
    color: linkColor,
    borderBottom: location.pathname === navItem.href ? "2px solid white" : "none",
  }}
>
  {navItem.label}
</RouterLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} label={child.label} href={child.href} subLabel={child.subLabel} icon={child.icon}/>
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
          
        </Box>
      ))}
      
    </Stack>
    
  );
};

const DesktopSubNav = ({ label, href, subLabel,icon }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("blue.50", "gray.900") }}
      target="_blank"
    >
      <Stack  direction={"row"} align={"center"}>
        <Box>

          <Text transition={"all .3s ease"} _groupHover={{ color: "blue.400" }} fontWeight={500}>
            <Icon as={icon} color="blue.400" w={5} h={5} mr={2} />
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"blue.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue("gray.200", "gray.800")} p={4} display={{ md: "none" }} position={"fixed"} width={"100%"} zIndex={10}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <RouterLink to={href} style={{ textDecoration: "none" }}>
        <Text fontWeight={600} color={useColorModeValue("gray.600", "gray.200")}>
          {label}
        </Text>
        </RouterLink>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      {/* Submenú desplegable */}
      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              
              <Link key={child.label} py={2} href={child.href} target="_blank">
                <Icon key={child.label} as={child.icon} color="blue.400" w={5} h={5} mr={2} />
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Nuestros Productos",
    children: [
      {
        label: "Computación",
        subLabel: "Computadoras, Notebooks, Componentes y más",
        href: "https://www.fenixba.com/listado/computacion/",
        icon: FaLaptop,
      },
      {
        label: "Electrodomesticos y Aires Ac.",
        subLabel: "Aires acondicionados, heladeras y más",
        href: "https://www.fenixba.com/listado/electrodomesticos-aires-ac/",
        icon: FaBlender,
      },
      {
        label: "Electrónica, Audio y Video",
        subLabel: "Auriculares, Televisores, Parlantes y más",
        href: "https://www.fenixba.com/listado/electronica-audio-video/",
        icon: FaTv,
      },
    ],
  },
  {
    label: "Contacto",
    href: "/contact",
  },
];
