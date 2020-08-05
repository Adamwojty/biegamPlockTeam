import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Image, { FluidObject } from "gatsby-image"
import StyledLink from "../../Link/Link"
import { Routes } from "../../../config/routes"
import { Colors, FontSize, Media } from "../../../assets/styles/const"
import facebook from "../../../assets/images/facebook.png"
const Wrapper = styled.section`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${Media.TABLET} {
    flex-direction: row;
    justify-content: space-between;
  }
  h1 {
    font-size: ${FontSize.HEADER_NORMAL};
    margin-bottom: 0;
    @media ${Media.TABLET} {
      font-size: ${FontSize.HEADER_BIG};
    }
    @media ${Media.LAPTOP} {
      font-size: ${FontSize.HEADER_XBIG};
    }
  }
  h2 {
    margin: 10px 0;
    font-size: ${FontSize.HEADER_SMALLBIG};
    @media ${Media.TABLET} {
      text-align: right;
    }
    @media ${Media.LAPTOP} {
      font-size: ${FontSize.HEADER_BIG};
    }
  }
`
const ContentWrapper = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  @media ${Media.TABLET} {
    margin: 100px 0 0;

    justify-content: start;
  }
`

const ContactLink = styled(StyledLink)`
  color: ${Colors.WHITE};
  background-color: ${Colors.BLUE};
  @media ${Media.TABLET} {
    width: 300px;
    margin: 20px 0 0 auto;
  }
`
const ImgWrapper = styled.div`
  position: relative;
  border-radius: 20px;
  width: 280px;
  height: 280px;
  margin: 0 auto;
  @media ${Media.TABLET} {
    width: 350px;
    height: 600px;
    margin: 0 20px;
    order: 2;
    transform: translateY(100px);
    &::before {
      z-index: -1;
      display: block;
      position: absolute;
      border: 3px solid ${Colors.BLUE};
      border-radius: inherit;
      transform: translate(-70px, -70px);
      content: "";
      width: 350px;
      height: 600px;
      background-color: transparent;
    }
  }
  @media ${Media.LAPTOP} {
    width: 600px;
    height: 800px;
    &::before {
      width: 600px;
      height: 800px;
      transform: translate(-100px, -100px);
    }
  }
`
const Icon = styled.img`
  position: absolute;
  display: none;
  @media ${Media.TABLET} {
    display: block;
    left: -105px;
    bottom: 200px;
  }
  @media ${Media.LAPTOP} {
    bottom: 400px;
    left: -135px;
  }
`
const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: inherit;
`

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
      <ImgWrapper>
        <StyledImage
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
export default AboutPreview
