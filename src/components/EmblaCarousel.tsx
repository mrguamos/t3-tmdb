import React, { useState, useEffect, useCallback } from 'react'
import { DotButton, PrevButton, NextButton } from './EmblaCarouselButton'
import useEmblaCarousel from 'embla-carousel-react'

import type {
  PopularMoviesType,
  TopMoviesType,
  UpcomingMoviesType,
} from '../types/movies'
import type { PopularTVSType, TopTVSType, OnAirTVSType } from '../types/tv'
import MediaCard from './MediaCard'

type Props = {
  items:
    | PopularMoviesType
    | PopularTVSType
    | TopMoviesType
    | UpcomingMoviesType
    | TopTVSType
    | OnAirTVSType
}

const EmblaCarousel = ({ items }: Props) => {
  const [viewportRef, embla] = useEmblaCarousel({
    dragFree: true,
    containScroll: 'trimSnaps',
    skipSnaps: false,
    slidesToScroll: 1,
    align: 'start',
  })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([] as number[])

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  )

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelectedIndex(embla.selectedScrollSnap())
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla, setSelectedIndex])

  useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on('select', onSelect)
  }, [embla, setScrollSnaps, onSelect])

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {items.results?.map((item, index) => {
              return (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__inner">
                    <MediaCard details={item} key={item.id} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  )
}

export default EmblaCarousel
