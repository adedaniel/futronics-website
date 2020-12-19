import { SearchIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, IconButton, Stack, Text } from "@chakra-ui/react"
import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import Logo from "./image-exports/logo"

const Header = ({ siteTitle, ...rest }) => {
  const [pastTop, setPastTop] = useState(false)

  useEffect(() => {
    const event = () => {
      if (window.scrollY <= 40) {
        setPastTop(false)
      } else {
        setPastTop(true)
      }
    }

    window.addEventListener("scroll", event)
    return () => {
      window.removeEventListener("scroll", event)
    }
  }, [])

  return (
    <Box
      pos="fixed"
      shadow={pastTop ? "md" : "0"}
      py={pastTop ? 1 : 0.5}
      top={0}
      transition=".5s all"
      zIndex={10}
      px="5%"
      w="full"
      bg="black"
      {...rest}
    >
      <Flex align="center" justify="space-between">
        <Link to="/">
          <Box cursor="pointer" w={20}>
            <Logo />
          </Box>
        </Link>
        <Stack spacing={4} isInline>
          <Link to="#about">
            <Text color="white">ABOUT</Text>
          </Link>
          <Link to="/products">
            <Text color="white">PRODUCTS</Text>
          </Link>
        </Stack>
        <Stack isInline>
          <IconButton
            // size="sm"
            _active={{ bg: "gray.700" }}
            _hover={{ bg: "gray.700" }}
            variant="ghost"
            color="white"
            icon={<SearchIcon />}
          />
          <Button
            rounded={0}
            onClick={() => navigate("#contact-us")}
            colorScheme="primary"
          >
            CONTACT US
          </Button>
        </Stack>
      </Flex>
    </Box>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
