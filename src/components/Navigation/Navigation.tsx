import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Routes } from "../../config/routes"
import { FontWeight, FontSize, Colors, Media } from "../../assets/styles/const"

const Wrapper = styled.nav<{ active: boolean }>`
  position: fixed;
  top: 30px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  a {
    text-decoration: none;
    color: ${({ active }) => (active ? `${Colors.WHITE}` : `${Colors.BLACK}`)};
    @media ${Media.TABLET} {
      color: ${Colors.BLACK};
    }
  }
  @media ${Media.TABLET} {
    left: 50px;
    right: 50px;
  }
`
const Logo = styled(Link)`
  transition: 0.5s ease-in-out;
  margin: auto 0;
  z-index: 3;
  font-weight: ${FontWeight.BOLD};
  font-size: ${FontSize.HEADER_NORMAL};
`
const NavigationList = styled.ul<{ active: boolean }>`
  transition: 0.5s ease-in;
  font-weight: ${FontWeight.SEMIBOLD};
  list-style: none;
  display: flex;
  transform: ${({ active }) =>
    active ? "translateX(0px)" : "translateX(-1000px)"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  flex-direction: column;
  justify-content: center;
  background-color: ${Colors.BLUE};
  z-index: 2;
  @media ${Media.TABLET} {
    transform: translateX(0px);
    background-color: transparent;
    position: relative;
    flex-direction: row;
  }
`
const NavigationListItem = styled.li`
  font-size: ${FontSize.HEADER_SUBBIG};
  text-align: center;
  margin-top: 40px;
  @media ${Media.TABLET} {
    font-size: ${FontSize.TEXT_NORMAL};
    margin: 0 30px 0 0;
  }
`
const Hamburger = styled.button<{ active: boolean }>`
  transition: 0.5s ease-in;
  z-index: 3;
  background-color: transparent;
  border: none;
  height: 40px;
  font-size: ${FontSize.HEADER_SMALL};
  font-weight: ${FontWeight.BOLD};
  color: ${({ active }) => (active ? `${Colors.WHITE}` : `${Colors.BLACK}`)};
  @media ${Media.TABLET} {
    display: none;
  }
`

const Navigation: React.FC = () => {
  const [active, setActive] = React.useState<boolean>(false)
  const [disabled, setDisabled] = React.useState<boolean>(false)
  const handleNavigation = () => {
    setActive(!active)
    setDisabled(true)
    return setTimeout(() => setDisabled(false), 700)
  }
  return (
    <Wrapper active={active}>
      <Logo to={Routes.HOME} onClick={() => setActive(false)}>
        biegamPłock team
      </Logo>
      <Hamburger onClick={handleNavigation} active={active} disabled={disabled}>
        Menu
      </Hamburger>
      <NavigationList active={active}>
        <NavigationListItem onClick={handleNavigation}>
          <Link to={Routes.ABOUT}>o nas</Link>
        </NavigationListItem>
        <NavigationListItem onClick={handleNavigation}>
          <Link to={Routes.COMPETITIONS}>zawody</Link>
        </NavigationListItem>
        <NavigationListItem onClick={handleNavigation}>
          <Link to={Routes.BLOG}>blog</Link>
        </NavigationListItem>
        <NavigationListItem onClick={handleNavigation}>
          <Link to={Routes.CONTACT}>kontakt</Link>
        </NavigationListItem>
      </NavigationList>
    </Wrapper>
  )
}
export default Navigation
