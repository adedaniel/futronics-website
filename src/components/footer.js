import { ArrowForwardIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react"
import React from "react"
import { BsArrowRight } from "react-icons/bs"
import { FiInstagram } from "react-icons/fi"
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg"

export default function Footer() {
  return (
    <Box>
      <Container
        id="contact-us"
        py={24}
        maxW={["2xl", "2xl", "3xl", "4xl", "5xl"]}
      >
        <Heading mb={6} fontSize={["4xl", "5xl"]} color="primary.500">
          Want to get in touch?
        </Heading>
        <Stack justify="center">
          <Text textAlign="left" color="white">
            We'd love to hear from you and we'll be in touch as soon as
            possible.
          </Text>

          <Flex
            w="full"
            pt={20}
            flexDirection={["column", "column", "row"]}
            justify="space-between"
          >
            <Flex w="full">
              <Stack spacing={8}>
                <Stack>
                  <Heading fontSize="xl" color="primary.400">
                    Email us at:
                  </Heading>
                  <Link
                    href="mailto:clubfutronics@gmail.com"
                    color="white"
                    fontSize="xl"
                  >
                    clubfutronics@gmail.com
                  </Link>
                </Stack>

                <Stack>
                  <HStack align="center">
                    <FiInstagram size={20} color="white" />
                    <Heading fontSize="xl" color="primary.400">
                      IG
                    </Heading>
                  </HStack>
                  <Link
                    href="https://instagram.com/club_futronics"
                    color="white"
                    isExternal
                    fontSize="xl"
                  >
                    @club_futronics
                  </Link>
                </Stack>
              </Stack>
            </Flex>
            <Flex mt={[12, 12, 0]} w="full">
              <Stack spacing={8}>
                <Heading fontSize="2xl" color="primary.400">
                  Our offline stores
                </Heading>
                <Stack>
                  <Heading fontSize="2xl" color="primary.400">
                    - Senative brands
                  </Heading>
                  <Link color="white" fontSize="md">
                    7 Olufunmilola Okikiolu Street, Off Toyin Street, Ikeja,
                    Lagos.
                  </Link>
                  <Link href="tel:+2348057111773" color="white" fontSize="sm">
                    (+234)80 571 11 773
                  </Link>
                </Stack>
              </Stack>
            </Flex>
          </Flex>
        </Stack>
      </Container>
      <Flex pb={4} color="white" justify="center">
        <Text>© 2020 Futronics, All Rights Reserved</Text>
      </Flex>
    </Box>
  )
}
