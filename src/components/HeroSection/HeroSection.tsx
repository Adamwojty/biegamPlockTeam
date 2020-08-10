import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FluidObject } from "gatsby-image"
import { Routes } from "../../config/routes"
import facebook from "../../assets/images/facebook.png"
import {
  Wrapper,
  ImgWrapper,
  Img,
  ContentWrapper,
  ContactLink,
  Icon,
} from "./HeroSection.styles"

const query = graphql`
  {
    file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
interface Queryface {
  file: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

const HeroSection: React.FC = () => {
  const data = useStaticQuery<Queryface>(query)
  return (
    <Wrapper>
      <ImgWrapper>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="biegamPlockTeam Members"
        />
        <a
          href="https://www.facebook.com/biegamP%C5%82ock-team-276934665749060"
          target="blank"
        >
          <Icon src={facebook} />
        </a>
      </ImgWrapper>
      <ContentWrapper>
        <h1>Drużyna biegowa</h1>
        <h2>biegamPłock Team</h2>
        <ContactLink to={Routes.CONTACT}>Dołącz do nas</ContactLink>
      </ContentWrapper>
    </Wrapper>
  )
}
export default HeroSection
