import HeroSectionWithSearchForm1 from '@/components/hero-sections/HeroSectionWithSearchForm1'
import { StaySearchForm } from '@/components/HeroSearchForm/StaySearchForm'
import ListingFilterTabs from '@/components/ListingFilterTabs'
import StayCard2 from '@/components/StayCard2'
import Breadcrumb from '@/components/Breadcrumb'
import { getStayCategoryByHandle } from '@/data/categories'
import { getStayListingFilterOptions, getStayListings } from '@/data/listings'
import { Button } from '@/shared/Button'
import { Divider } from '@/shared/divider'
import Pagination from '@/shared/Pagination'
import convertNumbThousand from '@/utils/convertNumbThousand'
import { House04Icon, MapPinpoint02Icon, MapsLocation01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export async function generateMetadata({ params }: { params: Promise<{ handle?: string[] }> }): Promise<Metadata> {
  const { handle } = await params
  const category = await getStayCategoryByHandle(handle?.[0])
  if (!category) {
    return {
      title: 'Collection not found',
      description: 'The collection you are looking for does not exist.',
    }
  }
  const { name, description } = category
  return { title: name, description }
}

const Page = async ({ params }: { params: Promise<{ handle?: string[] }> }) => {
  const { handle } = await params

  const category = await getStayCategoryByHandle(handle?.[0])
  const listings = await getStayListings()
  const filterOptions = await getStayListingFilterOptions()

  if (!category?.id) {
    return redirect('/garage/all')
  }

  return (
    <div className="pb-28">
      {/* Hero section */}
      <div className="container">
        <div className="py-5">
          <Breadcrumb
            items={[
              { label: 'Garage' },
            ]}
          />
        </div>
        <HeroSectionWithSearchForm1
          heading={category.name}
          image={category.coverImage}
          imageAlt={category.name}
          searchForm={<StaySearchForm formStyle="default" />}
          description=""
        />
      </div>

      {/* Content */}
      <div className="relative container mt-6">
        {/* Breadcrumb */}


        {/* start heading */}
        <div className="flex flex-wrap items-center justify-between gap-x-2.5 gap-y-5">
          <div id="heading" className="scroll-mt-20 text-lg font-semibold sm:text-xl">
           Có 12 kết quả
          </div>
          <Button color="white" className="ms-auto" href={'/garage-map/' + category.handle}>
            <span className="me-1">View map</span>
            <HugeiconsIcon icon={MapsLocation01Icon} size={20} color="currentColor" strokeWidth={1.5} />
          </Button>
        </div>
        <Divider className="my-4 md:mb-6" />
        {/* end heading */}

        <ListingFilterTabs  />
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:mt-10 lg:grid-cols-3 xl:grid-cols-4">
          {listings.map((listing) => (
            <StayCard2 key={listing.id} data={listing} />
          ))}
        </div>
        <div className="mt-16 flex items-center justify-center">
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default Page
