'use client'

import { Search01Icon } from '@/components/Icons'
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
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

const ServiceInput: FC<Props> = ({
  onChange,
  className,
  defaultValue = '',
  headingText = 'Chọn dịch vụ',
  imputName = 'service',
}) => {
  const [value, setValue] = useState('')
  const containerRef = useRef(null)
  const inputRef = useRef(null)

  const services = [
    'Bảo dưỡng định kỳ',
    'Sửa chữa tổng quát',
    'Thay lốp xe',
    'Thay dầu động cơ',
    'Sửa phanh',
    'Sửa động cơ',
    'Sửa điều hòa',
    'Sửa điện',
    'Sửa hộp số',
    'Sửa gầm xe',
    'Sửa hệ thống lái',
    'Sửa hệ thống treo',
  ]

  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  const handleSelectService = (item: string) => {
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
                className="mb-1 flex items-center gap-x-3 py-2 text-sm"
                onClick={() => handleSelectService(item)}
                key={item}
              >
                <WrenchScrewdriverIcon className="h-4 w-4 text-neutral-400" />
                <span className="text-neutral-600 dark:text-neutral-400">{item}</span>
              </div>
            )
          })}
        </div>
      </>
    )
  }

  return (
    <div className={clsx('', className)} ref={containerRef}>
      <div className="relative">
        <div className="flex items-center gap-x-3">
          <WrenchScrewdriverIcon className="h-5 w-5 text-neutral-400" />
          <input
            ref={inputRef}
            type="text"
            name={imputName}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={headingText}
            className="block w-full border-none bg-transparent p-0 text-base font-semibold placeholder-neutral-800 focus:placeholder-neutral-300 focus:ring-0 focus:outline-none dark:placeholder-neutral-200"
          />
        </div>
      </div>

      <div className="mt-6">
        {renderSearchValues({
          heading: 'Dịch vụ phổ biến',
          items: services,
        })}
      </div>
    </div>
  )
}

export default ServiceInput
