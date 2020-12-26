import { SearchIcon } from "@chakra-ui/icons"
import { FcMenu } from "react-icons/fc"
import { Box, Button, Flex, IconButton, Stack, Text } from "@chakra-ui/react"
import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import Logo from "./image-exports/logo"

const Header = ({ siteTitle, ...rest }) => {
  const [pastTop, setPastTop] = useState(false)
  const [openNav, setOpenNav] = useState(false)

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
      py={pastTop ? 2 : 1}
      top={0}
      transition=".5s all"
      zIndex={10}
      w="full"
      bg={pastTop ? "black" : "transparent"}
      {...rest}
    >
      <Flex px="5%" align="center" justify="space-between">
        <Link to="/">
          <Box onClick={() => setOpenNav(false)} cursor="pointer" w={20}>
            <Logo />
          </Box>
        </Link>
        <Stack d={["none", "flex"]} spacing={4} isInline>
          <Link to="/#about">
            <Text color="white">ABOUT</Text>
          </Link>
          <Link to="/products">
            <Text color="white">PRODUCTS</Text>
          </Link>
        </Stack>
        <Stack d={["none", "flex"]} isInline>
          {/* <IconButton
            // size="sm"
            _active={{ bg: "gray.700" }}
            _hover={{ bg: "gray.700" }}
            variant="ghost"
            color="white"
            icon={<SearchIcon />}
          /> */}
          <Button
            rounded={0}
            onClick={() => navigate("#contact-us")}
            colorScheme="primary"
          >
            CONTACT US
          </Button>
        </Stack>
        <IconButton
          variant="ghost"
          d={["inline-flex", "none"]}
          onClick={() => setOpenNav(!openNav)}
          colorScheme="white"
          fontSize="4xl"
          icon={<FcMenu />}
        />
      </Flex>

      <Flex
        h={openNav ? 56 : 0}
        bg="black"
        transition="0.3s all ease-in-out"
        pos="absolute"
        top={20}
        align="center"
        justify="center"
        w="full"
      >
        <Stack
          d={openNav ? "flex" : "none"}
          onClick={() => setOpenNav(false)}
          pb={4}
          spacing={4}
        >
          <Link to="/#about">
            <Text textAlign="center" color="white">
              ABOUT
            </Text>
          </Link>
          <Link to="/products">
            <Text textAlign="center" color="white">
              PRODUCTS
            </Text>
          </Link>
          {/* <Button
            // size="sm"
            _active={{ bg: "gray.700" }}
            _hover={{ bg: "gray.700" }}
            variant="ghost"
            color="white"
            rounded={0}
            rightIcon={<SearchIcon />}
          >
            SEARCH
          </Button> */}
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
