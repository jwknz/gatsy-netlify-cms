import * as React from "react"

import { graphql  } from "gatsby"

const pageStyles = {
  padding: 40,
}

const IndexPage = ({data}) => {

  return (
    <main style={pageStyles}>
      <div>
        <h1 className="font-bold text-2xl mb-2">Hello World!</h1>
        <ul className="p-2 border-2 border-gray-400 mb-6">
          {data.files.edges.map( ({node}) => {
            return (

              <li key={node.id} className={[
                  node.frontmatter.tags[0] === "guides" ? "bg-blue-400" : 
                  node.frontmatter.tags[0] === "tests" ? "bg-red-400" :
                  "bg-green-400",
                  "m-2 p-2 rounded-lg"
                  ].join(" ")}>
                <span>{node.frontmatter.title}</span>
              </li>

            )
          })}
        </ul>

        <div>
          Hello
        </div>

      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

export const query = graphql`
  query {
    files: allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`
