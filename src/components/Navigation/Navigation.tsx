import * as React from "react"
import { Link } from "gatsby"
import {
  Wrapper,
  Logo,
  Hamburger,
  NavigationList,
  NavigationListItem,
} from "./Navigation.styles"
import { Routes } from "../../config/routes"

const Navigation: React.FC = () => {
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
        biegamPłock team
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
