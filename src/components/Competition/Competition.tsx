import React from "react"
import { FluidObject } from "gatsby-image"
import {
  Wrapper,
  ContentWrapper,
  Date,
  CompetitionLink,
  Img,
} from "./Competition.styles"

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
    <Img fluid={fluid} />
    <ContentWrapper>
      <h2>{title}</h2>
      <Date>{date}</Date>
      <p>{description}</p>
      <CompetitionLink href={link} target="blank">
        Odwiedź stronę &rarr;
      </CompetitionLink>
    </ContentWrapper>
  </Wrapper>
)
export default Competition
