import React from "react"
import styled from "styled-components"
import { graphql, PageProps } from "gatsby"
import SEO from "../components/seo"
import AboutPreview from "../components/PagePreviews/AboutPreview/AboutPreview"
import TeamPreview from "../components/PagePreviews/TeamPreview/TeamPreview"
import { Media } from "../assets/styles/const"

const Wrapper = styled.main<{ background: string }>`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  background-repeat: no-repeat;
  @media ${Media.TABLET} {
    margin-top: 75px;
    background-image: ${({ background }) => `url('${background}')`};
    background-position: right;
  }
`
export const query = graphql`
  {
    file(name: { eq: "background" }) {
      publicURL
    }
  }
`
interface IndexPageInterface {
  file: {
    publicURL: string
  }
}

const IndexPage: React.FC<PageProps<IndexPageInterface>> = ({ data }) => (
  <>
    {console.log(data.file.publicURL)}
    <SEO title="Home" />
    <Wrapper background={data.file.publicURL}>
      <TeamPreview />
      <AboutPreview />
    </Wrapper>
  </>
)

export default IndexPage
