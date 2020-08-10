import styled from "styled-components"
import Image from "gatsby-image"
import { Colors, FontSize, Media } from "../../../../assets/styles/const"
import StyledLink from "../../../common/Link/Link"
export const Wrapper = styled.div`
  color: ${Colors.WHITE};
  padding: 20px;
  overflow: hidden;
  h2 {
    font-size: ${FontSize.HEADER_BIG};
    margin-bottom: 10px;
  }
  h3 {
    margin-bottom: 0;
    font-size: ${FontSize.HEADER_NORMAL};
    @media ${Media.TABLET} {
      font-size: ${FontSize.HEADER_SMALLBIG};
    }
  }
  @media ${Media.TABLET} {
    padding-bottom: 100px;
  }
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${Media.TABLET} {
    flex-direction: row;
  }
`
export const ArticleWrapper = styled.article`
  display: flex;
  flex-direction: column;
  @media ${Media.TABLET} {
    width: 50%;
    margin-left: 100px;
    font-size: ${FontSize.TEXT_BIG};
  }
`
export const ImgWrapper = styled.div`
  width: 240px;
  position: relative;
  border-radius: 20px;
  margin: 0 auto;
  @media ${Media.TABLET} {
    width: 300px;
    height: 300px;
    margin: 50px 0;
    &::before {
      z-index: -1;
      display: block;
      position: absolute;
      border: 3px solid ${Colors.BLUE};
      border-radius: inherit;
      transform: translate(40px, -40px);
      content: "";
      width: 300px;
      height: 300px;
      background-color: transparent;
    }
  }
  @media ${Media.LAPTOP} {
    width: 400px;
    height: 400px;
    &::before {
      width: 400px;
      height: 400px;
    }
  }
`
export const Img = styled(Image)`
  border-radius: inherit;
  width: 100%;
  height: 100%;
`
export const TeamLink = styled(StyledLink)`
  background-color: ${Colors.BLUE};
  color: ${Colors.WHITE};
  @media ${Media.LAPTOP} {
    margin-top: 75px;
  }
`
