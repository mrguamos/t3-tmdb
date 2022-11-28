import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next'
import tmdbHandler from '../services/tmdb'
import type { PopularMoviesType } from '../types/movies'
import type { PopularTVSType } from '../types/tv'

async function getPopularMovies(page = 1): Promise<PopularMoviesType> {
  const moviesResponse = await tmdbHandler(`movie/popular?page=${page}`)
  const moviesJson = await moviesResponse.json()
  return moviesJson
}

async function getPopularTVS(page = 1): Promise<PopularTVSType> {
  const tvsResponse = await tmdbHandler(`tv/popular?page=${page}`)
  const tvsJson = await tvsResponse.json()
  return tvsJson
}

export const getServerSideProps: GetServerSideProps = async () => {
  const [popularMovies, popularTVS] = await Promise.all([
    getPopularMovies(),
    getPopularTVS(),
  ])
  return {
    props: {
      popularMovies,
      popularTVS,
    }, // will be passed to the page component as props
  }
}

const Movies: NextPage = ({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) => {
  return <div>Movies</div>
}

export default Movies
