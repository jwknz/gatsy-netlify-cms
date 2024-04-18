import React from "react"
import { Link } from "gatsby"
import {
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy,
  useStats,
} from "react-instantsearch"

const HitCount = () => {
  const { nbHits } = useStats()

  return nbHits > 0 ? (
    <div className="HitCount">
      {nbHits} result{nbHits !== 1 ? "s" : ""}
    </div>
  ) : null
}

const PageHit = ({ hit }) => {

  return (
    <div className="flex flex-col space-y-4 h-24 bg-green-200">
      <Link to={`/${hit.slug}`}>
        <h4>
          <Highlight attribute="title" hit={hit} className={hit.tags[0] === "guides" ? "bg-red-200 p-2 my-4 rounded-xl" : "bg-blue-200 p-2 my-4 rounded-xl"} />
        </h4>
      </Link>
      <Snippet attribute="excerpt" hit={hit} />
    </div>
  )

}

const HitsInIndex = ({ index }) => {

  return (
    <Index indexName={index.name}>
      <HitCount />
      <Hits className="Hits" hitComponent={PageHit} />
    </Index>
  )
}

const SearchResult = ({ indices, className }) => {

  return (
    <div className={className}>
      {indices.map(index => (
        <HitsInIndex index={index} key={index.name} />
      ))}
      {/* <PoweredBy /> */}

    </div>
  )
}

export default SearchResult