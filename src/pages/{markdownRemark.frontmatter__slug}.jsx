import * as React from "react"
import { graphql, Link } from "gatsby"

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
        <h1 className="font-bold text-2xl mb-2">Hello World!</h1>
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
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
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

    files: allMarkdownRemark {
      edges {
        node {
          id
          html
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