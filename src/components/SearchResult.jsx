import React from 'react'
import './SearchResult.css'

export const SearchResult = ({ result }) => {
  return (
    <div className='search-result' onClick={(e) => alert(`Você clicou no(a) ${result.name}`)}>{result.name}</div>
  )
}

export default SearchResult;