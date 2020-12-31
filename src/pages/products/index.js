import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
  Tooltip,
  useMediaQuery,
  Wrap,
  WrapItem,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react"
import React, { useContext, useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { IoIosOptions } from "react-icons/io"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ImageGallery from "react-image-gallery"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { navigate } from "gatsby"
import check from "check-types"
import * as queryString from "query-string"
import MyContext from "../../utils/context"
import { separateWithComma } from "../../utils"

export default function Products({ location }) {
  const query = queryString.parse(location.search)
  const [categoryToShow, setCategoryToShow] = useState("All")
  const categories = ["All", "Audio", "Visuals", "Wearables"]
  const [isMobile] = useMediaQuery("(max-width: 767px)")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { inNigeria } = useContext(MyContext)

  useEffect(() => {
    if (query.category) {
      setCategoryToShow(query.category)
    }
  }, [query?.category])

  const [productsList, setProductsList] = useState([
    {
      id: 1,
      category: "Audio",
      name: "Bluetooth Wireless Home Speakers",
      image:
        "https://res.cloudinary.com/adedaniel/image/upload/v1608831361/futronics/WhatsApp_Image_2020-12-24_at_6.32.01_PM_8_gyx9ym.jpg",
      productMedia: [
        {
          url:
            "https://res.cloudinary.com/adedaniel/image/upload/v1608830528/futronics/DSC_5224_v0bv5p.jpg",
          type: "image",
        },
        {
          url:
            "https://res.cloudinary.com/adedaniel/video/upload/v1608830605/futronics/WhatsApp_Video_2020-12-11_at_8.55.53_AM_npddj9.mp4",
          type: "video",
        },
        {
          url:
            "https://res.cloudinary.com/adedaniel/image/upload/v1608831361/futronics/WhatsApp_Image_2020-12-24_at_6.32.01_PM_2_nmbmpe.jpg",
          type: "image",
        },
        {
          url:
            "https://res.cloudinary.com/adedaniel/image/upload/v1608831361/futronics/WhatsApp_Image_2020-12-24_at_6.32.01_PM_1_qop0uf.jpg",
          type: "image",
        },
        {
          url:
            "https://res.cloudinary.com/adedaniel/image/upload/v1608831362/futronics/WhatsApp_Image_2020-12-24_at_6.32.01_PM_9_ufcrvm.jpg",
          type: "image",
        },

        {
          url:
            "https://res.cloudinary.com/adedaniel/image/upload/v1608830551/futronics/DSC_5288_wpfe0f.jpg",
          type: "image",
        },
        {
          url:
            "https://res.cloudinary.com/adedaniel/image/upload/v1608830550/futronics/DSC_5346_1_mnhxyg.jpg",
          type: "image",
        },
        {
          url:
            "https://res.cloudinary.com/adedaniel/image/upload/v1608830530/futronics/DSC_5423_zsoxlz.jpg",
          type: "image",
        },
        {
          url:
            "https://res.cloudinary.com/adedaniel/image/upload/v1608831361/futronics/WhatsApp_Image_2020-12-24_at_6.32.01_PM_7_l6yabp.jpg",
          type: "image",
        },
        {
          url:
            "https://res.cloudinary.com/adedaniel/image/upload/v1608831361/futronics/WhatsApp_Image_2020-12-24_at_6.32.01_PM_4_tuquby.jpg",
          type: "image",
        },
      ],
      price: { naira: 9999, dollar: 26.23 },
      href: "bluetooth-wireless-home-speaker",
      externalLink: "https://www.amazon.co.uk/dp/B08CWQS5FJ?ref=myi_title_dp",
      colours: [
        { colourName: "Army Green", colourCode: "green.700" },
        { colourName: "Black", colourCode: "darkBlack" },
        { colourName: "Black and Gold", colourCode: "orange.200" },
      ],
    },
  ])

  const filterByCategory = ({ category }) =>
    categoryToShow !== "All" ? category === categoryToShow : true //If category is 'All', return true, else filter by selected category

  const productsToDisplay = productsList.filter(filterByCategory)
  return (
    <Layout>
      <SEO title="Products" />
      <Box pos="relative" w="full" pt={[24, 24, 32]} mb={[10, 16, 20]}>
        <Stack px="5%" direction="row" spacing={20}>
          {!isMobile && (
            <Box
              color="white"
              pos={["initial", "initial", "sticky"]}
              top={32}
              // minH="100vh"
              h={["initial", "initial", "calc(100vh - 16rem)"]}
              w={["100%", "100%", "250px"]}
            >
              <HStack justify="space-between" spacing={8} w="full" h="full">
                <Stack
                  color="white"
                  h="full"
                  w="full"
                  justify="center"
                  align="center"
                  spacing={16}
                  pt={4}
                >
                  <Stack spacing={0} w="full">
                    {categories.map((category, index) => (
                      <Box
                        backgroundColor={
                          categoryToShow === category
                            ? "gray.700"
                            : "transparent"
                        }
                        _hover={{
                          bg: "gray.800",
                        }}
                        onClick={() =>
                          navigate(`/products?category=${category}`)
                        }
                        key={index}
                        transition="0.2s all"
                        cursor="pointer"
                      >
                        <Stack py={3}>
                          <Text fontSize="xl" pl={4}>
                            {category}
                          </Text>
                        </Stack>
                        <Divider />
                      </Box>
                    ))}
                  </Stack>
                </Stack>

                <Divider orientation="vertical" />
              </HStack>
            </Box>
          )}

          <Box px={0} w={["100%", "100%", "calc(100% - 250px)"]}>
            <Stack color="white">
              <Flex d={["flex", "flex", "none"]} justify="flex-end">
                <IconButton
                  variant="ghost"
                  size="lg"
                  fontSize="2xl"
                  onClick={onOpen}
                  colorScheme="white"
                  icon={<IoIosOptions />}
                />
              </Flex>
              <Heading
                textTransform="uppercase"
                fontSize={["2xl", "2xl", "3xl"]}
              >
                {categoryToShow === "All" ? "ALL PRODUCTS" : categoryToShow}
              </Heading>

              <Wrap pt={[8, 8, 16]} spacing={[6, 6, "30px"]}>
                {check.nonEmptyArray(productsToDisplay) ? (
                  productsToDisplay.map(
                    ({ id, name, category, image, price, href, colours }) => (
                      <WrapItem
                        key={id}
                        color="white"
                        pb={[8, 6]}
                        w={["100%", "45%", "40%", "40%", "30%"]}
                      >
                        <Stack
                          onClick={() => navigate(`/products/${href}`)}
                          cursor="pointer"
                          spacing={4}
                          w="full"
                        >
                          <Stack spacing={4} w="full">
                            <Center
                              bgImage={`url(${image})`}
                              w="full"
                              backgroundPosition="center"
                              backgroundSize="cover"
                              backgroundRepeat="no-repeat"
                              h="270px"
                              //   bg="red.200"
                            ></Center>
                            <HStack justify="space-between">
                              <Stack spacing={0}>
                                <Text fontSize="lg" fontWeight="bold">
                                  {name}
                                </Text>
                                <Text fontSize="sm">
                                  {inNigeria
                                    ? `₦ ${separateWithComma(price.naira)}`
                                    : `$ ${separateWithComma(price.dollar)}`}
                                </Text>
                              </Stack>
                              <IconButton
                                colorScheme="default"
                                fontSize="3xl"
                                icon={<ChevronRightIcon />}
                              />
                            </HStack>
                          </Stack>

                          <HStack>
                            {colours?.map(
                              ({ colourName, colourCode }, index) => (
                                <Tooltip
                                  key={index}
                                  placement="top"
                                  label={colourName}
                                  aria-label={colourName}
                                >
                                  <Box
                                    boxSize={5}
                                    rounded="full"
                                    bg={colourCode}
                                  />
                                </Tooltip>
                              )
                            )}
                          </HStack>
                        </Stack>
                      </WrapItem>
                    )
                  )
                ) : (
                  <Flex w="full" justify="center">
                    <Text>No product found in this category</Text>
                  </Flex>
                )}
              </Wrap>
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Drawer isOpen={isOpen} placement="right" size="xs" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent pt={4} color="white" bg="lightBlack">
            <DrawerCloseButton top={7} />
            <DrawerHeader>Choose Category</DrawerHeader>

            <DrawerBody>
              <HStack
                justify="space-between"
                spacing={8}
                w="full"
                h="full"
                maxH="430px"
              >
                <Stack
                  h="full"
                  justify="center"
                  w="full"
                  align="center"
                  spacing={16}
                >
                  <Stack spacing={0} w="full">
                    {categories.map((category, index) => (
                      <Box
                        backgroundColor={
                          categoryToShow === category
                            ? "gray.700"
                            : "transparent"
                        }
                        _hover={{
                          bg: "gray.800",
                        }}
                        onClick={() => {
                          navigate(`/products?category=${category}`)
                          onClose()
                        }}
                        key={index}
                        transition="0.2s all"
                        cursor="pointer"
                      >
                        <Stack py={3}>
                          <Text fontSize="xl" pl={4}>
                            {category}
                          </Text>
                        </Stack>
                        <Divider />
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </HStack>
            </DrawerBody>

            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Layout>
  )
}
