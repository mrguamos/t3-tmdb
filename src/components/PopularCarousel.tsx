import type { PopularMoviesType } from '../types/movies'
import type { PopularTVSType } from '../types/tv'
import MediaCard from './MediaCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Lazy, FreeMode, Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

type Props = {
  items: PopularMoviesType | PopularTVSType
}

const PopularCarousel = ({ items }: Props) => {
  return (
    <Swiper
      freeMode
      lazy={true}
      slidesPerView={'auto'}
      slidesPerGroup={1}
      loopFillGroupWithBlank={true}
      navigation={true}
      modules={[Lazy, FreeMode, Pagination, Navigation]}
      className={'flex w-full space-x-2'}
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

export default PopularCarousel
