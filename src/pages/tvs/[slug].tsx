import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { type NextPage } from 'next'
import MediaInfo from '../../components/MediaInfo'
import tmdbHandler from '../../services/tmdb'
import type { MediaDetails } from '../../types/media'
import type { Status } from '../../types/media'

async function getTVDetails(id: number): Promise<MediaDetails | Status> {
  const tvsResponse = await tmdbHandler(`tv/${id}`)
  const tvsJson = await tvsResponse.json()
  return tvsJson
}

const isStatus = (o: MediaDetails | Status): o is Status => {
  return 'status_code' in o
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = Number(params?.slug)
  if (id) {
    const response = await getTVDetails(id)
    if (!isStatus(response)) {
      return {
        props: {
          mediaDetails: response,
        },
      }
    }
    if (response.status_code != 34) {
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
