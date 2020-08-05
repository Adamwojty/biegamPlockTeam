import styled from "styled-components"
import Image from "gatsby-image"
import { FontSize } from "../../assets/styles/const"

export const Desc = styled.p`
  font-size: ${FontSize.TEXT_SMALL};
  margin: 10px;
  text-align: center;
  font-style: italic;
`
export const Img = styled(Image)`
  margin: 0 auto;
  min-height: 150px;
  max-height: 800px;
  max-width: 70%;
`
