import styled from "styled-components"
import { FontWeight, FontSize, Colors } from "../../../../assets/styles/const"
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
export const Img = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin: 0 auto;
`
export const Title = styled.h3`
  margin: 0;
`
export const SubTitle = styled.h4`
  margin: 0;
  font-weight: ${FontWeight.REGULAR};
`
export const Profile = styled.a`
  border-radius: 10px;
  width: 150px;
  margin: 10px auto;
  padding: 5px;
  color: ${Colors.WHITE};
  background-color: ${Colors.BLUE};
`
export const Date = styled.p`
  font-size: ${FontSize.TEXT_XSMALL};
  margin: 0;
`
