import * as React from "react"
import { Link } from "gatsby"
import {
  Wrapper,
  PageBox,
  PageNbr,
  InvisibleFirstBox,
  InvisibleLastBox,
} from "./Pagination.styles"
interface PaginationProps {
  data: {
    currentPage: number
    numPages: number
    skip: number
    limit: number
  }
}

const Pagination: React.FC<PaginationProps> = ({
  data: { currentPage, numPages },
}) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  return (
    <Wrapper>
      <InvisibleFirstBox active={!isFirst}>
        {!isFirst && (
          <Link
            to={`${currentPage === 2 ? "/blog" : `/blog/${prevPage}`}`}
            rel="prev"
          >
            ←
          </Link>
        )}
      </InvisibleFirstBox>
      <PageBox>
        {Array.from({ length: numPages }, (_, i) => (
          <PageNbr key={`pagination-number${i + 1}`} currentPage={currentPage}>
            <Link to={`/blog/${i === 0 ? "" : i + 1}`}>{i + 1}</Link>
          </PageNbr>
        ))}
      </PageBox>
      <InvisibleLastBox active={!isLast}>
        {!isLast && (
          <Link to={`/blog/${nextPage}`} rel="next">
            →
          </Link>
        )}
      </InvisibleLastBox>
    </Wrapper>
  )
}
export default Pagination
