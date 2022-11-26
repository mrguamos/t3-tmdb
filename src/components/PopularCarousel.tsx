import type { PopularMoviesType } from '../types/movies'
import type { PopularTVSType } from '../types/tv'
import MediaCard from './MediaCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination, Navigation } from 'swiper'
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
      slidesPerView={'auto'}
      slidesPerGroup={1}
      loop={true}
      centeredSlides
      loopFillGroupWithBlank={true}
      navigation={true}
      modules={[FreeMode, Pagination, Navigation]}
      spaceBetween={30}
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
