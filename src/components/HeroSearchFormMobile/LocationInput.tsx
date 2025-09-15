'use client'

import { Search01Icon } from '@/components/Icons'
import T from '@/utils/getT'
import { MapPinIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { FC, useEffect, useRef, useState } from 'react'

interface Props {
  onClick?: () => void
  onChange?: (value: string) => void
  className?: string
  defaultValue?: string
  headingText?: string
  imputName?: string
}

// Data tỉnh/thành Việt Nam
const vietnamProvinces = [
  'Hà Nội',
  'TP. Hồ Chí Minh',
  'Đà Nẵng',
  'Hải Phòng',
  'Cần Thơ',
  'Bình Dương',
  'Đồng Nai',
  'Khánh Hòa',
  'Quảng Ninh',
  'Thái Nguyên',
  'Nghệ An',
  'Thanh Hóa',
  'Hải Dương',
  'Quảng Nam',
  'Bà Rịa - Vũng Tàu',
  'Long An',
  'Tiền Giang',
  'An Giang',
  'Bình Thuận',
  'Lâm Đồng',
  'Vĩnh Phúc',
  'Bắc Ninh',
  'Hưng Yên',
  'Hà Nam',
  'Nam Định',
  'Thái Bình',
  'Ninh Bình',
  'Phú Thọ',
  'Vĩnh Long',
  'Bến Tre',
  'Trà Vinh',
  'Sóc Trăng',
  'Kiên Giang',
  'Cà Mau',
  'Bạc Liêu',
  'Đắk Lắk',
  'Đắk Nông',
  'Gia Lai',
  'Kon Tum',
  'Lào Cai',
  'Yên Bái',
  'Điện Biên',
  'Lai Châu',
  'Sơn La',
  'Hòa Bình',
  'Cao Bằng',
  'Lạng Sơn',
  'Bắc Kạn',
  'Tuyên Quang',
  'Hà Giang',
  'Quảng Bình',
  'Quảng Trị',
  'Thừa Thiên Huế',
  'Quảng Ngãi',
  'Bình Định',
  'Phú Yên',
  'Ninh Thuận',
  'Bình Phước',
  'Tây Ninh',
  'Bình Dương',
  'Đồng Tháp',
  'Hậu Giang',
]

const LocationInput: FC<Props> = ({
  onChange,
  className,
  defaultValue = 'TP. Hồ Chí Minh',
  headingText = 'Tỉnh/thành' , 
  imputName = 'location',
}) => {
  const [value, setValue] = useState('')
  const containerRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  const handleSelectLocation = (item: string) => {
    // DO NOT REMOVE SETTIMEOUT FUNC
    setTimeout(() => {
      setValue(item)
      onChange && onChange(item)
    }, 0)
  }

  const renderSearchValues = ({ heading, items }: { heading: string; items: string[] }) => {
    return (
      <>
        <p className="block text-base font-semibold">{heading}</p>
        <div className="mt-3">
          {items.map((item) => {
            return (
              <div
                className="mb-1 flex items-center gap-x-3 py-2 text-sm cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg px-2"
                onClick={() => handleSelectLocation(item)}
                key={item}
              >
                <MapPinIcon className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
                <span>{item}</span>
              </div>
            )
          })}
        </div>
      </>
    )
  }

  // Filter provinces based on input value
  const filteredProvinces = value 
    ? vietnamProvinces.filter(province => 
        province.toLowerCase().includes(value.toLowerCase())
      )
    : vietnamProvinces.slice(0, 8) // Show first 8 provinces when no input

  return (
    <div className={clsx(className)} ref={containerRef}>
      <h3 className="text-xl font-semibold sm:text-2xl">{headingText}</h3>
      <div className="relative mt-5">
        <input
          className="block w-full truncate rounded-xl border border-neutral-300 bg-transparent px-4 py-3 pe-12 leading-none font-normal placeholder-neutral-500 placeholder:truncate focus:border-primary-300 focus:ring-3 focus:ring-primary-200/50 sm:text-sm dark:border-neutral-700 dark:bg-neutral-900 dark:placeholder-neutral-300 dark:focus:ring-primary-600/25"
          placeholder="Tìm kiếm tỉnh/thành phố"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          ref={inputRef}
          name={imputName}
          autoComplete="off"
          autoFocus
          data-autofocus
        />
        <span className="absolute end-2.5 top-1/2 -translate-y-1/2">
          <Search01Icon className="h-5 w-5 text-neutral-700 dark:text-neutral-400" />
        </span>
      </div>
      <div className="mt-7">
        {value
          ? // if input value is not empty, show filtered suggestions
            renderSearchValues({
              heading: 'Kết quả tìm kiếm',
              items: filteredProvinces.slice(0, 10), // Limit to 10 results
            })
          : // if input value is empty, show popular provinces
            renderSearchValues({
              heading: 'Tỉnh/thành phổ biến',
              items: filteredProvinces,
            })}
      </div>
    </div>
  )
}

export default LocationInput
