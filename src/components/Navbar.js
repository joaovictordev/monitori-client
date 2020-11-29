const { Flex, Container, Avatar } = require("@chakra-ui/react");

function Navbar() {
  return (
    <Flex height="60px" width="100%" borderBottomWidth="1px">
      <Container 
        maxWidth="lg"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Avatar name="Ingryd Kely" />
      </Container>
    </Flex>
  )
}

export default Navbar