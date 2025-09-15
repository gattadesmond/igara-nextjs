'use client'

import { ThemeContext } from '@/app/theme-provider'
import { ButtonCircle } from '@/shared/Button'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useContext, useEffect, useState } from 'react'

interface GallerySliderProps {
  className?: string
  galleryImgs: (
    | {
        src: string
        width: number
        height: number
      }
    | string
  )[]
  ratioClass?: string
  href?: string
  imageClass?: string
  galleryClass?: string
  navigation?: boolean
}

export default function GallerySlider({
  className,
  galleryImgs,
  ratioClass = 'aspect-w-4 aspect-h-3',
  imageClass,
  galleryClass,
  href = '/garage',
  navigation = true,
}: GallerySliderProps) {
  const theme = useContext(ThemeContext)
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false,
    align: 'start',
    containScroll: 'trimSnaps'
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  const images = galleryImgs

  return (
    <div className={clsx(`group/cardGallerySlider group relative`, className)}>
      {/* Main carousel container */}
      <div className={clsx(`w-full overflow-hidden rounded-xl`, galleryClass)} ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <Link href={href} className={clsx(`relative flex items-center justify-center`, ratioClass)}>
                <Image
                  src={image || ''}
                  fill
                  alt="listing card gallery"
                  className={clsx(`rounded-xl object-cover`, imageClass)}
                  sizes="(max-width: 1025px) 100vw, 25vw"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons + bottom nav bar */}
      <>
        {/* Navigation Buttons */}
        {navigation && images.length > 1 && (
          <div className="opacity-0 transition-opacity group-hover/cardGallerySlider:opacity-100">
            {selectedIndex > 0 && (
              <div className="absolute start-3 top-[calc(50%-1rem)]">
                <ButtonCircle color="white" onClick={scrollPrev} className={'size-8!'}>
                  <ChevronLeftIcon className="size-4! rtl:rotate-180" />
                </ButtonCircle>
              </div>
            )}
            {selectedIndex < images.length - 1 && (
              <div className="absolute end-3 top-[calc(50%-1rem)]">
                <ButtonCircle color="white" onClick={scrollNext} className={'size-8!'}>
                  <ChevronRightIcon className="size-4! rtl:rotate-180" />
                </ButtonCircle>
              </div>
            )}
          </div>
        )}

        {/* Bottom Nav bar */}
        {images.length > 1 && (
          <>
            <div className="absolute inset-x-0 bottom-0 h-10 rounded-b-xl bg-gradient-to-t from-neutral-900 opacity-50"></div>
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center justify-center gap-x-1.5">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    index === selectedIndex ? 'bg-white' : 'bg-white/60'
                  }`}
                  onClick={() => scrollTo(index)}
                />
              ))}
            </div>
          </>
        )}
      </>
    </div>
  )
}
