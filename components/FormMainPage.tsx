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
import { useState, useRef, useEffect } from "react";
import useFetcher from "../utils/useFetcher";

function FormMainPage() {
  const [search, setSearch] = useState("");
  const [style, setStyle] = useState(false);
  const { data, loading } = useFetcher(
    "https://jsonplaceholder.typicode.com/todos/2"
  );


  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setStyle(!style);
  };

  return (
    <Box
      h={style === false ? "100vh" : ""}
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
                value={search}
                id="text"
                type="text"
                placeholder="Search..."
                minW={"400px"}
                w={"600px"}
                focusBorderColor="blue.500"
                borderRadius={"20px"}
                size="lg"
                onChange={handleChange}
                ref={inputRef}
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
