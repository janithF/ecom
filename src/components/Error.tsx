import { Box } from "@chakra-ui/react";

interface Props {
  message: string;
}

const Error = ({ message }: Props) => (
  <Box p="5" color="white" bg="red.400" fontSize="xl">
    {message}
  </Box>
);

export default Error;
