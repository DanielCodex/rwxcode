import { Container } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  // ? i am not sure about sizing still
  return <Container maxW="2100px" w={"100%"} >{children}</Container>;
}
