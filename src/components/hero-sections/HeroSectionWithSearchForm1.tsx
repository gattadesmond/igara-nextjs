import clsx from 'clsx'
import Image from 'next/image'
import { StaySearchForm } from '@/components/HeroSearchForm/StaySearchForm'
import HeroSearchFormMobile from '@/components/HeroSearchFormMobile/HeroSearchFormMobile'

const HeroSectionWithSearchForm1 = ({
  className,
  searchForm,
  description,
  heading,
  imageAlt,
  image,
}: {
  className?: string
  heading: string | React.ReactNode
  description: string | React.ReactNode
  image: {
    src: string
    width: number
    height: number
  }
  imageAlt: string
  searchForm: React.ReactNode
}) => {
  return (
    <section className="relative isolate mx-auto w-full py-4 md:py-10 z-20">
      <div className="mx-auto flex max-w-[850px] flex-col items-center gap-4">
        <h1 className="font-headline text-2xl mx-auto !block text-center font-bold text-balance md:text-3xl  leading-normal uppercase ">
          Garage sửa xe ở Tp.HCM
        </h1>
        <StaySearchForm formStyle={'default'} className='max-md:hidden' />
        <HeroSearchFormMobile className='md:hidden' />
      </div>
    </section>
  )
}

export default HeroSectionWithSearchForm1
