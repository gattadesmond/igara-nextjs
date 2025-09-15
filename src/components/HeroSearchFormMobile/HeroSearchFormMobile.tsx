'use client'

import { ButtonCircle } from '@/shared/Button'
import ButtonPrimary from '@/shared/ButtonPrimary'
import ButtonThird from '@/shared/ButtonThird'
import { ListingType } from '@/type'
import T from '@/utils/getT'
import { CloseButton, Dialog, DialogPanel, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import {
  Airplane02Icon,
  Car05Icon,
  FilterVerticalIcon,
  HotAirBalloonFreeIcons,
  House03Icon,
  RealEstate02Icon,
  Search01Icon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon, IconSvgElement } from '@hugeicons/react'
import clsx from 'clsx'
import { useState } from 'react'
import { useTimeoutFn } from 'react-use'
import CarSearchFormMobile from './car-search-form/CarSearchFormMobile'
import ExperienceSearchFormMobile from './experience-search-form/ExperienceSearchFormMobile'
import FlightSearchFormMobile from './flight-search-form/FlightSearchFormMobile'
import RealestateSearchFormMobile from './real-estate-search-form/RealestateSearchFormMobile'
import StaySearchFormMobile from './stay-search-form/StaySearchFormMobile'

const formTabs: { name: ListingType; icon: IconSvgElement; formComponent: React.ComponentType<{}> }[] = [
  { name: 'Stays', icon: House03Icon, formComponent: StaySearchFormMobile },
  { name: 'Cars', icon: Car05Icon, formComponent: CarSearchFormMobile },
  { name: 'Experiences', icon: HotAirBalloonFreeIcons, formComponent: ExperienceSearchFormMobile },
  { name: 'RealEstates', icon: RealEstate02Icon, formComponent: RealestateSearchFormMobile },
  { name: 'Flights', icon: Airplane02Icon, formComponent: FlightSearchFormMobile },
]

const HeroSearchFormMobile = ({ className }: { className?: string }) => {
  const [showModal, setShowModal] = useState(false)

  // FOR RESET ALL DATA WHEN CLICK CLEAR BUTTON
  const [showDialog, setShowDialog] = useState(false)
  let [, , resetIsShowingDialog] = useTimeoutFn(() => setShowDialog(true), 1)
  //
  function closeModal() {
    setShowModal(false)
  }

  function openModal() {
    setShowModal(true)
  }

  const renderButtonOpenModal = () => {
    return (
      <button
        onClick={openModal}
        className="relative flex w-full items-center rounded-full border bg-white border-neutral-200 px-4 py-2 pe-11 shadow-lg dark:border-neutral-600"
      >
        <HugeiconsIcon icon={Search01Icon} size={20} color="currentColor" strokeWidth={1.5} />

        <div className="ms-3 flex-1 overflow-hidden text-start">
          <span className="block text-sm font-medium">Tìm Gara sửa xe</span>
          <span className="mt-0.5 block text-xs font-light text-neutral-500 dark:text-neutral-400">
            <span className="line-clamp-1">Tỉnh thành • Dịch vụ</span>
          </span>
        </div>

        <span className="absolute end-2 top-1/2 flex h-9 w-9 -translate-y-1/2 transform items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-600 dark:text-neutral-300">
          <HugeiconsIcon icon={FilterVerticalIcon} size={20} color="currentColor" strokeWidth={1.5} />
        </span>
      </button>
    )
  }

  return (
    <div className={clsx(className, 'relative z-10 w-full max-w-lg')}>
      {renderButtonOpenModal()}
      <Dialog as="div" className="relative z-max" onClose={closeModal} open={showModal}>
        <div className="fixed inset-0 bg-neutral-100 dark:bg-neutral-900">
          <div className="flex h-full">
            <DialogPanel
              transition
              className="relative flex-1 transition data-closed:translate-y-28 data-closed:opacity-0"
            >
              {showDialog && (
                <StaySearchFormMobile/>
              )}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default HeroSearchFormMobile
