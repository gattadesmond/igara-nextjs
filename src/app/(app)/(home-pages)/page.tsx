import BackgroundSection from '@/components/BackgroundSection'
import BgGlassmorphism from '@/components/BgGlassmorphism'
import HeroSectionWithSearchForm1 from '@/components/hero-sections/HeroSectionWithSearchForm1'
import HeroSearchForm from '@/components/HeroSearchForm/HeroSearchForm'
import SectionBecomeAnAuthor from '@/components/SectionBecomeAnAuthor'
import SectionClientSay from '@/components/SectionClientSay'
import SectionGridAuthorBox from '@/components/SectionGridAuthorBox'
import SectionGridCategoryBox from '@/components/SectionGridCategoryBox'
import SectionGridFeaturePlaces from '@/components/SectionGridFeaturePlaces'
import SectionHowItWork from '@/components/SectionHowItWork'
import SectionOurFeatures from '@/components/SectionOurFeatures'
import SectionSliderNewCategories from '@/components/SectionSliderNewCategories'
import SectionSubscribe2 from '@/components/SectionSubscribe2'
import SectionVideos from '@/components/SectionVideos'
import { getAuthors } from '@/data/authors'
import { getStayCategories } from '@/data/categories'
import { getStayListings } from '@/data/listings'
import heroImage from '@/images/hero-right.png'
import ButtonPrimary from '@/shared/ButtonPrimary'
import { Divider } from '@/shared/divider'
import HeadingWithSub from '@/shared/Heading'
import { Metadata } from 'next'
import { StaySearchForm } from '@/components/HeroSearchForm/StaySearchForm'
import HeroSectionCar from '@/components/hero-sections/HeroSectionCar'
import AboutSection from '@/components/AboutSection'
import SectionCaseStudy from '@/components/SectionCaseStudy'

export const metadata: Metadata = {
  title: 'iGara - Nền tảng tìm gara gần đây nhanh chóng và uy tín',
  description:
    'Nền tảng tra cứu, tìm kiếm gara ô tô uy tín với đầy đủ thông tin đi kèm với chất lượng. Tìm kiếm ngay.',
}

async function Page() {
  const categories = await getStayCategories()
  const stayListings = await getStayListings()
  const authors = await getAuthors()

  return (
    <main className="relative overflow-hidden">
      <BgGlassmorphism />
      <HeroSectionCar
      />

      <AboutSection className="py-14 md:py-16 " />

      <section className=' py-14 md:py-16 bg-neutral-50'>
        <div className='container'>
          <SectionHowItWork />

        </div>
      </section>

      <section className=' py-14 md:py-16 '>
        <div className='container'>
        <SectionCaseStudy />
        </div>
      </section>




      <div className="relative container mb-24 flex flex-col gap-y-24 lg:mb-28 lg:gap-y-32">

        <div className="relative py-16">
          <SectionClientSay />
        </div>

        {/* <div>
          <HeadingWithSub subheading="Explore houses based on 10 types of stays">
            Explore by types of stays.
          </HeadingWithSub>
          <SectionSliderNewCategories
            itemClassName="w-[17rem] lg:w-1/3 xl:w-1/4"
            categories={categories.slice(7, 16)}
            categoryCardType="card5"
          />
        </div>



        <div className="relative py-16">
          <BackgroundSection />
          <SectionBecomeAnAuthor />
        </div> */}



      </div>
    </main>
  )
}

export default Page
