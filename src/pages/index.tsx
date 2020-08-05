import React from "react"
import styled from "styled-components"
import { graphql, PageProps } from "gatsby"
import SEO from "../components/seo"
import AboutPreview from "../components/PagePreviews/AboutPreview/AboutPreview"
import HeroSection from "../components/PagePreviews/HeroSection/HeroSection"
import { Media } from "../assets/styles/const"

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
`

interface IndexPageInterface {
  file: {
    publicURL: string
  }
}

const IndexPage: React.FC<PageProps<IndexPageInterface>> = () => (
  <>
    <SEO title="Home" />
    <Wrapper>
      <HeroSection />
      <AboutPreview />
    </Wrapper>
  </>
)

export default IndexPage
