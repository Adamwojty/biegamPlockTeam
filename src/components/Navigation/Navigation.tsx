import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  Wrapper,
  Logo,
  Hamburger,
  NavigationList,
  NavigationListItem,
} from "./Navigation.styles"
import { Routes } from "../../config/routes"

const query = graphql`
  {
    file(name: { eq: "logo" }) {
      childImageSharp {
        fluid(maxHeight: 50, quality: 100) {
          src
        }
      }
    }
  }
`

const Navigation: React.FC = () => {
  const data = useStaticQuery(query)
  const [active, setActive] = React.useState<boolean>(false)
  const [disabled, setDisabled] = React.useState<boolean>(false)
  const handleNavigationOpen = () => {
    setActive(!active)
    setDisabled(true)
    return setTimeout(() => setDisabled(false), 700)
  }
  const handleNavigationClose = () => {
    setActive(false)
  }
  return (
    <Wrapper active={active}>
      <Logo to={Routes.HOME} onClick={handleNavigationClose}>
        <img src={data.file.childImageSharp.fluid.src} />
        <p>biegamPłock team</p>
      </Logo>
      <Hamburger
        onClick={handleNavigationOpen}
        active={active}
        disabled={disabled}
      >
        Menu
      </Hamburger>
      <NavigationList active={active}>
        <NavigationListItem onClick={handleNavigationClose}>
          <Link to={Routes.ABOUT}>o nas</Link>
        </NavigationListItem>
        <NavigationListItem onClick={handleNavigationClose}>
          <Link to={Routes.COMPETITIONS}>zawody</Link>
        </NavigationListItem>
        <NavigationListItem onClick={handleNavigationClose}>
          <Link to={Routes.BLOG}>blog</Link>
        </NavigationListItem>
        <NavigationListItem onClick={handleNavigationClose}>
          <Link to={Routes.CONTACT}>kontakt</Link>
        </NavigationListItem>
      </NavigationList>
    </Wrapper>
  )
}
export default Navigation
