import { useRouter } from 'next/router'
import Link from 'next/link'
import { Container, Flex, Heading, HStack, Image, Link as ChakraLink, SimpleGrid, Text, VStack, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import Button from '../components/Button'
import { RiMenuLine } from 'react-icons/ri'


const NavLink = ({ children, href }) => (
  <Link href={href}>
    <ChakraLink 
      color="gray.400"
      _hover={{ color: "gray.600"}}
      _activeLink={{ color: "red.400"}}
    >
      {children}
    </ChakraLink>
  </Link>
)

const MenuLink = ({ children, href }) => {
  const router = useRouter()

  function navigateTo() {
    router.push(href)
  }

  return (
    <MenuItem onClick={navigateTo}>
        {children}
    </MenuItem>
  )
}

export default function Home() {
  const router = useRouter()

  function navigateToRegister() {
    router.push('/plataforma/inscrever-se')
  }

  return (
    <Flex direction="column" height="100vh">
      <Flex 
        position="sticky"
        bgColor="white"
        top="0"
        height="80px" 
        width="100%"
        zIndex={10000}
      >
        <Container
          maxWidth="lg"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack>
            <Image src="./monitori.png" alt="Monitori" width="36px" />
            <Heading as="h1" size="md">MONITORI</Heading>
          </HStack>

          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            <NavLink href="/">Home</NavLink>
            <NavLink href="#">Funcionalidades</NavLink>
            <NavLink href="/plataforma/entrar">Entrar</NavLink>
            <Button
              styleType="primary-outline"
              onClick={navigateToRegister}
            >
              Inscrever-se
            </Button>
          </HStack>
          <Menu>
            <MenuButton display={{ base: "block", md: "none" }}>
              <RiMenuLine size={24}/>
            </MenuButton>
            <MenuList>
              <MenuLink href="/">Home</MenuLink>
              <MenuItem href="/">Funcionalidades</MenuItem>
              <MenuLink href="/plataforma/entrar">Entrar</MenuLink>
              <MenuLink href="/plataforma/inscrever-se">Inscrever-se</MenuLink>
            </MenuList>
          </Menu>
        </Container>
      </Flex>
      <Flex direction="column">
        <Flex paddingY={8}>
          <Container maxWidth="lg" height="100%">
            <SimpleGrid columns={[1, null, 2]} spacing={10} height="100%">
              <VStack spacing={6}>
                <Heading alignSelf="flex-start">Monitore o espaço <br/> ao seu redor</Heading>
                <Text color="gray.500">
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <Button 
                  styleType="primary" 
                  alignSelf="start"
                  onClick={navigateToRegister}
                >
                  Junte-se a nós
                </Button>
              </VStack>
              <Image src="./charts.svg" width="100%" display={{ base: "none", md: "block"}}/>
            </SimpleGrid>
          </Container>
        </Flex>
        <Flex bgColor="pink.700" paddingY={8}>
          <Container maxWidth="lg" height="100%">
            <SimpleGrid columns={[1, null, 2]} spacing={10} height="100%">
              <Image src="./marker.svg" width="100%" display={{ base: "none", md: "block"}}/>
              <VStack spacing={6}>
                <Heading alignSelf="flex-start" color="gray.100">Aprenda sobre <br/> monitoramento</Heading>
                <Text color="white">
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <Button 
                  styleType="primary" 
                  alignSelf="start"
                  onClick={navigateToRegister}
                >
                  Aprenda agora
                </Button>
              </VStack>
            </SimpleGrid>
          </Container>
        </Flex>
      </Flex>
    </Flex>
  )
}
