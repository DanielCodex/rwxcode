import {
  Input,
  FormControl,
  FormLabel,
  Box,
  FormHelperText,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

export default function Form() {
  return (
    <Box
      h={"100vh"}
      display="flex"
      justifyContent="center"
      alignItems={"center"}
      flexDirection="column"
      gap="20px"
    >
      <Box>
        <Text as={"h1"} fontSize="53px" color="gray.700">
          👨‍💻 rwxCode
        </Text>
      </Box>
      <Box mb={"10px"}>
        <Text as={"h2"} fontSize="20px" color="gray.600">
          Search code base on language, star and packages
        </Text>
      </Box>
      <Box p="20px">
        <FormControl>
          <Box>
            {/* maybe i want this */}
            {/* <FormLabel htmlFor="text" ml="4px">
              Search:
            </FormLabel> */}
            <Input
              id="text"
              type="text"
              placeholder="Search..."
              minW={"400px"}
              w={"600px"}
              focusBorderColor="blue.500"
              borderRadius={"20px"}
              size="lg"
            />
            <FormHelperText ml="4px">
              <Tooltip hasArrow label="Current supported language are javascript and python" p={"8px"}>
                <InfoIcon mr={"5px"} />
              </Tooltip>
              Example: lang:javascript stars:1..100 label:good-first-issue
              package:express,color {""}
            </FormHelperText>
          </Box>
        </FormControl>
      </Box>
    </Box>
  );
}
