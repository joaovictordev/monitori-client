import Link from 'next/link'
import { useRouter } from 'next/router'
import { Center, Container, Flex, FormControl, FormLabel, Heading, HStack, Image, Text, Link as ChakraLink } from '@chakra-ui/react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Checkbox from '../../components/Checkbox'

export default function Register() {
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
          Já tem uma conta? {""}
          <Link href="/plataforma/entrar">
            <ChakraLink color="red.400">Entre agora</ChakraLink>
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
          <Heading size="lg" marginBottom={8} textAlign="center">Crie sua conta</Heading>
          <FormControl 
            marginBottom={4}
            isRequired
          >
            <FormLabel>Nome</FormLabel>
            <Input />
          </FormControl>
          <FormControl 
            marginBottom={4}
            isRequired
          >
            <FormLabel>E-mail</FormLabel>
            <Input />
          </FormControl>
          <FormControl 
            marginBottom={4}
            isRequired
          >
            <FormLabel>Senha</FormLabel>
            <Input type="password"/>
          </FormControl>
          <Checkbox marginBottom={6}>
            Ao criar sua conta, você aceita nossos {" "}
            <Link href="/plataforma/termos">
              <ChakraLink color="red.400">
                termos de uso
              </ChakraLink>
            </Link>
            {" "}e a nossa{" "}
            <Link href="/plataforma/privacidade">
              <ChakraLink color="red.400">
                política de privacidade
              </ChakraLink>
            </Link>
            .
          </Checkbox>
          <Button styleType="primary">Concluir</Button>
        </Flex>
      </Center>
    </Flex>
  )
}
