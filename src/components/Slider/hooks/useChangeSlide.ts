import { useState } from "react"

export const useChangeSlide = (data: { fluid: { src: string } }[]) => {
  const [activeImg, setActiveImg] = useState<number>(data.length - 1)
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
  return {
    activeImg,
    handleImageChangeForward,
    handleImageChangBackwards,
  }
}
