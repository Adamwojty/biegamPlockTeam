import Image from "gatsby-image"
import styled from "styled-components"
import { Colors, FontSize, Media } from "../../../assets/styles/const"

export const Wrapper = styled.article`
  position: relative;
  width: 280px;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  @media ${Media.TABLET} {
    width: 400px;
  }
  a {
    color: ${Colors.WHITE};
  }
  h2 {
    margin: 0;
    font-size: ${FontSize.TEXT_NORMAL};
  }
  p {
    margin: 5px 0;
    font-size: ${FontSize.TEXT_SMALL};
  }
`

export const ContentWrapper = styled.section`
  padding: 5px;
  background-color: ${Colors.BLUE};
  height: 100px;
  transition: 0.3s ease-in;
  @media ${Media.TABLET} {
    height: 150px;
    padding: 15px;
  }
  &:hover {
    background-color: ${Colors.DARK_GREY};
  }
`
export const Img = styled(Image)`
  height: 190px;
  @media ${Media.TABLET} {
    height: 220px;
  }
`
