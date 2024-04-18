import { useState } from "react"
import * as React from "react"

import { graphql  } from "gatsby"

const pageStyles = {
  padding: 30,
}

const handleSubmit = (event) => {

  if (event.key === 'Enter') {

    // addQuery(query)

    // if (query === "") {
    //   navigate({
    //     pathname: "/"
    //   })
    // } else {
    //   navigate({
    //     pathname: "/search"
    //   })
    // }

  }

}

const handleClickSubmit = (event) => {

  // addQuery(query)

  // if (query === "") {
  //   navigate({
  //     pathname: "/"
  //   })
  // } else {
  //   navigate({
  //     pathname: "/search"
  //   })
  // }

}

const IndexPage = ({data}) => {

    const [query, setQuery] = useState("")

    return (
        <main style={pageStyles}>
          <form className="print:hidden flex flex-row items-center rounded-lg px-1 w-full space-x-4">
            <input  tabIndex="0" onKeyDown={handleSubmit} className="text-black my-2 p-2 border-rose-500 border-2 rounded-lg w-full" placeholder="search..." value={query} onChange={(e) => setQuery(e.target.value)} />
            <div className="flex justify-between space-x-4">
              <button className="border-2 bg-slate-300 dark:bg-slate-700 border-blue-900 rounded-lg py-2 px-3 h-11 my-2 text-sm" onClick={handleClickSubmit} type="button">Search</button>
            </div>
          </form>

          <div className="p-2">

          </div>

        </main>
    )
}

export default IndexPage

export const Head = () => <title>Search Page</title>