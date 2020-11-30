import Link from 'next/link'
import { useRouter } from 'next/router'
import { Avatar, AvatarGroup, Center, Container, Flex, Heading, HStack, Icon, SimpleGrid, Text } from '@chakra-ui/react'
import Navbar from '../../../components/Navbar'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import { RiAddCircleLine, RiAddLine, RiMore2Fill } from 'react-icons/ri'
// import { useFetch } from '../../../hooks/useFetch'
// import api from '../../../services/api'

function Main(){
  const workspaces = [{
    id: 1,
    name: "Salina Serra Vermelha II",
    markers_count: 3,
    members: [
      {id: 1, name: "João"},
      {id: 2, name: "Ingryd"},
      {id: 3, name: "Monaliza"},
      {id: 4, name: "Lucas"},
      {id: 5, name: "Paulo"},
      {id: 6, Name: "Maria do Socorro"}
    ]
  },
  {
    id: 2,
    name: "Salina Serra Vermelha II",
    markers_count: 3,
    members: [
      {id: 1, name: "João"},
      {id: 2, name: "Ingryd"},
      {id: 3, name: "Monaliza"},
      {id: 4, name: "Lucas"},
      {id: 5, name: "Paulo"},
      {id: 6, Name: "Maria do Socorro"}
    ]
  },
  {
    id: 3,
    name: "Salina Serra Vermelha II",
    markers_count: 3,
    members: [
      {id: 1, name: "João"},
      {id: 2, name: "Ingryd"},
      {id: 3, name: "Monaliza"},
      {id: 4, name: "Lucas"},
      {id: 5, name: "Paulo"},
      {id: 6, Name: "Maria do Socorro"}
    ]
  }]

  const router = useRouter()

  function navigateToNewWorkspace() {
    router.push('/plataforma/monitoramentos/novo')
  }

  function navigateToWorkspaceDetail(e, id) {
    router.push(`/plataforma/monitoramentos/${id}`)
  }

  function clickMenu(e) {
    e.stopPropagation()

    alert("ok")
  }


  return (
    <Flex height="100vh" direction="column">
      <Navbar />
      <Container 
        height="100%" 
        maxWidth="lg"
        direction="column"
      >
        <Flex width="100%" justify="space-between" align="center" paddingY={8}>
          <Heading size="md">Monitoramentos</Heading>
          <Button 
            styleType="outline" 
            leftIcon={<RiAddLine size={20}/>}
            onClick={navigateToNewWorkspace}
          >
            Novo
          </Button>
        </Flex>
        <Input placeholder="Pesquise por código ou nome" />
        <SimpleGrid columns={[1, null, 2]} spacing={4} marginTop={4}>
          {workspaces.map( workspace => (
            <Flex 
              justify="space-between"
              padding={4} 
              borderWidth="1px" 
              rounded="lg"
              cursor="pointer"
              _hover={{ backgroundColor: "pink.700", color: "white"}}
              onClick={() => navigateToWorkspaceDetail(workspace.id)}
              key={workspace.id}
            >
              <Flex 
                direction="column" 
                width="100%"
              >
                <Heading size="md">{workspace.name}</Heading>
                <Text marginTop={2}>{`${workspace.markers_count} Pontos de monitoramento`}</Text>
                <AvatarGroup size="md" max={4} marginTop={4}>
                  {workspace.members.map(member => (
                    <Avatar name={member.name} key={member.id}/>
                  ))}
                </AvatarGroup>
              </Flex>
              <Flex direction="column" justify="flex-start" align="center">
                <Icon as={RiMore2Fill} w={5} h={5} onClick={clickMenu}/>         
              </Flex>
            </Flex>
          ))}
          <Link href="/plataforma/monitoramentos/novo">
            <Center 
              as="a"
              height="100%"
              minHeight="60px" 
              width="100%" 
              borderWidth="1px"
              borderStyle="dashed"
              rounded="lg"
              cursor="pointer"
              _hover={{
                borderStyle: "none",
                shadow: "md"
              }}
            >
              <HStack spacing={2}>
                <RiAddCircleLine size={36} />
                <Text fontSize="xl" color="gray.500">Novo Monitoramento</Text>
              </HStack>
            </Center>
          </Link>
        </SimpleGrid>

      </Container>
    </Flex>
  )
}

export default Main