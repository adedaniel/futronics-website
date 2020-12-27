import React, { useEffect, useState } from "react"
import { fetchLocation } from "../utils"
import { Provider } from "../utils/context"

export default function RootLayout({ children }) {
  const [inNigeria, setInNigeria] = useState(false)

  useEffect(() => {
    fetchLocation()
      .then(({ country_name }) => {
        if (country_name === "Nigeria") {
          setInNigeria(true)
        }
      })
      .catch(error => {
        console.log(error)
        // toast({
        //   title: "Something went wrong...",
        //   status: "error",
        //   position: "bottom-left",
        //   duration: 4000,
        //   isClosable: true,
        // })
      })
  }, [])
  return (
    <Provider
      value={{
        inNigeria: inNigeria,
        setInNigeria: setInNigeria,
      }}
    >
      {children}
    </Provider>
  )
}
