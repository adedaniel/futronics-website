import React, { useState, useRef, useEffect } from "react"
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Avatar,
  Heading,
  Stack,
  Badge,
  Link,
  Text,
  DrawerFooter,
  IconButton,
  Button,
  Box,
  Flex,
  Input,
  InputLeftElement,
  InputGroup,
  Select,
  InputRightElement,
  Tooltip,
  HStack,
  Icon,
} from "@chakra-ui/react"
import { TiLocationOutline } from "react-icons/ti"
import { FaRegUser } from "react-icons/fa"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { CheckIcon, EmailIcon, InfoIcon, PhoneIcon } from "@chakra-ui/icons"
import { statesInNigeria } from "../utils"
import * as emailjs from "emailjs-com"

export default function PlaceOrderDrawer({ isOpen, onClose, orderedProduct }) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [orderSuccessful, setOrderSuccessful] = useState(true)
  const [touchLevel, setTouchLevel] = useState(0)
  const referenceField = useRef()

  const performTouchResponse = () => {
    if (touchLevel > 200) {
      onClose()
      setTouchLevel(0)
    }
  }
  const onCompleteOrder = event => {
    event.preventDefault()
    setIsLoading(true)
    let userTemplateParams = {
      order_first_name: firstName,
      order_email: email,
      product_image: orderedProduct?.image,
      product_name: orderedProduct?.name,
      product_numbers: orderedProduct?.number,
      product_price: orderedProduct?.totalPrice,
      product_variant: orderedProduct?.variant,
    }

    let adminTemplateParams = {
      first_name: firstName,
      last_name: lastName,
      order_email: email,
      phone_number: phoneNumber,
      delivery_address: address,
      city,
      state,
      postal_code: postalCode,
      admin_email: "clubfutronics@gmail.com",
      product_image: orderedProduct?.image,
      product_name: orderedProduct?.name,
      product_numbers: orderedProduct?.number,
      total_price: orderedProduct?.totalPrice,
      product_variant: orderedProduct?.variant,
    }

    emailjs
      .send(
        "service_w9rf974",
        "template_eq5sdbd",
        adminTemplateParams,
        "user_gdjWdacJsgrJx2glMs0jj"
      )
      .then(response => {
        emailjs
          .send(
            "service_w9rf974",
            "template_y9pfpqa",
            userTemplateParams,
            "user_gdjWdacJsgrJx2glMs0jj"
          )
          .then(response => {
            setIsLoading(false)
            setOrderSuccessful(true)
            console.log(response)
          })
          .catch(error => {
            setIsLoading(false)
            console.log(error.text)
          })
      })
      .catch(error => {
        setIsLoading(false)
        console.log(error.text)
      })
  }
  useEffect(() => {
    if (!isOpen) {
      setOrderSuccessful(false)
    }
  }, [isOpen])
  return (
    <Drawer
      initialFocusRef={referenceField}
      placement="bottom"
      onClose={onClose}
      isOpen={isOpen || isLoading}
    >
      <DrawerOverlay />
      <DrawerContent
        bg="lightBlack"
        ref={referenceField}
        borderRadius={["20px 20px 0 0", "20px 20px 0 0", "30px 30px 0 0"]}
        // height={["72%", "72%", "72%", "75%"]}
      >
        <DrawerCloseButton color="white" top={[12, 4]} right={[4, 8]} />
        <DrawerHeader borderBottomWidth="0px">
          <Box
            height="7px"
            width="60%"
            display="block"
            margin="0 auto"
            draggable
            onTouchMove={e => setTouchLevel(e.touches[0].clientY)}
            onTouchEnd={performTouchResponse}
            cursor="grab"
            transition="0.5s all"
            // onClick={onClose}
            _hover={{
              backgroundColor: "gray.600",
              width: "51%",
            }}
            _grabbed={{ cursor: "grabbing" }}
            onDragEnd={e => e.clientY > 200 && onClose()}
            // onDrag={(e) => {
            //   e = window.event || e;
            //   console.log(e.clientY);
            // }}
            backgroundColor="gray.700"
            rounded={8}
          ></Box>
        </DrawerHeader>
        <DrawerBody pt={4} pb={8} color="white" px={["6%", 24]}>
          {!orderSuccessful ? (
            <Stack spacing={6}>
              <Stack spacing={2}>
                <Flex>
                  <Heading fontSize="2xl">Product Details</Heading>
                </Flex>
                <Stack>
                  <HStack align="flex-start">
                    <Text fontWeight="bold">Name:</Text>
                    <Text>{orderedProduct?.name}</Text>
                  </HStack>
                  <HStack>
                    <Text fontWeight="bold">Quantity:</Text>
                    <Text>{orderedProduct?.number}</Text>
                  </HStack>
                  <HStack>
                    <Text fontWeight="bold">Variant Color:</Text>
                    <Text>{orderedProduct?.variant}</Text>
                  </HStack>
                  <HStack>
                    <Text fontWeight="bold">Total Price:</Text>
                    <Text>{orderedProduct?.totalPrice}</Text>
                  </HStack>
                </Stack>
              </Stack>
              <form action="submit" onSubmit={onCompleteOrder}>
                <Stack spacing={3}>
                  <Flex>
                    <Heading fontSize="2xl">
                      Enter your contact information
                    </Heading>
                  </Flex>

                  <Stack spacing={5}>
                    <Stack w="full" spacing={4} direction={["column", "row"]}>
                      <Stack w="full">
                        <InputGroup size="lg">
                          <InputLeftElement
                            color="gray.300"
                            fontSize="1.2em"
                            children={<FaRegUser color="gray.300" />}
                          />
                          <Input
                            rounded={0}
                            size="lg"
                            isRequired
                            variant="outline"
                            placeholder="First name"
                            value={firstName}
                            onChange={event => setFirstName(event.target.value)}
                          />
                        </InputGroup>
                      </Stack>
                      <Stack w="full">
                        <InputGroup size="lg">
                          <InputLeftElement
                            color="gray.300"
                            fontSize="1.2em"
                            children={<FaRegUser color="gray.300" />}
                          />
                          <Input
                            rounded={0}
                            size="lg"
                            isRequired
                            variant="outline"
                            placeholder="Last name"
                            value={lastName}
                            onChange={event => setLastName(event.target.value)}
                          />
                        </InputGroup>
                      </Stack>
                    </Stack>

                    <Stack w="full">
                      <InputGroup size="lg">
                        <InputLeftElement
                          color="gray.300"
                          fontSize="1.2em"
                          children={<EmailIcon color="gray.300" />}
                        />
                        <Input
                          rounded={0}
                          size="lg"
                          isRequired
                          type="email"
                          variant="outline"
                          placeholder="Email Address"
                          value={email}
                          onChange={event => setEmail(event.target.value)}
                        />
                        <InputRightElement
                          children={
                            <Tooltip
                              hasArrow
                              label="You may be reached out to via this email"
                              placement="top"
                            >
                              <InfoIcon color="gray.600" />
                            </Tooltip>
                          }
                        />
                      </InputGroup>
                    </Stack>
                    <Stack w="full" spacing={4} direction={["column", "row"]}>
                      <Stack w="full">
                        <InputGroup size="lg">
                          <InputLeftElement
                            color="gray.300"
                            fontSize="1.2em"
                            children={<PhoneIcon color="gray.300" />}
                          />
                          <Input
                            rounded={0}
                            size="lg"
                            isRequired
                            type="phone"
                            variant="outline"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={event =>
                              setPhoneNumber(event.target.value)
                            }
                          />
                          <InputRightElement
                            children={
                              <Tooltip
                                hasArrow
                                label="Incase we need to contact you about your order"
                                placement="top"
                              >
                                <InfoIcon color="gray.600" />
                              </Tooltip>
                            }
                          />
                        </InputGroup>
                      </Stack>
                      <Stack w="full">
                        <InputGroup size="lg">
                          <InputLeftElement
                            color="gray.300"
                            fontSize="1.2em"
                            children={<TiLocationOutline />}
                          />
                          <Input
                            rounded={0}
                            size="lg"
                            isRequired
                            variant="outline"
                            placeholder="Delivery Address"
                            value={address}
                            onChange={event => setAddress(event.target.value)}
                          />
                          <InputRightElement
                            children={
                              <Tooltip
                                hasArrow
                                label="The address the order will be delivered to"
                                placement="top"
                              >
                                <InfoIcon color="gray.600" />
                              </Tooltip>
                            }
                          />
                        </InputGroup>
                      </Stack>
                    </Stack>

                    <Stack w="full" spacing={4} direction={["column", "row"]}>
                      <Stack w="full">
                        <Input
                          rounded={0}
                          size="lg"
                          isRequired
                          variant="outline"
                          placeholder="City"
                          value={city}
                          onChange={event => setCity(event.target.value)}
                        />
                      </Stack>
                      <Stack w="full">
                        <Select
                          rounded={0}
                          size="lg"
                          isRequired
                          variant="outline"
                          placeholder="State"
                          value={state}
                          onChange={event => setState(event.target.value)}
                        >
                          {statesInNigeria.map((state, index) => (
                            <Box
                              color="#000"
                              as="option"
                              value={state}
                              key={index}
                            >
                              {state}
                            </Box>
                          ))}
                        </Select>
                      </Stack>
                      <Stack w="full">
                        <Input
                          rounded={0}
                          size="lg"
                          isRequired
                          variant="outline"
                          placeholder="Postal Code"
                          value={postalCode}
                          onChange={event => setPostalCode(event.target.value)}
                        />
                      </Stack>
                    </Stack>
                    <Flex w="full" pt={4}>
                      <Button
                        rounded={0}
                        isFullWidth
                        h={16}
                        size="lg"
                        type="submit"
                        isLoading={isLoading}
                        loadingText="Making Order..."
                        colorScheme="primary"
                      >
                        COMPLETE ORDER
                      </Button>
                    </Flex>
                  </Stack>
                </Stack>
              </form>
            </Stack>
          ) : (
            <Stack>
              <Flex w="full" justify="center" pt={4}>
                <Icon
                  color="green.500"
                  fontSize={200}
                  as={IoMdCheckmarkCircleOutline}
                />
              </Flex>
              <Stack w="full" align="center" justify="center" pt={4}>
                <Heading textAlign="center" fontSize="xl">
                  YOUR ORDER HAS BEEN PLACED SUCCESSFULLY
                </Heading>
                <Text textAlign="center">
                  Someone will reach out to you soon
                </Text>
              </Stack>
              <Flex w="full" pt={4}>
                <Button
                  rounded={0}
                  isFullWidth
                  h={16}
                  onClick={onClose}
                  size="lg"
                  colorScheme="primary"
                >
                  ALRIGHT
                </Button>
              </Flex>
            </Stack>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
