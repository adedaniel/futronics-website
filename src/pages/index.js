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
import HeadPhones from "../components/image-exports/headphones"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Box h="calc(100vh - 4rem)" w="full" bg="black">
        <Center h="full" w="full">
          <Container maxW="5xl">
            <Flex w="full" align="center">
              <Stack w="50%">
                <Heading color="white" fontSize={100}>
                  Live it!!!
                </Heading>
                <Text fontSize="lg" color="white">
                  We're changing the world with the best quality and affordable
                  audio and visual products
                </Text>
                <Flex>
                  <Button
                    w="fit-content"
                    color="primary.500"
                    rightIcon={<ArrowForwardIcon />}
                    variant="link"
                  >
                    Check out our products
                  </Button>
                </Flex>
              </Stack>
              <Flex w="50%">
                <Box w="full">
                  <HeadPhones width="100%" />
                </Box>
              </Flex>
            </Flex>
          </Container>
        </Center>
      </Box>
      <Box>
        <Container id="about" py={24} maxW="5xl">
          <Heading mb={20} fontSize="5xl" color="primary.500">
            Who we are
          </Heading>
          <Flex w="full" h="full" align="center">
            <Flex pos="relative" w="50%">
              <Box w="2xs" h="md" bg="primary.300"></Box>
              <Box
                pos="absolute"
                right={85}
                top={-8}
                w="2xs"
                h="md"
                bg="green.300"
              ></Box>
            </Flex>
            <Stack w="50%">
              <Heading mt={-10} color="white" fontSize="5xl">
                Excellence, Quality and Innovation
              </Heading>
              <Text fontSize="lg" color="white">
                Our aim is to be a household name in the world of audio and
                visuals. <br /> We want to showcase a new dimension and be
                exemplary in an emerging tech market in Africa and the world
                beyond. Excellence, Quality and innovation are our strength as
                we aim to close the gap in a constant changing market.
              </Text>
            </Stack>
          </Flex>
        </Container>
      </Box>
      <Box bg="black">
        <Container py={24} maxW="5xl">
          <Stack spacing={12}>
            <Flex align="center" justify="space-between">
              <Heading fontSize="5xl" color="primary.500">
                Categories
              </Heading>
              <ButtonGroup spacing={6}>
                <IconButton
                  variant="ghost"
                  fontSize="6xl"
                  colorScheme="white"
                  color="white"
                  icon={<CgArrowLongLeft />}
                />
                <IconButton
                  variant="ghost"
                  fontSize="6xl"
                  colorScheme="white"
                  color="white"
                  icon={<CgArrowLongRight />}
                />
              </ButtonGroup>
            </Flex>
            <Stack spacing={8}>
              <Stack
                style={{ flexFlow: "nowrap" }}
                overflowX="scroll"
                overflowY="hidden"
                display="flex"
                // bg="blue.300"
                isInline
              >
                {Array.from(Array(10).keys()).map(() => (
                  <Box
                    mr={4}
                    cursor="pointer"
                    d="block"
                    h="md"
                    pos="relative"
                    minW="xs"
                    bg="cyan.500"
                  >
                    <Box
                      w="full"
                      bg="black"
                      pos="absolute"
                      bottom={0}
                      opacity={0.5}
                      h={24}
                      p={3}
                    ></Box>
                    <Box
                      w="full"
                      // bg="black"
                      pos="absolute"
                      bottom={0}
                      // opacity={0.5}
                      h={24}
                      py={3}
                      px={4}
                    >
                      <Stack>
                        <Heading color="white" fontSize="xl">
                          Sound Bars
                        </Heading>
                        <Flex>
                          <Button
                            rightIcon={<BsArrowRight />}
                            variant="link"
                            colorScheme="white"
                            color="white"
                            fontWeight="light"
                          >
                            View Products
                          </Button>
                        </Flex>
                      </Stack>
                    </Box>
                  </Box>
                ))}
              </Stack>
              <Flex justify="center">
                <Button
                  rightIcon={<CgArrowLongRight />}
                  colorScheme="primary"
                  rounded={0}
                  w="2xs"
                >
                  VIEW ALL
                </Button>
              </Flex>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box>
        <Container id="contact-us" py={24} maxW="5xl">
          <Heading mb={6} fontSize="5xl" color="primary.500">
            Want to get in touch?
          </Heading>
          <Stack justify="center">
            <Text textAlign="left" color="white">
              We'd love to hear from you and we'll be in touch as soon as
              possible.
            </Text>

            <Flex w="full" pt={20} justify="space-between">
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
                    <Heading fontSize="xl" color="primary.400">
                      Or on phone:
                    </Heading>
                    <Link href="tel:+2348057111773" color="white" fontSize="xl">
                      (+234)80 571 11 773
                    </Link>
                  </Stack>
                  <Stack>
                    <HStack align="center">
                      <FiInstagram size={20} color="primary.400" />
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
              <Flex w="full">
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
    </Layout>
  )
}

export default IndexPage
