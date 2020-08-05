import React from "react"
import styled from "styled-components"
import { Colors, FontSize, FontWeight, Media } from "../../assets/styles/const"
import StyledLink from "../Link/Link"
const Wrapper = styled.article`
  position: relative;
  background-color: ${Colors.WHITE};
  max-width: 400px;
  height: 220px;
  margin: 30px 10px;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  h3 {
    margin-top: 30px;
    font-weight: ${FontWeight.REGULAR};
    font-size: 18px;
  }
  @media ${Media.LAPTOP} {
    height: 220px;
  }
`
const CustomLink = styled(StyledLink)`
  background-color: ${Colors.BLUE};
  color: ${Colors.WHITE};
  margin: auto 0 0 auto;
`
const Img = styled.img`
  position: absolute;
  top: -40px;
  left: 20px;
`

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
