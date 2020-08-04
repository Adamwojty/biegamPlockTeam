import React from "react"
import styled from "styled-components"
import Image, { FluidObject } from "gatsby-image"
import { graphql, PageProps } from "gatsby"
import Slider from "../components/Slider/Slider"
import { Media, FontSize, Colors } from "../assets/styles/const"
import Picutre from "../components/Picture/Picture"
import StyledLink from "../components/Link/Link"
const Wrapper = styled.article`
  margin: 20px 0 100px;
  display: flex;
  flex-direction: column;
`
const StyledImage = styled(Image)`
  margin: 0 auto 30px auto;
  width: 280px;
  @media ${Media.MOBILE_L} {
    width: 500px;
  }
  @media ${Media.TABLET} {
    width: 700px;
    margin: 50px auto;
  }
`
const Title = styled.h2`
  margin: 10px 0 5px;
`
const Author = styled.p`
  font-size: ${FontSize.TEXT_SMALL};
  margin: 0;
`
const Header = styled.h3`
  font-size: ${FontSize.HEADER_NORMAL};
  margin: 5px 0 10px;
`
const BackLink = styled(StyledLink)`
  margin-top: 25px;
  color: ${Colors.WHITE};
  background-color: ${Colors.BLUE};
`

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
          ...GatsbyDatoCmsFluid_tracedSVG
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
    gallery: FluidObject[]
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
        return <p key={item.id}>{item[itemKey]}</p>
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
          <StyledImage fluid={data.datoCmsArticle.featuredImage.fluid} />
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
