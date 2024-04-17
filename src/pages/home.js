import * as React from "react"

import { graphql  } from "gatsby"

const pageStyles = {
  padding: 0,
}

const IndexPage = ({data}) => {

    console.log(data.files)

    return (
        <main style={pageStyles}>
            <div>
                <h1 className="font-bold text-2xl mb-2">Hello Single World!</h1>
                <div className="p-2 border-2 border-gray-400"
                    dangerouslySetInnerHTML={{__html: ""}} //data.files.html
                />
            </div>
        </main>
    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

export const query = graphql`
  query {
    files: markdownRemark(id: {eq: "26d78335-3163-5e06-9bed-14fc65901dd0"}) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
