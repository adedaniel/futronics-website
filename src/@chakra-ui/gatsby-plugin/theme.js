import { extendTheme, theme as chakraTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
})

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    blue: {
      ...chakraTheme.colors.blue,
      500: "#16161D",
    },
    primary: {
      50: "#ffe2ec",
      100: "#ffb3c5",
      200: "#fc839f",
      300: "#f95278",
      400: "#f62252",
      500: "#dd0939",
      600: "#ad032c",
      700: "#7c001e",
      800: "#4d0012",
      900: "#200005",
    },
    secondary: {
      50: "#e4fbea",
      100: "#c1efcb",
      200: "#e4fbea",
      300: "#c1efcb",
      400: "#9be2a9",
      500: "#75d784",
      600: "#4fcb6a",
      700: "#36b258",
      800: "#288a4b",
      900: "#1b633a",
    },
    primaryLight: {
      50: "#defff6",
      100: "#b3ffee",
      200: "#86fee8",
      300: "#5cfee5",
      400: "#41fde8",
      500: "#35e4d7",
      600: "#25b2ac",
      700: "#157f7e",
      800: "#004b4d",
      900: "#001b1b",
    },
    black: "#0b0e13",
    lightBlack: "#16161D",
    darkBlack: "#000",
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Blacker Text, sans-serif",
    mono: "Inter, sans-serif",
  },
  breakpoints,
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
}

export default extendTheme(theme)
