import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Image, { FluidObject } from "gatsby-image"
import StyledLink from "../../Link/Link"
import { Routes } from "../../../config/routes"
import { Colors, FontSize, Media } from "../../../assets/styles/const"

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${Media.TABLET} {
    flex-direction: row;
    justify-content: flex-start;
  }
  h1 {
    font-size: ${FontSize.HEADER_NORMAL};
    margin-bottom: 0;
  }
  h2 {
    margin: 10px 0;
    font-size: ${FontSize.HEADER_SUBBIG};
  }
`
const ContentWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${Media.TABLET} {
    margin: 0;
  }
`

const ContactLink = styled(StyledLink)`
  color: ${Colors.WHITE};
  background-color: ${Colors.BLUE};
  margin: 0 auto;
`
const BlogLink = styled(StyledLink)`
  color: ${Colors.BLACK};
  margin: 10px auto;
  background-color: ${Colors.LIGHT_GREY};
  @media ${Media.TABLET} {
    margin: 0 0 0 20px;
  }
`
const StyledImage = styled(Image)`
  border-radius: 50%;
  width: 280px;
  height: 280px;
  margin: 0 auto;
  @media ${Media.TABLET} {
    margin: 0 50px 0 0;
  }
  @media ${Media.LAPTOP} {
    width: 400px;
    height: 400px;
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

const query = graphql`
  {
    file(name: { eq: "hero" }) {
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
      <StyledImage
        fluid={data.file.childImageSharp.fluid}
        alt="biegamPlockTeam Members"
      />
      <ContentWrapper>
        <h1>Drużyna biegowa</h1>
        <h2>biegamPłock Team</h2>
        <RedirectWrapper>
          <ContactLink to={Routes.CONTACT}>Dolącz do nas</ContactLink>
          <BlogLink to={Routes.BLOG}>Poczytaj bloga &rarr;</BlogLink>
        </RedirectWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}
export default AboutPreview
