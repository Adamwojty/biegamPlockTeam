import React from "react"
import { PageProps } from "gatsby"
import Navigation from "../components/Navigation/Navigation"
import GlobalStyle from "../assets/styles/globalStyles"
import Footer from "../components/Footer/Footer"
const MainLayout: React.FC<PageProps> = ({ children }) => (
  <>
    <GlobalStyle />
    <Navigation />
    {children}
    <Footer />
  </>
)

export default MainLayout
