import React from "react"
import { Wrapper, CustomLink, Img } from "./InformationBox.styles"

interface InformactionBoxInterface {
  title: string
  action: string
  iconURL: string
  path: string
}

const InfromationBox: React.FC<InformactionBoxInterface> = ({
  title,
  action,
  iconURL,
  path,
}) => {
  return (
    <Wrapper>
      <Img src={iconURL} />
      <h3>{title}</h3>
      <CustomLink to={path}>{action}</CustomLink>
    </Wrapper>
  )
}
export default InfromationBox
