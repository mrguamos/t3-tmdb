import type {
  PopularMoviesType,
  TopMoviesType,
  UpcomingMoviesType,
} from '../types/movies'
import type { PopularTVSType, TopTVSType, OnAirTVSType } from '../types/tv'
import type { Settings } from 'react-slick'
import Slider from 'react-slick'
import MediaCard from './MediaCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type Props = {
  items:
    | PopularMoviesType
    | PopularTVSType
    | TopMoviesType
    | UpcomingMoviesType
    | TopTVSType
    | OnAirTVSType
}

const settings: Settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
}

const MediaSlick = ({ items }: Props) => {
  return (
    <div>
      <Slider {...settings}>
        {items.results?.map((item) => {
          return <MediaCard details={item} key={item.id} />
        })}
      </Slider>
    </div>
  )
}

export default MediaSlick
