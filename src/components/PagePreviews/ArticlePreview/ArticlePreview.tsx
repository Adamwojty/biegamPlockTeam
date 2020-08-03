import React from "react"
import { Link } from "gatsby"
import Image, { FluidObject } from "gatsby-image"
import styled from "styled-components"
import { Colors, FontSize } from "../../../assets/styles/const"

const Wrapper = styled.article`
  position: relative;
  width: 280px;
  margin: 10px;
  a {
    color: ${Colors.WHITE};
  }
  h2 {
    margin: 0;
    font-size: ${FontSize.TEXT_NORMAL};
  }
  p {
    margin: 5px 0;
    font-size: ${FontSize.TEXT_SMALL};
  }
`

const ContentWrapper = styled.section`
  padding: 5px;
  background-color: ${Colors.BLUE};
  height: 100px;
`
const StyledImage = styled(Image)`
  height: 190px;
`

interface PostInterface {
  title: string
  date: string
  slug: string
  featuredImage: {
    alt: string
    fluid: FluidObject
  }
}

const ArticlePreview: React.FC<PostInterface> = ({
  title,
  date,
  slug,
  featuredImage,
}) => (
  <Wrapper>
    <Link to={slug}>
      <StyledImage fluid={featuredImage.fluid} />
      <ContentWrapper>
        <h2>{title}</h2>
        <p>{date}</p>
        <p>Czytaj więcej...</p>
      </ContentWrapper>
    </Link>
  </Wrapper>
)
export default ArticlePreview
