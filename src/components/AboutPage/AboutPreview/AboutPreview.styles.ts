import styled from "styled-components"
import { Colors, Media } from "../../../assets/styles/const"

export const Wrapper = styled.div`
  padding-top: 150px;
  border-radius: 20px;
  transform: translateY(-75px);
  background-color: ${Colors.ORANGE};
  @media ${Media.TABLET} {
    padding-top: 0px;
  }
`
export const InformationWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 400px));
  justify-content: space-around;

  @media ${Media.TABLET} {
    grid-template-columns: repeat(3, minmax(280px, 400px));
    padding-top: 250px;
  }
`
