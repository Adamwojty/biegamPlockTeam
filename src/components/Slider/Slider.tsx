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
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${Media.MOBILE_L} {
    height: 350px;
  }
  @media ${Media.TABLET} {
    height: 500px;
  }
  @media ${Media.LAPTOP} {
    height: 700px;
  }
`
const Arrow = styled.button`
  outline: none;
  z-index: 2;
  position: absolute;
  top: 50%;
  height: 30px;
  width: 30px;
  border: none;
  border-top: 3px solid ${Colors.BLACK};
  border-right: 3px solid ${Colors.BLACK};
  background-color: transparent;
`
const ArrowForward = styled(Arrow)`
  right: 0px;
  transform: rotate(45deg);
  @media ${Media.MOBILE_L} {
    right: -30px;
  }
`
const ArrowBackwards = styled(Arrow)`
  left: 0;
  transform: rotate(-135deg);
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
