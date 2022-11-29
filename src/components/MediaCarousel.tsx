import type {
  PopularMoviesType,
  TopMoviesType,
  UpcomingMoviesType,
} from '../types/movies'
import type { PopularTVSType, TopTVSType, OnAirTVSType } from '../types/tv'
import MediaCard from './MediaCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Lazy, FreeMode, Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

type Props = {
  items:
    | PopularMoviesType
    | PopularTVSType
    | TopMoviesType
    | UpcomingMoviesType
    | TopTVSType
    | OnAirTVSType
}

const MediaCarousel = ({ items }: Props) => {
  return (
    <Swiper
      freeMode
      lazy={true}
      spaceBetween={10}
      slidesPerView={'auto'}
      slidesPerGroup={1}
      loopFillGroupWithBlank={true}
      navigation={true}
      modules={[Lazy, FreeMode, Pagination, Navigation]}
      className={'w-full space-x-2'}
      style={{
        overflow: 'visible',
        clipPath: 'inset( -100vw -100vw -100vw 0 )',
      }}
    >
      {items.results?.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <MediaCard details={item} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default MediaCarousel
