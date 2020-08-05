import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { Routes } from "../../../config/routes"
import { Colors, Media } from "../../../assets/styles/const"
import InformationBox from "../../InformationBox/InformationBox"

const Wrapper = styled.section`
  padding-top: 150px;
  border-radius: 20px;
  transform: translateY(-75px);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 400px));
  justify-content: center;
  background-color: ${Colors.ORANGE};
  @media ${Media.TABLET} {
    grid-template-columns: repeat(3, minmax(280px, 400px));
    padding-top: 250px;
  }
`

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
      iconURL: data.allFile.nodes[0].publicURL,
    },
    {
      title: "Odwiedź naszego bloga i poczytaj o poczynaniach naszej drużyny",
      action: "blog",
      path: Routes.BLOG,
      iconURL: data.allFile.nodes[1].publicURL,
    },
    {
      title: "Chcesz do nas dołączyć? Napisz maila!",
      action: "kontakt",
      path: Routes.CONTACT,
      iconURL: data.allFile.nodes[2].publicURL,
    },
  ]
  return (
    <Wrapper>
      {informations.map(item => (
        <InformationBox {...item} key={item.action} />
      ))}
    </Wrapper>
  )
}
export default AboutPreview
