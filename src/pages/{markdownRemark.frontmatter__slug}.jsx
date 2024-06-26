import * as React from "react"
import { graphql, Link } from "gatsby"

import Search from "../components/search"
const searchIndices = [{ name: `Pages`, title: `Pages`, tags: `Pages` }]

const pageStyles = {
  padding: 40,
}

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
    
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <main style={pageStyles}>
      <div>
        <Search indices={searchIndices} />
        <h1 className="font-bold text-2xl mb-2">{frontmatter.title}</h1>
        <h2 className="font-medium text-xl mb-2">{frontmatter.date}</h2>
        <ul className="p-2 border-2 border-gray-400 mb-6">
          {data.files.edges.map( ({node}) => {

            console.log(node.frontmatter)

            return (

              <li key={node.id} className={[
                  node.frontmatter.tags[0] === "guides" ? "bg-blue-400" : 
                  node.frontmatter.tags[0] === "tests" ? "bg-red-400" :
                  "bg-green-400",
                  "m-2 p-2 rounded-lg"
                  ].join(" ")}>
                <Link to={`/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
              </li>

            )
          })}
        </ul>

        <div>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>

      </div>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export const pageQuery = graphql`
  query($id: String!) {

    files: allMarkdownRemark(sort: {frontmatter: {number: ASC}}) {
      edges {
        node {
          id
          frontmatter {
            title
            tags
            slug
          }
        }
      }
    }

    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }

  }
`