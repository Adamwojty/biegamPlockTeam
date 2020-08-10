import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FluidObject } from "gatsby-image"
import { Routes } from "../../../../config/routes"
import {
  Wrapper,
  ImgWrapper,
  Img,
  TeamLink,
  ArticleWrapper,
  ContentWrapper,
} from "./AboutBox.styles"
const query = graphql`
  {
    file(name: { eq: "competitions1" }) {
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

const AboutBox: React.FC = () => {
  const data = useStaticQuery<Queryface>(query)
  return (
    <Wrapper>
      <h2>O nas:</h2>
      <ContentWrapper>
        <ImgWrapper>
          <Img fluid={data.file.childImageSharp.fluid} />
        </ImgWrapper>
        <ArticleWrapper>
          <header>
            <h3>biegamPlockTeam</h3>
          </header>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <TeamLink to={Routes.ABOUT}>więcej...</TeamLink>
        </ArticleWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}
export default AboutBox
