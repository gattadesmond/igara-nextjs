import { Badge } from '@/shared/Badge'
import { Heading } from '@/shared/Heading'
import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

interface Props {
  className?: string
  type?: 'type1' | 'type2'
  subHeading?: string
  heading?: string
  listItems?: {
    badge: string
    badgeColor?: 'red' | 'green' | 'blue'
    title: string
    description: string
  }[]
}

const SectionOurFeatures: FC<Props> = ({
  className,
  rightImg = "/images/hero-right-2.png",
  type = 'type1',
  subHeading = 'Benefits',
  heading = 'iGara - Tìm Gara Ô Tô Gần Đây – Đặt Lịch Ngay ',
  listItems = [
    {
      badge: 'Advertising',
      title: 'Cost-effective advertising',
      description: 'With a free listing, you can advertise your rental with no upfront costs',
    },
    {
      badge: 'Exposure',
      badgeColor: 'green',
      title: 'Reach millions with Chisfis',
      description: 'Millions of people are searching for unique places to stay around the world',
    },
    {
      badge: 'Secure',
      badgeColor: 'red',
      title: 'Secure and simple',
      description: 'A Holiday Lettings listing gives you a secure and easy way to take bookings and payments online',
    },
  ],
}) => {
  return (
    <div
      className={clsx(
        'relative grid grid-cols-1 lg:grid-cols-2 gap-10',
        className,
      )}
    >
      <div className="grow relative">
        <div className='relative aspect-w-1 aspect-h-1'>
          <Image src={rightImg} fill alt="Features" sizes="(max-width: 1024px) 100vw, 50vw" priority />
        </div>
      </div>
      <div className={``}>
        <span className="text-sm tracking-widest text-gray-400 uppercase">{subHeading}</span>
        <Heading className="mt-4">{heading}</Heading>

        <p className="max-w-xl text-base text-neutral-500 sm:text-xl dark:text-neutral-400">Dễ dàng tìm gara trong hệ thống 100+ cửa hàng và đại lý sửa chữa ô tô đạt chứng nhận khắp cả nước.</p>

        <ul className="mt-16 flex flex-col items-start gap-y-10">
          {listItems.map((item, index) => (
            <li className="flex flex-col items-start gap-y-4" key={index}>
              <Badge color={item.badgeColor}>{item.badge}</Badge>
              <span className="block text-xl font-semibold">{item.title}</span>
              <span className="block text-neutral-500 dark:text-neutral-400">{item.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SectionOurFeatures
