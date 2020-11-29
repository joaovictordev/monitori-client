import { Input  as ChakraInput } from '@chakra-ui/react'

export default function Input({...rest}) {
  return (
    <ChakraInput 
      rounded="full"
      focusBorderColor="none"
      _focus={{
        shadow: "md"
      }}
      {...rest}
    />
  )
}