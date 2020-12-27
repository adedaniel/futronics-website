/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { Box } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import theme from "../@chakra-ui/gatsby-plugin/theme"
import { fetchLocation } from "../utils"
import { Provider } from "../utils/context"
import Footer from "./footer"
import Header from "./header"
import "./layout.css"

const Layout = ({ children, ...rest }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Helmet>
        <link
          rel="stylesheet"
          href="https://res.cloudinary.com/adedaniel/raw/upload/v1606838698/Blacker-Text-Regular-trial_fsr9bq.ttf"
        />
      </Helmet> */}

      <Header siteTitle={siteMetadata?.title || `Title`} />
      <Box minH="100vh" bg="lightBlack">
        {children}
        <Footer />
      </Box>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          background: ${theme.colors.gray[900]};
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: ${theme.colors.gray[700]};
          border-radius: 5px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: ${theme.colors.gray[600]};
        }
      `}</style>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
