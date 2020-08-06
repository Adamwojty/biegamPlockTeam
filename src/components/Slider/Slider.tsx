import * as React from "react"
import {
  Wrapper,
  ArrowBackwards,
  ArrowForward,
  ImageWrapper,
  Img,
} from "./Slider.styles"
import { useChangeSlide } from "./hooks/useChangeSlide"

interface SliderInterface {
  data: { fluid: { src: string } }[]
}

const Slider: React.FC<SliderInterface> = ({ data }) => {
  const slide = useChangeSlide(data)
  const length = data.length
  console.log(slide.activeImg)
  return (
    <>
      <Wrapper>
        <ArrowBackwards onClick={slide.handleImageChangeForward} />
        <ArrowForward onClick={slide.handleImageChangBackwards} />
        <ImageWrapper length={data.length} active={slide.activeImg}>
          {data.map(item => (
            <Img
              src={item.fluid.src}
              key={item.fluid.src}
              length={data.length}
            />
          ))}

          {/* <Image fluid={data[`${slide.activeImg}`].fluid} /> */}
        </ImageWrapper>
      </Wrapper>
    </>
  )
}
export default Slider
