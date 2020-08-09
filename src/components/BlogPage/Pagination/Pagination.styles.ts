import styled, { css } from "styled-components"
import { Colors, Media, FontSize } from "../../../assets/styles/const"
export const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
`

export const PageBox = styled.ul`
  width: 60%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 30px);
  grid-template-rows: 40px;
  grid-gap: 10px;
  margin: 0 5px;
  justify-content: center;
  @media ${Media.TABLET} {
    margin: 0 25px;
  }

  @media ${Media.LAPTOP} {
    width: 80%;
    margin: 0 35px;
  }
`
export const PageNbr = styled.li<{ currentPage: number }>`
  list-style: none;
  padding: 10px 5px;
  width: 30px;
  text-align: center;
  background-color: ${Colors.BLUE};
  a {
    margin: auto 0;
    color: ${Colors.WHITE};
  }

  ${({ currentPage }) =>
    currentPage &&
    css`
      &:nth-of-type(${currentPage}) {
        border: 1px solid black;
        background-color: white;
        a {
          color: ${Colors.BLACK};
        }
      }
    `};
`

const InvisibleBox = styled.div`
  height: 40px;
  width: 20%;
  text-align: center;
  padding: 10px;
  @media ${Media.LAPTOP} {
    width: 10%;
  }
  a {
    display: block;
    width: 100%;
    color: ${Colors.WHITE};
  }
`
export const InvisibleFirstBox = styled(InvisibleBox)<{ active: boolean }>`
  background-color: ${({ active }) =>
    active ? `${Colors.BLUE}` : "transparent"};
`
export const InvisibleLastBox = styled(InvisibleBox)<{ active: boolean }>`
  background-color: ${({ active }) =>
    active ? `${Colors.BLUE}` : "transparent"};
`
