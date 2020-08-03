import * as React from "react"
import styled from "styled-components"
import Image, { FluidObject } from "gatsby-image"
import { Media, Colors } from "../../assets/styles/const"
const Wrapper = styled.div`
  margin: 30px auto;
  position: relative;
  width: 280px;
  @media ${Media.MOBILE_L} {
    width: 500px;
  }
  @media ${Media.TABLET} {
    width: 70%;
    margin: 50px auto;
  }
`
const ImageWrapper = styled.div`
  margin: 0 auto;
  overflow: hidden;
  max-height: 700px;
  border: 2px solid black;
`
const ArrowForward = styled.button`
  outline: none;
  z-index: 2;
  position: absolute;
  right: 0px;
  top: 50%;
  height: 30px;
  width: 30px;
  background-color: transparent;
  transform: rotate(45deg);
  border: none;
  border-top: 3px solid ${Colors.BLACK};
  border-right: 3px solid ${Colors.BLACK};
  @media ${Media.MOBILE_L} {
    right: -30px;
  }
`
const ArrowBackwards = styled.button`
  outline: none;
  z-index: 2;
  position: absolute;
  height: 30px;
  width: 30px;
  left: 0;
  top: 50%;
  background-color: transparent;
  transform: rotate(-135deg);
  border: none;
  border-top: 3px solid ${Colors.BLACK};
  border-right: 3px solid ${Colors.BLACK};
  @media ${Media.MOBILE_L} {
    left: -30px;
  }
`

interface SliderInterface {
  data: FluidObject[]
}

const Slider: React.FC<SliderInterface> = ({ data }) => {
  const [activeImg, setActiveImg] = React.useState<number>(0)
  const handleImageChangeForward = () => {
    if (activeImg === data.length - 1) {
      return setActiveImg(0)
    } else return setActiveImg(activeImg + 1)
  }
  const handleImageChangBackwards = () => {
    if (activeImg === 0) {
      return setActiveImg(data.length - 1)
    } else return setActiveImg(activeImg - 1)
  }

  return (
    <>
      <Wrapper>
        <ArrowBackwards onClick={handleImageChangeForward}></ArrowBackwards>
        <ArrowForward onClick={handleImageChangBackwards}></ArrowForward>
        <ImageWrapper>
          <Image fluid={data[`${activeImg}`].fluid} />
        </ImageWrapper>
      </Wrapper>
    </>
  )
}
export default Slider
