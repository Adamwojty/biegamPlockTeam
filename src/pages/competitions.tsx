import React from "react"
import { FluidObject } from "gatsby-image"
import { graphql, PageProps } from "gatsby"
import styled from "styled-components"
import Competition from "../components/Competition/Competition"
import SEO from "../components/SeoComponent"

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const query = graphql`
  query CompetitionsQuerry {
    allDatoCmsCompetition {
      nodes {
        title
        description
        link
        date
        featuredImage {
          alt
          fluid(maxWidth: 250, maxHeight: 250) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`
interface CompetitionInterface {
  title: string
  description: string
  link: string
  date: string
  featuredImage: {
    alt: string
    fluid: FluidObject
  }
}

interface CompetitionsInterface {
  allDatoCmsCompetition: {
    nodes: CompetitionInterface[]
  }
}
const Competitions: React.FC<PageProps<CompetitionsInterface>> = ({ data }) => (
  <>
    <SEO title="Zawody" />
    <Wrapper>
      <h1>Zbliżające się zawody:</h1>
      {data.allDatoCmsCompetition.nodes.map(item => (
        <Competition key={item.title} {...item} />
      ))}
    </Wrapper>
  </>
)

export default Competitions
