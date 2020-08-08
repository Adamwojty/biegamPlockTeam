import styled from "styled-components"
import { Media, Colors } from "../../../assets/styles/const"

export const Wrapper = styled.div`
  margin: 30px auto;
  overflow: hidden;
  height: 200px;
  width: 80%;
  position: relative;
  display: flex;
  justify-content: flex-end;

  @media ${Media.MOBILE_L} {
    height: 300px;
  }
  @media ${Media.TABLET} {
    height: 500px;
  }
  @media ${Media.LAPTOP} {
    height: 700px;
  }
`

export const ImageWrapper = styled.div<{ length: number; active: number }>`
  display: flex;
  height: 100%;
  flex-shrink: 0;
  transition: 0.5s ease-in-out;
  margin: auto 0;
  width: ${({ length }) => `calc(100% * ${length})`};
  transform: ${({ active, length }) =>
    `translateX(calc((100% / ${length}) * ${active}))`};
  @media ${Media.MOBILE_L} {
    height: 80%;
  }
`
export const Img = styled.div<{ src: string; length: number }>`
  background-image: ${({ src }) => `url('${src}')`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  flex-basis: ${({ length }) => `calc(100% / ${length})`};
  flex-shrink: 0;
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
export const ArrowForward = styled(Arrow)`
  right: 10px;
  transform: rotate(45deg);
  @media ${Media.MOBILE_L} {
    right: 10px;
  }
  @media ${Media.TABLET} {
    right: 30px;
  }
`
export const ArrowBackwards = styled(Arrow)`
  left: 10px;
  transform: rotate(-135deg);
  @media ${Media.MOBILE_L} {
    left: 10px;
  }
  @media ${Media.TABLET} {
    left: 30px;
  }
`
