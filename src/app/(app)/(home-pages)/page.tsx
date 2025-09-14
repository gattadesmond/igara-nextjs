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
import {StaySearchForm} from '@/components/HeroSearchForm/StaySearchForm'

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
      <div className="relative container mb-24 flex flex-col gap-y-24 lg:mb-28 lg:gap-y-32">
        <HeroSectionWithSearchForm1
          heading="iGara - Tìm Gara Ô Tô Gần Đây – Đặt Lịch Ngay "
          image={heroImage}
          imageAlt="hero"
          searchForm={<StaySearchForm formStyle="default" />}
          description={
            <>
              <p className="max-w-xl text-base text-neutral-500 sm:text-xl dark:text-neutral-400">
              Dễ dàng tìm gara trong hệ thống 100+ cửa hàng và đại lý sửa chữa ô tô đạt chứng nhận khắp cả nước.
              </p>
            </>
          }
        />

        <div>
          <HeadingWithSub subheading="Explore the best places to stay in the world.">
            Let&apos;s go on an adventure
          </HeadingWithSub>
          <SectionSliderNewCategories categoryCardType="card3" categories={categories.slice(0, 7)} />
        </div>

        <SectionOurFeatures className="py-14" />
        <SectionGridFeaturePlaces stayListings={stayListings} cardType="card2" />
        <Divider />
        <SectionHowItWork />
        <div className="relative py-20">
          <BackgroundSection />
          <HeadingWithSub isCenter subheading="Keep calm & travel on">
            Become a host
          </HeadingWithSub>
          <SectionGridAuthorBox authors={authors} />
        </div>
        <SectionSubscribe2 />
        <Divider />

        <div>
          <HeadingWithSub isCenter subheading={'Great places near where you live'}>
            Explore nearby
          </HeadingWithSub>
          <SectionGridCategoryBox categories={categories.slice(0, 8)} />
        </div>

        <div className="relative py-16">
          <BackgroundSection />
          <SectionBecomeAnAuthor />
        </div>

        <div>
          <HeadingWithSub subheading="Explore houses based on 10 types of stays">
            Explore by types of stays.
          </HeadingWithSub>
          <SectionSliderNewCategories
            itemClassName="w-[17rem] lg:w-1/3 xl:w-1/4"
            categories={categories.slice(7, 16)}
            categoryCardType="card5"
          />
        </div>
        <SectionVideos />
        <div className="relative py-16">
          <SectionClientSay />
        </div>
      </div>
    </main>
  )
}

export default Page
