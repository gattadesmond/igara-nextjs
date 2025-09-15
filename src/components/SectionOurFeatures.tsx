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
  rightImg?: string
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
  subHeading = 'Tính năng',
  heading = 'iGara - Tìm Gara Ô Tô Gần Đây – Đặt Lịch Ngay',
  listItems = [
    {
      badge: 'Tìm kiếm',
      title: 'Tìm gara gần nhất',
      description: 'Hệ thống tìm kiếm thông minh giúp bạn tìm gara sửa chữa ô tô gần nhất với vị trí hiện tại',
    },
    {
      badge: 'Đặt lịch',
      badgeColor: 'green',
      title: 'Đặt lịch hẹn trực tuyến',
      description: 'Đặt lịch hẹn sửa chữa xe 24/7 với hệ thống booking thông minh và tiện lợi',
    },
    {
      badge: 'Uy tín',
      badgeColor: 'red',
      title: 'Gara được chứng nhận',
      description: 'Tất cả gara trong hệ thống đều được kiểm định và chứng nhận về chất lượng dịch vụ',
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
          <Image src="/images/igara-poster.jpg" fill alt="Features" sizes="(max-width: 1024px) 100vw, 50vw" priority />
        </div>
      </div>
      <div className={``}>
        <Heading className="mt-4">{heading}</Heading>

        <p className="max-w-xl text-base text-neutral-500 mt-5 dark:text-neutral-400">Dễ dàng tìm gara trong hệ thống 100+ cửa hàng và đại lý sửa chữa ô tô đạt chứng nhận khắp cả nước. Đặt lịch hẹn nhanh chóng và tiện lợi.</p>

        <ul className="mt-10 flex flex-col items-start gap-y-10">
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
