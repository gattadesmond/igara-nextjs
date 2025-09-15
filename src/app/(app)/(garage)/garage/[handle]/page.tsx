import {
  Bathtub02Icon,
  BedSingle01Icon,
  BodySoapIcon,
  CableCarIcon,
  CctvCameraIcon,
  HairDryerIcon,
  MeetingRoomIcon,
  ShampooIcon,
  Speaker01Icon,
  TvSmartIcon,
  VirtualRealityVr01Icon,
  WaterEnergyIcon,
  WaterPoloIcon,
  Wifi01Icon,
} from '@/components/Icons'
import { getListingReviews } from '@/data/data'
import { getStayListingByHandle, getStayListings } from '@/data/listings'
import ButtonPrimary from '@/shared/ButtonPrimary'
import ButtonSecondary from '@/shared/ButtonSecondary'
import { DescriptionDetails, DescriptionList, DescriptionTerm } from '@/shared/description-list'
import { Divider } from '@/shared/divider'
import T from '@/utils/getT'
import { 
  UsersIcon, 
  PhoneIcon, 
  ClockIcon, 
  MapPinIcon,
  StarIcon,
  CheckCircleIcon,
  XCircleIcon,
  CalendarIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  TruckIcon,
  BuildingOfficeIcon,
  HeartIcon,
  ChatBubbleLeftRightIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'
import { Metadata } from 'next'
import Form from 'next/form'
import { redirect } from 'next/navigation'
import { Fragment } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import DatesRangeInputPopover from '../../components/DatesRangeInputPopover'
import GuestsInputPopover from '../../components/GuestsInputPopover'
import HeaderGallery from '../../components/HeaderGallery'
import SectionDateRange from '../../components/SectionDateRange'
import SectionHeader from '../../components/SectionHeader'
import { SectionHeading, SectionSubheading } from '../../components/SectionHeading'
import SectionHost from '../../components/SectionHost'
import SectionListingReviews from '../../components/SectionListingReviews'
import SectionMap from '../../components/SectionMap'
import Breadcrumb from '@/components/Breadcrumb'
import StayCard2 from '@/components/StayCard2'

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }): Promise<Metadata> {
  const { handle } = await params
  const listing = await getStayListingByHandle(handle)

  if (!listing) {
    return {
      title: 'Listing not found',
      description: 'The listing you are looking for does not exist.',
    }
  }

  return {
    title: listing?.title,
    description: listing?.description,
  }
}

const Page = async ({ params }: { params: Promise<{ handle: string }> }) => {
  const { handle } = await params

  const listing = await getStayListingByHandle(handle)

  if (!listing?.id) {
    return redirect('/garage/all')
  }
  const {
    address,
    city,
    bathrooms,
    bedrooms,
    date,
    description,
    featuredImage,
    galleryImgs,
    isAds,
    like,
    listingCategory,
    map,
    maxGuests,
    price,
    reviewCount,
    reviewStart,
    saleOff,
    title,
    host,
    beds,
    openTime,
    status,
  } = listing
  const reviews = (await getListingReviews(handle)).slice(0, 3) // Fetching only the first 3 reviews for display
  const allListings = await getStayListings()
  const nearbyGarages = allListings.filter(g => g.id !== listing.id).slice(0, 4) // Get 4 nearby garages

  // Server action to handle form submission
  const handleSubmitForm = async (formData: FormData) => {
    'use server'

    // Handle form submission logic here
    console.log('Form submitted with data:', Object.fromEntries(formData.entries()))
    // For example, you can redirect to a checkout page or process the booking
    redirect('/checkout')
  }

  // Mock data for garage details
  const garageDetails = {
    phone: '0901 234 567',
    operatingYears: 15,
    specialties: ['Toyota', 'Honda', 'Mazda', 'Hyundai'],
    certifications: ['Bosch Service', 'Toyota Authorized', 'ASE Certified'],
    services: [
      { name: 'Sửa chữa động cơ', icon: WrenchScrewdriverIcon, description: 'Chẩn đoán và sửa chữa động cơ chuyên nghiệp' },
      { name: 'Bảo dưỡng định kỳ', icon: ClockIcon, description: 'Dịch vụ bảo dưỡng theo lịch trình nhà sản xuất' },
      { name: 'Sửa phanh', icon: ShieldCheckIcon, description: 'Kiểm tra và thay thế hệ thống phanh' },
      { name: 'Cứu hộ 24/7', icon: TruckIcon, description: 'Dịch vụ cứu hộ khẩn cấp 24 giờ' },
    ],
    facilities: [
      { name: '3 cầu nâng', icon: BuildingOfficeIcon },
      { name: 'Phòng chờ có điều hòa', icon: MeetingRoomIcon },
      { name: 'WiFi miễn phí', icon: Wifi01Icon },
      { name: 'Nước uống miễn phí', icon: WaterEnergyIcon },
      { name: 'Cứu hộ 24/7', icon: TruckIcon },
    ],
    priceList: [
      { service: 'Thay dầu động cơ', price: '150.000đ' },
      { service: 'Thay lọc gió', price: '80.000đ' },
      { service: 'Thay lọc nhớt', price: '50.000đ' },
      { service: 'Kiểm tra phanh', price: '100.000đ' },
      { service: 'Cân chỉnh thước lái', price: '200.000đ' },
    ],
    isWeekendOpen: true,
    warranty: 'Bảo hành 12 tháng cho tất cả dịch vụ',
    sundayOpen: true,
  }

  const renderGarageHeader = () => {
    return (
      <div className="listingSection__wrap">
        <div className="flex flex-col gap-6">
          {/* Tên gara - H1 */}
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">{title}</h1>
          
          {/* Thông tin cơ bản */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-3">
              <MapPinIcon className="h-5 w-5 text-neutral-500" />
              <div>
                <p className="text-sm text-neutral-500">Địa chỉ</p>
                <p className="font-medium">{address}, {city}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <PhoneIcon className="h-5 w-5 text-neutral-500" />
              <div>
                <p className="text-sm text-neutral-500">Số điện thoại</p>
                <p className="font-medium">{garageDetails.phone}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <ClockIcon className="h-5 w-5 text-neutral-500" />
              <div>
                <p className="text-sm text-neutral-500">Thời gian mở cửa</p>
                <p className="font-medium">{openTime}</p>
              </div>
            </div>
          </div>

          {/* Tình trạng mở/đóng cửa */}
          {/* <div className="flex items-center gap-3">
            {status === 'open' ? (
              <CheckCircleIcon className="h-6 w-6 text-green-500" />
            ) : (
              <XCircleIcon className="h-6 w-6 text-red-500" />
            )}
            <span className={`font-semibold ${status === 'open' ? 'text-green-600' : 'text-red-600'}`}>
              {status === 'open' ? 'Đang mở cửa' : 'Đã đóng cửa'}
            </span>
          </div> */}

          {/* Đánh giá */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="font-semibold">{reviewStart}</span>
              <span className="text-neutral-500">({reviewCount} đánh giá)</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartIcon className="h-5 w-5 text-red-500" />
              <span className="text-neutral-500">Đã lưu</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderGarageDescription = () => {
    return (
      <div className="listingSection__wrap">
        <SectionHeading>Giới thiệu về gara</SectionHeading>
        <div className="leading-relaxed text-neutral-700 dark:text-neutral-300">
          <p>
            {title} là một trong những gara sửa chữa ô tô uy tín nhất tại {city} với hơn {garageDetails.operatingYears} năm kinh nghiệm 
            trong lĩnh vực bảo dưỡng và sửa chữa xe hơi. Chúng tôi chuyên sửa chữa các dòng xe {garageDetails.specialties.join(', ')} 
            với đội ngũ kỹ thuật viên được đào tạo chuyên nghiệp và trang thiết bị hiện đại.
          </p>
          <br />
          <p>
            <strong>Điểm mạnh của chúng tôi:</strong> Sử dụng phụ tùng chính hãng, quy trình bảo dưỡng chuẩn nhà sản xuất, 
            bảo hành dài hạn và dịch vụ khách hàng tận tình. Gara được trang bị {garageDetails.facilities.length} cầu nâng 
            hiện đại, phòng chờ tiện nghi và dịch vụ cứu hộ 24/7.
          </p>
          <br />
          <p>
            Chúng tôi cam kết mang đến cho khách hàng dịch vụ chất lượng cao với giá cả hợp lý. 
            {garageDetails.warranty} và luôn sẵn sàng hỗ trợ khách hàng mọi lúc, mọi nơi.
          </p>
        </div>
      </div>
    )
  }

  const renderCertifications = () => {
    return (
      <div className="listingSection__wrap">
        <SectionHeading>Chứng chỉ & Đối tác</SectionHeading>
        <SectionSubheading>Các chứng chỉ và đối tác thương hiệu uy tín</SectionSubheading>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {garageDetails.certifications.map((cert, index) => (
            <div key={index} className="flex items-center gap-3 p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
              <ShieldCheckIcon className="h-8 w-8 text-blue-500" />
              <span className="font-medium">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderServices = () => {
    return (
      <div className="listingSection__wrap">
        <SectionHeading>Dịch vụ chính</SectionHeading>
        <SectionSubheading>Các dịch vụ sửa chữa và bảo dưỡng chuyên nghiệp</SectionSubheading>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {garageDetails.services.map((service, index) => (
            <div key={index} className="flex items-start gap-4 p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
              <service.icon className="h-8 w-8 text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderPriceList = () => {
    return (
      <div className="listingSection__wrap">
        <SectionHeading>Bảng giá tham khảo</SectionHeading>
        <SectionSubheading>Giá dịch vụ cơ bản (có thể thay đổi tùy theo tình trạng xe)</SectionSubheading>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-neutral-200 dark:border-neutral-700">
            <thead>
              <tr className="bg-neutral-50 dark:bg-neutral-800">
                <th className="border border-neutral-200 dark:border-neutral-700 px-4 py-3 text-left font-semibold">Dịch vụ</th>
                <th className="border border-neutral-200 dark:border-neutral-700 px-4 py-3 text-right font-semibold">Giá</th>
              </tr>
            </thead>
            <tbody>
              {garageDetails.priceList.map((item, index) => (
                <tr key={index} className="hover:bg-neutral-50 dark:hover:bg-neutral-800">
                  <td className="border border-neutral-200 dark:border-neutral-700 px-4 py-3">{item.service}</td>
                  <td className="border border-neutral-200 dark:border-neutral-700 px-4 py-3 text-right font-semibold text-green-600">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  const renderFacilities = () => {
    return (
      <div className="listingSection__wrap">
        <div>
          <SectionHeading>Tiện ích & Cơ sở vật chất</SectionHeading>
          <SectionSubheading>Thông tin mở rộng về cơ sở vật chất của gara</SectionSubheading>
        </div>
        <Divider className="w-14!" />

        <div className="grid grid-cols-1 gap-6 text-sm text-neutral-700 md:grid-cols-2 xl:grid-cols-3 dark:text-neutral-300">
          {garageDetails.facilities.map((facility, index) => (
            <div key={index} className="flex items-center gap-x-3">
              <facility.icon className="h-6 w-6 text-blue-500" />
              <span>{facility.name}</span>
            </div>
          ))}
        </div>

        {/* Badge mở cửa cuối tuần */}
        {garageDetails.isWeekendOpen && (
          <div className="mt-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full">
              <CheckCircleIcon className="h-5 w-5" />
              <span className="font-semibold">Mở cửa cuối tuần</span>
            </div>
          </div>
        )}
      </div>
    )
  }

  const renderFAQ = () => {
    const faqs = [
      {
        question: 'Có mở Chủ nhật không?',
        answer: garageDetails.sundayOpen ? 'Có, chúng tôi mở cửa cả Chủ nhật từ 8:00 - 17:00' : 'Không, chúng tôi đóng cửa vào Chủ nhật'
      },
      {
        question: 'Nhận sửa dòng xe nào?',
        answer: `Chúng tôi chuyên sửa chữa các dòng xe: ${garageDetails.specialties.join(', ')} và nhiều thương hiệu khác`
      },
      {
        question: 'Có bảo hành dịch vụ không?',
        answer: garageDetails.warranty
      }
    ]

    return (
      <div className="listingSection__wrap">
        <SectionHeading>Câu hỏi thường gặp</SectionHeading>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Disclosure key={index} as="div" className="border border-neutral-200 dark:border-neutral-700 rounded-lg">
              <DisclosureButton className="group flex w-full items-center justify-between px-6 py-4 text-left hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                <h3 className="font-semibold text-lg text-neutral-900 dark:text-white">{faq.question}</h3>
                <ChevronDownIcon className="h-5 w-5 text-neutral-500 transition-transform duration-200 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="px-6 pb-4 border-t border-neutral-200 dark:border-neutral-700">
                <p className="text-neutral-600 dark:text-neutral-400 pt-2">{faq.answer}</p>
              </DisclosurePanel>
            </Disclosure>
          ))}
        </div>
      </div>
    )
  }

  const renderIGaraIntro = () => {
    return (
      <div className="listingSection__wrap bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
        <SectionHeading>Giới thiệu CRM iGara</SectionHeading>
        <div className="leading-relaxed text-neutral-700 dark:text-neutral-300">
          <p>
            Gara này sử dụng hệ thống quản lý CRM iGara - một giải pháp công nghệ tiên tiến giúp quản lý 
            khách hàng, lịch hẹn và dịch vụ một cách chuyên nghiệp. Với iGara, khách hàng có thể:
          </p>
          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li>Đặt lịch hẹn trực tuyến 24/7</li>
            <li>Theo dõi lịch sử bảo dưỡng xe</li>
            <li>Nhận thông báo nhắc nhở bảo dưỡng định kỳ</li>
            <li>Xem báo cáo chi tiết về tình trạng xe</li>
            <li>Thanh toán trực tuyến an toàn</li>
          </ul>
        </div>
      </div>
    )
  }

  const renderSidebarBooking = () => {
    return (
      <div className="listingSection__wrap sm:shadow-xl">
        {/* Status */}
        <div className="flex items-center gap-3 mb-6">
          {status === 'open' ? (
            <CheckCircleIcon className="h-6 w-6 text-green-500" />
          ) : (
            <XCircleIcon className="h-6 w-6 text-red-500" />
          )}
          <span className={`font-semibold ${status === 'open' ? 'text-green-600' : 'text-red-600'}`}>
            {status === 'open' ? 'Đang mở cửa' : 'Đã đóng cửa'}
          </span>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <PhoneIcon className="h-5 w-5 text-neutral-500" />
            <div>
              <p className="text-sm text-neutral-500">Hotline</p>
              <p className="font-semibold">{garageDetails.phone}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <ClockIcon className="h-5 w-5 text-neutral-500" />
            <div>
              <p className="text-sm text-neutral-500">Giờ mở cửa</p>
              <p className="font-semibold">{openTime}</p>
            </div>
          </div>
        </div>

        {/* Booking Buttons */}
        <div className="space-y-3">
          <ButtonPrimary className="w-full">
            <CalendarIcon className="h-5 w-5 mr-2" />
            Đặt lịch hẹn
          </ButtonPrimary>
          
          <ButtonSecondary className="w-full">
            <PhoneIcon className="h-5 w-5 mr-2" />
            Gọi ngay
          </ButtonSecondary>
        </div>

        {/* Quick Info */}
        <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-neutral-500">Đánh giá:</span>
              <span className="font-semibold">{reviewStart}/5 ({reviewCount} đánh giá)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">Khoảng cách:</span>
              <span className="font-semibold">{price}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">Năm hoạt động:</span>
              <span className="font-semibold">{garageDetails.operatingYears} năm</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/*  HEADER */}
      <div className="py-5">
        <Breadcrumb
          items={[
            { label: 'Garage', href: '/garage' },
            { label: title },
          ]}
        />
      </div>
      
      {/* Album ảnh */}
      <HeaderGallery images={galleryImgs} />

      {/* MAIN */}
      <main className="relative z-[1] mt-10 flex flex-col gap-8 lg:flex-row xl:gap-10">
        {/* CONTENT */}
        <div className="flex w-full flex-col gap-y-8 lg:w-3/5 xl:w-[64%] xl:gap-y-10">
          {renderGarageHeader()}
          {renderGarageDescription()}
          {renderCertifications()}
          {renderServices()}
          {renderPriceList()}
          {renderFacilities()}
          {renderFAQ()}
          {renderIGaraIntro()}
        </div>

        {/* SIDEBAR */}
        <div className="grow">
          <div className="sticky top-5">{renderSidebarBooking()}</div>
        </div>
      </main>

      <Divider className="my-16" />

      {/* Reviews Section */}
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
          <div className="w-full lg:w-2/3">
            <div className="listingSection__wrap">
              <div className="flex items-center justify-between mb-6">
                <SectionHeading>Đánh giá khách hàng</SectionHeading>
                <div className="flex gap-2">
                  <ButtonSecondary>Mới nhất</ButtonSecondary>
                  <ButtonSecondary>Đánh giá cao nhất</ButtonSecondary>
                </div>
              </div>
              <SectionListingReviews reviewCount={reviewCount} reviewStart={reviewStart} reviews={reviews} />
              <div className="mt-6">
                <ButtonPrimary>
                  <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
                  Viết đánh giá
                </ButtonPrimary>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <SectionHost {...host} />
          </div>
        </div>

        {/* Google Map */}
        <SectionMap />

        {/* Nearby Garages */}
        <div className="listingSection__wrap">
          <SectionHeading>Gara cùng khu vực</SectionHeading>
          <SectionSubheading>Khám phá các gara khác gần đây</SectionSubheading>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {nearbyGarages.map((garage) => (
              <StayCard2 key={garage.id} data={garage} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
