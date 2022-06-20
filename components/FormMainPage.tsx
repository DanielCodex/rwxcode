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
import { useState } from "react";
import { useRouter } from "next/router";

function FormMainPage() {
  const [test, setTest] = useState("");
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTest(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

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
            <form onSubmit={handleSubmit}>
              <Input
                value={test}
                id="text"
                type="text"
                placeholder="Search..."
                minW={"400px"}
                w={"600px"}
                focusBorderColor="blue.500"
                borderRadius={"20px"}
                size="lg"
                onChange={handleChange}
              />
            </form>
            <FormHelperText ml="4px">
              <Tooltip
                hasArrow
                label="Current supported language are javascript and python"
                p={"8px"}
              >
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

export default FormMainPage;
