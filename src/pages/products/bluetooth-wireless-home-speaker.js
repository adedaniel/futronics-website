import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  Tooltip,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react"
import React, { useContext, useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { BsArrowRight } from "react-icons/bs"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ImageGallery from "react-image-gallery"
import { ChevronLeftIcon } from "@chakra-ui/icons"
import { navigate } from "gatsby"
import { fetchLocation } from "../../utils"
import MyContext from "../../utils/context"
import PlaceOrderDrawer from "../../components/place-order-drawer"

export default function ProductDetails() {
  const productMedia = [
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
        "https://res.cloudinary.com/adedaniel/image/upload/v1608831360/futronics/WhatsApp_Image_2020-12-24_at_6.32.01_PM_3_f49rgw.jpg",
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
  ]
  const [isMobile] = useMediaQuery("(max-width: 767px)")
  const { inNigeria } = useContext(MyContext)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const triggerPlaceOrder = () => {
    if (inNigeria) {
      onOpen()
    } else {
      window.open(
        "https://www.amazon.co.uk/dp/B08CWQS5FJ?ref=myi_title_dp",
        "_self"
      )
    }
  }
  return (
    <Layout>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/react-image-gallery@1.0.8/styles/css/image-gallery.min.css"
        />
        {/* <link rel="stylesheet" href="../styles/style.css" /> */}
      </Helmet>
      <SEO title="Bluetooth Wireless Home Speakers" />
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
          {!isMobile && (
            <Box w="65%">
              <Stack spacing={10}>
                {productMedia.map(({ type, url }, index) =>
                  type === "image" ? (
                    <Image
                      key={index}
                      objectFit="cover"
                      objectPosition="top"
                      src={url}
                    />
                  ) : (
                    <Box key={index} controls as="video">
                      <source src={url} type="video/mp4" />
                      {/* <source src="mov_bbb.ogg" type="video/ogg" /> */}
                      Your browser does not support HTML video.
                    </Box>
                  )
                )}
              </Stack>
            </Box>
          )}
          <Box
            color="white"
            pos={["initial", "initial", "sticky"]}
            top={32}
            h={["initial", "initial", "100%"]}
            w={["100%", "100%", "35%"]}
          >
            <Stack spacing={16} pt={4}>
              <Stack>
                <Heading textTransform="uppercase">
                  BLUETOOTH WIRELESS HOME SPEAKERS
                </Heading>
                <Text fontWeight="bold" fontSize="xl">
                  {inNigeria ? `₦ 10,000` : `$ 26.23`}
                </Text>
              </Stack>
              {isMobile && (
                <Stack spacing={8}>
                  <ImageGallery
                    useBrowserFullscreen={false}
                    showThumbnails={false}
                    showIndex
                    showBullets
                    items={productMedia
                      .filter(({ url, type }) => type === "image")
                      .map(({ type, url }) => ({
                        original: url,
                        // description: url,
                        thumbnail: url,
                      }))}
                  />

                  {productMedia
                    .filter(({ type }) => type === "video")
                    .map(({ url }, index) => (
                      <Box key={index} controls as="video">
                        <source src={url} type="video/mp4" />
                        {/* <source src="mov_bbb.ogg" type="video/ogg" /> */}
                        Your browser does not support HTML video.
                      </Box>
                    ))}
                </Stack>
              )}

              <Stack w="full">
                <Flex justify="space-between">
                  <HStack>
                    <Text>Colors:</Text>
                    {/* <Text color="gray.300">Black</Text> */}
                  </HStack>
                  <HStack>
                    <Tooltip
                      placement="top"
                      label="Army Green"
                      aria-label="Army Green"
                    >
                      <Box
                        boxSize={6}
                        rounded="full"
                        // border="2px solid"
                        // borderColor="primary.700"
                        // cursor="pointer"
                        bg="green.700"
                      />
                    </Tooltip>
                    <Tooltip placement="top" label="Black" aria-label="Black">
                      <Box boxSize={6} rounded="full" bg="darkBlack" />
                    </Tooltip>
                    <Tooltip
                      placement="top"
                      label="Black and Gold"
                      aria-label="Black and Gold"
                    >
                      <Box boxSize={6} rounded="full" bg="orange.200" />
                    </Tooltip>
                  </HStack>
                </Flex>
                <Divider />
                <Flex w="full" pt={12}>
                  <Button
                    isFullWidth
                    rounded={0}
                    size="lg"
                    h={16}
                    onClick={triggerPlaceOrder}
                    colorScheme="primary"
                  >
                    PLACE ORDER
                  </Button>
                </Flex>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Box>
      <PlaceOrderDrawer isOpen={isOpen} onClose={onClose} />
    </Layout>
  )
}
