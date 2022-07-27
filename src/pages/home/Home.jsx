import React, { useEffect, useState } from "react";
import { Banner, Row, Feature } from '../../components'
import { HomeContainer, RowGroup } from './home.element'
import axios from '../../api/axios'
import requests from '../../api/requests'

function Home({ type }) {

  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchMovie = async () => {
      const { data: {results} } = await axios.get(requests.fetchTrendingMavie)
      setMovie(results[Math.floor(Math.random() * ( results.length - 1 ))])
    }
    fetchMovie()
  },[])

  return (
    <HomeContainer>
      <Feature type={type} fetchUrl={requests.genreList} />
      <Banner movie={movie} />
      <RowGroup>
        <Row fetchUrl={requests.fetchTopRate} title="Top Rate Movie" islarge />
        <Row fetchUrl={requests.fetchPopular} title="Popular Movie" />
        <Row fetchUrl={requests.fetchAction} title="Action Movie" />
        <Row fetchUrl={requests.fetchRomance} title="Romance Movie" />
        <Row fetchUrl={requests.fetchbHorror} title="Horror Movie" />
        <Row fetchUrl={requests.fetchbComedy} title="Comedy Movie" />
      </RowGroup>
    </HomeContainer>
  )
}

export default Home;
