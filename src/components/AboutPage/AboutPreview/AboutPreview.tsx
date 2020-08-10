import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Routes } from "../../../config/routes"
import InformationBox from "./InformationBox/InformationBox"
import AboutBox from "./AboutBox/AboutBox"
import { Wrapper, InformationWrapper } from "./AboutPreview.styles"

const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/svg/" } }) {
      nodes {
        publicURL
      }
    }
  }
`
interface AboutSectionInterface {
  allFile: {
    nodes: {
      publicURL: string
    }
  }
}

const AboutPreview: React.FC = () => {
  const data = useStaticQuery<AboutSectionInterface>(query)
  const informations = [
    {
      title: "Dowiedz się, gdzie możesz nas spotkać",
      action: "zawody",
      path: Routes.COMPETITIONS,
      iconURL: data.allFile.nodes[2].publicURL,
    },
    {
      title: "Odwiedź naszego bloga i poczytaj o poczynaniach naszej drużyny",
      action: "blog",
      path: Routes.BLOG,
      iconURL: data.allFile.nodes[0].publicURL,
    },
    {
      title: "Chcesz do nas dołączyć? Masz pytanie? Napisz maila!",
      action: "kontakt",
      path: Routes.CONTACT,
      iconURL: data.allFile.nodes[1].publicURL,
    },
  ]
  return (
    <Wrapper>
      <InformationWrapper>
        {informations.map(item => (
          <InformationBox {...item} key={item.action} />
        ))}
      </InformationWrapper>
      <AboutBox />
    </Wrapper>
  )
}
export default AboutPreview
