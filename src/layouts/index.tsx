import React from "react"
import { PageProps } from "gatsby"
import Navigation from "../components/Navigation/Navigation"
import GlobalStyle from "../assets/styles/globalStyles"
const MainLayout: React.FC<PageProps> = ({ children }) => (
  <>
    <GlobalStyle />
    <Navigation />
    {children}
  </>
)

export default MainLayout
