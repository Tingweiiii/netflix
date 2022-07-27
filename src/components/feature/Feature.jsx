import React, { useEffect, useState } from "react";
import { FeatureContainer, FeatureContent, FeatureType, FeatureSelect, FeatureOptGroup, FeatureOption } from './feature.element'
import axios from '../../api/axios'

function Feature({ type, fetchUrl }) {

  const [genreList, setGenreList] = useState([])

  useEffect(() => {
    const fetchList = async () => {
      const { data: {genres} } = await axios.get(fetchUrl)
      setGenreList(genres)
    }
    fetchList()
  },[fetchUrl])

  return (
    <FeatureContainer>
        {type && (
          <FeatureContent>
            <FeatureType>{type === "movies" ? "Movies" : "Serise"}</FeatureType>
            <FeatureSelect>
              <FeatureOptGroup label="Genre">
              {genreList.map((item) => {
                const {id, name} = item
                return (
                  <FeatureOption name={name} value={`${name}`} key={id}>{name}</FeatureOption>
                )
              })}
              </FeatureOptGroup>
            </FeatureSelect>
          </FeatureContent>
        )}
    </FeatureContainer>
  )
}

export default Feature







//      const { data: {genres} } = await axios.get(fetchUrl)
// setGenreList(genre)
// console.log(genreList)