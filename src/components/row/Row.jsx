import React, { useState, useEffect } from "react";
import { RowContainer, RowContent, RowTitle, RowItem } from './row.element'
import axios from '../../api/axios'

function Row({ fetchUrl, title, islarge }) {

  const [movies, setMovies] = useState([])
  const ImgUrl = "https://image.tmdb.org/t/p/original"

  useEffect(() => {
    const fetchMovies = async () => {
      const { data: {results} } = await axios.get(fetchUrl)
      setMovies(results)
    }
    fetchMovies()
  },[fetchUrl])

  return (
    <RowContainer>
      <RowTitle>{title}</RowTitle>
        <RowContent >
          {movies.map((movie) => {
            const {id, poster_path, backdrop_path, title, name, original_title, original_name} = movie
            return (
              <RowItem 
              src={poster_path && islarge ? `${ImgUrl}${poster_path}` : `${ImgUrl}${backdrop_path}`} 
              alt={name || original_name || title || original_title} 
              key={id} />
            )
          })}
        </RowContent>
    </RowContainer>
  )
}

export default Row;
