/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
import React from "react"
import RootLayout from "./src/components/root-layout"

export const wrapRootElement = ({ element }) => (
  <RootLayout>{element}</RootLayout>
)

// You can delete this file if you're not using it
