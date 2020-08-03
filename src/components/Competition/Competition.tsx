import React from "react"
import styled from "styled-components"
import Image, { FluidObject } from "gatsby-image"
import { Colors, FontSize, Media, FontWeight } from "../../assets/styles/const"

const Wrapper = styled.section`
  margin: 30px 0;
  display: flex;
  flex-direction: column;

  @media ${Media.TABLET} {
    flex-direction: row;
    margin: 30px 0;
  }
`
const ContentWrapper = styled.article`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 10px 0 0;
  }
`
const CompetitionLink = styled.a`
  border-radius: 10px;
  display: block;
  font-weight: ${FontWeight.SEMIBOLD};
  font-size: ${FontSize.TEXT_NORMAL};
  padding: 14px 0;
  width: 200px;
  max-height: 50px;
  text-align: center;
  background-color: ${Colors.BLUE};
  color: ${Colors.WHITE};
`
const Date = styled.p`
  font-size: ${FontSize.TEXT_SMALL};
  margin: 5px 0;
`
const StyledImage = styled(Image)`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  margin: 0 auto;
  @media ${Media.TABLET} {
    margin: 0 30px 0 0;
  }
`
interface CompetitionInterface {
  title: string
  description: string
  link: string
  date: string
  featuredImage: {
    alt: string
    fluid: FluidObject
  }
}

const Competition: React.FC<CompetitionInterface> = ({
  title,
  description,
  link,
  date,
  featuredImage: { fluid },
}) => (
  <Wrapper>
    <StyledImage fluid={fluid} />
    <ContentWrapper>
      <h2>{title}</h2>
      <Date>{date}</Date>
      <p>{description}</p>
      <CompetitionLink href={link}>Odwiedź stronę &rarr;</CompetitionLink>
    </ContentWrapper>
  </Wrapper>
)
export default Competition
