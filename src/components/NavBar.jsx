import React from "react";
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
  useBreakpointValue,
  
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon,ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import logo from "../assets/oasislogo.webp";
import {AiFillHome } from "react-icons/ai";
import { FaLaptop, FaTv, FaBlender } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box w="100%">
      <Flex
        as="header"
        position="fixed" // Fijar el Navbar
        top="0" // Mantenerlo en la parte superior
        left="0"
        right="0"
        bg={useColorModeValue("black", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        zIndex="1000" // Asegura que el Navbar esté sobre otros elementos
      >
        {/* Logo */}
        <Flex align={"center"} as="a" href="/" _hover={{ textDecoration: "none" }}>
          <Image src={logo} alt="Logo Oasis" h="40px" />
        </Flex>

        {/* Links para pantallas grandes */}
        <Flex display={{ base: "none", md: "flex" }} ml="auto">
          <DesktopNav />
        </Flex>

        {/* Menú hamburguesa para pantallas pequeñas */}
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Abrir menú"
          onClick={onToggle}
          display={{ md: "none" }} // Solo se muestra en pantallas móviles

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
                  fontSize: "sm",
                  fontWeight: 500,
                  color: linkColor,
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.target.style.color = linkHoverColor)}
                onMouseLeave={(e) => (e.target.style.color = linkColor)}
              >
                {/* Agregamos el  junto al texto */}
                {navItem.label === "Inicio" && (
                  <Icon as={AiFillHome}  mr={2} /> // Aquí agregamos el ícono de inicio (HomeIcon) con un margen a la derecha
                )}
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
      <Stack direction={"row"} align={"center"}>
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
    label: "Categorias",
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
    label: "Catálogo",
    href: "/catalogo",
  },
  {
    label: "Contacto",
    href: "/contact",
  },
];
