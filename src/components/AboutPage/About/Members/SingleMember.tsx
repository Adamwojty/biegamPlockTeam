import React from "react"
import { Wrapper, Img, Title, SubTitle, Profile } from "./SingleMember.styles"

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
}

const SingleMember: React.FC<MemberInterface> = ({
  name,
  profileLink,
  featuredImage,
  role,
}) => {
  return (
    <Wrapper>
      <Img src={featuredImage.fluid.src} />
      <Title>{name}</Title>
      <SubTitle>{role}</SubTitle>
      <Profile href={profileLink} target="blank" rel="noreferrer noopener">
        Profil facebook
      </Profile>
    </Wrapper>
  )
}
export default SingleMember
