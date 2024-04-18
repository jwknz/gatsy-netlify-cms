import styled, { css } from "styled-components"
import SearchBox from "./search-box"

const open = css`
  width: 100%;
  background: ${({ theme }) => theme.background};
  cursor: text;

  border: 2px #0000ff solid;
  border-radius: 20px;
  padding: 10px;

  margin-left: -1.6em;
  padding-left: 1.6em;
`

const closed = css`
    width: 100%;
    background: ${({ theme }) => theme.background};
    cursor: text;

    border: 2px #222 solid;
    border-radius: 20px;
    padding: 10px;

    margin-left: -1.6em;
    padding-left: 1.6em;
`

export default styled(SearchBox)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 0;

  .SearchInput {
    outline: none;
    border: ${({ hasFocus }) => (hasFocus ? "auto" : "none")};
    font-size: 1em;
    transition: 100ms;
    border-radius: 2px;
    color: ${({ theme }) => theme.foreground};
    ::placeholder {
      color: ${({ theme }) => theme.faded};
    }
    ${({ hasFocus }) => (hasFocus ? open : closed)}
  }

  .SearchIcon {
    width: 1em;
    margin: 0.3em;
    color: ${({ theme }) => theme.foreground};
    pointer-events: none;
    z-index: 1;
  }
`