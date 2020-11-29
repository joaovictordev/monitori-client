import { Checkbox as ChakraCheckbox } from '@chakra-ui/react'

export default function Checkbox({...rest}) {
  return (
    <ChakraCheckbox 
      colorScheme="red"
      {...rest}
    />
  )
}