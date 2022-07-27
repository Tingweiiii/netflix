const API_KEY = "c2d14e09bfdac1424bf96fbd51528e2d"

const requests = {
    fetchTrendingMavie: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRate: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
    fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchbHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchbComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    searchMovie: `/search/movie?api_key=${API_KEY}&language=en-US&query=`,
    genreList: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    genreMovie: `/discover/movie?api_key=${API_KEY}&with_genres=`,

}

export default requests