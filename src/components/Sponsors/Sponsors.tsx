import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FixedObject } from "gatsby-image"
import { Img, Wrapper, Title } from "./Sponsors.styles"
const Sponsors: React.FC = () => {
  const data = useStaticQuery<SponsorsInterface>(query)
  return (
    <section>
      <Title>Nasi sponsorzy:</Title>
      <Wrapper>
        {data.allFile.nodes.map(item => (
          <Img fixed={item.childImageSharp.fixed} key={item.id} />
        ))}
      </Wrapper>
    </section>
  )
}
interface SponsorsInterface {
  allFile: {
    nodes: {
      childImageSharp: {
        fixed: FixedObject
      }
      id: string
    }[]
  }
}
const query = graphql`
  query SponsorsQuery {
    allFile(filter: { name: { regex: "/sponsor/" } }) {
      nodes {
        id
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  }
`

export default Sponsors
