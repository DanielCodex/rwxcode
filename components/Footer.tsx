import { Text, Box } from "@chakra-ui/react";
import Link from "next/link";

function Footer() {
  return (
    // we need left and right otherwise it won't be at center
    <Box  position="fixed" left="50%" right="50%" bottom="20px">

      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <li>
          <Link href="/about">
            <a>
              <Text _hover={{ color: "gray.500" }}>About</Text>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>
              <Text _hover={{ color: "gray.500" }}>Contact</Text>
            </a>
          </Link>
        </li>
      </ul>
    </Box>
  );
}

export default Footer;
