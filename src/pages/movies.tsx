import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next'
import TheMovies from '../components/TheMovies'
import tmdbHandler from '../services/tmdb'
import type {
  PopularMoviesType,
  TopMoviesType,
  UpcomingMoviesType,
} from '../types/movies'

async function getPopularMovies(page = 1): Promise<PopularMoviesType> {
  const moviesResponse = await tmdbHandler(`movie/popular?page=${page}`)
  const moviesJson = await moviesResponse.json()
  return moviesJson
}

async function getTopMovies(page = 1): Promise<TopMoviesType> {
  const moviesResponse = await tmdbHandler(`movie/top_rated?page=${page}`)
  const moviesJson = await moviesResponse.json()
  return moviesJson
}

async function getUpcomingMovies(page = 1): Promise<UpcomingMoviesType> {
  const moviesResponse = await tmdbHandler(`movie/upcoming?page=${page}`)
  const moviesJson = await moviesResponse.json()
  return moviesJson
}

export const getServerSideProps: GetServerSideProps = async () => {
  const [popularMovies, topMovies, upcomingMovies] = await Promise.all([
    getPopularMovies(),
    getTopMovies(),
    getUpcomingMovies(),
  ])
  return {
    props: {
      popularMovies,
      topMovies,
      upcomingMovies,
    }, // will be passed to the page component as props
  }
}

const Movies: NextPage = ({
  popularMovies,
  topMovies,
  upcomingMovies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <TheMovies
      popularMovies={popularMovies}
      topMovies={topMovies}
      upcomingMovies={upcomingMovies}
    />
  )
}

export default Movies
