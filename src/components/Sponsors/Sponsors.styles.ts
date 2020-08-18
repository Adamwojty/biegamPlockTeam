import styled from "styled-components"
import Image from "gatsby-image"
import { FontSize, Colors, Media } from "../../assets/styles/const"
export const Wrapper = styled.div`
  position: relative;
  left: -20px;
  padding: 20px 0;
  width: calc(100% + 40px);
  display: grid;
  grid-template-columns: repeat(auto-fill, 260px);
  grid-gap: 20px;
  justify-content: space-around;
  @media ${Media.TABLET} {
    grid-template-columns: repeat(3, 200px);
  }
`
export const Img = styled(Image)`
  margin: 0 auto;
`
export const Title = styled.h3`
  font-size: ${FontSize.HEADER_SMALLBIG};
  color: ${Colors.WHITE};
`
