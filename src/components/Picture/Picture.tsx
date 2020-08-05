import React from "react"
import Image, { FluidObject } from "gatsby-image"
import { Img, Desc } from "./Picture.styles"

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
