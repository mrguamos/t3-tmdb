import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { type NextPage } from 'next'
import MediaInfo from '../../components/MediaInfo'
import tmdbHandler from '../../services/tmdb'
import type { Credits, MediaDetails } from '../../types/media'
import type { Status } from '../../types/media'

async function getMovieDetails(id: number): Promise<MediaDetails | Status> {
  const movieResponse = await tmdbHandler(`movie/${id}`)
  const movieJson = await movieResponse.json()
  return movieJson
}

async function getMovieCredits(id: number): Promise<Credits | Status> {
  const movieCreditsResponse = await tmdbHandler(`movie/${id}/credits`)
  const movieCredits = await movieCreditsResponse.json()
  return movieCredits
}

const isStatus = (o: MediaDetails | Status): o is Status => {
  return 'status_code' in o
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = Number(params?.slug)
  if (id) {
    const [res1, res2] = await Promise.all([
      getMovieDetails(id),
      getMovieCredits(id),
    ])

    if (!isStatus(res1)) {
      return {
        props: {
          mediaDetails: res1,
          mediaCredits: res2,
        },
      }
    }
    if (res1.status_code != 34) {
      throw new Error('Internal Server Error')
    }
  }
  return {
    notFound: true,
  }
}

const Movie: NextPage = ({
  mediaDetails,
  mediaCredits,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <MediaInfo
      mediaDetails={mediaDetails}
      mediaCredits={mediaCredits}
    ></MediaInfo>
  )
}

export default Movie
