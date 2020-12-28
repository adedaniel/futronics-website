import React from "react"
import { useColorMode, Switch } from "@chakra-ui/react"

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode("light")
  const isDark = colorMode === "dark"
  return (
    <Switch
      position="fixed"
      top="1rem"
      display="none"
      right="1rem"
      color="green"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  )
}
