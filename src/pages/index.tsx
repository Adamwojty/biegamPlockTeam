import React from "react"
import styled from "styled-components"
import SEO from "../components/SeoComponent"
import AboutPreview from "../components/AboutPage/AboutPreview/AboutPreview"
import HeroSection from "../components/HeroSection/HeroSection"

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
`

const IndexPage: React.FC = () => (
  <>
    <SEO title="BiegamPlockTeam" />
    <Wrapper>
      <HeroSection />
      <AboutPreview />
    </Wrapper>
  </>
)

export default IndexPage
