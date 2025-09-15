'use client'

import NcInputNumber from '@/components/NcInputNumber'
import { Button } from '@/shared/Button'
import ButtonClose from '@/shared/ButtonClose'
import ButtonPrimary from '@/shared/ButtonPrimary'
import ButtonThird from '@/shared/ButtonThird'
import { Checkbox, CheckboxField, CheckboxGroup } from '@/shared/Checkbox'
import { Description, Fieldset, Label } from '@/shared/fieldset'
import T from '@/utils/getT'
import {
  CloseButton,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import { 
  FilterVerticalIcon,
  CalendarIcon,
  TagIcon,
  BusIcon,
  DollarIcon,
  WrenchIcon,
  StarIcon,
  ClockIcon
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import clsx from 'clsx'
import Form from 'next/form'
import { useState } from 'react'
import { PriceRangeSlider } from './PriceRangeSlider'

type BaseFilter = {
  label: string
  name: string
  icon?: any
}

type CheckboxFilter = BaseFilter & {
  tabUIType: 'checkbox'
  options: {
    name: string
    value?: string
    description?: string
    defaultChecked?: boolean
  }[]
}

type PriceRangeFilter = BaseFilter & {
  tabUIType: 'price-range'
  min: number
  max: number
}

type SelectNumberFilter = BaseFilter & {
  tabUIType: 'select-number'
  options: {
    name: string
    max: number
  }[]
}

type FilterOption = CheckboxFilter | PriceRangeFilter | SelectNumberFilter

const demo_filters_options: FilterOption[] = [
  {
    name: 'availability',
    label: 'Tình trạng',
    tabUIType: 'checkbox' as const,
    icon: CalendarIcon,
    options: [
      {
        name: 'Có sẵn ngay',
        value: 'available_now',
        description: 'Gara có thể tiếp nhận xe ngay lập tức',
        defaultChecked: true,
      },
      {
        name: 'Có lịch trống',
        value: 'has_slots',
        description: 'Gara có lịch trống trong ngày',
        defaultChecked: true,
      },
      {
        name: 'Chỉ nhận đặt lịch',
        value: 'appointment_only',
        description: 'Chỉ nhận xe khi có đặt lịch trước',
      },
    ],
  },
  {
    name: 'active-offers',
    label: 'Ưu đãi',
    tabUIType: 'checkbox' as const,
    icon: TagIcon,
    options: [
      {
        name: 'Giảm giá 20%',
        value: 'discount_20',
        description: 'Giảm giá 20% cho dịch vụ đầu tiên',
        defaultChecked: true,
      },
      {
        name: 'Miễn phí kiểm tra',
        value: 'free_inspection',
        description: 'Miễn phí kiểm tra tổng thể xe',
        defaultChecked: true,
      },
      {
        name: 'Bảo hành 6 tháng',
        value: 'warranty_6months',
        description: 'Bảo hành 6 tháng cho các dịch vụ',
      },
      {
        name: 'Tặng kèm rửa xe',
        value: 'free_car_wash',
        description: 'Tặng kèm dịch vụ rửa xe',
      },
    ],
  },
  {
    name: 'shuttle',
    label: 'Dịch vụ đưa đón',
    tabUIType: 'checkbox' as const,
    icon: BusIcon,
    options: [
      {
        name: 'Có xe đưa đón',
        value: 'has_shuttle',
        description: 'Cung cấp dịch vụ đưa đón khách hàng',
        defaultChecked: true,
      },
      {
        name: 'Đưa đón miễn phí',
        value: 'free_shuttle',
        description: 'Dịch vụ đưa đón hoàn toàn miễn phí',
      },
      {
        name: 'Đưa đón trong bán kính 5km',
        value: 'shuttle_5km',
        description: 'Đưa đón trong bán kính 5km',
      },
    ],
  },

  {
    label: 'Loại dịch vụ',
    name: 'service-type',
    tabUIType: 'checkbox' as const,
    icon: WrenchIcon,
    options: [
      {
        name: 'Bảo dưỡng định kỳ',
        value: 'maintenance',
        description: 'Dịch vụ bảo dưỡng định kỳ cho xe',
        defaultChecked: true,
      },
      {
        name: 'Sửa chữa',
        value: 'repair',
        description: 'Sửa chữa các lỗi hỏng hóc',
        defaultChecked: true,
      },
      {
        name: 'Thay thế phụ tùng',
        value: 'parts_replacement',
        description: 'Thay thế các phụ tùng cần thiết',
      },
      {
        name: 'Kiểm tra kỹ thuật',
        value: 'technical_inspection',
        description: 'Kiểm tra kỹ thuật tổng thể',
      },
      {
        name: 'Bảo hiểm',
        value: 'insurance',
        description: 'Dịch vụ bảo hiểm xe',
      },
    ],
  },
  {
    name: 'facilities',
    label: 'Tiện ích',
    tabUIType: 'checkbox' as const,
    icon: StarIcon,
    options: [
      {
        name: 'Chỗ đỗ xe miễn phí',
        value: 'free_parking',
        description: 'Có chỗ đỗ xe miễn phí cho khách hàng',
      },
      {
        name: 'Phòng chờ có điều hòa',
        value: 'air_conditioned_waiting',
        description: 'Phòng chờ có điều hòa nhiệt độ',
      },
      {
        name: 'WiFi miễn phí',
        value: 'free_wifi',
        description: 'Cung cấp WiFi miễn phí',
      },
      {
        name: 'Cà phê miễn phí',
        value: 'free_coffee',
        description: 'Cung cấp cà phê miễn phí cho khách hàng',
      },
      {
        name: 'Sạc điện cho xe điện',
        value: 'ev_charging',
        description: 'Có trạm sạc điện cho xe điện',
      },
    ],
  },
  {
    name: 'brand-specialization',
    label: 'Chuyên môn thương hiệu',
    tabUIType: 'checkbox' as const,
    options: [
      {
        name: 'Toyota',
        value: 'toyota',
        description: 'Chuyên sửa chữa xe Toyota',
      },
      {
        name: 'Honda',
        value: 'honda',
        description: 'Chuyên sửa chữa xe Honda',
      },
      {
        name: 'Hyundai',
        value: 'hyundai',
        description: 'Chuyên sửa chữa xe Hyundai',
      },
      {
        name: 'Ford',
        value: 'ford',
        description: 'Chuyên sửa chữa xe Ford',
      },
      {
        name: 'Mazda',
        value: 'mazda',
        description: 'Chuyên sửa chữa xe Mazda',
      },
      {
        name: 'Kia',
        value: 'kia',
        description: 'Chuyên sửa chữa xe Kia',
      },
      {
        name: 'Mitsubishi',
        value: 'mitsubishi',
        description: 'Chuyên sửa chữa xe Mitsubishi',
      },
      {
        name: 'Nissan',
        value: 'nissan',
        description: 'Chuyên sửa chữa xe Nissan',
      },
    ],
  },
  {
    name: 'working-hours',
    label: 'Giờ làm việc',
    tabUIType: 'checkbox' as const,
    icon: ClockIcon,
    options: [
      {
        name: 'Mở cửa 24/7',
        value: 'open_24_7',
        description: 'Mở cửa 24 giờ, 7 ngày trong tuần',
      },
      {
        name: 'Mở cửa cuối tuần',
        value: 'open_weekends',
        description: 'Mở cửa cả thứ 7 và chủ nhật',
      },
      {
        name: 'Mở cửa tối muộn',
        value: 'open_late',
        description: 'Mở cửa đến tối muộn (sau 8h tối)',
      },
    ],
  },
]

const CheckboxPanel = ({ filterOption, className }: { filterOption: CheckboxFilter; className?: string }) => {
  return (
    <Fieldset>
      <CheckboxGroup className={className}>
        {filterOption.options.map((option) => (
          <CheckboxField key={option.name}>
            <Checkbox name={`${filterOption.name}[]`} value={option.name} defaultChecked={!!option.defaultChecked} />
            <Label>{option.name}</Label>
            {option.description && <Description>{option.description}</Description>}
          </CheckboxField>
        ))}
      </CheckboxGroup>
    </Fieldset>
  )
}
const PriceRagePanel = ({ filterOption }: { filterOption: PriceRangeFilter }) => {
  const { min, max, name } = filterOption
  const [rangePrices, setRangePrices] = useState([min, max])

  return <PriceRangeSlider defaultValue={rangePrices} onChange={setRangePrices} min={min} max={max} />
}
const NumberSelectPanel = ({ filterOption }: { filterOption: SelectNumberFilter }) => {
  const { name, options } = filterOption
  return (
    <div className="relative flex flex-col gap-y-5">
      {options.map((option) => (
        <NcInputNumber key={option.name} inputName={option.name} label={option.name} max={option.max} />
      ))}
    </div>
  )
}

const sortOptions = [
  { value: 'recommended', label: 'Được đề xuất' },
  { value: 'distance', label: 'Khoảng cách' },
  { value: 'rating', label: 'Đánh giá' },
  { value: 'availability', label: 'Tình trạng' },
]

const ListingFilterTabs = ({
  filterOptions = demo_filters_options,
}: {
  filterOptions?:any
}) => {
  const [showAllFilter, setShowAllFilter] = useState(false)
  const [selectedSort, setSelectedSort] = useState('recommended')
  const [showSortDropdown, setShowSortDropdown] = useState(false)

  const handleFormSubmit = async (formData: FormData) => {
    const formDataObject = Object.fromEntries(formData.entries())
    console.log('Form submitted with data:', formDataObject)
  }

  const renderTabAllFilters = () => {
    return (
      <div className="shrink-0 grow md:grow-0">
        <Button
          outline
          onClick={() => setShowAllFilter(true)}
          className="w-full border-black! ring-1 ring-black ring-inset md:w-auto dark:border-neutral-200! dark:ring-neutral-200"
        >
          <HugeiconsIcon icon={FilterVerticalIcon} size={16} color="currentColor" strokeWidth={1.5} />
          <span>Tất cả bộ lọc</span>
          <span className="absolute top-0 -right-0.5 flex size-5 items-center justify-center rounded-full bg-black text-[0.65rem] font-semibold text-white ring-2 ring-white dark:bg-neutral-200 dark:text-neutral-900 dark:ring-neutral-900">
            4
          </span>
        </Button>

        <Dialog
          open={showAllFilter}
          onClose={() => setShowAllFilter(false)}
          className="relative z-50"
          as={Form}
          action={handleFormSubmit}
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/50 duration-200 ease-out data-closed:opacity-0"
          />
          <div className="fixed inset-0 flex max-h-screen w-screen items-center justify-center pt-3">
            <DialogPanel
              className="flex max-h-full w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl bg-white text-left align-middle shadow-xl duration-200 ease-out data-closed:translate-y-16 data-closed:opacity-0 dark:border dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
              transition
            >
              <div className="relative shrink-0 border-b border-neutral-200 p-4 text-center sm:px-8 dark:border-neutral-800">
                <DialogTitle as="h3" className="text-lg leading-6 font-medium text-gray-900">
                  Bộ lọc
                </DialogTitle>
                <div className="absolute end-2 top-2">
                  <ButtonClose plain onClick={() => setShowAllFilter(false)} />
                </div>
              </div>

              <div className="hidden-scrollbar grow overflow-y-auto text-start">
                <div className="divide-y divide-neutral-200 px-4 sm:px-8 dark:divide-neutral-800">
                  {filterOptions.map((filterOption : any, index : any) =>
                    filterOption ? (
                      <div key={index} className="py-7">
                        <h3 className="text-xl font-medium">{filterOption.label}</h3>
                        <div className="relative mt-6">
                          {filterOption.tabUIType === 'checkbox' && (
                            <CheckboxPanel filterOption={filterOption} />
                          )}
                          {filterOption.tabUIType === 'price-range' && (
                            <PriceRagePanel key={index} filterOption={filterOption} />
                          )}
                          {filterOption.tabUIType === 'select-number' && (
                            <NumberSelectPanel key={index} filterOption={filterOption} />
                          )}
                        </div>
                      </div>
                    ) : null
                  )}
                </div>
              </div>

              <div className="flex shrink-0 items-center justify-between bg-neutral-50 p-4 sm:px-8 dark:border-t dark:border-neutral-800 dark:bg-neutral-900">
                <ButtonThird className="-mx-3" onClick={() => setShowAllFilter(false)} type="button">
                  Xóa tất cả
                </ButtonThird>
                <ButtonPrimary type="submit" onClick={() => setShowAllFilter(false)}>
                  Áp dụng bộ lọc
                </ButtonPrimary>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    )
  }

  if (!filterOptions || filterOptions.length === 0) {
    return <div>Không có tùy chọn bộ lọc</div>
  }

  const renderSortDropdown = () => {
    return (
      <div className="relative ml-auto">
        <Popover>
          <PopoverButton
            as={Button}
            outline
            className="flex items-center gap-2 border-neutral-300! ring-1 ring-neutral-300 ring-inset dark:border-neutral-600! dark:ring-neutral-600"
            onClick={() => setShowSortDropdown(!showSortDropdown)}
          >
            <span>{sortOptions.find(option => option.value === selectedSort)?.label}</span>
            {showSortDropdown ? (
              <ChevronUpIcon className="size-4" />
            ) : (
              <ChevronDownIcon className="size-4" />
            )}
          </PopoverButton>

          <PopoverPanel
            transition
            unmount={false}
            className="absolute right-0 top-full z-10 mt-3 w-48 transition data-closed:translate-y-1 data-closed:opacity-0"
          >
            <div className="rounded-2xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-700 dark:bg-neutral-900">
              <div className="py-2">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800 ${
                      selectedSort === option.value ? 'bg-neutral-100 dark:bg-neutral-800' : ''
                    }`}
                    onClick={() => {
                      setSelectedSort(option.value)
                      setShowSortDropdown(false)
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </PopoverPanel>
        </Popover>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap items-center justify-between md:gap-x-4 md:gap-y-2">
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {renderTabAllFilters()}
        <PopoverGroup className="hidden flex-wrap gap-x-4 gap-y-2 md:flex" as={Form} action={handleFormSubmit}>
        <div className="h-auto w-px bg-neutral-200 dark:bg-neutral-700"></div>
        {filterOptions.map((filterOption : any, index : any) => {
          // only show 3 filters in the tab. Other filters will be shown in the All-filters-popover
          if (index > 2 || !filterOption) {
            return null
          }

          const checkedNumber =
            filterOption.tabUIType === 'checkbox' 
              ? (filterOption as CheckboxFilter).options?.filter((option) => !!option.defaultChecked)?.length || 0
              : 0

          return (
            <Popover className="relative" key={index}>
              <PopoverButton
                as={Button}
                outline
                className={clsx(
                  'md:px-4',
                  checkedNumber &&
                    'border-black! ring-1 ring-black ring-inset dark:border-neutral-200! dark:ring-neutral-200'
                )}
              >
                {filterOption.icon && (
                  <HugeiconsIcon icon={filterOption.icon} size={16} color="currentColor" strokeWidth={1.5} />
                )}
                <span>{filterOption.label}</span>
                <ChevronDownIcon className="size-4" />
                {checkedNumber ? (
                  <span className="absolute top-0 -right-0.5 flex size-5 items-center justify-center rounded-full bg-black text-[0.65rem] font-semibold text-white ring-2 ring-white dark:bg-neutral-200 dark:text-neutral-900 dark:ring-neutral-900">
                    {checkedNumber}
                  </span>
                ) : null}
              </PopoverButton>

              <PopoverPanel
                transition
                unmount={false}
                className="absolute -start-5 top-full z-10 mt-3 w-sm transition data-closed:translate-y-1 data-closed:opacity-0"
              >
                <div className="rounded-2xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-700 dark:bg-neutral-900">
                  <div className="hidden-scrollbar max-h-[28rem] overflow-y-auto px-5 py-6">
                    {filterOption.tabUIType === 'checkbox' && (
                      <CheckboxPanel filterOption={filterOption} />
                    )}
                    {filterOption.tabUIType === 'price-range' && (
                      <PriceRagePanel key={index} filterOption={filterOption} />
                    )}
                    {filterOption.tabUIType === 'select-number' && (
                      <NumberSelectPanel key={index} filterOption={filterOption} />
                    )}
                  </div>

                  <div className="flex items-center justify-between rounded-b-2xl bg-neutral-50 p-5 dark:border-t dark:border-neutral-800 dark:bg-neutral-900">
                    <CloseButton className="-mx-3" as={ButtonThird} type="button">
                      Xóa
                    </CloseButton>
                    <CloseButton type="submit" as={ButtonPrimary}>
                      Áp dụng
                    </CloseButton>
                  </div>
                </div>
              </PopoverPanel>
            </Popover>
          )
        })}
        </PopoverGroup>
      </div>
      {renderSortDropdown()}
    </div>
  )
}

export default ListingFilterTabs
