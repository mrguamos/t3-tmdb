import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next'
import TheTvShows from '../components/TheTvShows'
import tmdbHandler from '../services/tmdb'
import type { PopularTVSType, TopTVSType, OnAirTVSType } from '../types/tv'

async function getPopularTVS(page = 1): Promise<PopularTVSType> {
  const moviesResponse = await tmdbHandler(`tv/popular?page=${page}`)
  const moviesJson = await moviesResponse.json()
  return moviesJson
}

async function getTopTVS(page = 1): Promise<TopTVSType> {
  const moviesResponse = await tmdbHandler(`tv/top_rated?page=${page}`)
  const moviesJson = await moviesResponse.json()
  return moviesJson
}

async function getOnAirTVS(page = 1): Promise<OnAirTVSType> {
  const moviesResponse = await tmdbHandler(`tv/on_the_air?page=${page}`)
  const moviesJson = await moviesResponse.json()
  return moviesJson
}

export const getServerSideProps: GetServerSideProps = async () => {
  const [popularTVS, topTVS, onAirTVS] = await Promise.all([
    getPopularTVS(),
    getTopTVS(),
    getOnAirTVS(),
  ])
  return {
    props: {
      popularTVS,
      topTVS,
      onAirTVS,
    }, // will be passed to the page component as props
  }
}

const Movies: NextPage = ({
  popularTVS,
  topTVS,
  onAirTVS,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <TheTvShows popularTVS={popularTVS} topTVS={topTVS} onAirTVS={onAirTVS} />
  )
}

export default Movies
