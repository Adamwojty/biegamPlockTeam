import React from "react"
import { FluidObject } from "gatsby-image"
import { graphql, PageProps } from "gatsby"
import Slider from "../components/Slider/Slider"
import Picutre from "../components/Picture/Picture"
import {
  Wrapper,
  Img,
  Title,
  Author,
  Header,
  Paragraph,
  BackLink,
} from "./post.styles"

export const query = graphql`
  query querySingleArticle($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      author
      title
      date(formatString: "D.M.Y")
      featuredImage {
        fluid(maxWidth: 700, maxHeight: 700) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      articleContent {
        ... on DatoCmsHeading {
          id
          heading
        }
        ... on DatoCmsDescription {
          id
          description
        }
        ... on DatoCmsPicture {
          id
          picture {
            title
            fluid(maxWidth: 700, maxHeight: 700) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
      }
      gallery {
        fluid(maxWidth: 700, maxHeight: 700) {
          src
        }
      }
    }
  }
`
interface PictureInterface {
  title: string
  fluid: FluidObject
}
interface ArticleContentInterface {
  id: string
  heading?: string
  description?: string
  picture?: PictureInterface
}
interface PostInterface {
  datoCmsArticle: {
    author: string
    title: string
    date: string
    gallery: { fluid: { src: string } }[]
    featuredImage: {
      fluid: FluidObject
    }
    articleContent: ArticleContentInterface[]
  }
}

const PostLayout: React.FC<PageProps<PostInterface>> = ({ data }) => {
  const handleRenderComponents = (item: ArticleContentInterface) => {
    const itemKey = Object.keys(item)[2]
    switch (itemKey) {
      case "description":
        return <Paragraph key={item.id}>{item[itemKey]}</Paragraph>
      case "heading":
        return <Header key={item.id}>{item[itemKey]}</Header>
      case "picture":
        return <Picutre data={item[itemKey]} key={item.id} />
      default:
        return null
    }
  }
  return (
    <main>
      <Wrapper>
        <Title>{data.datoCmsArticle.title}</Title>
        <Author>
          Autor: {data.datoCmsArticle.author}, {data.datoCmsArticle.date}
        </Author>
        {data.datoCmsArticle.gallery.length > 1 ? (
          <Slider data={data.datoCmsArticle.gallery} />
        ) : (
          <Img src={data.datoCmsArticle.featuredImage.fluid.src} />
        )}
        <div>
          {data.datoCmsArticle.articleContent.map(item => {
            return handleRenderComponents(item)
          })}
        </div>
        <BackLink to="/blog">Powrót &rarr;</BackLink>
      </Wrapper>
    </main>
  )
}

export default PostLayout
