import * as React from "react"

import { graphql, Link } from "gatsby"

import Search from "../components/search"
const searchIndices = [{ name: `Pages`, title: `Pages`, tags: `Pages` }]

const pageStyles = {
  padding: 40,
}

const IndexPage = ({data}) => {

  return (
    <main style={pageStyles}>
      <div>
        <Search indices={searchIndices} />
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
                <Link to={`/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
              </li>

            )
          })}
        </ul>
        
      </div>
    </main>
  )
}

//autoFocus={window.innerWidth < 1081 ? false : false}

export default IndexPage

export const Head = () => <title>Home Page</title>

export const query = graphql`
  query {
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
  }
`

