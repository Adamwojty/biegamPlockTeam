import React from "react"
import { graphql, PageProps } from "gatsby"
import slugify from "slugify"
import { FluidObject } from "gatsby-image"
import styled from "styled-components"
import SEO from "../components/seo"
import ArticlePreview from "../components/PagePreviews/ArticlePreview/ArticlePreview"
import { Media } from "../assets/styles/const"

const Wrapper = styled.main`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
  grid-gap: 10px;
  justify-content: center;
  @media ${Media.TABLET} {
    justify-content: start;
  }
`

export const query = graphql`
  {
    allDatoCmsArticle {
      nodes {
        title
        date(formatString: "D.M.Y")
        featuredImage {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`
interface PostInterface {
  title: string
  date: string
  featuredImage: {
    alt: string
    fluid: FluidObject
  }
}
interface BlogInterface {
  allDatoCmsArticle: {
    nodes: PostInterface[]
  }
}

const Blog: React.FC<PageProps<BlogInterface>> = ({ data }) => (
  <>
    <SEO title="Blog" />
    <h1>Ostatnie wpisy:</h1>
    <Wrapper>
      {data.allDatoCmsArticle.nodes.map(item => (
        <ArticlePreview
          key={item.title}
          {...item}
          slug={slugify(item.title, { lower: true })}
        />
      ))}
    </Wrapper>
  </>
)

export default Blog
