const path = require(`path`)
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      query querryCMSPage {
        allDatoCmsArticle {
          nodes {
            id
            title
          }
        }
      }
    `
  )

  //CREATE POST
  result.data.allDatoCmsArticle.nodes.forEach(post => {
    const blogPostTemplate = path.resolve(`src/layouts/post.tsx`)
    const slugifiedTitle = slugify(post.title, { lower: true })
    createPage({
      path: `/blog/${slugifiedTitle}`,
      component: blogPostTemplate,
      context: {
        id: post.id,
        slug: `/blog/${slugifiedTitle}`,
      },
    })
  })
  //CREATE BLOG LIST
  const posts = result.data.allDatoCmsArticle.nodes
  const postsPerPage = 1
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `blog/` : `blog/${i + 1}`,
      component: path.resolve("./src/layouts/blog.tsx"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
