import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

// TODO: add the correct link
const Links = [{ link: "#", name: "About" }];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function NavBar() {
  return (
    <>
      <Box px={4} mb={10}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Text
                fontSize={"2xl"}
                style={{ cursor: "pointer" }}
                _hover={{ bg: useColorModeValue("gray.200", "gray.700") }}
              >
                👨‍💻 rwxCode
              </Text>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link.link}>
                  <Text fontSize={"2xl"}>{link.name}</Text>{" "}
                </NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
