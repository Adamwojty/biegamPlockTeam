import styled from "styled-components"
import Image from "gatsby-image"
import { Media, FontSize, Colors } from "../assets/styles/const"
import StyledLink from "../components/Link/Link"
export const Wrapper = styled.article`
  margin: 20px 0 100px;
  display: flex;
  flex-direction: column;
`
export const Img = styled.img`
  margin: 30px auto 30px auto;
  width: 280px;
  @media ${Media.MOBILE_L} {
    width: 500px;
  }
  @media ${Media.TABLET} {
    width: 700px;
    margin: 50px auto;
  }
`
export const Title = styled.h2`
  margin: 10px 0 5px;
`
export const Author = styled.p`
  font-size: ${FontSize.TEXT_SMALL};
  margin: 0;
`
export const Header = styled.h3`
  max-width: 85%;
  font-size: ${FontSize.HEADER_NORMAL};
  margin: 5px auto 10px;
`
export const Paragraph = styled.p`
  margin: 25px auto;
  max-width: 85%;
`
export const BackLink = styled(StyledLink)`
  margin: 25px auto;
  color: ${Colors.WHITE};
  background-color: ${Colors.BLUE};
  @media ${Media.MOBILE_L} {
    margin: 25px 0 0 auto;
  }
`
