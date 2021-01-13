import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  Tooltip,
  useDisclosure,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Icon,
} from "@chakra-ui/react"
import React, { useContext, useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { BsArrowRight } from "react-icons/bs"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ImageGallery from "react-image-gallery"
import { ChevronLeftIcon } from "@chakra-ui/icons"
import { navigate } from "gatsby"
import { fetchLocation, separateWithComma } from "../../utils"
import MyContext from "../../utils/context"
import PlaceOrderDrawer from "../../components/place-order-drawer"
import { FaAmazon, FaPaypal } from "react-icons/fa"

export default function ProductDetails() {
  const [isMobile] = useMediaQuery("(max-width: 767px)")
  const { inNigeria } = useContext(MyContext)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [product, setProduct] = useState({
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
    externalLinks: {
      amazon: "https://www.amazon.co.uk/dp/B08CWQS5FJ?ref=myi_title_dp",
      paypal: "https://www.paypal.me/GbengaUwadia",
    },
    colours: [
      { colourName: "Army Green", colourCode: "green.700" },
      { colourName: "Black", colourCode: "darkBlack" },
      { colourName: "Black and Gold", colourCode: "orange.200" },
    ],
  })

  const [number, setNumber] = useState(1)
  const [selectedColour, setSelectedColour] = useState(
    product.colours[1].colourName
  )

  const triggerPlaceOrder = () => {
    if (inNigeria) {
      onOpen()
    }
  }
  return (
    <Layout>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/react-image-gallery@1.0.8/styles/css/image-gallery.min.css"
        />
        <link rel="stylesheet" href="../styles/style.css" />
      </Helmet>
      <SEO title={product.name} />
      <Box pos="relative" w="full" pt={[24, 24, 32]} mb={[16, 16, 24]}>
        <Flex px="5%" mb={10}>
          <Button
            leftIcon={<ChevronLeftIcon />}
            colorScheme="primary"
            variant="link"
            onClick={() => navigate("/products")}
          >
            Back to All Products
          </Button>
        </Flex>
        <Stack px="5%" direction="row" spacing={20}>
          {
            // !isMobile && (
            //   <Box w="65%">
            //     <Stack spacing={10}>
            //       {product?.productMedia.map(({ type, url }, index) =>
            //         type === "image" ? (
            //           <Image
            //             key={index}
            //             objectFit="cover"
            //             objectPosition="top"
            //             src={url}
            //           />
            //         ) : (
            //           <Box key={index} controls as="video">
            //             <source src={url} type="video/mp4" />
            //             {/* <source src="mov_bbb.ogg" type="video/ogg" /> */}
            //             Your browser does not support HTML video.
            //           </Box>
            //         )
            //       )}
            //     </Stack>
            //   </Box>
            // )
          }

          <Box
            color="white"
            pos={["initial", "initial", "sticky"]}
            top={32}
            h={["initial", "initial", "100%"]}
            w={["100%", "100%", "100%"]}
          >
            <Stack spacing={16} pt={4}>
              <Stack>
                <Heading textTransform="uppercase">{product?.name}</Heading>
                <Text fontWeight="bold" fontSize="xl">
                  {inNigeria
                    ? `₦ ${separateWithComma(product?.price.naira)}`
                    : `$ ${separateWithComma(product?.price.dollar)}`}
                </Text>
              </Stack>
              <form
                onSubmit={event => {
                  event.preventDefault()
                  triggerPlaceOrder()
                }}
                action="submit"
              >
                <Stack w="full">
                  <Flex justify="space-between">
                    <HStack>
                      <Text>Colors:</Text>
                      {/* <Text color="gray.300">Black</Text> */}
                    </HStack>
                    <HStack>
                      {product?.colours?.map(
                        ({ colourName, colourCode }, index) => (
                          <Tooltip
                            key={index}
                            placement="top"
                            label={colourName}
                            aria-label={colourName}
                          >
                            <Box
                              cursor="pointer"
                              onClick={() => setSelectedColour(colourName)}
                              boxSize={6}
                              border={
                                selectedColour == colourName
                                  ? "3px solid"
                                  : "none"
                              }
                              borderColor={
                                selectedColour == colourName
                                  ? "primary.500"
                                  : "none"
                              }
                              rounded="full"
                              bg={colourCode}
                            />
                          </Tooltip>
                        )
                      )}
                    </HStack>
                  </Flex>
                  <Divider />
                  {inNigeria && (
                    <Stack justify="center" align="center">
                      <HStack justify="center" pt={6} w="full">
                        <Button
                          onClick={() => {
                            number > 0 && setNumber(parseInt(number) - 1)
                          }}
                          size="lg"
                          rounded={0}
                          colorScheme="primary"
                        >
                          -
                        </Button>
                        <Input
                          size="lg"
                          textAlign="center"
                          rounded={0}
                          w={["full", "full", 48]}
                          min={1}
                          isRequired
                          variant="flushed"
                          type="number"
                          value={number}
                          onChange={event => setNumber(event.target.value)}
                        />
                        <Button
                          onClick={() => {
                            setNumber(parseInt(number) + 1)
                          }}
                          size="lg"
                          rounded={0}
                          colorScheme="primary"
                        >
                          +
                        </Button>
                      </HStack>
                      {parseInt(number) > 0 && (
                        <Flex align="center" justify="space-between">
                          <HStack></HStack>
                          <HStack>
                            <Text>Total:</Text>
                            <Text fontWeight="bold" fontSize="sm">
                              {`₦ ${separateWithComma(
                                product?.price?.naira * parseInt(number)
                              )}`}
                            </Text>
                          </HStack>
                        </Flex>
                      )}
                    </Stack>
                  )}

                  <Flex w="full" justify="center" pt={6}>
                    {inNigeria ? (
                      <Button
                        rounded={0}
                        size="lg"
                        h={12}
                        type="submit"
                        colorScheme="primary"
                      >
                        PLACE ORDER
                      </Button>
                    ) : (
                      <Menu placement="bottom">
                        <MenuButton
                          rounded={0}
                          size="lg"
                          h={12}
                          type="submit"
                          colorScheme="primary"
                          as={Button}
                        >
                          PLACE ORDER
                        </MenuButton>

                        <MenuList bg="black">
                          <MenuItem
                            _hover={{ bg: "gray.800" }}
                            _active={{ bg: "gray.800" }}
                            _focus={{ bg: "gray.800" }}
                            onClick={() =>
                              window.open(product.externalLinks.amazon, "_self")
                            }
                          >
                            <Flex
                              w="full"
                              justify="space-between"
                              align="center"
                            >
                              <Text>Order on Amazon</Text>
                              <Icon as={FaAmazon} />
                            </Flex>
                          </MenuItem>
                          <MenuItem
                            _hover={{ bg: "gray.800" }}
                            _active={{ bg: "gray.800" }}
                            _focus={{ bg: "gray.800" }}
                            onClick={() =>
                              window.open(product.externalLinks.paypal, "_self")
                            }
                          >
                            <Flex
                              w="full"
                              justify="space-between"
                              align="center"
                            >
                              <Text>Pay by Paypal</Text>
                              <Icon as={FaPaypal} />
                            </Flex>
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    )}
                  </Flex>
                </Stack>
              </form>

              {
                // isMobile && (
                <Stack spacing={12}>
                  <ImageGallery
                    useBrowserFullscreen={false}
                    showThumbnails={false}
                    showIndex
                    showBullets
                    items={product?.productMedia
                      .filter(({ url, type }) => type === "image")
                      .map(({ type, url }) => ({
                        original: url,
                        // description: url,
                        thumbnail: url,
                      }))}
                  />

                  {product?.productMedia
                    .filter(({ type }) => type === "video")
                    .map(({ url }, index) => (
                      <Box key={index} controls as="video">
                        <source src={url} type="video/mp4" />
                        {/* <source src="mov_bbb.ogg" type="video/ogg" /> */}
                        Your browser does not support HTML video.
                      </Box>
                    ))}
                </Stack>
                // )
              }
            </Stack>
          </Box>
        </Stack>
      </Box>
      <PlaceOrderDrawer
        orderedProduct={{
          ...product,
          totalPrice: `₦ ${separateWithComma(
            product?.price?.naira * parseInt(number)
          )}`,
          number: number,
          variant: selectedColour,
        }}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Layout>
  )
}
