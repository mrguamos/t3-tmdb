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
      loop={true}
      loopFillGroupWithBlank={true}
      navigation={true}
      modules={[Lazy, FreeMode, Pagination, Navigation]}
      spaceBetween={20}
      className={'flex w-full'}
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
