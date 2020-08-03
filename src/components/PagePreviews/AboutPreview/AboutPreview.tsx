import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Image, { FluidObject } from "gatsby-image"
import StyledLink from "../../Link/Link"
import { Routes } from "../../../config/routes"
import { Colors, Media } from "../../../assets/styles/const"

const Wrapper = styled.section`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  @media ${Media.TABLET} {
    margin: 0;
    flex-direction: row;
    justify-content: flex-end;
  }
`
const ContentWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  h2 {
    text-align: center;
  }
  @media ${Media.TABLET} {
    margin: 0;
  }
`
const RedirectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  @media ${Media.TABLET} {
    flex-direction: row;
  }
`
const CompetitionsLink = styled(StyledLink)`
  color: ${Colors.WHITE};
  background-color: ${Colors.BLUE};
  margin: 0 auto;
`
const AwardsLink = styled(StyledLink)`
  color: ${Colors.BLACK};
  margin: 10px auto;
  background-color: ${Colors.LIGHT_GREY};
  @media ${Media.TABLET} {
    margin: 0 0 0 20px;
  }
`

const StyledImage = styled(Image)`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  @media ${Media.TABLET} {
    order: 1;
    margin: 0 0 0 50px;
    width: 280px;
    height: 280px;
  }
  @media ${Media.LAPTOP} {
    width: 400px;
    height: 400px;
  }
`

const query = graphql`
  {
    file(name: { eq: "competitions" }) {
      childImageSharp {
        fluid(maxWidth: 900, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
interface AboutSectionInterface {
  file: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

const AboutPreview: React.FC = () => {
  const data = useStaticQuery<AboutSectionInterface>(query)
  return (
    <Wrapper>
      <StyledImage fluid={data.file.childImageSharp.fluid} />
      <ContentWrapper>
        <h2>Dowiedz się gdzie nas spotkać</h2>
        <RedirectWrapper>
          <CompetitionsLink to={Routes.COMPETITIONS}>Zawody</CompetitionsLink>
          <AwardsLink to={Routes.AWARDS}>Osiągnięcia &rarr;</AwardsLink>
        </RedirectWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}
export default AboutPreview
