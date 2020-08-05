import React from "react"
import { Link } from "gatsby"
import { FluidObject } from "gatsby-image"
import { Wrapper, Img, ContentWrapper } from "./ArticlePreview.styles"

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
      <Img fluid={featuredImage.fluid} />
      <ContentWrapper>
        <h2>{title}</h2>
        <p>{date}</p>
        <p>Czytaj więcej...</p>
      </ContentWrapper>
    </Link>
  </Wrapper>
)
export default ArticlePreview
