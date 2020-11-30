import { useRouter } from 'next/router'
import { Container, Divider, Flex, Heading, HStack, Icon, SimpleGrid } from "@chakra-ui/react"
import { RiRoadMapLine, RiInboxArchiveLine, RiLineChartLine, RiGroupLine, RiArrowLeftLine, RiToolsLine } from 'react-icons/ri'

function WorkspaceDetail() {
  const router = useRouter()

  const { id } = router.query

  function navigateToHome() {
    router.back()
  }

  return (
    <Container height="100vh" maxWidth="lg">
      <Flex align="center" width="100%" paddingY={4} borderBottomWidth="1px" marginBottom={4}>
        <HStack spacing={4} cursor="pointer" onClick={navigateToHome}>
          <Icon as={RiArrowLeftLine} w={6} h={6}/>
          <Heading size="md">{`Monitoramento ${id}`}</Heading>
        </HStack>
      </Flex>
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        <Flex 
          padding={4} 
          borderWidth="1px" 
          align="center"
          _hover={{ backgroundColor: "pink.700", color: "white" }}
          cursor="pointer"
          rounded="md"
        >
          <Icon as={RiRoadMapLine} w={10} h={10} />
          <Heading marginLeft={4} size="md">Pontos de Monitoramento</Heading>
        </Flex>
        <Flex 
          padding={4} 
          borderWidth="1px" 
          align="center"
          _hover={{ backgroundColor: "pink.700", color: "white" }}
          cursor="pointer"
          rounded="md"
        >
          <Icon as={RiInboxArchiveLine} w={10} h={10} />
          <Heading marginLeft={4} size="md">Coleta de Dados</Heading>
        </Flex>
        <Flex 
          padding={4} 
          borderWidth="1px" 
          align="center"
          _hover={{ backgroundColor: "pink.700", color: "white" }}
          cursor="pointer"
          rounded="md"
        >
          <Icon as={RiLineChartLine} w={10} h={10} />
          <Heading marginLeft={4} size="md">Estatísticas</Heading>
        </Flex>
        <Flex 
          padding={4} 
          borderWidth="1px" 
          align="center"
          _hover={{ backgroundColor: "pink.700", color: "white" }}
          cursor="pointer"
          rounded="md"
        >
          <Icon as={RiGroupLine} w={10} h={10} />
          <Heading marginLeft={4} size="md">Membros</Heading>
        </Flex>
        <Flex 
          padding={4} 
          borderWidth="1px" 
          align="center"
          _hover={{ backgroundColor: "pink.700", color: "white" }}
          cursor="pointer"
          rounded="md"
        >
          <Icon as={RiToolsLine} w={10} h={10} />
          <Heading marginLeft={4} size="md">Configurações de Variáveis e Constantes</Heading>
        </Flex>
      </SimpleGrid>
      <Divider marginY={4}/>
    </Container>
  )
}

export default WorkspaceDetail