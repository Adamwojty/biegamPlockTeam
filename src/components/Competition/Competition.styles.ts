import styled from "styled-components"
import Image from "gatsby-image"
import { Colors, FontSize, Media, FontWeight } from "../../assets/styles/const"

export const Wrapper = styled.section`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  @media ${Media.TABLET} {
    flex-direction: row;
    margin: 30px 0;
  }
`
export const ContentWrapper = styled.article`
  display: flex;
  flex-direction: column;
  h2 {
    margin: 10px 0 0;
    z-index: 2;
  }
`
export const CompetitionLink = styled.a`
  border-radius: 10px;
  display: block;
  font-weight: ${FontWeight.SEMIBOLD};
  font-size: ${FontSize.TEXT_NORMAL};
  padding: 14px 0;
  width: 200px;
  /* max-height: 50px; */
  text-align: center;
  background-color: ${Colors.BLUE};
  color: ${Colors.WHITE};
`
export const Date = styled.p`
  font-size: ${FontSize.TEXT_SMALL};
  margin: 5px 0;
`
export const Img = styled(Image)`
  border-radius: 20px;
  height: 250px;
  width: 250px;
  margin: 0 auto;
  @media ${Media.TABLET} {
    margin: 0 30px 0 0;
  }
`
