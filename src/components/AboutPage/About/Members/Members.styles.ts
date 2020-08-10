import styled from "styled-components"
import { Media } from "../../../../assets/styles/const"
export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 350px));
  grid-gap: 10px;
  justify-content: center;
  @media ${Media.MOBILE_L} {
    justify-content: flex-start;
  }
`
