import * as React from "react"
import Image, { FluidObject } from "gatsby-image"
import {
  Wrapper,
  ArrowBackwards,
  ArrowForward,
  ImageWrapper,
} from "./Slider.styles"
import { useChangeSlide } from "./hooks/useChangeSlide"

interface SliderInterface {
  data: FluidObject[]
}

const Slider: React.FC<SliderInterface> = ({ data }) => {
  const slide = useChangeSlide(data)

  return (
    <>
      <Wrapper>
        <ArrowBackwards
          onClick={slide.handleImageChangeForward}
        ></ArrowBackwards>
        <ArrowForward onClick={slide.handleImageChangBackwards}></ArrowForward>
        <ImageWrapper>
          <Image fluid={data[`${slide.activeImg}`].fluid} />
        </ImageWrapper>
      </Wrapper>
    </>
  )
}
export default Slider
