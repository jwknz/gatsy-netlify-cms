import * as React from "react"

import { graphql  } from "gatsby"

const pageStyles = {
  padding: 0,
}


const IndexPage = ({data}) => {

  return (
    <main style={pageStyles}>
      <div>
        <h1 className="font-bold text-2xl mb-2">Hello World!</h1>
        <ul className="p-2 border-2 border-gray-400">
          {data.files.edges.map( ({node}) => {
            return (
              <li key={node.id}>
                < div
                    dangerouslySetInnerHTML={{__html: node.html}}
                  />
              </li>
            )
          })}
        </ul>
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
          }
        }
      }
    }
  }
`
