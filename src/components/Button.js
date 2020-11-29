import { Button as ChakraButton } from '@chakra-ui/react'

export default function Button({ styleType, ...rest }) {
  const style = {
    "normal": {
      bgColor: "transparent",
      color: "black",
      borderColor: "black",
      borderWidth: "1px",
      _hover: {
        bgColor: "black",
        color: "white"
      }
    },
    "primary": {
      bgColor: "red.400",
      color: "white",
      _hover: {
        bgColor: "red.300"
      }
    },
    "primary-outline": {
      bgColor: "transparent",
      color: "red.400",
      borderColor: "red.400",
      borderWidth: "1px",
      _hover: {
        bgColor: "red.400",
        color: "white"
      }
    },
    "secondary-outline": {
      bgColor: "transparent",
      borderWidth: '1px',
      borderColor: "pink.700",
      color: "pink.700",
      _hover: {
        bgColor: "pink.700",
        color: "white"
      }
    },
  }

  return(
    <ChakraButton
      rounded="full" 
      paddingX="34px"
      fontSize="sm"
      _focus={{}}
      {...style[styleType] || style["normal"]}
      {...rest}
    />
  )
}