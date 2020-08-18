import styled from "styled-components"
import { Media } from "../../../../assets/styles/const"
export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 350px));
  grid-gap: 30px;
  justify-content: center;
  @media ${Media.MOBILE_L} {
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(250px, 300px));
  }
  @media ${Media.TABLET} {
    justify-content: flex-start;
    grid-template-columns: repeat(auto-fill, minmax(200px, 350px));
  }
`
