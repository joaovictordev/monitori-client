import { theme } from '@chakra-ui/react'

export default {
  ...theme,
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 50,
    bold: 700
  },
  colors: {
    ...theme.colors,
    red: {
      ...theme.colors.red,
      300: "#fd4a79",
      400: "#fd3a69"
    },
    blue: {
      ...theme.colors.blue,
      900: "#120078"
    },
    pink: {
      ...theme.colors.pink,
      700: "#9d0191"
    }
  }
}