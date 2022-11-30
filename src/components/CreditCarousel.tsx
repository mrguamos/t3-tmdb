import { Swiper, SwiperSlide } from 'swiper/react'
import { Lazy, FreeMode, Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import type { Credits } from '../types/media'
import CastCard from './CastCard'

type Props = {
  item: Credits
}

const CreditCarousel = ({ item }: Props) => {
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
      {item.cast?.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <CastCard details={item} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default CreditCarousel
