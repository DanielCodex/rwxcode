import { Input, FormControl, FormLabel, Box } from "@chakra-ui/react";

export default function Form() {
  return (
    <Box boxShadow="md" p="20px">
      <FormControl>
        <Box>
          <FormLabel htmlFor="text">Text</FormLabel>
          <Input
            id="text"
            type="text"
            placeholder="e.x search for calculator"
          />
        </Box>
      </FormControl>
    </Box>
  );
}
