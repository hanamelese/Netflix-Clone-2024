const API = "proccess.env.REACT_APP_API";
const requests = {
    fetchTrending: `trending/all/week?api_key=${API}&language=en-US`,
    fetchNetflixOriginal: `/discover/tv?api_key=${API}&with_networks=213`,
    fetchTopRateMovies: `/movie/top_rated?api_key=${API}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API}&with_genres=28`, // Added missing value
    fetchAnimationMovies: `/discover/movie?api_key=${API}&with_genres=16`, // Added missing value
    fetchHorrorMovies: `/discover/movie?api_key=${API}&with_genres=27`,
    fetchDocumentaries: `/discover/movie?api_key=${API}&with_genres=99`,
    fetchRomanceMovie: `/discover/movie?api_key=${API}&with_genres=10749`,
    fetchComedyMovie: `/discover/movie?api_key=${API}&with_genres=35`,
    fetchTvShow: `tv/popular?api_key=${API}` // Fixed missing API key
};

export default requests;