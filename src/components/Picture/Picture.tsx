import React from "react"
import Image, { FluidObject } from "gatsby-image"
import styled from "styled-components"
import { FontSize, Media } from "../../assets/styles/const"
const Desc = styled.p`
  font-size: ${FontSize.TEXT_SMALL};
  margin: 10px;
  text-align: center;
  font-style: italic;
`
const Img = styled(Image)`
  margin: 0 auto;
  min-height: 150px;
  max-height: 800px;
  max-width: 70%;
`

interface PctureInterface {
  data: {
    title: string
    fluid: FluidObject
  }
}
const Picture: React.FC<PctureInterface> = ({ data }) => (
  <>
    <Img fluid={data.fluid} alt={data.title} />
    <Desc>{data.title}</Desc>
  </>
)
export default Picture
