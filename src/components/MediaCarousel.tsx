import MediaCard from './MediaCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Lazy, FreeMode, Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import type { Media } from '../types/media'

type Props = {
  item: Media
}

const MediaCarousel = ({ item }: Props) => {
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
      className={'w-full'}
    >
      {item.results?.map((result) => {
        return (
          <SwiperSlide key={result.id}>
            <MediaCard details={result} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default MediaCarousel
