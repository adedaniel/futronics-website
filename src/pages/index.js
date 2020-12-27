import { ArrowForwardIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Divider,
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
import { navigate } from "gatsby"

function LandingPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Box
        bgImage="url(https://res.cloudinary.com/adedaniel/image/upload/v1608385511/samples/bg-alt_ytcwy5.jpg)"
        h="100vh"
        bgSize="cover"
        bgPos="center"
        w="full"
        // bg="black"
      >
        <Center h="full" w="full">
          <Container maxW={["2xl", "2xl", "3xl", "4xl", "5xl"]}>
            <Flex w="full" align="center">
              <Stack
                align={["center", "center", "start"]}
                w={["100%", "100%", "50%"]}
              >
                <Heading color="white" fontSize={["6xl", 100]}>
                  Live it!!!
                </Heading>
                <Text
                  fontSize="lg"
                  textAlign={["center", "center", "left"]}
                  color="white"
                >
                  We're changing the world with the best quality and affordable
                  audio and visual products
                </Text>
                <Flex pt={4}>
                  <Button
                    w="fit-content"
                    color="primary.500"
                    borderColor="primary.500"
                    rightIcon={<ArrowForwardIcon />}
                    variant="outline"
                    onClick={() => navigate("/products")}
                    colorScheme="default"
                    rounded={0}
                  >
                    Check out our products
                  </Button>
                </Flex>
              </Stack>
              <Flex w={["0%", "0%", "50%"]}>
                <Box w="full">{/* <HeadPhones width="100%" /> */}</Box>
              </Flex>
            </Flex>
          </Container>
        </Center>
      </Box>
      <Box>
        <Container
          id="about"
          py={24}
          maxW={["2xl", "2xl", "3xl", "4xl", "5xl"]}
        >
          <Heading mb={20} fontSize={["4xl", "5xl"]} color="primary.500">
            Who we are
          </Heading>
          <Flex
            flexDirection={["column", "column", "row"]}
            w="full"
            h="full"
            align="center"
          >
            <Flex
              justify={["center", "center", "left"]}
              pos="relative"
              w={["100%", "100%", "50%"]}
            >
              <Box
                bgImage="url(https://res.cloudinary.com/adedaniel/image/upload/v1608387866/samples/about-us-1_vtyerk.jpg)"
                bgSize="cover"
                bgRepeat="no-repeat"
                bgPos="center"
                w="2xs"
                h="md"
                // bg="primary.300"
              ></Box>
              <Box
                pos="absolute"
                right={55}
                bgSize="cover"
                bgRepeat="no-repeat"
                bgImage="url(https://res.cloudinary.com/adedaniel/image/upload/v1608387902/samples/pexels-ready-made-3921883_y0xqol.jpg)"
                bgPos="center"
                top={-8}
                w="2xs"
                h="md"
                // bg="green.300"
              ></Box>
            </Flex>
            <Stack w={["100%", "100%", "50%"]}>
              <Heading
                mt={[12, 12, -10]}
                color="white"
                fontSize={["3xl", "4xl", "5xl"]}
              >
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
          <Stack spacing={12} mt={6}>
            <Divider />
            <Box controls as="video">
              <source
                src="https://res.cloudinary.com/adedaniel/video/upload/v1608830611/futronics/WhatsApp_Video_2020-12-11_at_8.54.26_AM_qlwg4c.mp4"
                type="video/mp4"
              />
              {/* <source src="mov_bbb.ogg" type="video/ogg" /> */}
              Your browser does not support HTML video.
            </Box>
          </Stack>
        </Container>
      </Box>
      <Box bg="black">
        <Container py={24} maxW={["2xl", "2xl", "3xl", "4xl", "5xl"]}>
          <Stack spacing={12}>
            <Flex align="center" justify="space-between">
              <Heading fontSize={["4xl", "5xl"]} color="primary.500">
                Categories
              </Heading>

              {/* <ButtonGroup spacing={6}>
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
              </ButtonGroup> */}
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
                <Box
                  mr={4}
                  cursor="pointer"
                  onClick={() => navigate("/products?category=Audio")}
                  d="block"
                  h={["sm", "md"]}
                  pos="relative"
                  minW={["2xs", "xs"]}
                  bgPos="center"
                  bgSize="cover"
                  bgImage="url(https://res.cloudinary.com/adedaniel/image/upload/v1608830528/futronics/DSC_5224_v0bv5p.jpg)"
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
                        Audio
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

                <Box
                  mr={4}
                  cursor="pointer"
                  d="block"
                  h={["sm", "md"]}
                  pos="relative"
                  minW={["2xs", "xs"]}
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
                        Visuals
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

                <Box
                  mr={4}
                  cursor="pointer"
                  d="block"
                  h={["sm", "md"]}
                  onClick={() => navigate("/products?category=Wearables")}
                  pos="relative"
                  minW={["2xs", "xs"]}
                  bgPos="center"
                  bgSize="cover"
                  bgImage="url(https://res.cloudinary.com/adedaniel/image/upload/v1608984984/futronics/WhatsApp_Image_2020-12-26_at_9.32.47_AM_ut7lgm.jpg)"
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
                        Wearables
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
              </Stack>
              <Flex justify="center">
                <Button
                  rightIcon={<CgArrowLongRight />}
                  colorScheme="primary"
                  rounded={0}
                  onClick={() => navigate("/products")}
                  w="2xs"
                >
                  VIEW ALL
                </Button>
              </Flex>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Layout>
  )
}

export default LandingPage
