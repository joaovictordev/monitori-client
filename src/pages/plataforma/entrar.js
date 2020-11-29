import Link from 'next/link'
import { useRouter } from 'next/router'
import { Center, Container, Flex, FormControl, FormLabel, Heading, HStack, Image, Text, Link as ChakraLink } from '@chakra-ui/react'
import Button from '../../components/Button'
import Input from '../../components/Input'

export default function Login() {
  const router = useRouter()

  function navigateToHome() {
    router.push('/')
  }

  return (
    <Flex direction="column" height="100vh">
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center" 
        height="100px"
        maxWidth="lg"
      >
        <HStack marginRight={4} cursor="pointer" onClick={navigateToHome}>
          <Image src="../monitori.png" alt="Monitori" width="36px" />
          <Heading as="h1" size="md" display={["none", "block"]}>Monitori</Heading>
        </HStack>
        
        <Text>
          Não tem uma conta? {""}
          <Link href="/plataforma/inscrever-se">
            <ChakraLink color="red.400">Crie uma</ChakraLink>
          </Link>
        </Text>
      </Container>
      <Center height="100%">
        <Flex
          as="form"
          direction="column"
          width="90%"
          maxWidth="440px"
          padding={5}
          borderWidth="1px"
        >
          <Heading size="lg" marginBottom={8} textAlign="center">Bem vindo de volta</Heading>
          <FormControl 
            marginBottom={4}
            isRequired
          >
            <FormLabel>E-mail</FormLabel>
            <Input />
          </FormControl>
          <FormControl 
            marginBottom={6}
            isRequired
          >
            <FormLabel>Senha</FormLabel>
            <Input type="password"/>
          </FormControl>
          <Button styleType="primary">Entrar</Button>
        </Flex>
      </Center>
    </Flex>
  )
}
