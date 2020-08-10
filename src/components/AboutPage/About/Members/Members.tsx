import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SingleMember from "./SingleMember"
import { Wrapper } from "./Members.styles"
const query = graphql`
  query queryTeamMembers {
    allDatoCmsMember {
      nodes {
        featuredImage {
          fluid {
            src
          }
        }
        id
        name
        profileLink
        role
      }
    }
  }
`
interface MemberQuery {
  allDatoCmsMember: {
    nodes: {
      featuredImage: {
        fluid: {
          src: string
        }
      }
      id: string
      name: string
      profileLink: string
      role: string
    }[]
  }
}

const Members: React.FC = () => {
  const data = useStaticQuery<MemberQuery>(query)
  return (
    <>
      <h3>Nasi zawodnicy:</h3>
      <Wrapper>
        {data.allDatoCmsMember.nodes.map(member => (
          <SingleMember {...member} key={member.id} />
        ))}
      </Wrapper>
    </>
  )
}
export default Members
