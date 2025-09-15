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
import { Button } from '@/shared/Button'

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
    const amenities = [
      {
        icon: ShieldCheckIcon,
        title: "Gara sửa chữa được chứng nhận",
        description: "Gara đáng tin cậy này không bao giờ tính phí quá cao và đáp ứng các tiêu chuẩn chứng nhận RepairPal về giá cả công bằng.",
        color: "text-blue-500"
      },
      {
        icon: TruckIcon,
        title: "Phục vụ 46 hãng xe, bao gồm Toyota",
        description: `${title} là một gara dịch vụ đầy đủ có thể thực hiện tất cả các sửa chữa lớn và bảo dưỡng định kỳ. Xem tất cả hãng xe`,
        color: "text-blue-500",
        hasLink: true
      },
      {
        icon: CalendarIcon,
        title: "Lịch trình linh hoạt",
        description: "Gara này có dịch vụ gửi xe sớm và sau giờ làm việc. Bạn có thể chọn các tùy chọn này và xem hướng dẫn khi đặt lịch hẹn.",
        color: "text-blue-500"
      },
      {
        icon: ShieldCheckIcon,
        title: "Bảo hành",
        description: `${title} bảo hành công việc của họ trong 12.000 km và 12 tháng.`,
        color: "text-blue-500"
      }
    ]

    return (
      <div className="listingSection__wrap">
        <SectionHeading>Tiện ích & Dịch vụ</SectionHeading>

        <div className="space-y-6">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <amenity.icon className={`h-8 w-8 ${amenity.color}`} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">
                  {amenity.title}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                  {amenity.description}
                  {amenity.hasLink && (
                    <span className="text-blue-500 hover:text-blue-600 cursor-pointer ml-1">
                      Xem tất cả hãng xe
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}

          {/* Show more amenities button */}
          <div className="pt-4">
            <button className="text-blue-500 hover:text-blue-600 font-medium text-sm">
              Xem thêm tiện ích
            </button>
          </div>
        </div>
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
      <div className="space-y-6">
        {/* Appointment Booking Section */}
        <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm border border-neutral-200 dark:border-neutral-700">
          <h3 className="text-neutral-700 dark:text-neutral-300 text-sm font-medium mb-3">
            Thời gian hoạt động :
          </h3>
          <div className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
            16/9/2025 lúc 9:00 sáng
          </div>

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

          <div className="text-center space-y-3">
            <Button className="w-full font-bold" color='red'>
              Đặt lịch hẹn
            </Button>

            <ButtonSecondary className="w-full">
              <PhoneIcon className="h-5 w-5 mr-2" />
              Gọi ngay
            </ButtonSecondary>
          </div>
        </div>

        {/* Diagnostic Information Section */}
        <div className="bg-neutral-50 dark:bg-neutral-700 rounded-lg p-6">
          <h3 className="text-neutral-900 dark:text-white text-lg font-bold mb-3">
            Không biết xe bị gì?
          </h3>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
            Gara này có thể giúp bạn chẩn đoán vấn đề, dù là tiếng động, khói hay mùi lạ mà bạn đang gặp phải.
          </p>
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
      <main className="relative z-[1] mt-10 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-10">
        {/* CONTENT */}
        <div className="w-full grid grid-cols-1 gap-y-8">
          {renderGarageHeader()}
          {renderGarageDescription()}
          {renderCertifications()}
          {renderFacilities()}

          {/* {renderServices()} */}
          {renderPriceList()}
          {renderFAQ()}
          {/* {renderIGaraIntro()} */}

          <div>
            <SectionListingReviews reviewCount={reviewCount} reviewStart={reviewStart} reviews={reviews} />
        
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="grow">
          <div className="sticky top-5">{renderSidebarBooking()}</div>
        </div>
      </main>

      <Divider className="my-16" />

      {/* Reviews Section */}
      <div className="grid grid-cols-1 gap-y-10">
      

        {/* Google Map */}
        <SectionMap />

        {/* Nearby Garages */}
        <div className="listingSection__wrap">
          <SectionHeading>Gara cùng khu vực</SectionHeading>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
