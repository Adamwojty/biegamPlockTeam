import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FluidObject } from "gatsby-image"
import { Wrapper, Img, ContentWrapper } from "./About.styles"
import Members from "./Members/Members"
const query = graphql`
  query querryImg {
    file(name: { eq: "about" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
interface QueryProps {
  file: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

const About: React.FC = () => {
  const data = useStaticQuery<QueryProps>(query)
  return (
    <Wrapper>
      <Img fluid={data.file.childImageSharp.fluid} />
      <ContentWrapper>
        <header>
          <h1>Kilka słów o nas:</h1>
        </header>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam consequat sunt nostrud
          amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do
          amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet.
        </p>
      </ContentWrapper>
      <section>
        <Members />
      </section>
    </Wrapper>
  )
}
export default About
