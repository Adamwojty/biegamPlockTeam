import styled from "styled-components"
import Image from "gatsby-image"
import { Media, FontSize } from "../../../assets/styles/const"
export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  h1 {
    margin: 10px 0;
  }
`
export const Img = styled(Image)`
  width: 100%;
  border-radius: 10px;
  @media ${Media.TABLET} {
    width: 60%;
    margin: 0 auto;
  }
  @media ${Media.LAPTOP} {
    width: 50%;
  }
`
export const ContentWrapper = styled.article`
  @media ${Media.TABLET} {
    width: 90%;
  }
`
