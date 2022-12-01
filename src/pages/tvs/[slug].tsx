import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { type NextPage } from 'next'
import MediaInfo from '../../components/MediaInfo'
import tmdbHandler from '../../services/tmdb'
import type { Credits, MediaDetails } from '../../types/media'
import type { Status } from '../../types/media'

async function getTVDetails(id: number): Promise<MediaDetails | Status> {
  const tvResponse = await tmdbHandler(`tv/${id}`)
  const tvJson = await tvResponse.json()
  return tvJson
}

async function getTVCredits(id: number): Promise<Credits | Status> {
  const tvCreditsResponse = await tmdbHandler(`tv/${id}/credits`)
  const tvCredits = await tvCreditsResponse.json()
  return tvCredits
}

const isStatus = (o: MediaDetails | Status): o is Status => {
  return 'status_code' in o
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = Number(params?.slug)
  if (id) {
    const [res1, res2] = await Promise.all([getTVDetails(id), getTVCredits(id)])

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

const TV: NextPage = ({
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

export default TV
