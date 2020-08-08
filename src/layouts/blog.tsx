import React from "react"
import { graphql, PageProps } from "gatsby"
import slugify from "slugify"
import { FluidObject } from "gatsby-image"
import SEO from "../components/SeoComponent"
import ArticlePreview from "../components/BlogPage/ArticlePreview/ArticlePreview"
import { Wrapper } from "./blog.styles"
import Pagination from "../components/BlogPage/Pagination/Pagination"
export const query = graphql`
  query querryCMSPage($skip: Int!, $limit: Int!) {
    allDatoCmsArticle(limit: $limit, skip: $skip) {
      nodes {
        id
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
interface BlogProps {
  data: {
    allDatoCmsArticle: {
      nodes: {
        id: string
        title: string
        date: string
        featuredImage: {
          fluid: FluidObject
        }
      }[]
    }
  }
  pageContext: {
    numPages: number
  }
}

const Index: React.FC<BlogProps> = ({ data, pageContext }) => {
  return (
    <>
      <SEO title="Blog" />
      <h1>Ostatnie wpisy:</h1>
      <Wrapper>
        {data.allDatoCmsArticle.nodes.map(post => {
          const slug = slugify(post.title, { lower: true })
          return <ArticlePreview key={post.id} {...post} slug={slug} />
        })}
      </Wrapper>
      {pageContext.numPages === 1 ? null : <Pagination data={pageContext} />}
    </>
  )
}
export default Index
