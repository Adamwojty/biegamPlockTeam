import * as React from "react"
import { Link } from "gatsby"

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
    <>
      {!isFirst && (
        <Link to={`/blog/${prevPage}`} rel="prev">
          ← Previous Page
        </Link>
      )}
      {Array.from({ length: numPages }, (_, i) => (
        <li key={`pagination-number${i + 1}`}>
          <Link to={`/blog/${i === 0 ? "" : i + 1}`}>{i + 1}</Link>
        </li>
      ))}
      {!isLast && (
        <Link to={`/blog/${nextPage}`} rel="next">
          Next Page →
        </Link>
      )}
    </>
  )
}
export default Pagination
