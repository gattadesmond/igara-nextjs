'use client'

import { useInteractOutside } from '@/hooks/useInteractOutside'
import { Divider } from '@/shared/divider'
import * as Headless from '@headlessui/react'
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import { 
  RepairIcon, 
  Location01Icon,
  CarIcon,
  ElectricHomeIcon,
  GearsIcon,
  StreeringWheelIcon
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon, IconSvgElement } from '@hugeicons/react'
import clsx from 'clsx'
import _ from 'lodash'
import { FC, useCallback, useEffect, useRef, useState } from 'react'
import { ClearDataButton } from './ClearDataButton'

type Service = {
  id: string
  name: string
  icon?: IconSvgElement
}

const demoServices: Service[] = [
  {
    id: '1',
    name: 'Bảo dưỡng định kỳ',
    icon: CarIcon,
  },
  {
    id: '2',
    name: 'Sửa chữa tổng quát',
    icon: RepairIcon,
  },
  {
    id: '3',
    name: 'Thay lốp xe',
    icon: CarIcon,
  },
  {
    id: '4',
    name: 'Thay dầu động cơ',
    icon: RepairIcon,
  },
  {
    id: '5',
    name: 'Sửa phanh',
    icon: RepairIcon,
  },
  {
    id: '6',
    name: 'Sửa động cơ',
    icon: CarIcon,
  },
  {
    id: '7',
    name: 'Sửa điều hòa',
    icon: ElectricHomeIcon,
  },
  {
    id: '8',
    name: 'Sửa điện',
    icon: ElectricHomeIcon,
  },
  {
    id: '9',
    name: 'Sửa hộp số',
    icon: GearsIcon,
  },
  {
    id: '10',
    name: 'Sửa gầm xe',
    icon: CarIcon,
  },
  {
    id: '11',
    name: 'Sửa hệ thống lái',
    icon: StreeringWheelIcon,
  },
  {
    id: '12',
    name: 'Sửa hệ thống treo',
    icon: CarIcon,
  },
]

const styles = {
  button: {
    base: 'relative z-10 shrink-0 w-full cursor-pointer flex items-center gap-x-3 focus:outline-hidden text-start',
    focused: 'rounded-full bg-transparent focus-visible:outline-hidden dark:bg-white/5 custom-shadow-1',
    default: 'px-7 py-4 xl:px-8 xl:py-6',
    small: 'py-3 px-7 xl:px-8',
  },
  input: {
    base: 'block w-full truncate border-none bg-transparent p-0 font-semibold placeholder-neutral-800 focus:placeholder-neutral-300 focus:ring-0 focus:outline-hidden dark:placeholder-neutral-200',
    default: 'text-base xl:text-lg',
    small: 'text-base',
  },
  panel: {
    base: 'absolute start-0 top-full z-40 mt-3 hidden-scrollbar max-h-96  overflow-y-auto rounded-3xl bg-white py-3 shadow-xl transition duration-150 data-closed:translate-y-1 data-closed:opacity-0  dark:bg-neutral-800',
    default: 'w-lg sm:py-6',
    small: 'w-md sm:py-5',
  },
}

interface Props {
  placeholder?: string
  description?: string
  className?: string
  inputName?: string
  services?: Service[]
  fieldStyle: 'default' | 'small'
}

export const ServiceInputField: FC<Props> = ({
  placeholder = 'Chọn dịch vụ',
  description = 'Bạn cần dịch vụ gì?',
  className = 'flex-1',
  inputName = 'service',
  services = demoServices,
  fieldStyle = 'default',
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [showPopover, setShowPopover] = useState(false)
  const [selected, setSelected] = useState<Service | null>(null)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const _inputFocusTimeOut = setTimeout(() => {
      if (showPopover && inputRef.current) {
        inputRef.current.focus()
      }
    }, 200)
    return () => {
      clearTimeout(_inputFocusTimeOut)
    }
  }, [showPopover])

  // để tối ưu hóa function đóng popover
  const closePopover = useCallback(() => {
    setShowPopover(false)
  }, [])

  //  custom hook lắng nghe click bên ngoài container
  useInteractOutside(containerRef, closePopover)

  const handleInputChange = useCallback(
    _.debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      setShowPopover(true)
      setQuery(e.target.value)
      // Nếu input trống, Combobox sẽ tự động setSelected
      if (e.target.value) {
        setSelected({
          id: Date.now().toString(), // Tạo id duy nhất cho item được chọn
          name: e.target.value,
        })
      }
    }, 300),
    []
  )
  useEffect(() => {
    return () => {
      handleInputChange.cancel() // Hủy debounce khi component unmount
    }
  }, [handleInputChange])

  const isShowInitServices = !query
  const servicesToShow = isShowInitServices ? services : services.filter(service => 
    service.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div
      className={`group relative z-10 flex ${className}`}
      ref={containerRef}
      {...(showPopover && {
        'data-open': 'true',
      })}
    >
      <Headless.Combobox
        value={selected}
        onChange={(value) => {
          setSelected(value || { id: '', name: '' })
          setQuery('')
          // Close the popover when a value is selected
          if (value?.id) {
            setShowPopover(false)
            setTimeout(() => {
              inputRef.current?.blur()
            }, 50)
          }
        }}
      >
        <div
          onMouseDown={() => setShowPopover(true)}
          onTouchStart={() => setShowPopover(true)}
          className={clsx(styles.button.base, styles.button[fieldStyle], showPopover && styles.button.focused)}
        >
          {fieldStyle === 'default' && (
            <WrenchScrewdriverIcon className="size-5 text-neutral-300 lg:size-7 dark:text-neutral-400" />
          )}

          <div className="grow">
            <Headless.ComboboxInput
              ref={inputRef}
              aria-label="Tìm kiếm dịch vụ sửa xe"
              className={clsx(styles.input.base, styles.input[fieldStyle])}
              name={inputName}
              placeholder={placeholder}
              autoComplete="off"
              displayValue={(item?: Service) => item?.name || ''}
              onChange={handleInputChange}
            />
            <div className="mt-0.5 text-start text-sm font-light text-neutral-400">
              <span className="line-clamp-1">{description}</span>
            </div>

            <ClearDataButton
              className={clsx(!selected?.id && 'sr-only')}
              onClick={() => {
                setSelected({ id: '', name: '' })
                setQuery('')
                setShowPopover(false)
                inputRef.current?.focus()
              }}
            />
          </div>
        </div>

        <Headless.Transition show={showPopover} unmount={false}>
          <div className={clsx(styles.panel.base, styles.panel[fieldStyle])}>
            <Headless.ComboboxOptions static unmount={false}>
              {servicesToShow.map((service) => (
                <Headless.ComboboxOption
                  key={service.id}
                  value={service}
                  className="flex items-center gap-3 p-4 data-focus:bg-neutral-100 sm:gap-4.5 sm:px-8 dark:data-focus:bg-neutral-700"
                >
                  <HugeiconsIcon
                    icon={service.icon || RepairIcon}
                    className="size-4 text-neutral-400 sm:size-6 dark:text-neutral-500"
                  />
                  <span className="block font-medium text-neutral-700 dark:text-neutral-200">{service.name}</span>
                </Headless.ComboboxOption>
              ))}
            </Headless.ComboboxOptions>
          </div>
        </Headless.Transition>
      </Headless.Combobox>
    </div>
  )
}
