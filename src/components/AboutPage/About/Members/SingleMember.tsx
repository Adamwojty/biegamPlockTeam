import React from "react"
import {
  Wrapper,
  Img,
  Title,
  SubTitle,
  Profile,
  Date,
} from "./SingleMember.styles"

interface MemberInterface {
  featuredImage: {
    fluid: {
      src: string
    }
  }
  id: string
  name: string
  profileLink: string
  role: string
  joinData: string
}

const SingleMember: React.FC<MemberInterface> = ({
  name,
  profileLink,
  featuredImage,
  role,
  joinData,
}) => {
  return (
    <Wrapper>
      <Img src={featuredImage.fluid.src} alt={name} />
      <Title>{name}</Title>
      <Date>W drużynie od: {joinData}</Date>
      <SubTitle>{role}</SubTitle>
      <Profile href={profileLink} target="blank" rel="noreferrer noopener">
        Profil facebook
      </Profile>
    </Wrapper>
  )
}
export default SingleMember
