import styled from "styled-components"
import { Link } from "gatsby"
import { FontWeight, FontSize, Colors, Media } from "../../assets/styles/const"

export const Wrapper = styled.nav<{ active: boolean }>`
  position: fixed;
  padding: 30px 20px 10px;
  top: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: space-between;
  z-index: 4;
  background-color: white;
  a {
    text-decoration: none;
    color: ${({ active }) => (active ? `${Colors.WHITE}` : `${Colors.BLACK}`)};
    margin: 0;
    @media ${Media.TABLET} {
      color: ${Colors.BLACK};
    }
  }
  @media ${Media.TABLET} {
    left: 30px;
    right: 30px;
    padding: 30px 0 10px;
  }
`
export const Logo = styled(Link)`
  transition: 0.5s ease-in-out;
  display: flex;
  margin: auto 20px;
  z-index: 3;
  font-weight: ${FontWeight.BOLD};
  img {
    height: 50px;
    margin: auto 0;
  }
  p {
    margin-left: 10px;
    font-size: ${FontSize.HEADER_SMALL};

    @media ${Media.TABLET} {
      font-size: ${FontSize.HEADER_NORMAL};
    }
  }
`
export const NavigationList = styled.ul<{ active: boolean }>`
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
    margin: auto 0;
    flex-direction: row;
  }
`
export const NavigationListItem = styled.li`
  font-size: ${FontSize.HEADER_SUBBIG};
  text-align: center;
  margin-top: 40px;
  @media ${Media.TABLET} {
    font-size: ${FontSize.TEXT_NORMAL};
    margin: 0 30px 0 0;
  }
`
export const Hamburger = styled.button<{ active: boolean }>`
  transition: 0.5s ease-in;
  z-index: 3;
  background-color: transparent;
  border: none;
  height: 40px;
  font-size: ${FontSize.HEADER_SMALL};
  font-weight: ${FontWeight.BOLD};
  color: ${({ active }) => (active ? `${Colors.WHITE}` : `${Colors.BLACK}`)};
  margin: auto 0;
  @media ${Media.TABLET} {
    display: none;
  }
`
