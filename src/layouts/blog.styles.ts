import styled from "styled-components"
import { Media } from "../assets/styles/const"

export const Wrapper = styled.main`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 10px;
  justify-content: center;

  @media ${Media.TABLET} {
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 400px);
    grid-gap: 30px;
  }
`
