import { useState } from 'react'
import { useRouter } from 'next/router'
import { Container, VStack, Flex, Heading, FormControl, FormLabel, Text, SimpleGrid } from '@chakra-ui/react'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import { RiCheckLine, RiCloseLine } from 'react-icons/ri'

function NewWorkspace() {
  const [formActive, setFormActive] = useState('')
  const router = useRouter()

  function navigateToHome() {
    router.back()
  }

  function handleActiveForm(formId) {
    setFormActive(formId)
  }

  return (
    <Container height="100vh" maxHeight="100vh" maxWidth="lg">
      <Flex direction="column" paddingY={4} borderBottomWidth="1px" marginBottom={4}>
        <Text color="gray.500" marginBottom={4}>O que deseja fazer?</Text>
        <SimpleGrid columns={[1, null, 2]} spacing={4}>
          <Button 
            styleType="secondary-outline" 
            marginX={4}
            onClick={() => handleActiveForm('1')}
          >
            Conectar-se a um monitoramento
          </Button>
          <Button 
            styleType="secondary-outline" 
            marginX={4}
            onClick={() => handleActiveForm('2')}
          >
            Criar um monitoramento
          </Button>
        </SimpleGrid>
      </Flex>

      <Flex height="100%">
        {formActive === '1' && 
          <Flex direction="column"  width="100%">
            <FormControl>
              <FormLabel>Digite o código do monitoramento</FormLabel>
              <Input placeholder="Ex: 1gf4-gf08-hg" />
            </FormControl>
          </Flex>
        }

        {formActive === '2' && 
          <Flex width="100%" >
            <FormControl>
              <FormLabel>Nome monitoramento</FormLabel>
              <Input />
            </FormControl>
          </Flex>
        }
      </Flex>

      <Flex width="100%" paddingY={4} position="sticky" bottom="0">
        <Button 
          marginX={4}
          leftIcon={<RiCloseLine size={20}/>}
          onClick={navigateToHome}
        >
          Cancelar
        </Button>
        {formActive !== '' &&
          <Button 
            marginX={4} 
            leftIcon={<RiCheckLine size={20}/>}
            styleType="primary"
          >
            Salvar
          </Button>
        }
      </Flex>
    </Container>
  )
}

export default NewWorkspace